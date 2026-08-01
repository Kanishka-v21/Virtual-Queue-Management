# 🚀 Queue Management System

A full-stack **Queue Management System** built using the **MERN Stack** that enables customers to join queues digitally while allowing administrators to efficiently manage and monitor queues in real time.

## 📖 Overview

Waiting in long physical queues is inconvenient and time-consuming. This project provides a digital solution where users can join a queue online, monitor their position, and receive an estimated waiting time, while administrators can control the queue through a dedicated dashboard.

## ✨ Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* Join Queue
* View Current Queue Position
* Estimated Waiting Time
* Responsive User Interface
* Secure Logout

### 🛠️ Admin Features

* Admin Authentication
* Dashboard Overview
* View All Customers
* Search Customers
* Pagination Support
* Remove Customers from Queue
* Manage Active Queue

## 🏗️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* Morgan
* CORS
* dotenv


## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/queue-management-system.git

cd queue-management-system
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the backend.

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for secure authentication.

Protected routes include:

* User Dashboard
* Admin Dashboard
* Queue Management APIs


## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register User/Admin |
| POST   | `/api/auth/login`    | Login               |

---

### Queue

| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| POST   | `/api/queue/join`     | Join Queue      |
| GET    | `/api/queue/my-queue` | View My Queue   |
| GET    | `/api/queue`          | Get Queue       |
| PATCH  | `/api/queue/:id`      | Update Status   |
| DELETE | `/api/queue/:id`      | Remove Customer |

---

## 📸 Screenshots

Home.png
<img width="1613" height="752" alt="image" src="https://github.com/user-attachments/assets/28b8281a-c053-4393-bc61-06d5eb8cba62" />


Login.png
<img width="1472" height="817" alt="image" src="https://github.com/user-attachments/assets/fcef2be7-c2d1-4687-966f-86000d9341ec" />

Register.png
<img width="1636" height="902" alt="image" src="https://github.com/user-attachments/assets/b53881f0-f3c0-47f9-bcc2-04d7bec33bbf" />


AdminDashboard.png
<img width="1638" height="888" alt="image" src="https://github.com/user-attachments/assets/e58f74c3-ffb5-491a-8577-6413d0042d43" />


LiveQueue.png
<img width="1035" height="732" alt="image" src="https://github.com/user-attachments/assets/0f958ed6-2955-4252-9aed-cd04700119fd" />



---

## 🚀 Future Improvements

* Socket.IO for real-time updates
* Email Notifications
* SMS Notifications
* QR Code Queue Joining
* Multiple Queue Support
* Appointment Scheduling
* Analytics Dashboard
* Queue History
* Dark Mode
* Progressive Web App (PWA)

---

## 🛡️ Security

* Password Hashing using bcrypt
* JWT Authentication
* Protected Routes
* Environment Variables
* Role-Based Authorization
* Input Validation

---

## 🧪 Testing

Future scope includes:

* Unit Testing
* API Testing
* Integration Testing
* End-to-End Testing

---

## 🌍 Deployment

Frontend can be deployed on:
Live Demo:

* Vercel
https://virtual-queue-management-21-d58x1mnco-impact-x1.vercel.app

Backend can be deployed on:

* Render
https://virtual-queue-management-a0z7.onrender.com

Database:

* MongoDB Atlas


## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.


## 👨‍💻 Author

**Kanishka Pulani**

Computer Science Engineering Student

MERN Stack Developer


## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.
