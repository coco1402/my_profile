'use client';

import { useState, useEffect } from 'react';
import { Copyright } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Moments', href: '#moments' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="flex items-center gap-2 bg-black/90 backdrop-blur-sm rounded-full px-3 py-3">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300"
          >
            <Copyright size={16} />
            <div className="relative">
              <span className="english-name block transition-opacity duration-500 ease-in-out text-sm font-semibold" style={{ fontFamily: "'Courier New', 'Monaco', monospace" }}>
                Coded by Coco Shen
              </span>
              <span className="chinese-name block absolute top-0 left-0 whitespace-nowrap transition-opacity duration-500 ease-in-out text-sm font-semibold" style={{ fontFamily: "'STXingkai', 'LiSu', 'Xingkai SC', cursive" }}>
                沈思其
              </span>
            </div>
          </a>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>

      <style jsx>{`
        .english-name {
          opacity: 1;
        }

        .chinese-name {
          opacity: 0;
          pointer-events: none;
        }

        a:hover .english-name {
          opacity: 0;
        }

        a:hover .chinese-name {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
