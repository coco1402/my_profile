'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import TextType from '../react-bits/TextType';

export default function Hero() {
  const [showElements, setShowElements] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/profile/about-me.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-sm grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        {/* Name with handwriting style and typing effect */}
        <h1 className="text-8xl md:text-9xl font-bold mb-6 text-center" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          <TextType
            text={["Coco Shen"]}
            typingSpeed={100}
            pauseDuration={2000}
            deletingSpeed={60}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            onComplete={() => setShowElements(true)}
          />
        </h1>

        {/* Subtitle - always rendered but initially invisible */}
        <p
          className="text-2xl md:text-3xl text-gray-800 mb-12 text-center font-serif italic transition-all duration-700 ease-out"
          style={{
            opacity: showElements ? 1 : 0,
            transform: showElements ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Full-Stack Developer based in London
        </p>

        {/* Resume button - always rendered but initially invisible */}
        <a
          href="/assets/cv/Siqi Shen CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-12 py-4 bg-black text-white rounded-full text-lg font-medium border-2 border-black transition-all duration-700 ease-out ${showElements ? 'hover:bg-gray-800 hover:scale-105' : 'pointer-events-none'}`}
          style={{
            opacity: showElements ? 1 : 0,
            transform: showElements ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: showElements ? '0.2s' : '0s'
          }}
        >
          Resume
        </a>
      </div>

      {/* Bottom section - always rendered but initially invisible */}
      <div className="relative z-10 w-full flex items-center justify-between pb-8 px-8">
        {/* Version number */}
        <div className="text-sm text-gray-600 transition-all duration-700 ease-out" style={{
          opacity: showElements ? 1 : 0,
          transform: showElements ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: showElements ? '0.4s' : '0s'
        }}>
          .v 2.0
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{
          opacity: showElements ? 1 : 0,
          transform: showElements ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: showElements ? '0.6s' : '0s'
        }}>
          <p className="text-sm text-gray-800 font-medium tracking-wider">
            [ SCROLL TO EXPLORE ]
          </p>
          <ArrowDown size={20} className="text-gray-800" />
        </div>

        {/* Social link placeholder */}
        <div className="text-sm text-gray-600 transition-all duration-700 ease-out" style={{
          opacity: showElements ? 1 : 0,
          transform: showElements ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: showElements ? '0.4s' : '0s'
        }}>
          <a href="https://github.com/coco1402" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            → github
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
