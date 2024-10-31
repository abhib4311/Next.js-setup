# Course-Selling Website - Full Stack Application

This project is a full-stack course-selling platform built with **Next.js** (TypeScript) for the frontend and backend. It includes **JWT** authentication, **bcrypt** for password hashing, and a role-based authorization system (for both users and admins) to manage course data securely. Users can sign up, log in, and purchase courses, while admins can create, update, and delete course listings.

## Features

- **Authentication & Authorization**: Secure user login and sign-up forms using JWT and bcrypt.
- **Role-Based Access Control**: Admins can perform CRUD operations on course listings, while regular users can view and purchase courses.
- **Impressive Sign-Up & Sign-In Forms**: A responsive and user-friendly UI for authentication pages with smooth animations, client-side validation, and error handling.
- **RESTful API Communication**: Frontend communicates with the backend through Axios for efficient API requests.
- **Secure Database Integration**: Uses MongoDB with Mongoose to store user and course data.

## Tech Stack

- **Frontend**: Next.js (TypeScript), Axios for API requests
- **Backend**: Next.js API routes
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT) and bcrypt for password hashing
- **Middleware**: Custom middleware for route protection based on user roles

