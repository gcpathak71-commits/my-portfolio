import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Github, Linkedin, Code, Sparkles, Terminal } from 'lucide-react';
// @ts-expect-error - Vite handles jpg imports at runtime
import anuragAvatar from '../assets/images/anurag_avatar_1784263663213.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const titles = [
    'AI & Machine Learning Engineer',
    'Python Backend Developer',
    'Deep Learning Practitioner',
    'RESTful API Designer'
  ];

  const [currentText, setCurrentText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[titleIndex];
      if (!isDeleting) {
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        if (currentText === fullTitle) {
          // Pause at end of text
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-slate-950"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-ambient-slow-1" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-ambient-slow-2" />

      {/* Grid Pattern overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status / Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mx-auto lg:mx-0"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" />
              <span>Available for Python Backend & ML Roles</span>
            </motion.div>

            {/* Title / Name */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl font-mono text-slate-400 tracking-wider"
              >
                Hi, my name is
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight"
              >
                Anurag <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 text-glow">Pathak</span>
              </motion.h1>

              {/* Dynamic Typing Title */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2.5"
              >
                <Terminal className="w-5 h-5 text-blue-400" />
                <span className="text-xl sm:text-2xl font-mono font-medium text-slate-300">
                  {currentText}
                  <span className="inline-block w-2.5 h-5 ml-1 bg-blue-500 animate-pulse" />
                </span>
              </motion.div>
            </div>

            {/* Short Bio Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Final-year B.Tech in AIML specialized in engineering robust RESTful backends, designing advanced deep learning pipelines, and deploying high-performance ML models.
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-2"
            >
              <div className="glass-card p-4 rounded-xl text-center border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">3+</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Core Projects</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">4+</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Certifications</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center border-slate-800">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">10+</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Achievements</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 glass-card border-slate-800 hover:border-blue-500/40 text-blue-400 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-slate-900/60 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume / PDF</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-slate-400 pt-2"
            >
              <span className="text-xs uppercase tracking-wider font-mono">Connect:</span>
              <a
                id="hero-social-github"
                href="https://github.com/gcpathak71-commits"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors p-1"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="hero-social-linkedin"
                href="https://linkedin.com/in/anurag-pathak-b86a302a9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors p-1"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                id="hero-social-leetcode"
                href="https://leetcode.com/u/ggPhbYcM8M/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors p-1 flex items-center gap-1 font-mono text-sm"
                title="LeetCode"
              >
                <Code className="w-5 h-5" />
                <span className="hidden sm:inline">LeetCode</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Visual Right - Profile & Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-90 md:h-90"
            >
              {/* Spinning Glow Ring */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-indigo-500/20 animate-spin" 
                style={{ animationDuration: '30s' }} 
              />
              <div className="absolute inset-4 rounded-full bg-slate-950 border border-slate-800/80 flex items-center justify-center overflow-hidden" />
              
              {/* Profile Image - beautiful colored, zooms on hover */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-800 flex items-center justify-center bg-slate-900 group">
                <img
                  id="profile-avatar-hero"
                  src={anuragAvatar}
                  onError={(e) => {
                    // Fallback to clean profile picture placeholder in case avatar is not found
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                  }}
                  alt="Anurag Pathak"
                  className="w-full h-full object-cover brightness-95 contrast-105 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech scan overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating tags */}
              <div className="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-2xl border-slate-800 flex items-center gap-2 animate-bounce" style={{ animationDuration: '4s' }}>
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-medium text-white">TensorFlow</span>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-2xl border-slate-800 flex items-center gap-2 animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-white">Python & Flask</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
