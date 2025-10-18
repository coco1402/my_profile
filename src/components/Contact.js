'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-16">
          <span className="inline-block hover:scale-110 transition-transform duration-300">Let's</span>{' '}
          <span className="inline-block hover:scale-110 transition-transform duration-300">Connect</span>{' '}
          <span className="inline-block animate-bounce">👋</span>
        </h2>

        {/* Personal reflection section */}
        <div className="space-y-6 mb-16">
          <p className="text-xl leading-relaxed text-gray-800">
            If someone told my 14-year-old self what I'd be doing in my twenties, I wouldn't have believed them.
          </p>
          <p className="text-xl leading-relaxed text-gray-800">
            So what about the next decade? What will I become?
          </p>
          <p className="text-xl leading-relaxed text-gray-800">
            Life is so random but that's what makes it fun.
          </p>
          <div className="pt-8 space-y-4">
            <p className="text-xl leading-relaxed text-gray-800">
              Thank you for reading it this far.
            </p>
            <p className="text-xl leading-relaxed text-gray-900 font-medium">
              If you have something to share, I'd love to hear from you ✨
            </p>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-8">
          <a
            href="mailto:ssq1402@gmail.com"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
            aria-label="Email"
          >
            <div className="p-4 border-2 border-black rounded-2xl group-hover:bg-black group-hover:text-white transition-all">
              <Mail size={32} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/siqi-coco-shen-738509175/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <div className="p-4 border-2 border-black rounded-2xl group-hover:bg-black group-hover:text-white transition-all">
              <Linkedin size={32} />
            </div>
          </a>
          <a
            href="https://github.com/coco1402/farmly-app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <div className="p-4 border-2 border-black rounded-2xl group-hover:bg-black group-hover:text-white transition-all">
              <Github size={32} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
