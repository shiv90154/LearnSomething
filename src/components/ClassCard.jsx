// src/components/ClassCard.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ClassCard({ course }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleEnroll = () => {
    navigate(`/contact?course=${encodeURIComponent(course.title)}`);
  };

  return (
    <div 
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 p-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[2px] rounded-3xl bg-white/80 backdrop-blur-sm"></div>
      </div>

      {/* Course Icon */}
      <div className="relative mb-6">
        <div className={`relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 ${
          isHovered ? 'animate-pulse' : ''
        }`}>
          <span className="text-2xl text-white filter drop-shadow-sm">{course.icon}</span>
          
          {/* Icon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
        </div>
        
        {/* Popular Badge */}
        {course.isPopular && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-6">
              🔥 Popular
            </div>
          </div>
        )}
      </div>

      {/* Course Details */}
      <div className="relative">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 font-poppins leading-tight group-hover:scale-105 transition-transform duration-300">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {course.description}
        </p>

        {/* Course Meta Information */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2 bg-blue-50/80 rounded-xl px-3 py-2 group-hover:bg-blue-100 transition-colors duration-300">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">⏱️</span>
            </div>
            <div>
              <div className="text-xs text-gray-500">Duration</div>
              <div className="text-sm font-semibold text-gray-800">{course.duration}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-purple-50/80 rounded-xl px-3 py-2 group-hover:bg-purple-100 transition-colors duration-300">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🎯</span>
            </div>
            <div>
              <div className="text-xs text-gray-500">Level</div>
              <div className="text-sm font-semibold text-gray-800">{course.level}</div>
            </div>
          </div>

          {/* Additional Features */}
          {course.features && (
            <div className="flex items-center space-x-2 bg-green-50/80 rounded-xl px-3 py-2 group-hover:bg-green-100 transition-colors duration-300">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">⭐</span>
              </div>
              <div>
                <div className="text-xs text-gray-500">Features</div>
                <div className="text-sm font-semibold text-gray-800">{course.features}</div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar (if course has progress) */}
        {course.progress !== undefined && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Your Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Rating (if available) */}
        {course.rating && (
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= course.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {course.rating} ({course.reviews}+ reviews)
            </span>
          </div>
        )}

        {/* Enhanced Enroll Button */}
        <button
          onClick={handleEnroll}
          className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          {/* Button Content */}
          <span className="relative flex items-center justify-center text-lg font-semibold">
            Enroll Now
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure enrollment • 24/7 support
          </p>
        </div>
      </div>

      {/* Hover Effect Dots */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}