const express = require('express');
const app = express();

app.use(express.json());

// Routes
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('Movie Review API is running...');
});

module.exports = app;

