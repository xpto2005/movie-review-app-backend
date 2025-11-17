const Review = require("../models/Review");

// GET /reviews/:movieId
exports.getReviewsByMovie = async (req, res) => {
  try {
    const reviews = await Review.find({ movie: req.params.movieId })
      .sort({ createdAt: -1 }); // mais recentes primeiro

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /reviews/:movieId
exports.createReview = async (req, res) => {
  try {
    const { author, rating, comment } = req.body;

    if (!author || !rating || !comment) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newReview = await Review.create({
      movie: req.params.movieId,
      author,
      rating,
      comment,
    });

    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /reviews/:id
exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json({ message: "Review deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
