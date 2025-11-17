const Review = require('../models/Review');

// GET /reviews?movie=XXXX
exports.getReviews = async (req, res) => {
  try {
    const { movie } = req.query;
    const filter = movie ? { movie } : {};

    const reviews = await Review.find(filter)
      .populate('movie', 'title year genre')
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /reviews/movie/:movieId
exports.getReviewsByMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const reviews = await Review.find({ movie: movieId })
      .populate('movie', 'title year genre')
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /reviews
exports.createReview = async (req, res) => {
  try {
    const { movie, author, rating, comment } = req.body;

    if (!movie || !author || !rating || !comment) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const review = await Review.create({
      movie,
      author,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /reviews/:id
exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Review not found." });
    }

    res.json({ message: "Review deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
