const db = require("../config/db");

exports.getReportByStudent = async (req, res) => {
  const { studentId } = req.params;
  try {
    const [reports] = await db.query(
      "SELECT * FROM terminal_reports WHERE student_id = ?",
      [studentId],
    );
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.upsertGrade = async (req, res) => {
  const { studentId, term, subject, score, grade, teacherRemark } = req.body;
  try {
    await db.query(
      `INSERT INTO terminal_reports (student_id, term, subject, score, grade, teacher_remark)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE score=?, grade=?, teacher_remark=?`,
      [
        studentId,
        term,
        subject,
        score,
        grade,
        teacherRemark,
        score,
        grade,
        teacherRemark,
      ],
    );
    res.json({ message: "Assessment saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
