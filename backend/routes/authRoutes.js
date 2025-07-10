const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Define routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authController.protect, authController.getCurrentUser);
router.patch(
  "/update-password",
  authController.protect,
  authController.updatePassword
);

module.exports = router;
