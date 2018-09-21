const { bookController } = require('../controllers');
// const bookController = require('../controllers').bookController;
const router = require('express').Router();

// /books/:book_id

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy);
