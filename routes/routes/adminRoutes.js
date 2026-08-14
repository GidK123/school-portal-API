const express = require("express");
const router = express.Router();

// Temp route so server doesn't crash
router.get("/test", (req, res) => {
  res.json({ message: "Admin routes are working" });
});

module.exports = router;
