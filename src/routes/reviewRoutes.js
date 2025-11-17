const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');

// GET all reviews or by movieId (?movie=ID)
router.get('/', reviewController.getReviews);

// GET reviews for one movie (cleaner route)
router.get('/movie/:movieId', reviewController.getReviewsByMovie);

// POST create review
router.post('/', reviewController.createReview);

// DELETE review by ID
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
