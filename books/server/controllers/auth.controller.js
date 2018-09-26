const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        if (!user) throw new Error();

        return User.validatePassword(password, user.password).then(passed => {
          if (!passed) throw new Error();

          // login
          completeLogin(request, response, user);
        });
      })
      .catch(() => {
        response
          .status(Http.Unauthorized)
          .json('email/password combo not found');
      });
  },
  register(request, response) {
    console.log(`registering user `, request.body);
    User.create(request.body)
      .then(user => {
        // login
        completeLogin(request, response, user);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        console.log('errors registering', errors);
        response.status(Http.BadRequest).json(errors);
      });
  },
  logout(_request, response) {
    response.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },

  completeLogin() {},
};

function completeLogin(request, response, user) {
  console.log('loggin in ');

  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}
