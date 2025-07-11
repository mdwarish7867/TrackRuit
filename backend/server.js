const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // Added path module

// Resolve .env path explicitly
const envPath = path.resolve(__dirname, ".env");
dotenv.config({ path: envPath });

// Debugging
console.log("Environment variables:", process.env);
console.log("Current directory:", __dirname);

// Database connection
const connectDB = require("./config/db.js"); // Explicit .js extension
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
// In server.js, update CORS to:
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://trackruit.onrender.com",
      "https://your-frontend-url.onrender.com",
    ],
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
const frontendBuildPath = path.join(__dirname, "../frontend/build");

console.log("Frontend build path:", frontendBuildPath);
app.use(express.static(frontendBuildPath));

// API Routes
const mainRouter = require("./routes/index.js"); // Explicit .js extension
app.use("/api", mainRouter);

// Fallback to frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
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
