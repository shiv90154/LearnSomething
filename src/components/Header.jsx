// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/classes', label: 'Classes' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent font-poppins">
                EduPlatform
              </span>
              <span className="text-xs text-gray-500 font-medium">Learn & Grow</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></div>
                )}
                <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/get-started"
              className="ml-4 px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 opacity-0' : 'opacity-100'
              }`}>
                <div className="w-6 h-0.5 bg-gray-600 mb-1.5 transition-all duration-300 group-hover:bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-600 mb-1.5 transition-all duration-300 group-hover:bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-600 transition-all duration-300 group-hover:bg-gray-800"></div>
              </div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
              }`}>
                <div className="w-6 h-0.5 bg-gray-800 rotate-45 absolute"></div>
                <div className="w-6 h-0.5 bg-gray-800 -rotate-45 absolute"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center py-3 px-4 rounded-xl font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className={`w-2 h-2 rounded-full mr-3 transition-colors ${
                  location.pathname === item.path ? 'bg-white' : 'bg-blue-500'
                }`}></div>
                {item.label}
                {location.pathname === item.path && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  </div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              to="/get-started"
              className="flex items-center justify-center py-3 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started Free
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}