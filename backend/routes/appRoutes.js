const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ status: "success", message: "App routes working" });
});

module.exports = router;
