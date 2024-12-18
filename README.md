# CRUD_MERN
A simple CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express, React, and Node.js). This application allows users to manage a list of items, including adding, viewing, updating, and deleting items.

Features
Create: Add new items with a name and description.
Read: View a list of all items.
Update: Modify the details of an existing item.
Delete: Remove items from the list.
Responsive user interface styled with Bootstrap.
Backend powered by Node.js and Express.
Database integration using MongoDB.

Technologies Used
Frontend:
React.js: For building the user interface.
Axios: For making HTTP requests to the backend API.
Bootstrap: For responsive and modern UI design.
Backend:
Node.js: For the server-side environment.
Express.js: For building the RESTful API.
MongoDB: For storing and managing data.

Prerequisites
Node.js (v14 or later)
npm (v6 or later)
MongoDB: Install and run MongoDB locally, or use MongoDB Atlas for a cloud database.

Installation and Setup
Clone the repository:
git clone https://github.com/your-username/mern-crud.git
cd mern-crud
Set up the backend:
cd backend
npm install
Create a .env file in the backend directory and add your MongoDB connection string:
MONGO_URI=your_mongodb_connection_string
Start the backend server:
node server.js
Set up the frontend:
cd ../frontend
npm install
Start the frontend development server:
npm start
Access the application in your browser at http://localhost:3000.


API Endpoints
Base URL: http://localhost:5000/api/items
HTTP Method	Endpoint	Description
POST	/	Create a new item
GET	/	Retrieve all items
PUT	/:id	Update an item by ID
DELETE	/:id	Delete an item by ID



