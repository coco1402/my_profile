'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay to ensure the animation is visible
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Personal reflection section */}
        <div className="text-center leading-relaxed space-y-8 mb-20">
          <p
            className={`text-3xl md:text-4xl text-gray-700 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            If someone told my 14-year-old self what I&apos;d be doing in my twenties, I wouldn&apos;t have believed them.
          </p>
          <p
            className={`text-3xl md:text-4xl text-gray-700 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            So what about the next decade? What will I become?
          </p>
          <p
            className={`text-3xl md:text-4xl text-gray-700 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Life is so random, but that&apos;s what makes it fun.
          </p>
          <p
            className={`text-3xl md:text-4xl text-gray-700 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            And the journey will continue...
          </p>
        </div>

        {/* Divider */}
        <div
          className={`flex justify-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '1800ms' }}
        >
          <div className="w-48 h-px bg-gray-300"></div>
        </div>

        {/* Thank you message*/}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '2100ms' }}
        >
          <p className="text-xl text-gray-600 leading-relaxed">
            Thanks for reading this far.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mt-3">
            If you have something to share, I&apos;d love to hear from you 👇
          </p>
        </div>

        {/* Let's Connect*/}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '2400ms' }}
        >
          {/* Social icons */}
          <div className="flex justify-center gap-6">
            <button
              onClick={() => router.push('/contact')}
              className="group transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <div className="p-4 border-2 border-black rounded-xl shadow-sm group-hover:bg-black group-hover:text-white group-hover:shadow-md transition-all duration-300">
                <Mail size={28} />
              </div>
            </button>
            <a
              href="https://www.linkedin.com/in/siqi-coco-shen-738509175/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <div className="p-4 border-2 border-black rounded-xl shadow-sm group-hover:bg-black group-hover:text-white group-hover:shadow-md transition-all duration-300">
                <Linkedin size={28} />
              </div>
            </a>
            <a
              href="https://github.com/coco1402/farmly-app"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <div className="p-4 border-2 border-black rounded-xl shadow-sm group-hover:bg-black group-hover:text-white group-hover:shadow-md transition-all duration-300">
                <Github size={28} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
}
