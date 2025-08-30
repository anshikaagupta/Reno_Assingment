# 🚀 Quick Setup Guide

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up MySQL Database
1. Open MySQL command line or phpMyAdmin
2. Run this SQL command:
```sql
CREATE DATABASE schools_db;
USE schools_db;

CREATE TABLE schools (
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
```

## Step 3: Create Environment File
1. Copy `env.example` to `.env.local`
2. Update with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=schools_db
DB_PORT=3306
```

## Step 4: Run the Project
```bash
npm run dev
```

## Step 5: Open Browser
Go to: http://localhost:3000

## 🎯 What You'll See:
- **Home Page**: Form to add new schools
- **View Schools**: Click "View Schools" to see all schools
- **Responsive Design**: Works on mobile and desktop

## 🆘 Need Help?
- Check the main README.md for detailed instructions
- Ensure MySQL server is running
- Verify database credentials are correct
