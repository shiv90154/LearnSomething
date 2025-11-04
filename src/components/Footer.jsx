// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold font-poppins">EduPlatform</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering college students with essential skills for academic and career success through innovative workshops and personalized learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-white transition-colors">Classes</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Our Courses</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Soft Skills</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Public Speaking</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Career Development</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Technical Skills</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 hello@eduplatform.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Education Street, Campus City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} EduPlatform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}