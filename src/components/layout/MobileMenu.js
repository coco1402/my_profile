'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  navItems,
  activeSection,
  pathname,
  handleNavClick
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const menuContent = (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 9998 }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-in Menu */}
      <div
        className={`md:hidden fixed bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          width: '16rem',
          zIndex: 9999,
        }}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col gap-3">
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
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white hover:text-black'
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
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300"
        aria-label="Menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Render menu directly to body using portal */}
      {mounted && typeof document !== 'undefined' && createPortal(menuContent, document.body)}
    </>
  );
}
