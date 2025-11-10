'use client';

import { useEffect, useRef, useState } from 'react';

export default function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const progress = Math.min(
        Math.max((scrollPosition - sectionTop) / sectionHeight, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineEvents = [
    {
      year: '2018',
      title: 'BSc Mathematics and Economics',
      subtitle: 'London School of Economics',
      period: '2018 - 2021',
      description: 'First Class Honours. Strong foundation in mathematical theory and economic analysis.',
      type: 'education',
      position: 'right',
      color: '#E8D4B8' // Beige/tan color
    },
    {
      year: '2020',
      title: 'Research Intern',
      subtitle: 'Cambridge University',
      period: 'Oct 2020 - Dec 2020',
      description: 'Implemented reinforcement learning algorithm (weighted majority) to compute hypothetical daily prices for S&P500 since 1950. Compared merits of different algorithms and parameters, generating CAGR of 10+%, 5 times higher than buy and hold strategy.',
      type: 'experience',
      position: 'left',
      color: '#B8D4D4' // Teal/cyan color
    },
    {
      year: '2021',
      title: 'MSc Financial Mathematics',
      subtitle: 'London School of Economics',
      period: '2021 - 2022',
      description: 'Focused on stochastic process, measure theory, numerical pricing, time series, regression analysis, investment portfolio, and enterprise risk management.',
      type: 'education',
      position: 'right',
      color: '#E8D4B8' // Beige/tan color
    },
    {
      year: '2022',
      title: 'Software Engineering Bootcamp',
      subtitle: 'Northcoders, UK',
      period: 'Oct 2022 - Feb 2023',
      description: 'Completed intensive full-stack development bootcamp. Built mobile marketplace app using React Native, Node.js, Express, MongoDB, and Firebase. Applied Test Driven Development (TDD) principles throughout.',
      type: 'education',
      position: 'left',
      color: '#D4C4B8' // Light tan color
    },
    {
      year: '2025',
      title: 'Assistant Manager - Forensic Technology',
      subtitle: 'KPMG',
      period: 'Oct 2022 - Present',
      description: (
        <div className="space-y-3">
          <p><strong>Full-Stack Development</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Developed enterprise web applications with JavaScript frontends and Python/Flask backends</li>
            <li>Implemented semantic search functionality using embedding models and vector similarity search</li>
            <li>Built secure authentication systems with role-based access control and automated CI/CD deployment pipelines</li>
          </ul>
          <p className="mt-4"><strong>Automation & optimisation</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Automated data ingestion workflows for multiple file types using Python scripting</li>
            <li>Developed deduplication solutions to optimize data processing and improve efficiency</li>
          </ul>
        </div>
      ),
      type: 'experience',
      position: 'right',
      color: '#C4B8D4' // Lavender color
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-white font-[family-name:var(--font-montserrat)]">
          My <span className="underline decoration-4 decoration-white">Journey</span>
        </h2>

        <div className="relative">
          {/* Curved timeline path - Hidden on mobile, shown on desktop */}
          <svg
            className="absolute left-0 w-full pointer-events-none hidden md:block"
            style={{ top: '0', height: '100%' }}
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                <stop offset={`${scrollProgress * 100}%`} stopColor="white" stopOpacity="1" />
                <stop offset={`${scrollProgress * 100}%`} stopColor="white" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 500,50 C 650,100 700,150 500,200 C 300,250 250,300 500,400 C 700,500 750,550 500,600 C 300,650 250,700 500,800 C 700,850 750,900 500,950"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="2800"
              strokeDashoffset={2800 * (1 - scrollProgress)}
              style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
            />
          </svg>

          {/* Timeline events */}
          <div className="md:space-y-24 space-y-0 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative" style={{ minHeight: '120px' }}>
                {/* Desktop layout */}
                <div className="hidden md:flex items-center gap-12">
                  {/* Left content */}
                  <div className="w-[45%]">
                    {event.position === 'left' && (
                      <div className="pr-20 text-right">
                        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                        <p className="text-gray-300 mb-2">{event.subtitle}</p>
                        <div className="text-sm text-gray-400 leading-relaxed">{event.description}</div>
                      </div>
                    )}
                  </div>

                  {/* Center year badge and dot */}
                  <div className="w-[10%] flex flex-col items-center relative z-10">
                    {/* Connection dot */}
                    <div className="w-4 h-4 rounded-full bg-black border-4 border-white"></div>

                    {/* Year badge */}
                    <div
                      className="mt-2 px-6 py-2 rounded-lg font-bold text-black border-2 border-white text-center"
                      style={{ backgroundColor: event.color }}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="w-[45%]">
                    {event.position === 'right' && (
                      <div className="pl-20 text-left">
                        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                        <p className="text-gray-300 mb-2">{event.subtitle}</p>
                        <div className="text-sm text-gray-400 leading-relaxed">{event.description}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout - Single column */}
                <div className="md:hidden flex gap-4 mb-12">
                  {/* Year badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="px-3 py-1 rounded-md text-xs font-bold text-black border border-white text-center whitespace-nowrap"
                      style={{ backgroundColor: event.color }}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* Content - All on the right */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-gray-300 mb-2 text-sm">{event.subtitle}</p>
                    <div className="text-sm text-gray-400 leading-relaxed">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
