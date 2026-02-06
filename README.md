# React-based CRUD Application

## Overview

This is a React-based CRUD (Create, Read, Update, Delete) application for managing user records.  
The application is designed with scalability and extensibility in mind, allowing new fields to be added with minimal code changes.

Live Demo: https://react-based-crud.vercel.app  
GitHub Repository: https://github.com/ChechareSuraj0707/React-based-CRUD

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- JSON Server (Mock API)

---

## Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or higher)
- npm
- Git (optional)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/ChechareSuraj0707/React-based-CRUD.git
cd React-based-CRUD


# Install dependencies:
npm install

# Running the Application
# Start the Mock API Server

npm run server

# This runs JSON Server at:
http://localhost:3001


# Start the Frontend Application
# Open another terminal and run:
npm run dev


# This runs the app at:
http://localhost:5173
 (or the next available port)

# API Setup (JSON Server)
# This project uses json-server as a local mock backend.
# The API data is stored in:
db.json


# Example content:

{
  "users": []
}


# JSON Server automatically creates REST APIs.
# Available Endpoints:

GET /users → Get all users

GET /users/:id → Get single user

POST /users → Create user

PUT /users/:id → Update user

DELETE /users/:id → Delete user

# IDs are auto-generated.
# Adding New Fields (Extensibility)
# The form UI is generated using a configuration file.
# To add a new field:
Open:
src/config/formConfig.ts
Add a new field object inside the array:

{
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
}

# Save the file and restart the app.
# The form UI and validation will update automatically.
# No component changes are required.


Project Structure

src/
 ├ api/          → API service functions
 ├ components/   → Reusable UI components
 ├ config/       → Form configuration
 ├ types/        → TypeScript interfaces
 ├ App.tsx       → Main application logic
 └ main.tsx      → Application entry point


# Design Decisions

Used TypeScript for better type safety and maintainability.
Implemented configuration-driven form rendering for extensibility.
Separated API logic from UI components.
Used Tailwind CSS for responsive and clean UI.
Used JSON Server for mock backend during development.

# Validation

All form fields are required.
Email field is validated using regex pattern.
Phone number accepts only numeric values.
Validation is handled using React Hook Form.

# Deployment
The application is deployed on Vercel.
Live URL:
https://react-based-crud.vercel.app

# Troubleshooting

Make sure npm run server is running before using the app.
If API requests fail, check the port in userApi.ts.
Restart the dev server after configuration changes.
Check browser console for errors if UI is not loading.


# Author
Suraj Chechare
```
