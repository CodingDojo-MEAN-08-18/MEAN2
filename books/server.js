const cookieParser = require('cookie-parser');
const express = require('express');
const parser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

const sessionConfig = {
  saveUninitialized: true,
  secret: 'session-secret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000,
  },
};

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(logger('dev'))
  .use(session(sessionConfig))
  .use(cookieParser('alsdfjlaskdjflaksdjf;aslkdfj;aslkdfjdkl'))
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));
