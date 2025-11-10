'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const router = useRouter();
  const sectionRef = useRef(null);

  // Use Framer Motion's useScroll hook for better scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"]
  });

  // Create a word component that changes color based on scroll
  const Word = ({ children, index, total }) => {
    const progress = index / (total - 1);

    const lightness = useTransform(
      scrollYProgress,
      [progress - 0.1, progress, progress + 0.05],
      [92, 25, 25]
    );

    return (
      <motion.span
        className="word"
        style={{
          color: useTransform(lightness, (l) => `hsl(0, 0%, ${l}%)`)
        }}
      >
        {children}
      </motion.span>
    );
  };

  const text = "Because each photo holds a story beyond the frame. If someone told my 14-year-old self what I'd be doing in my twenties, I wouldn't have believed them.\n\nSo what about the next decade? What will I become? Life is so random, but that's what makes it fun. And the journey will continue...";

  return (
    <section ref={sectionRef} id="contact" className="min-h-[200vh] pt-90 pb-96 px-12 md:px-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto mt-64">
          {/* Personal reflection section */}
          <div className="mb-20">
            <div
              className="text-3xl md:text-5xl leading-relaxed"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              {text.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className={pIndex === 0 ? 'mb-32' : ''}>
                  {paragraph.split(' ').map((word, wIndex) => {
                    const totalWords = text.replace(/\n\n/g, ' ').split(' ').length;
                    const globalIndex = text.substring(0, text.indexOf(paragraph)).split(' ').filter(w => w).length + wIndex;
                    return (
                      <span key={wIndex}>
                        <Word index={globalIndex} total={totalWords}>
                          {word}
                        </Word>
                        {wIndex < paragraph.split(' ').length - 1 && ' '}
                      </span>
                    );
                  })}
                </p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-20">
            <div className="w-48 h-px bg-gray-300"></div>
          </div>

          {/* Thank you message*/}
          <div className="text-center mb-20">
            <p className="text-xl text-gray-600 leading-relaxed">
              Thanks for reading this far.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mt-3">
              If you have something to share, I&apos;d love to hear from you 👇
            </p>
          </div>

          {/* Let's Connect*/}
          <div className="text-center mb-32">
            {/* Social icons */}
            <div className="flex justify-center gap-6">
              <button
                onClick={() => router.push('/contact')}
                className="group transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <div className="p-4 border-2 border-black rounded-xl shadow-sm group-hover:bg-black group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Mail size={28} />
                </div>
              </button>
              <a
                href="https://www.linkedin.com/in/siqi-coco-shen-738509175/"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <div className="p-4 border-2 border-black rounded-xl shadow-sm group-hover:bg-black group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Linkedin size={28} />
                </div>
              </a>
              <a
                href="https://github.com/coco1402/farmly-app"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <div className="p-4 border-2 border-black rounded-xl shadow-sm group-hover:bg-black group-hover:text-white group-hover:shadow-md transition-all duration-300">
                  <Github size={28} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .word {
          display: inline;
          will-change: color;
        }
      `}</style>
    </section>
  );
}
