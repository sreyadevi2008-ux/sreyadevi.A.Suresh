import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useScrollSpy } from './hooks/useScrollSpy';

// Global & Common Components
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Section Views
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0f1c] text-slate-100 overflow-x-hidden selection:bg-accent-blue/30 selection:text-white">
      {/* Dynamic Cursor Follower for Desktop */}
      <CustomCursor />

      {/* Top Gradient Scroll Progress Bar */}
      <ScrollProgress />

      {/* Interactive Constellation / Particle Canvas */}
      <NeuralBackground />

      {/* Sticky Blurred Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Single-Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

