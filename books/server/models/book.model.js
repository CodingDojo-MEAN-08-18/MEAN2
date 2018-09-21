const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      required: [true, 'author is required'],
      trim: true,
    },
    pages: {
      type: Number,
      required: true,
      min: [1, 'You need more pages'],
    },
    year: Number,
    publisher: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
