'use client';

import { useState, useRef, useEffect } from 'react';
import AnimatedContactInput from './AnimatedContactInput';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isTyping, setIsTyping] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const typingTimeoutRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      // Trigger shake animation
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    // You can integrate with email service here
    window.location.href = `mailto:ssq1402@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Trigger typing animation
    setIsTyping(true);

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Stop typing animation after 500ms of no input
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e4dc] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Contact Form */}
        <div className="w-full">
          {/* Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center lg:text-left mb-12 tracking-tight relative font-[family-name:var(--font-montserrat)]">
            <span className="title-gradient inline-block hover-wave">
              Let&apos;s Talk :<span className="bracket-raised">]</span>
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
              placeholder="e.g. Coco"
              className={`w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-[#d97757] transition-all text-lg ${isShaking ? 'shake' : ''}`}
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
              placeholder="e.g. firstname.lastname@gmail.com"
              className={`w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-[#d97757] transition-all text-lg ${isShaking ? 'shake' : ''}`}
            />
          </div>

          {/* Message field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Hi Coco, I would like to tell you that..."
              rows={6}
              className={`w-full px-6 py-4 border-2 border-gray-800 rounded-lg bg-transparent focus:outline-none focus:border-[#d97757] transition-all resize-none text-lg ${isShaking ? 'shake' : ''}`}
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

        {/* Right side - Animated Illustration */}
        <div className="w-full h-[600px] lg:h-[700px] relative hidden lg:block">
          <div className="absolute inset-0 opacity-90">
            <AnimatedContactInput isInputting={isTyping} />
          </div>
        </div>
      </div>

      <style jsx>{`
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
          content: 'Let\\'s Talk :]';
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

        .bracket-raised {
          display: inline-block;
          transform: translateY(-0.1em);
          font-size: 0.9em;
          background: inherit;
          -webkit-background-clip: inherit;
          -webkit-text-fill-color: inherit;
          background-clip: inherit;
        }

        input::placeholder,
        textarea::placeholder {
          color: #9ca3af;
          opacity: 0.5;
        }

        .shake {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
