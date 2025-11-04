// src/pages/Contact.jsx
import ContactForm from '../components/ContactForm';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const selectedCourse = searchParams.get('course');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            {selectedCourse ? `Enroll in ${selectedCourse}` : 'Get In Touch'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {selectedCourse 
              ? `Ready to join "${selectedCourse}"? Fill out the form below and we'll get back to you with enrollment details.`
              : 'Have questions or ready to enroll? Send us a message and we\'ll help you start your learning journey.'
            }
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg">📧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">hello@eduplatform.com</p>
            <p className="text-gray-600">admissions@eduplatform.com</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg">📞</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">Mon-Fri, 9AM-6PM</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-gray-600">24-48 hours response time</p>
            <p className="text-gray-600">Personalized guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
}