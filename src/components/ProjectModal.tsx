import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Terminal, Cpu, Calendar, ShieldCheck } from 'lucide-react';
import { Project } from '../data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          id="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          id={`modal-${project.id}`}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border-slate-800 rounded-2xl shadow-2xl z-10 custom-scrollbar flex flex-col"
        >
          {/* Header section with cover colored banner */}
          <div className="relative p-6 sm:p-8 border-b border-slate-900/80 flex items-start justify-between bg-slate-900/40">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
                  <Terminal className="w-3 h-3" />
                  {project.year}
                </span>
                <span className="text-xs font-mono text-slate-500">Case Study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">{project.title}</h3>
              <p className="text-sm sm:text-base text-blue-400 font-sans mt-1">{project.subtitle}</p>
            </div>
            
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Section */}
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Project Overview */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider font-mono">Project Overview</h4>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider font-mono">Key Features Implemented</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider font-mono">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs hover:border-blue-500/20 hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Actions Footer */}
          <div className="p-6 sm:p-8 border-t border-slate-900/80 bg-slate-950/80 flex flex-col sm:flex-row items-center gap-4 justify-between mt-auto">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-500" />
              Completed in {project.year}
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                id={`modal-github-${project.id}`}
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-center"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                id={`modal-live-${project.id}`}
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all text-center"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
