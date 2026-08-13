const db = require("../config/db");

exports.processPayment = async (req, res) => {
  const { studentId, amount, serviceFee } = req.body;
  const txnId = `TXN-${Math.floor(1000 + Math.random() * 9000)}`;

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // 1. Insert transaction record
    await connection.query(
      "INSERT INTO transactions (id, student_id, amount, service_fee) VALUES (?, ?, ?, ?)",
      [txnId, studentId, amount, serviceFee],
    );

    // 2. Update student paid fees balance
    await connection.query(
      "UPDATE students SET fees_paid = fees_paid + ? WHERE id = ?",
      [amount, studentId],
    );

    await connection.commit();
    res.status(201).json({ message: "Payment processed successfully", txnId });
  } catch (err) {
    await connection.rollback();
    res.status(500).json({ error: err.message });
  } finally {
    connection.release();
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM transactions ORDER BY payment_date DESC",
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
