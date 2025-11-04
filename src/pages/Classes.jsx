// src/pages/Classes.jsx
import ClassCard from '../components/ClassCard';

export default function Classes() {
  const allCourses = [
    {
      title: "Soft Skills Workshop",
      description: "Master essential workplace skills including communication, teamwork, time management, and professional etiquette.",
      duration: "6 weeks",
      level: "All Levels",
      icon: "💼"
    },
    {
      title: "Public Speaking Mastery",
      description: "Overcome stage fear and learn to deliver compelling presentations with confidence and impact.",
      duration: "4 weeks",
      level: "Beginner+",
      icon: "🎤"
    },
    {
      title: "Career Development Bootcamp",
      description: "Comprehensive career preparation including resume writing, interview skills, and professional networking.",
      duration: "8 weeks",
      level: "Intermediate",
      icon: "🚀"
    },
    {
      title: "Digital Literacy Fundamentals",
      description: "Essential digital skills including Microsoft Office, online collaboration tools, and basic coding concepts.",
      duration: "5 weeks",
      level: "Beginner",
      icon: "💻"
    },
    {
      title: "Leadership & Team Management",
      description: "Develop leadership qualities and learn effective team management strategies for campus and career success.",
      duration: "6 weeks",
      level: "Intermediate",
      icon: "👥"
    },
    {
      title: "Personal Finance for Students",
      description: "Learn budgeting, saving, investing, and financial planning skills tailored for student life and beyond.",
      duration: "4 weeks",
      level: "All Levels",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Our Courses & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed specifically for college students. 
            Each program is crafted to enhance your skills and boost your career prospects.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course, index) => (
            <ClassCard key={index} course={course} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly adding new courses based on student demand. Contact us to suggest a course 
            or get personalized learning recommendations.
          </p>
          <a 
            href="/contact" 
            className="btn-primary inline-block"
          >
            Request Custom Course
          </a>
        </div>
      </div>
    </div>
  );
}