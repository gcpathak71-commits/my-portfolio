import React from 'react';
import { ArrowUp, Github, Linkedin, Code } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-8 mb-8">
          {/* Logo / Brand Name */}
          <div className="text-center md:text-left">
            <span className="font-display font-extrabold text-lg text-white">
              Anurag<span className="text-blue-400 font-medium">Pathak</span>
            </span>
            <p className="text-xs text-slate-500 font-sans mt-1">B.Tech Student in Artificial Intelligence & Machine Learning</p>
          </div>

          {/* Centered Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-semibold tracking-wider font-mono text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
            <a href="#timeline" className="hover:text-blue-400 transition-colors">TIMELINE</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-btn"
              href="https://github.com/gcpathak71-commits"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              title="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-linkedin-btn"
              href="https://linkedin.com/in/anurag-pathak-b86a302a9"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              id="footer-leetcode-btn"
              href="https://leetcode.com/u/ggPhbYcM8M/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              title="LeetCode"
            >
              <Code className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Lower Row: copyright, scroll-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-slate-500 font-sans">
            &copy; {year} Anurag Pathak. All Rights Reserved. Prepared for production deployment on Vercel.
          </p>

          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-850 text-xs font-semibold text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
