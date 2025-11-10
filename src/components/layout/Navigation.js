'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Copyright } from 'lucide-react';
import MobileMenu from './MobileMenu';

// Navigation items configuration
// isRoute: true means it's a page route (not a hash link)
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Photography', href: '#photography' },
  { label: 'Contact', href: '/contact', isRoute: true }
];

export default function Navigation() {
  // Track which section is currently active based on scroll position
  const [activeSection, setActiveSection] = useState('');
  // Control mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Scroll listener: Detect which section user is viewing
  useEffect(() => {
    const handleScroll = () => {
      // Extract section IDs from navItems (remove '#' prefix)
      const sections = navItems.map(item => item.href.replace('#', ''));
      // Add 100px offset so highlighting happens slightly before reaching the section
      const scrollPosition = window.scrollY + 100;

      // Loop through each section to find which one is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Update active section to highlight corresponding nav button
            setActiveSection(`#${sectionId}`);
            break; // Stop checking once we find the active section
          }
        }
      }
    };

    handleScroll(); // Run once on mount to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (item) => {
    setIsMenuOpen(false); // Close mobile menu if open

    if (item.isRoute) {
      // For page routes (like /contact), use router.push
      // Add delay to let menu close animation complete
      setTimeout(() => {
        router.push(item.href);
      }, 100);
    } else {
      // For hash links (like #about)
      if (pathname !== '/') {
        // If not on home page, navigate to home first then scroll to section
        setTimeout(() => {
          router.push('/' + item.href);
        }, 100);
      } else {
        // If already on home page, check if hash is already set
        const currentHash = window.location.hash;
        if (currentHash === item.href) {
          // Hash is already set, force scroll programmatically
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Update hash to scroll to section
          window.location.hash = item.href;
        }
      }
    }
  };

  // Determine which navigation style to use
  const isContactPage = pathname === '/contact';
  const isFarmlyOverviewPage = pathname === '/projects/farmly-overview';
  const isPortfolioOverviewPage = pathname === '/projects/portfolio-overview';
  const useHamburgerMenu = isContactPage || isFarmlyOverviewPage || isPortfolioOverviewPage;

  return (
    <>
      {useHamburgerMenu ? (
        // Hamburger Menu Style (for Contact and Farmly Overview pages)
        <>
          {/* Hamburger Menu Button - Fixed to top right */}
          <div className="fixed top-6 right-6 z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-4 bg-[#d97757] hover:bg-[#c56647] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Dark overlay that appears when menu is open */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-in menu panel from the right */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-[#e8e4dc] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Navigation Items */}
              <nav className="flex flex-col gap-3">
                {/* Home button */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      router.push('/');
                    }, 100);
                  }}
                  className={`px-6 py-4 rounded-lg text-lg font-medium text-left transition-all duration-300 ${
                    pathname === '/'
                      ? 'bg-[#d97757] text-white'
                      : 'text-gray-800 hover:bg-[#d97757] hover:text-white'
                  }`}
                >
                  Home
                </button>
                {/* Dynamic nav items */}
                {navItems.map((item) => {
                  // Check if this item should be highlighted
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
        // Top Navigation Bar Style (for Home page)
        <>
          <div className="fixed top-6 left-0 right-0 z-[120] flex justify-center px-6">
            <nav className="flex items-center gap-2 bg-black/90 backdrop-blur-sm rounded-full px-3 py-3">
              {/* Logo Button - switches between English and Chinese on hover */}
              <button
                onClick={() => {
                  setTimeout(() => {
                    router.push('/');
                  }, 100);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300"
              >
                <Copyright size={16} />
                <div className="relative flex items-center h-5">
                  {/* English name - visible by default */}
                  <span className="english-name flex items-center opacity-100 transition-opacity duration-500 ease-in-out text-sm font-medium">
                    Coded by Coco
                  </span>
                  {/* Chinese name - visible on hover */}
                  <span className="chinese-name flex items-center absolute top-0 left-0 h-full whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-xl font-bold -translate-y-0.5" style={{ fontFamily: "'STXingkai', 'LiSu', 'Xingkai SC', cursive" }}>
                    沈思其
                  </span>
                </div>
              </button>

              {/* Desktop Navigation Items - hidden on mobile */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  // Determine if this item should be highlighted
                  const isActive = item.isRoute
                    ? pathname === item.href
                    : activeSection === item.href;

                  // For page routes (like /contact), use direct routing
                  if (item.isRoute) {
                    return (
                      <button
                        key={item.href}
                        onClick={() => {
                          setTimeout(() => {
                            router.push(item.href);
                          }, 100);
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
                  }

                  // For hash links (like #about), use handleNavClick
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item)}
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

          {/* Mobile Menu Component - only visible on mobile screens */}
          <div className="fixed top-6 right-6 z-[120] md:hidden">
            <MobileMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navItems={navItems}
              activeSection={activeSection}
              pathname={pathname}
              handleNavClick={handleNavClick}
            />
          </div>
        </>
      )}

      {/* Styles for logo hover effect */}
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
