'use client';

import { useState } from 'react';

export default function ContactForm() {
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
      <div className="max-w-2xl w-full">
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-bold text-center mb-16 tracking-tight relative">
          <span className="title-gradient inline-block hover-wave">
            Let&apos;s Talk!
          </span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's Your Name*"
              required
              className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-gray-600 transition-colors text-lg"
            />
          </div>

          {/* Email field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's Your Email*"
              required
              className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-gray-600 transition-colors text-lg"
            />
          </div>

          {/* Message field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Something*"
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

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .title-gradient {
          background: linear-gradient(
            135deg,
            #d97757,
            #c56647,
            #e08b6f,
            #d97757
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
          text-shadow: 0 4px 20px rgba(217, 119, 87, 0.3);
          position: relative;
        }

        .title-gradient::after {
          content: 'Let\\'s Talk!';
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          background: linear-gradient(135deg, #d97757, #c56647);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: blur(20px);
          opacity: 0.5;
        }

        .hover-wave:hover {
          animation: float 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
