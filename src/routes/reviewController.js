const Review = require('../models/Review');

// GET /reviews
exports.getReviews = async (req, res) => {
  try {
    const { movie } = req.query;
    const filter = movie ? { movie } : {};

    const reviews = await Review.find(filter).populate('movie');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /reviews
exports.createReview = async (req, res) => {
  try {
    const { movie, reviewer, comment, rating } = req.body;
    const review = await Review.create({ movie, reviewer, comment, rating });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /reviews/:id
exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Review not found" });

    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
