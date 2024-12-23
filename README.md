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


Frontend Setup (React)
# 1. Create the React application
npx create-react-app event-management-frontend

# 2. Navigate to the frontend directory
cd event-management-frontend

# 3. Install required dependencies for routing and HTTP requests
npm install react-router-dom axios

# 4. Return to the root directory
cd ..

