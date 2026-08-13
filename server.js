const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Health Check Route
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running and reachable" });
});

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const PORT = process.env.PORT || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || "*";

app.use(cors({ origin: FRONTEND_URL }));
