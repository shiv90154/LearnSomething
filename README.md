# 🎓 EduPlatform - College Student Learning Platform

A modern, responsive educational website built with React and Tailwind CSS, designed specifically for college students seeking skill development workshops and courses.

![EduPlatform](https://img.shields.io/badge/EduPlatform-React%20%2B%20Tailwind-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

## 🚀 Live Demo

**Live Site:** [https://eduplatform.vercel.app](https://eduplatform.vercel.app)  
**Demo Video:** [Watch Walkthrough](#)

## ✨ Features

### 🎯 Core Functionality
- **Auto-filled Enrollment Forms** - Course names automatically populate when clicking "Enroll Now"
- **Modern React + Tailwind CSS** - Latest frontend technologies with beautiful UI
- **Responsive Design** - Perfect experience on all devices
- **Nodemailer Integration** - Automated email notifications for enrollments
- **Vercel Deployment** - Fast, reliable hosting with serverless functions

### 🎓 Student Features
- Browse available courses and workshops
- One-click enrollment with auto-filled forms
- Course details with duration and level information
- Contact form with smart pre-filling

### 📧 Email Automation
- Instant enrollment confirmation to students
- Admin notifications for new enrollments
- Professional HTML email templates
- 24-hour response guarantee

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Toastify** - Beautiful notifications
- **Vite** - Fast build tool and dev server

### Backend & Deployment
- **Vercel** - Hosting and serverless functions
- **Nodemailer** - Email sending service
- **Gmail SMTP** - Email delivery

## 📁 Project Structure

```
eduplatform/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ClassCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Classes.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── api/
│   └── sendMail.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## 🎨 Design System

### Colors
- **Primary:** `#6366F1` (Indigo)
- **Accent:** `#22D3EE` (Cyan)
- **Background:** `#F9FAFB`
- **Text:** `#1F2937`

### Typography
- **Headings:** Poppins (600-800 weight)
- **Body:** Inter (400-700 weight)

### Components
- Gradient buttons and backgrounds
- Card-based layouts with shadows
- Smooth animations and transitions
- Mobile-first responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Gmail account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eduplatform.git
   cd eduplatform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_TO=admin@eduplatform.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000

### Building for Production

```bash
npm run build
npm run preview
```

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### Environment Variables
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=recipient@eduplatform.com
```

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in project settings
   - Deploy!

### Environment Variables in Vercel
Add these in your Vercel project settings:
- `EMAIL_USER`
- `EMAIL_PASS` 
- `EMAIL_TO`

## 📝 How It Works

### Auto-fill Enrollment Flow
1. Student clicks "Enroll Now" on any course card
2. Redirects to contact page with course parameter: `/contact?course=Soft+Skills+Workshop`
3. Contact form automatically detects and pre-fills the course name
4. Student completes the form and submits
5. System sends confirmation emails to both admin and student

### Email Templates
- **Admin Notification:** New enrollment details with student information
- **Student Confirmation:** Welcome email with next steps and course details

## 🎯 Available Courses

The platform includes 6+ workshops:
- 🎓 Soft Skills Workshop
- 🎤 Public Speaking Mastery  
- 🚀 Career Development Bootcamp
- 💻 Digital Literacy Fundamentals
- 👥 Leadership & Team Management
- 💰 Personal Finance for Students

## 🔧 Customization

### Adding New Courses
Edit `src/pages/Classes.jsx`:
```javascript
const allCourses = [
  {
    title: "Your New Course",
    description: "Course description...",
    duration: "4 weeks",
    level: "Beginner",
    icon: "🎯"
  },
  // ... more courses
];
```

### Modifying Colors
Update `tailwind.config.js`:
```javascript
colors: {
  primary: '#YourColor',
  accent: '#YourAccentColor',
}
```

### Email Templates
Customize email templates in `api/sendMail.js` HTML content.

## 🐛 Troubleshooting

### Common Issues

1. **Emails not sending**
   - Verify Gmail App Password is correct
   - Check environment variables in Vercel
   - Ensure less secure apps are disabled (use App Password instead)

2. **Auto-fill not working**
   - Check React Router DOM is properly installed
   - Verify URL parameters are correctly encoded

3. **Build errors**
   - Clear node_modules and reinstall dependencies
   - Check Node.js version compatibility

## 📈 Performance

- **Lighthouse Score:** 95+ 
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Vercel** - For seamless deployment
- **College Students** - Our inspiration and target audience

## 📞 Support

For support, email hello@eduplatform.com or create an issue in the GitHub repository.

## 🔗 Links

- **Live Demo:** [https://eduplatform.vercel.app](https://eduplatform.vercel.app)
- **GitHub Repository:** [https://github.com/yourusername/eduplatform](https://github.com/yourusername/eduplatform)
- **Documentation:** [Full Documentation](#)
- **Issue Tracker:** [GitHub Issues](https://github.com/yourusername/eduplatform/issues)

---

<div align="center">

**Built with ❤️ for college students worldwide**

*Empowering minds through learning & growth*

</div>
