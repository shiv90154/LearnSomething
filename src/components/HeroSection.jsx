// src/components/HeroSection.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingWords = ['Learning', 'Growth', 'Success', 'Skills', 'Future'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#00000010 1px, transparent 1px),
                             linear-gradient(90deg, #00000010 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 shadow-2xl flex items-center justify-center">
          <span className="text-white text-lg">🎓</span>
        </div>
      </div>
      <div className="absolute top-40 right-32 animate-float delay-1000">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-12 shadow-2xl flex items-center justify-center">
          <span className="text-white text-xl">🚀</span>
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float delay-1500">
        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl rotate-45 shadow-2xl flex items-center justify-center">
          <span className="text-white text-lg">⭐</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 mb-8 group hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-semibold text-sm">
              🎉 Trusted by 5,000+ students from 25+ colleges
            </span>
            <div className="ml-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🔥</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 font-poppins leading-tight">
            <span className="block text-gray-800 mb-4">Empowering</span>
            <span className="block text-gray-800 mb-4">College Minds</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Through {rotatingWords[currentWord]}
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 animate-grow"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Join our transformative workshops and skill development sessions designed 
            specifically for college students. Build your future today with industry-relevant skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/classes" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="relative flex items-center justify-center">
                Explore Classes
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-800 font-bold text-lg px-12 py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-blue-500"
            >
              <span className="relative flex items-center justify-center">
                Contact Us
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '5K+', label: 'Students' },
              { number: '98%', label: 'Success Rate' },
              { number: '50+', label: 'Workshops' },
              { number: '25+', label: 'Partners' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-grow {
          animation: grow 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}