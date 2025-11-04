// src/components/ContactForm.jsx
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Auto-fill course from URL parameter
  useEffect(() => {
    const selectedCourse = searchParams.get('course');
    if (selectedCourse) {
      setFormData(prev => ({
        ...prev,
        subject: selectedCourse,
        message: `I would like to enroll in the "${selectedCourse}" course. Please provide me with more details about the schedule, fees, and enrollment process.`
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add subtle animation on submit
    if (formRef.current) {
      formRef.current.style.transform = 'scale(0.99)';
      setTimeout(() => {
        if (formRef.current) formRef.current.style.transform = 'scale(1)';
      }, 150);
    }

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('🎉 Enrollment request sent successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Success animation
        if (formRef.current) {
          formRef.current.classList.add('animate-pulse');
          setTimeout(() => {
            if (formRef.current) formRef.current.classList.remove('animate-pulse');
          }, 1000);
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      toast.error('❌ Failed to send enrollment request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Start Your Learning Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get detailed information about courses, schedules, and enrollment process. 
          Our team will contact you within 24 hours.
        </p>
      </div>

      <form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10 transition-all duration-300 hover:shadow-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className={`w-full px-5 py-4 bg-gray-50/80 border-2 rounded-2xl focus:outline-none transition-all duration-300 font-medium ${
                  focusedField === 'name' 
                    ? 'border-blue-500 bg-white shadow-lg scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="John Doe"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className={`w-full px-5 py-4 bg-gray-50/80 border-2 rounded-2xl focus:outline-none transition-all duration-300 font-medium ${
                  focusedField === 'email' 
                    ? 'border-blue-500 bg-white shadow-lg scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Field */}
        <div className="mb-8">
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
            Course / Subject *
          </label>
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => handleFocus('subject')}
              onBlur={handleBlur}
              required
              className={`w-full px-5 py-4 bg-gray-50/80 border-2 rounded-2xl focus:outline-none transition-all duration-300 font-medium ${
                focusedField === 'subject' 
                  ? 'border-blue-500 bg-white shadow-lg scale-[1.02]' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="e.g., Web Development, Data Science, Design"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className={`w-5 h-5 transition-colors duration-300 ${
                focusedField === 'subject' ? 'text-blue-500' : 'text-gray-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
            Your Message *
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              required
              className={`w-full px-5 py-4 bg-gray-50/80 border-2 rounded-2xl focus:outline-none transition-all duration-300 font-medium resize-none ${
                focusedField === 'message' 
                  ? 'border-blue-500 bg-white shadow-lg scale-[1.02]' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Tell us about your learning goals, background, and any specific requirements you might have..."
            ></textarea>
            <div className="absolute right-4 top-4">
              <svg className={`w-5 h-5 transition-colors duration-300 ${
                focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          {/* Button content */}
          <span className="relative flex items-center justify-center text-lg">
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Processing Your Request...
              </>
            ) : (
              <>
                Send Enrollment Request
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </span>
        </button>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is secure and will never be shared with third parties
          </p>
        </div>
      </form>
    </div>
  );
}