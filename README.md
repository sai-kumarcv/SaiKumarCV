# SaiKumarCV

The Structure of the Code

event-management-dashboard/
├── event-management-frontend/       # Frontend folder (React)
│   ├── src/
│   │   ├── App.js                   # Main application file with routing
│   │   ├── components/
│   │   │   ├── EventManagement.js   # Component for event CRUD operations
│   │   │   ├── AttendeeManagement.js # Component for managing attendees (to be implemented)
│   │   │   ├── TaskTracker.js       # Component for task tracking (to be implemented)
│   ├── public/                      # Public assets (HTML, CSS)
│   ├── package.json                 # Frontend dependencies
├── event-management-backend/        # Backend folder (Node.js + Express)
│   ├── server.js                    # Backend server file with REST API
│   ├── models/
│   │   ├── Event.js                 # MongoDB schema for events (to be refactored if modularized)
│   ├── package.json                 # Backend dependencies
├── README.md                        # Documentation


**Frontend Setup (React)**
# 1. Create the React application
npx create-react-app event-management-frontend

# 2. Navigate to the frontend directory
cd event-management-frontend

# 3. Install required dependencies for routing and HTTP requests
npm install react-router-dom axios

# 4. Return to the root directory
cd ..


Here are the terminal commands to create the project structure for the Event Management Dashboard:

Frontend Setup (React)
bash
Copy code
# 1. Create the React application
npx create-react-app event-management-frontend

# 2. Navigate to the frontend directory
cd event-management-frontend

# 3. Install required dependencies for routing and HTTP requests
npm install react-router-dom axios

# 4. Return to the root directory
cd ..



**Backend Setup (Node.js + Express.js)**

# 1. Create a directory for the backend
mkdir event-management-backend
cd event-management-backend

# 2. Initialize a Node.js project
npm init -y

# 3. Install backend dependencies
npm install express mongoose body-parser cors jsonwebtoken bcrypt

# 4. Create the main backend file
touch server.js

# 5. Create a directory for database models
mkdir models

# 6. Return to the root directory
cd ..


# Install MongoDB
# Download MongoDB Community Server from the MongoDB website.

During installation:

Choose the default settings.
Enable the option to Install MongoDB as a Service.
Verify the installation:


mongod --version
# Ensure MongoDB is installed.

# Create the data directory:
mkdir C:\data\db
# Start the MongoDB service:
net start MongoDB

**3. Set Up the Backend**
# Navigate to the backend folder:
cd event-management-backend
**Install dependencies:**
npm install
**Run the backend server:**
node server.js
This will start the backend on **http://localhost:5000.**
**4. Set Up the Frontend**
# Navigate to the frontend folder:
cd event-management-frontend
# Install dependencies:

npm install
# Run the React development server:


npm start
The app will open in your default browser at http://localhost:3000.
# Verify the Application
# Frontend:
Visit http://localhost:3000.
# Test the Event Management, Attendee Management, and Task Tracker pages.
# Backend:
# Use tools like Postman or the browser to test API endpoints:
http://localhost:5000/events
http://localhost:5000/attendees
http://localhost:5000/tasks


