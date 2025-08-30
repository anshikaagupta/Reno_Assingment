# School Management System

A simple and responsive school management system built with **Next.js 14** and **MySQL**. This project allows users to add schools with details and view them in a beautiful card layout.

## 🚀 Features

- **Add School Form**: Responsive form with validation using react-hook-form
- **Image Upload**: Store school images in the public/schoolImages folder
- **View Schools**: Display schools in an e-commerce style card layout
- **Mobile Responsive**: Works perfectly on both desktop and mobile devices
- **Form Validation**: Email validation, required fields, and contact number validation
- **Modern UI**: Clean and professional design with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MySQL
- **Form Handling**: React Hook Form
- **Image Upload**: Built-in file handling

## 📋 Prerequisites

Before running this project, make sure you have:

1. **Node.js** (version 18 or higher)
2. **MySQL** server running locally or remotely
3. **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd school-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Database

1. **Create MySQL Database**:
   ```sql
   CREATE DATABASE schools_db;
   USE schools_db;
   ```

2. **Run the SQL Script**:
   ```bash
   mysql -u root -p schools_db < database-setup.sql
   ```

   Or manually create the table:
   ```sql
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

### 4. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` with your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=schools_db
   DB_PORT=3306
   ```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
school-management-system/
├── app/
│   ├── api/
│   │   └── schools/
│   │       └── route.ts          # API endpoints for schools
│   ├── showSchools/
│   │   └── page.tsx              # Page to display schools
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (Add School form)
├── lib/
│   └── database.ts               # MySQL connection
├── public/
│   └── schoolImages/             # Uploaded school images
├── database-setup.sql            # Database setup script
├── package.json                  # Dependencies
├── tailwind.config.ts           # Tailwind configuration
└── README.md                    # This file
```

## 🔧 API Endpoints

### POST /api/schools
Add a new school to the database.

**Request Body**: FormData with:
- `name` (string, required)
- `address` (string, required)
- `city` (string, required)
- `state` (string, required)
- `contact` (string, required, numeric only)
- `email_id` (string, required, valid email)
- `image` (file, required, image format)

**Response**:
```json
{
  "success": true,
  "message": "School added successfully",
  "schoolId": 1
}
```

### GET /api/schools
Fetch all schools from the database.

**Response**:
```json
{
  "success": true,
  "schools": [
    {
      "id": 1,
      "name": "ABC Public School",
      "address": "123 Main Street",
      "city": "Mumbai",
      "state": "Maharashtra",
      "contact": "9876543210",
      "image": "school_1234567890.jpg",
      "email_id": "abc@school.com",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

## 📱 Pages

### 1. Add School Page (`/`)
- Responsive form with validation
- Image upload functionality
- Real-time error messages
- Success notifications

### 2. Show Schools Page (`/showSchools`)
- Grid layout of school cards
- Responsive design for mobile and desktop
- Loading states and error handling
- Beautiful card design with school information

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom CSS classes for specific components. The design is:

- **Responsive**: Adapts to different screen sizes
- **Modern**: Clean and professional appearance
- **Accessible**: Proper contrast and readable fonts
- **Interactive**: Hover effects and smooth transitions

## 🔒 Validation Rules

- **School Name**: Required
- **Address**: Required
- **City**: Required
- **State**: Required
- **Contact**: Required, numeric only
- **Email**: Required, valid email format
- **Image**: Required, image file format

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set environment variables
4. Deploy!

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**:
   - Check if MySQL server is running
   - Verify database credentials in `.env.local`
   - Ensure database and table exist

2. **Image Upload Issues**:
   - Check if `public/schoolImages` folder exists
   - Verify file permissions
   - Ensure image file is valid

3. **Build Errors**:
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `npm install`
   - Check TypeScript errors

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section
2. Review the code and documentation
3. Create an issue on GitHub

## 🎯 Assignment Requirements Met

✅ **Next.js 14 Project** - Complete  
✅ **MySQL Integration** - Using mysql2 package  
✅ **API Routes** - POST for adding, GET for fetching schools  
✅ **Add School Form** - Responsive with react-hook-form and validation  
✅ **Image Upload** - Stored in public/schoolImages folder  
✅ **Show Schools Page** - E-commerce style card layout  
✅ **Responsive Design** - Mobile and desktop compatible  
✅ **Form Validation** - Email, contact number, and required fields  

---

**Happy Coding! 🚀**
