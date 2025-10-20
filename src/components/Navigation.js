'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Copyright } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Moments', href: '#moments' },
    { label: 'Contact', href: '/contact', isRoute: true }
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

  const handleNavClick = (item) => {
    if (item.isRoute) {
      router.push(item.href);
    } else {
      if (pathname !== '/') {
        router.push('/' + item.href);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const isContactPage = pathname === '/contact';

  return (
    <>
      {isContactPage ? (
        // Hamburger Menu for Contact Page
        <>
          {/* Hamburger Menu Button */}
          <div className="fixed top-6 right-6 z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-4 bg-[#d97757] hover:bg-[#c56647] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-[#e8e4dc] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Nav Items */}
              <nav className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    router.push('/');
                    setIsMenuOpen(false);
                  }}
                  className={`px-6 py-4 rounded-lg text-lg font-medium text-left transition-all duration-300 ${
                    pathname === '/'
                      ? 'bg-[#d97757] text-white'
                      : 'text-gray-800 hover:bg-[#d97757] hover:text-white'
                  }`}
                >
                  Home
                </button>
                {navItems.map((item) => {
                  const isActive = item.isRoute
                    ? pathname === item.href
                    : activeSection === item.href;

                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item)}
                      className={`px-6 py-4 rounded-lg text-lg font-medium text-left transition-all duration-300 ${
                        isActive
                          ? 'bg-[#d97757] text-white'
                          : 'text-gray-800 hover:bg-[#d97757] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      ) : (
        // Original Nav Bar for Other Pages
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
          <nav className="flex items-center gap-2 bg-black/90 backdrop-blur-sm rounded-full px-3 py-3">
            {/* Logo */}
            <button
              onClick={() => router.push('/')}
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
            </button>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = item.isRoute
                  ? pathname === item.href
                  : activeSection === item.href;

                if (item.isRoute) {
                  return (
                    <button
                      key={item.href}
                      onClick={() => router.push(item.href)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-black'
                          : 'text-white hover:bg-white hover:text-black'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      if (pathname !== '/') {
                        router.push('/' + item.href);
                      } else {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        .english-name {
          opacity: 1;
        }

        .chinese-name {
          opacity: 0;
          pointer-events: none;
        }

        button:hover .english-name {
          opacity: 0;
        }

        button:hover .chinese-name {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
