# CDITraining Platform
This project is a backend API for CDITraining, a learning and teaching platform similar to Udemy. It provides RESTful endpoints for managing courses, instructors, and students, allowing for CRUD operations on courses and user management, along with user authentication and authorization.

# Project Description
CDITraining is a backend service that powers a platform for online courses. Instructors can create courses, students can enroll in them, and both can interact with the content and each other. This project is built using Node.js, Express, and MongoDB for data storage, and it supports JWT-based authentication for secure API access.

# Technologies Used
Node.js: Backend JavaScript runtime
Express.js: Web framework for building RESTful APIs
MongoDB: NoSQL database for storing course, user, and enrollment data
JWT: JSON Web Tokens for authentication
Swagger: API documentation
Mongoose: MongoDB object modeling for Node.js
dotenv: For environment variable management

# Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/cditraining.git
cd cditraining
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add the following variables:

makefile
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Configuration
Ensure you have MongoDB running locally or update the MONGODB_URI in .env to point to your MongoDB Atlas database.

Usage
Start the server:

bash
Copy code
npm start
Access the API documentation: After starting the server, open your browser and go to:

bash
Copy code
http://localhost:5000/api-docs
This will show you the Swagger UI with all available API endpoints.

API Documentation
The API has been documented using Swagger. You can view the API documentation in two ways:

Swagger UI: Access the documentation in an interactive format at /api-docs.
OpenAPI Specification: The OpenAPI (Swagger) specification is located in the swagger.json file, which can be used with tools like Postman.
