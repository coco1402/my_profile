'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import PhotoWall from '@/components/PhotoWall';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <PhotoWall />
      <Contact />
      <Footer />
    </div>
  );
}
