import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for detection
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div id="root-app" className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Premium Sticky Navbar with current section hook */}
      <Navbar activeSection={activeSection} onOpenResume={handleOpenResume} />

      {/* Main Container Layout */}
      <main id="main-content">
        {/* Animated Hero Section with Speaking Avatar and Resume Opener */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Informative About Section */}
        <About />

        {/* Dynamic Skills Panel */}
        <Skills />

        {/* Projects / Case Studies Showcase */}
        <Projects />

        {/* Interactive Academic & Achievement Timeline */}
        <Timeline onOpenResume={handleOpenResume} />

        {/* Secure Contact & Connect Form */}
        <Contact />
      </main>

      {/* Styled Footer with Back to Top */}
      <Footer />

      {/* Interactive Resume Modal Layer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

