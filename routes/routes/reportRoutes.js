const express = require("express");
const router = express.Router();
const {
  getReportByStudent,
  upsertGrade,
} = require("../controllers/reportController");

router.get("/:studentId", getReportByStudent);
router.post("/", upsertGrade);

module.exports = router;
