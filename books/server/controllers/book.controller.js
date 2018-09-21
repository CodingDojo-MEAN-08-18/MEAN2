const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response) {
    console.log('inside index books');

    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Ojbect.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
  update(request, response) {
    Book.findByIdAndUpdate(
      request.params.book_id,
      { $set: request.body },
      { new: true }
    )
      .then(book => response.json(book))
      .catch(error => {
        const errors = Ojbect.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
