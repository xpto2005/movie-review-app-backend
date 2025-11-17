const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviewsByMovie,
  deleteReview,
} = require("../controllers/reviewController");

router.get("/:movieId", getReviewsByMovie);
router.post("/:movieId", createReview);
router.delete("/:id", deleteReview);

module.exports = router;
