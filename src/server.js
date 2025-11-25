const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

// LÊ A PORTA DO .env OU USA 5000 POR DEFICE
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
