'use client';

import { ExternalLink } from 'lucide-react';
import myProfileImg from '../assets/profile/my_profile.png';
import farmlyLogo from '../assets/profile/farmlyLogo.png';
import MagicBento from '../react-bits/MagicBento';

export default function Projects() {
  const projects = [
    {
      title: 'Full-Stack Mobile Marketplace Application',
      description: 'Built mobile app for buying/selling goods. Developed React Native UI with Firebase Auth, Firestore, real-time messaging via Gifted Chat, and geolocation filtering. Built RESTful APIs with Node.js/Express and MongoDB, deployed via Render.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Express'],
      github: 'https://github.com/coco1402/farmly-app',
      image: farmlyLogo,
      isEmoji: false
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js, React, Tailwind CSS, and React Bits components.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/coco1402/my_profile',
      image: myProfileImg,
      isEmoji: false
    }
  ];

  // Transform projects data for MagicBento
  const bentoCards = projects.map((project, index) => ({
    color: '#060010',
    label: `Project ${index + 1}`,
    children: (
      <div className="flex flex-col justify-between h-full">
        {/* Project Image */}
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={project.image.src}
            alt={project.title}
            className="w-full h-48 object-cover object-left"
          />
        </div>

        {/* Project Content */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-3">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-purple-900/30 text-purple-200 text-xs rounded-full border border-purple-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-all hover:gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More <ExternalLink size={14} />
          </a>
        </div>
      </div>
    )
  }));

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12">
          My <span className="underline decoration-4 decoration-black">Projects</span>
        </h2>

        <div className="flex justify-center">
          <MagicBento
            cardData={bentoCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </section>
  );
}
