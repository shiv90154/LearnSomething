// src/pages/About.jsx
import { useState, useEffect } from 'react';

export default function About() {
  const [counters, setCounters] = useState({
    students: 0,
    satisfaction: 0,
    workshops: 0,
    partners: 0
  });

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const increment = (target, field) => {
      let current = 0;
      const step = target / steps;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [field]: Math.floor(current) }));
      }, duration / steps);
    };

    increment(5000, 'students');
    increment(98, 'satisfaction');
    increment(50, 'workshops');
    increment(25, 'partners');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl mb-8">
              <span className="text-3xl text-white">🎓</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 font-poppins leading-tight">
              About EduPlatform
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              We're on a mission to bridge the gap between academic learning and real-world success 
              by providing college students with essential skills for their personal and professional growth.
            </p>
            
            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Story */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100/50 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Our Story
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8 font-poppins">
                  Shaping Future <br />Leaders
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                    Founded in 2020, EduPlatform emerged from a simple observation: 
                    college students often graduate with excellent academic knowledge but lack the 
                    practical skills needed to thrive in their careers and personal lives.
                  </p>
                  <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                    We believe that education should be holistic, combining theoretical knowledge 
                    with practical skills that prepare students for real-world challenges.
                  </p>
                  <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                    Our vision is to create a generation of well-rounded, confident, and 
                    skilled graduates who are ready to make meaningful contributions to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Impact Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 font-poppins">Our Impact</h3>
                  <p className="text-blue-100">Transforming education, one student at a time</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {counters.students}+
                    </div>
                    <div className="text-blue-100 font-medium">Students Trained</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                  
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {counters.satisfaction}%
                    </div>
                    <div className="text-blue-100 font-medium">Satisfaction Rate</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                  
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {counters.workshops}+
                    </div>
                    <div className="text-blue-100 font-medium">Workshops</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                  
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {counters.partners}+
                    </div>
                    <div className="text-blue-100 font-medium">College Partners</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Progress bar for overall impact */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-blue-200 mb-2">
                    <span>Overall Progress</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium text-sm mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Our Expert
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 font-poppins">
              Meet Our Lead Instructor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Learn from industry experts and experienced educators passionate about student success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Enhanced Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white relative overflow-hidden group">
                    <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500">👨‍🏫</span>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                </div>

                {/* Profile Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 font-poppins">
                      Prof. Sarah Johnson
                    </h3>
                    <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
                      Lead Instructor & Career Coach
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      With over 10 years of experience in corporate training and student mentorship, 
                      Sarah brings real-world insights and practical teaching methods to every workshop. 
                      Her passion for empowering students has helped thousands achieve their career goals.
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      Soft Skills Expert
                    </span>
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      Career Coach
                    </span>
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      Public Speaking
                    </span>
                  </div>

                  {/* Social/Contact */}
                  <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-2xl font-medium hover:bg-blue-100 transition-colors duration-300 group">
                      <span>View Profile</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <span>Contact</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}