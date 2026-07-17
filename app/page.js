"use client";

import { useState, useEffect, useRef } from 'react';

// Import all components
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import SectionCounter from '@/components/SectionCounter';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // 👇 Ref to the scroll container
  const scrollContainerRef = useRef(null);

  const sectionIds = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'contact'];
  const sectionLabels = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'];

  // Track active section — NOW USING THE CONTAINER'S SCROLL
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const navHeight = 80;
      const scrollY = container.scrollTop + navHeight;

      let currentSection = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top - 10 && scrollY < top + height + 10) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    container.addEventListener('scroll', handleScroll);
    // Run once on mount
    setTimeout(handleScroll, 100);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Track scroll progress — ALSO USING THE CONTAINER
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const docHeight = container.scrollHeight - container.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollTo({
          top: element.offsetTop - 20,
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* ===== FULL-PAGE WAVE BACKGROUND ===== */}
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* ===== SCROLL PROGRESS BAR ===== */}
      <ScrollProgress scrollProgress={scrollProgress} />

      {/* ===== SECTION COUNTER ===== */}
      <SectionCounter sectionIds={sectionIds} activeSection={activeSection} />

      {/* ===== NAVIGATION ===== */}
      <Navigation
        sectionIds={sectionIds}
        sectionLabels={sectionLabels}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* ===== SNAP SCROLL CONTAINER ===== */}
      <div
        ref={scrollContainerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      >
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}