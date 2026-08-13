const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "student_portal_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("DB Pool created for:", process.env.DB_NAME || "student_portal_db");

module.exports = pool.promise();
