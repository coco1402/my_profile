'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Skills from '@/components/sections/Skills';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PhotoWall from '@/components/sections/PhotoWall';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';

export default function Portfolio() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Check if this is initial load or navigation
    const isInitialLoad = !window.sessionStorage.getItem('hasNavigated');

    if (isInitialLoad) {
      // Initial load: wait for preloader to complete
      const handlePreloaderComplete = () => {
        // Render Hero immediately when preloader completes
        setShowHero(true);
      };

      window.addEventListener('preloaderComplete', handlePreloaderComplete);
      window.sessionStorage.setItem('hasNavigated', 'true');

      return () => {
        window.removeEventListener('preloaderComplete', handlePreloaderComplete);
      };
    } else {
      // Navigation: render Hero immediately (PageTransition still running)
      setShowHero(true);
    }
  }, []);

  // Handle hash navigation - scroll instantly before transition completes
  useEffect(() => {
    if (!showHero) return;

    const hash = window.location.hash;
    if (hash) {
      // Immediately scroll to target position without smooth animation
      // This happens before page transition animation completes
      const element = document.querySelector(hash);
      if (element) {
        // Use instant scroll (no 'smooth' behavior)
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'instant'
        });
      }
    }
  }, [showHero]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {showHero ? (
        <>
          <Hero />
          <About />
          <Timeline />
          <ProjectsSection />
          <Skills />
          <PhotoWall />
          <Contact />
          <Footer />
        </>
      ) : (
        // Show placeholder to prevent layout shift
        <div className="min-h-screen" />
      )}
    </div>
  );
}
