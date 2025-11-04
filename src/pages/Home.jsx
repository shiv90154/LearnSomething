


// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredCourses = [
    {
      title: "Soft Skills Mastery",
      description: "Develop essential communication, teamwork, and problem-solving skills for academic and career success.",
      duration: "6 weeks",
      level: "All Levels",
      icon: "💼"
    },
    {
      title: "Public Speaking Pro",
      description: "Overcome stage fear and master the art of confident public speaking and presentation skills.",
      duration: "4 weeks",
      level: "Beginner+",
      icon: "🎤"
    },
    {
      title: "Career Launchpad",
      description: "Comprehensive career development including resume building, interview skills, and networking.",
      duration: "8 weeks",
      level: "Intermediate",
      icon: "🚀"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked courses designed to give college students the competitive edge they need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">{course.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>⏱️ {course.duration}</span>
                  <span>🎯 {course.level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/classes" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-poppins">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of college students who have already started their journey to success
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-block"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  );
}