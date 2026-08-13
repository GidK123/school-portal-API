const db = require("../config/db");

exports.getAllStudents = async (req, res) => {
  try {
    const [students] = await db.query("SELECT * FROM students");
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addStudent = async (req, res) => {
  const { id, name, studentClass, feesDue } = req.body;
  try {
    await db.query(
      "INSERT INTO students (id, name, class, fees_due, fees_paid) VALUES (?, ?, ?, ?, 0)",
      [id, name, studentClass, feesDue],
    );
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
