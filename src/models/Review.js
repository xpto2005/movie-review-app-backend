// Mongoose schema for Review
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true }, // reference to Movie
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // rating between 1 and 5
    comment: { type: String, required: true }
  },
  { timestamps: true } // adds createdAt and updatedAt fields
);

module.exports = mongoose.model('Review', reviewSchema);