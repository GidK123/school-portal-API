-- Drop tables if they exist
DROP TABLE IF EXISTS transactions;

DROP TABLE IF EXISTS users;

-- Users table for login
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- store hashed passwords
    role ENUM('admin', 'staff', 'student') DEFAULT 'staff',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions table
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    type ENUM('fees', 'donation', 'other') DEFAULT 'fees',
    paid_by VARCHAR(100),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default admin user
-- password = 'keb2025' hashed with bcrypt
INSERT INTO
    users (username, password, role)
VALUES (
        'admin',
        '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'admin'
    );