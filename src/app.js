// Express app setup
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // enable CORS for all routes
app.use(express.json()); // parse JSON bodies

// Routes
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('Movie Review API is running...');
});

module.exports = app;