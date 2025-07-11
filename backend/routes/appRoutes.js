const express = require("express");
const router = express.Router();

// Add a temporary test route
router.get("/test", (req, res) => {
  res.json({ message: "App routes working!" });
});

module.exports = router;
