'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    0: true,
    1: true,
    2: true
  });

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navItems = [
    {
      label: 'About',
      bgColor: '#1e293b',
      links: [
        { label: 'Introduction', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Skills', href: '#skills' }
      ]
    },
    {
      label: 'Projects',
      bgColor: '#334155',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Moments', href: '#moments' }
      ]
    },
    {
      label: 'Contact',
      bgColor: '#475569',
      links: [
        { label: 'Contact', href: '#contact' }
      ]
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Coco Shen</div>

          <div className="relative">
            <div
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer hover:opacity-70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden min-w-[250px]">
                {navItems.map((section, idx) => (
                  <div key={idx} className="border-b last:border-b-0 border-gray-200">
                    <div
                      className="px-4 py-2 font-semibold text-sm text-gray-500 uppercase tracking-wider flex justify-between items-center cursor-pointer"
                      style={{ backgroundColor: section.bgColor, color: '#fff' }}
                      onClick={() => toggleSection(idx)}
                    >
                      <span>{section.label}</span>
                      <span className="text-lg font-bold">{expandedSections[idx] ? '−' : '+'}</span>
                    </div>
                    {expandedSections[idx] && section.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-6 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
