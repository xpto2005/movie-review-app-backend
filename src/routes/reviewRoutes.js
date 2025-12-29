// Routes for review endpoints
const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviewsByMovie,
  deleteReview,
} = require("../controllers/reviewController");

router.get("/:movieId", getReviewsByMovie); // list reviews for a movie
router.post("/:movieId", createReview);     // create review for a movie
router.delete("/:id", deleteReview);         // delete review by ID

module.exports = router;