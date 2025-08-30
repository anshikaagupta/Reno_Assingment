# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: School Management System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Step 3: Set Environment Variables
In Vercel dashboard, go to your project → Settings → Environment Variables:
```
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_mysql_database
DB_PORT=3306
```

### Step 4: Deploy!
Vercel will automatically deploy your project and give you a URL.

---

## Deploy to Netlify

### Step 1: Push to GitHub
(Same as Vercel Step 1)

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy site"

### Step 3: Set Environment Variables
In Netlify dashboard, go to Site settings → Environment variables:
```
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_mysql_database
DB_PORT=3306
```

---

## 🌐 Database Options for Production

### Option 1: PlanetScale (Free MySQL)
1. Go to [planetscale.com](https://planetscale.com)
2. Create free account
3. Create new database
4. Get connection string
5. Update environment variables

### Option 2: Railway (Free MySQL)
1. Go to [railway.app](https://railway.app)
2. Create account
3. Create MySQL database
4. Get connection details
5. Update environment variables

### Option 3: Your Own MySQL Server
- Use your existing MySQL server
- Ensure it's accessible from the internet
- Update firewall settings if needed

---

## ✅ Final Checklist

- [ ] Code pushed to GitHub
- [ ] Database created and accessible
- [ ] Environment variables set
- [ ] Project deployed successfully
- [ ] Test both pages work
- [ ] Test image upload
- [ ] Test responsive design

## 🎯 Assignment Submission

Submit these URLs:
1. **GitHub Repository**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
2. **Live Project**: `https://your-project.vercel.app` or `https://your-project.netlify.app`

---

**Good luck with your assignment! 🚀**
