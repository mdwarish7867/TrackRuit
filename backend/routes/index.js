const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const appRoutes = require("./appRoutes");

router.use("/auth", authRoutes);
router.use("/app", appRoutes); // or change based on your actual use

module.exports = router;
