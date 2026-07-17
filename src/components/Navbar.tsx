import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Briefcase } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

export default function Navbar({ activeSection, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/70 border-b border-slate-800/50 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group font-display font-bold text-xl tracking-tight text-white"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
              <Terminal className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Anurag<span className="text-blue-400 font-medium">Pathak</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div id="desktop-menu" className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/30 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    id={`desktop-link-${link.name.toLowerCase()}`}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Social Icons / Quick Action */}
            <div className="flex items-center gap-3">
              <a
                id="social-nav-github"
                href="https://github.com/gcpathak71-commits"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-800/80 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="social-nav-linkedin"
                href="https://linkedin.com/in/anurag-pathak-b86a302a9"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-800/80 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                id="cta-nav-resume"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/30 rounded-full hover:bg-blue-500/10 hover:border-blue-500/60 transition-all duration-300 cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none border border-slate-800"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-container"
        className={`md:hidden absolute top-full left-0 right-0 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                id={`mobile-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 flex flex-col gap-3 px-4 border-t border-slate-850">
            <button
              id="mobile-nav-resume-btn"
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-white font-semibold text-left cursor-pointer"
            >
              <Briefcase className="w-4 h-4" /> View Resume
            </button>
            <div className="flex items-center gap-4">
              <a
                id="mobile-nav-github"
                href="https://github.com/gcpathak71-commits"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                id="mobile-nav-linkedin"
                href="https://linkedin.com/in/anurag-pathak-b86a302a9"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
