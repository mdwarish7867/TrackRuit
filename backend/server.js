const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

// Database connection
const connectDB = require("./config/db");
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
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

// Debug route imports
const mainRouter = require("./routes");
console.log("[SERVER] Main router type:", typeof mainRouter);
console.log("[SERVER] Is router:", mainRouter.name === "router");

// Routes
app.use("/api", mainRouter);

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
