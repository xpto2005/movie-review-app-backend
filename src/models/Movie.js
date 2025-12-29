// Mongoose schema for Movie
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // adds createdAt and updatedAt fields

module.exports = mongoose.model('Movie', movieSchema);