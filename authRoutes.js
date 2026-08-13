const express = require("express");
const router = express.Router();

// ⚠️ MUST BE "/send-otp" because "/api/auth" is already applied in server.js!
router.post("/send-otp", (req, res) => {
  const { schoolCode, email, role } = req.body;

  console.log("Received OTP request:", { schoolCode, email, role });

  // Return JSON response
  return res.status(200).json({
    success: true,
    message: "Security code sent successfully.",
  });
});

router.post("/verify-otp", (req, res) => {
  const { schoolCode, email, otpCode } = req.body;

  return res.status(200).json({
    success: true,
    message: "Code verified successfully.",
  });
});

module.exports = router;
