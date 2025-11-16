const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);  // <-- IMPORTANTE
router.post('/', movieController.createMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
