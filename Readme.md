# 📝 MERN Task Manager App

A full-stack Task Management application built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It supports **JWT-based authentication**, **role-based access** (`admin` and `user`), and **CRUD operations** for tasks.

---

## 📦 Technologies Used

- **Frontend**: React, Axios, React Router DOM, Bootstrap (optional)
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt
- **Auth**: JWT (JSON Web Token)
- **Deployment Ready**: Docker + AWS EC2 + S3 (optional)

---

## 📁 Project Structure

task-manager/
├── backend/ # Node.js + Express API
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Auth & Task routes
│ ├── middleware/ # Auth middleware
│ └── server.js # Main server file
├── frontend/ # React app
│ ├── src/
│ │ ├── components/ # Login, Register, Dashboard
│ │ └── App.js
└── README.md


---

## 🚀 Features

- User Registration & Login
- JWT Token-Based Authentication
- Role-Based Access (`admin`, `user`)
- Task CRUD (Create, Read, Update, Delete)
- Protected Routes using JWT
- Simple and clean UI with React

---

## 🔧 Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hrithik007/-mern-task-manager.git
cd mern-task-manager
