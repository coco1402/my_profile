'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with email service here
    window.location.href = `mailto:ssq1402@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#e8e4dc] flex flex-col items-center justify-center px-6 py-20 animate-fadeIn">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="absolute top-8 left-8 p-3 hover:bg-black/5 rounded-full transition-all duration-300 group"
        aria-label="Go back"
      >
        <ArrowLeft size={24} className="text-gray-700 group-hover:text-black" />
      </button>

      <div className="max-w-2xl w-full">
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-bold text-center mb-16 tracking-tight">
          Let's Talk!
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div className="relative">
            <label htmlFor="name" className="absolute -top-3 left-4 bg-[#e8e4dc] px-2 text-sm text-gray-600">
              Ab. What's ur Name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's Your Name?"
              required
              className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-gray-600 transition-colors text-lg"
            />
          </div>

          {/* Email field */}
          <div className="relative">
            <label htmlFor="email" className="absolute -top-3 left-4 bg-[#e8e4dc] px-2 text-sm text-gray-600">
              or uhm. yourmail@huhwhere?.com
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's Your Email?"
              required
              className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-gray-600 transition-colors text-lg"
            />
          </div>

          {/* Message field */}
          <div className="relative">
            <label htmlFor="message" className="absolute -top-3 left-4 bg-[#e8e4dc] px-2 text-sm text-gray-600">
              What's on your mind?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Something..."
              required
              rows={6}
              className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-gray-600 transition-colors resize-none text-lg"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-4 bg-[#d97757] hover:bg-[#c56647] text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Send!
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
