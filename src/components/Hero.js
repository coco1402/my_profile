'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import TextType from '../react-bits/TextType';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6">
            Hello! I'm <span className="block mt-2">
              <TextType
                text={["Coco Shen", "a girl who codes", "based in London"]}
                typingSpeed={75}
                pauseDuration={1500}
                deletingSpeed={50}
                showCursor={true}
                cursorCharacter="|"
                loop={true}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Welcome to my personal website! Here you can find my work experience, educational background, personal skills as well as some project experiences. Come on in - this place always keep a touch of lingering warmth and unfinished next line ...
          </p>
          <div className="flex gap-4">
            <a href="mailto:ssq1402@gmail.com" className="p-3 border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/siqi-coco-shen-738509175/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/coco1402/farmly-app" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl">
            <img
              src="/assets/profile/about-me.png"
              alt="Coco Shen"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
