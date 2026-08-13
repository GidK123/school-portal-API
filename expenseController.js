const db = require("../config/db");

exports.addExpense = async (req, res) => {
  const { category, amount, expenseDate, notes } = req.body;
  try {
    await db.query(
      "INSERT INTO expenses (category, amount, expense_date, notes) VALUES (?, ?, ?, ?)",
      [category, amount, expenseDate, notes],
    );
    res.status(201).json({ message: "Expense logged successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const [expenses] = await db.query(
      "SELECT * FROM expenses ORDER BY expense_date DESC",
    );
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
