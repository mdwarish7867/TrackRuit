const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./.env" });

// Debugging
console.log("Current directory:", __dirname);
console.log("Environment variables:", process.env);

// Database connection
const connectDB = require("./config/db.js");
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

// Preflight handling
app.options("*", cors());

// Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API Routes
const mainRouter = require("./routes/index.js");
app.use("/api", mainRouter);

// Fallback to frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Error handling
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "An unknown error occurred";

  res.status(statusCode).json({
    status: "error",
    message,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
