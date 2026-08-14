const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  addStudent,
} = require("../controllers/studentController");

router.get("/", getAllStudents);
router.post("/", addStudent);

module.exports = router;
