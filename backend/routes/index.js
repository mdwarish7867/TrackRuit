const express = require("express");
const router = express.Router();

// Import route handlers
const authRoutes = require("./authRoutes");
const appRoutes = require("./appRoutes");

// Debugging: Check if routes are valid middleware
console.log(
  "[DEBUG] authRoutes is function?",
  typeof authRoutes === "function"
); // Should be true
console.log("[DEBUG] appRoutes is function?", typeof appRoutes === "function"); // Should be true

// Mount the routes
router.use("/auth", authRoutes);
router.use("/app", appRoutes);

module.exports = router;
