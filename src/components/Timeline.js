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
          <p><strong>Developed a full-stack Semantic Search extension for an enterprise e-discovery platform</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>End-to-end ownership of functionality delivery, from initial design and development through deployment and client adoption.</li>
            <li>Built a full-stack solution integrating an interactive JavaScript UI (ES6 modules, Rollup, Babel) with a Flask REST API for semantic retrieval using embedding models and vector similarity search.</li>
            <li>Implemented secure authentication and authorisation (role-based access control, OpenID Connect, CSRF protection) and automated deployment with Azure CI/CD pipelines.</li>
          </ul>
          <p className="mt-4"><strong>Automated workflows with Python scripting for an enterprise e-discovery platform</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Eliminated manual file uploads by automating ingestion of text, audio, and images, while optimising workflows to run concurrently with SQL operations.</li>
            <li>Built Python-based deduplication scripts to identify and remove duplicate documents across multiple workspaces and within single workspaces.</li>
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
        <h2 className="text-5xl font-bold mb-12 text-white">
          My <span className="underline decoration-4 decoration-white">Journey</span>
        </h2>

        <div className="relative">
          {/* Curved timeline path */}
          <svg
            className="absolute left-0 w-full pointer-events-none"
            style={{ top: '0', height: '100%' }}
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYStretch"
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
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative" style={{ minHeight: '120px' }}>
                <div className="flex items-center gap-12">
                  {/* Left content */}
                  <div className="w-[45%]">
                    {event.position === 'left' && (
                      <div className="pr-20 text-right">
                        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                        <p className="text-gray-300 mb-2">{event.subtitle}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
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
                        <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                      </div>
                    )}
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
