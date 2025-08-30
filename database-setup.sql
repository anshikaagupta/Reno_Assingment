-- Create database
CREATE DATABASE IF NOT EXISTS schools_db;
USE schools_db;

-- Create schools table
CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    contact VARCHAR(15) NOT NULL,
    image TEXT NOT NULL,
    email_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data (optional)
INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES
('ABC Public School', '123 Main Street', 'Mumbai', 'Maharashtra', '9876543210', 'school1.jpg', 'abc@school.com'),
('XYZ International School', '456 Park Avenue', 'Delhi', 'Delhi', '8765432109', 'school2.jpg', 'xyz@school.com');
