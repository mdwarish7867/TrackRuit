const express = require("express");
const router = express.Router();

// Explicit .js extensions
const authRoutes = require("./authRoutes.js");
const appRoutes = require("./appRoutes.js");

// Debugging
console.log("authRoutes type:", typeof authRoutes);
console.log("appRoutes type:", typeof appRoutes);

router.use("/auth", authRoutes);
router.use("/app", appRoutes);

module.exports = router;
