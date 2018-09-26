const bookRouter = require('./book.routes');
const authRouter = require('./auth.routes');
const router = require('express').Router();

module.exports = router.use('/auth', authRouter).use('/books', bookRouter);
