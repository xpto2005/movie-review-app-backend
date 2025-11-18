# Movie Review App – Backend API


### Overview

The Movie Review App – Backend API is a RESTful server that powers the Movie Review web application. It exposes endpoints to manage a catalogue of movies and their associated user reviews. The API allows clients to create, retrieve and delete movies, as well as add, list and remove reviews for each movie. Built with Node.js and Express, it communicates with a MongoDB database using Mongoose for object‑data modelling. Its aim is to provide a simple yet robust foundation for a full‑stack MERN project where the frontend, built with React, interacts seamlessly with this API.



### Technologies & Purpose


**Node.js**:	Provides a JavaScript runtime on the server side, allowing the same language to be used across the stack.

**Express.js**:	Lightweight web framework used to set up the HTTP server, define routes and middleware and handle request/response cycles.

**MongoDB Atlas**:	Cloud‑hosted NoSQL database used to persist movie and review data. Its flexible document model maps well to JavaScript objects.

**Mongoose**:	Object Data Modeling (ODM) library used to define schemas for movies and reviews, enforce validation rules, and interact with MongoDB through models.

**CORS**:	Middleware that enables cross‑origin requests so that a separate frontend (e.g., running on another port or domain) can communicate with the API.

**dotenv**:	Loads environment variables from a .env file, keeping secrets such as database credentials out of the codebase.

**Nodemon (dev)**:	Development tool that automatically restarts the server when files change, improving productivity during development.



### Features

CRUD operations for Movies – create new movies, list all movies, fetch a single movie by ID and delete movies.

Review management – add reviews to a movie, list all reviews for a given movie, and delete reviews.

Data validation – ensures required fields are present and ratings are between 1 and 5.

Error handling – returns appropriate HTTP status codes and messages for invalid requests.

Environment configuration – connection settings and secret values are loaded from environment variables.



### Folder Structure

backend/
├─ src/
│  ├─ controllers/
│  │  ├─ movieController.js   # Logic for movie endpoints
│  │  └─ reviewController.js  # Logic for review endpoints
│  ├─ routes/
│  │  ├─ movieRoutes.js       # Defines /movies routes
│  │  └─ reviewRoutes.js      # Defines /reviews routes
│  ├─ models/
│  │  ├─ Movie.js             # Mongoose schema for movies
│  │  └─ Review.js            # Mongoose schema for reviews
│  ├─ app.js                  # Configures middleware and routes
│  └─ server.js               # Connects to MongoDB and starts server
├─ .env                       # Environment variables (not committed)
├─ package.json
└─ README.md (this file)



### Installation & Setup

**Clone the repository**:

git clone https://github.com/xpto2005/movie-review-app-backend.git
cd movie-review-app-backend



**Install dependencies**:

npm install



**Create a .env file in the root of the backend folder and set the required variables**:

MONGO_URI=your_mongodb_connection_string
PORT=5000


MONGO_URI should be the full connection string to your MongoDB Atlas cluster.

PORT is the port number the server will listen on (defaults to 5000 if not specified).



**Run the server in development mode**:

npm run dev



or start normally with:

npm start


The API should now be available at http://localhost:5000.



## API Endpoints


### Movies

Method	Endpoint	Description	Body Fields	Response (success)
GET	/movies	Returns an array of all movies.	–	200 OK with array of movie objects
GET	/movies/:id	Returns a single movie by its ID.	–	200 OK with a movie object
POST	/movies	Creates a new movie.	title (string, required)	201 Created with the created movie
			year (number, required)	
			genre (string, required)	
DELETE	/movies/:id	Deletes a movie and its associated reviews.	–	200 OK with deletion message


### Reviews

Method	Endpoint	Description	Body Fields	Response (success)
GET	/reviews/:movieId	Returns all reviews for the specified movie.	–	200 OK with array of reviews
POST	/reviews/:movieId	Adds a review to the specified movie.	author (string, required)	201 Created with the created review
			rating (number 1–5, required)	
			comment (string, required)	
DELETE	/reviews/:id	Deletes a review by its ID.	–	200 OK with deletion message


### Data Models

Movie Model (Movie.js)

title (String) – Required. The title of the movie.

year (Number) – Required. Release year of the movie.

genre (String) – Required. Movie genre (e.g. Drama, Sci‑Fi).

createdAt / updatedAt – Timestamps automatically added by Mongoose.

Review Model (Review.js)

movie (ObjectId) – References the associated movie document (required).

author (String) – Required. Name of the reviewer.

rating (Number) – Required. Integer between 1 and 5.

comment (String) – Required. Review text.

createdAt / updatedAt – Timestamps automatically added by Mongoose.


### Example Request & Response

#### Create a Movie

**Request**

POST /movies HTTP/1.1
Content-Type: application/json

{
  "title": "The Matrix",
  "year": 1999,
  "genre": "Sci‑Fi"
}


**Response (201 Created)**

{
  "_id": "660a1f08eabd9ae4bfb8b9f0",
  "title": "The Matrix",
  "year": 1999,
  "genre": "Sci‑Fi",
  "createdAt": "2025-11-17T10:00:00.000Z",
  "updatedAt": "2025-11-17T10:00:00.000Z"
}


#### Add a Review

**Request**

POST /reviews/660a1f08eabd9ae4bfb8b9f0 HTTP/1.1
Content-Type: application/json

{
  "author": "John Doe",
  "rating": 4,
  "comment": "Great action and mind‑bending plot!"
}


**Response (201 Created)**

{
  "_id": "660a21c7eabd9ae4bfb8ba04",
  "movie": "660a1f08eabd9ae4bfb8b9f0",
  "author": "John Doe",
  "rating": 4,
  "comment": "Great action and mind‑bending plot!",
  "createdAt": "2025-11-17T10:05:27.000Z",
  "updatedAt": "2025-11-17T10:05:27.000Z"
}



### Known Limitations & Future Enhancements

**No authentication**: All endpoints are public; implementing user authentication (JWT) would allow user‑specific actions and protect resources.

**No update endpoints**: Movies and reviews cannot be edited; adding PUT/PATCH routes would allow modifications.

**No pagination or filtering**: Listing endpoints return all documents. Implementing pagination and search filters would improve performance and usability on large datasets.

**No image handling**: Movies cannot have posters; adding file upload support via multer could enrich the data model.

**No tests**: Automated unit/integration tests would ensure reliability and facilitate refactoring.


### Author

Paulo Filipe Soares Oliveira

Feel free to reach out for questions or feedback.