'use client';

import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Full-Stack Mobile Marketplace Application',
      description: 'Collaborated in team of 5 to build mobile app for buying/selling goods. Developed React Native UI with Firebase Auth, Firestore, real-time messaging via Gifted Chat, and geolocation filtering. Built RESTful APIs with Node.js/Express and MongoDB, deployed via Render.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Express'],
      github: 'https://github.com/coco1402/farmly-app'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          My <span className="underline decoration-4 decoration-black">Projects</span>
        </h2>
        <div className="flex justify-center">
          <div className="max-w-md">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-6xl">
                  📱
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full border border-gray-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
