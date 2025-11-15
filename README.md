"# Movie Review App - Backend" 



## Movie Review App — Backend API

A Node.js + Express backend providing REST API endpoints for managing movies and reviews in the Movie Review App.
The backend uses MongoDB Atlas with Mongoose as ODM.



##  Project Overview

This backend exposes API endpoints that allow you to:

Create, list, and delete movies

Create, list, and delete reviews

Store all data in a MongoDB Atlas cloud database

Use fully structured controllers, routes, and models

This backend will later be consumed by a React frontend.



## Tech Stack (Chosen Stack)

Node.js

Express.js

MongoDB Atlas

Mongoose

Dotenv



## Backend Dependencies
express
mongoose
dotenv


Installed via:

npm install express mongoose dotenv



## Environment Variables

Create a .env file at the root of the backend:

MONGO_URI=your_mongodb_connection_string_here


This variable is required for the backend to connect to MongoDB Atlas.



## Backend Architecture
backend/
│
├─ src/
│   ├─ models/
│   │    ├─ Movie.js
│   │    └─ Review.js
│   │
│   ├─ controllers/
│   │    ├─ movieController.js
│   │    └─ reviewController.js
│   │
│   ├─ routes/
│   │    ├─ movieRoutes.js
│   │    └─ reviewRoutes.js
│   │
│   ├─ app.js
│   └─ server.js
│
├─ .env
├─ package.json
└─ README.md



## API Endpoints (Implemented)


###  Movies
Method	Endpoint	Description
GET	/movies	Get all movies
POST	/movies	Create a new movie
GET	/movies/:id	Get one movie by ID
DELETE	/movies/:id	Delete a movie

###  Reviews
Method	Endpoint	Description
GET	/reviews	Get all reviews
GET	/reviews?movie=id	Get reviews for a movie
POST	/reviews	Create a new review
DELETE	/reviews/:id	Delete a review

## Example Requests (JSON)
Create a movie (POST /movies)
{
  "title": "Inception",
  "year": 2010,
  "genre": "Sci-Fi"
}

Create a review (POST /reviews)
{
  "movie": "665eb545f3c50240fb9271af",
  "reviewer": "John Doe",
  "comment": "Amazing movie!",
  "rating": 5
}

Success response example
{
  "_id": "665eb59af3c50240fb9271b4",
  "movie": "665eb545f3c50240fb9271af",
  "reviewer": "John Doe",
  "comment": "Amazing movie!",
  "rating": 5,
  "createdAt": "2025-05-26T17:33:10.324Z"
}

##  Running the Backend Locally

1. Install packages
npm install

2️. Create .env with your MongoDB URI
MONGO_URI=your_connection_string

3️. Start server
npm start


You should see:

MongoDB connected successfully.
Server running on http://localhost:5000



## Deployment (optional)

Backend can be deployed using any Node-compatible environment:

Render

Railway

Cyclic

Docker

VPS

(Deployment not yet implemented at this stage.)



## Known Limitations

No authentication implemented yet

No input validation middleware

No error middleware

No pagination

Review editing not implemented

Movie editing not implemented



## Future Improvements

Add authentication (JWT)

Add update/edit functionality for movies and reviews

Add pagination and search filters

Add validation with Yup/Joi

Add Docker support

Deploy backend and expose production URL

Add unit tests