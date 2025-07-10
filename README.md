# 🚀 TrackRuit – MERN Stack Job Tracker

**🔗 Live Demo**: [https://trackruit.onrender.com](https://trackruit.onrender.com)

TrackRuit is a full-stack job tracking application built using the **MERN stack**. It allows users to **register**, **log in**, and **track job applications** in a clean, responsive dashboard. This project demonstrates full-stack development, authentication, and deployment best practices.

---

## 📸 Features

- 📝 Register and log in securely
- 🔐 JWT-based authentication
- 💼 Create, update, and delete job applications
- 🧭 Dashboard to manage application status
- 📱 Responsive design with Tailwind CSS
- ☁️ Fully deployed backend + frontend on Render

---

## 🛠️ Tech Stack

| Layer     | Tech Used                    |
|-----------|------------------------------|
| Frontend  | React.js (CRA), Tailwind CSS |
| Backend   | Node.js, Express.js          |
| Database  | MongoDB Atlas                |
| Auth      | JWT                          |
| Hosting   | Render (fullstack deploy)    |

---

## ⚙️ Installation (Local Development)

```bash
git clone https://github.com/yourusername/trackruit.git
cd trackruit

# Install backend dependencies
cd backend
npm install

# Create .env file in /backend with:
# MONGO_URI=your-mongodb-uri
# JWT_SECRET=your-secret
# JWT_EXPIRES_IN=7d

# Install frontend dependencies
cd ../frontend
npm install

# Build frontend
npm run build

# Start backend (which serves the frontend)
cd ../backend
node server.js
