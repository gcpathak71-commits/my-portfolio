import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, FileText, Award, GraduationCap, Briefcase } from 'lucide-react';
import { profileData } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
          {/* Main Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Header / Controls */}
            <div className="p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white">Interactive Resume</h3>
                  <p className="text-xs text-slate-400">View, download, or print Anurag Pathak's professional credentials</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  id="print-resume-modal-btn"
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-md shadow-blue-500/10 hover:scale-[1.02]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  id="close-resume-modal-btn"
                  onClick={onClose}
                  className="p-2.5 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white transition-all duration-200"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-slate-900/50">
              
              {/* Document Container */}
              <div className="bg-slate-950 border border-slate-850 p-6 md:p-10 rounded-2xl shadow-inner max-w-3xl mx-auto space-y-8 text-slate-300">
                
                {/* Resume Header */}
                <div className="text-center md:text-left md:flex justify-between items-start border-b border-slate-800 pb-6 gap-6">
                  <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-display font-black text-white">{profileData.name}</h1>
                    <p className="text-blue-400 font-mono text-sm uppercase tracking-wider font-semibold">
                      {profileData.title}
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 mt-2 font-mono">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-blue-400" />
                        {profileData.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        {profileData.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        Lucknow, India
                      </span>
                    </div>
                  </div>

                  {/* Right side contact links */}
                  <div className="flex flex-col items-center md:items-end gap-1.5 mt-4 md:mt-0 text-xs font-mono text-slate-400">
                    <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                      <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                      linkedin.com/in/anurag-pathak
                    </a>
                    <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                      <Github className="w-3.5 h-3.5 text-blue-400" />
                      github.com/gcpathak71-commits
                    </a>
                    <a href={profileData.leetcode} target="_blank" rel="noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      leetcode.com/u/ggPhbYcM8M
                    </a>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-3">
                  <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-1.5 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    Professional Summary
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed text-justify font-sans">
                    {profileData.summary}
                  </p>
                </div>

                {/* Education Section */}
                <div className="space-y-3">
                  <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-1.5 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {profileData.education.map((edu) => (
                      <div key={edu.id} className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-display font-bold text-sm text-white">{edu.degree}</h3>
                          <p className="text-xs text-slate-400 font-sans mt-0.5">{edu.institution}</p>
                          {edu.grade && (
                            <p className="text-xs text-blue-400 font-mono mt-1 font-semibold">{edu.grade}</p>
                          )}
                        </div>
                        <span className="text-xs font-mono text-slate-400 whitespace-nowrap">{edu.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills Section */}
                <div className="space-y-3">
                  <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-1.5 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.skills.map((category, idx) => (
                      <div key={idx} className="space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-300">{category.category}:</h4>
                        <p className="text-xs font-sans text-slate-400 leading-relaxed">
                          {category.skills.map(s => s.name).join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects Section */}
                <div className="space-y-3">
                  <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-1.5 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    Key Projects
                  </h2>
                  <div className="space-y-4">
                    {profileData.projects.map((proj) => (
                      <div key={proj.id} className="space-y-1.5">
                        <div className="flex justify-between items-start gap-4 flex-wrap">
                          <div>
                            <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
                              {proj.title}
                              <span className="text-xs font-sans font-normal text-slate-400">— {proj.subtitle}</span>
                            </h3>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-1 flex-wrap">
                              <span className="text-blue-400">{proj.techStack.join(' | ')}</span>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-slate-400">{proj.year}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">{proj.description}</p>
                        <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-0.5 font-sans pl-2">
                          {proj.features.slice(0, 2).map((feature, fIdx) => (
                            <li key={fIdx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Certifications</h4>
                    <ul className="space-y-1.5 text-xs text-slate-400 pl-1">
                      {profileData.certifications.slice(0, 3).map((cert, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <strong className="text-slate-300">{cert.name}</strong> ({cert.issuer}, {cert.year})
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Achievements</h4>
                    <ul className="space-y-1.5 text-xs text-slate-400 pl-1">
                      {profileData.achievements.slice(0, 3).map((ach, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <strong className="text-slate-300">{ach.title}</strong> — {ach.organization} ({ach.year})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* HIDDEN PRINT-ONLY CONTAINER (Fully styled with elegant layout on print) */}
          <div id="resume-print-root" className="hidden print:block">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #1e293b', paddingBottom: '12px', marginBottom: '16px' }}>
              <div>
                <h1 style={{ fontSize: '24pt', fontWeight: 'bold', margin: '0 0 4px 0', color: '#0f172a' }}>{profileData.name}</h1>
                <p style={{ fontSize: '12pt', color: '#2563eb', fontWeight: 'semibold', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0' }}>
                  {profileData.title}
                </p>
                <p style={{ fontSize: '10pt', color: '#475569', margin: '0' }}>
                  📞 {profileData.phone} | ✉️ {profileData.email} | 📍 Lucknow, India
                </p>
              </div>
              <div style={{ fontSize: '9pt', color: '#475569', textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span>🔗 linkedin.com/in/anurag-pathak-b86a302a9</span>
                <span>🔗 github.com/gcpathak71-commits</span>
                <span>🔗 leetcode.com/u/ggPhbYcM8M</span>
              </div>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '11pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #94a3b8', paddingBottom: '3px', margin: '0 0 8px 0', color: '#1e293b' }}>
                Professional Summary
              </h2>
              <p style={{ fontSize: '9.5pt', color: '#334155', margin: '0', textAlign: 'justify', lineHeight: '1.4' }}>
                {profileData.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '11pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #94a3b8', paddingBottom: '3px', margin: '0 0 8px 0', color: '#1e293b' }}>
                Technical Skills
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {profileData.skills.map((cat, idx) => (
                  <p key={idx} style={{ fontSize: '9.5pt', color: '#334155', margin: '0' }}>
                    <strong style={{ color: '#0f172a' }}>{cat.category}:</strong> {cat.skills.map(s => s.name).join(', ')}
                  </p>
                ))}
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '11pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #94a3b8', paddingBottom: '3px', margin: '0 0 8px 0', color: '#1e293b' }}>
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {profileData.education.map((edu) => (
                  <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '10pt', fontWeight: 'bold', margin: '0', color: '#0f172a' }}>{edu.degree}</h3>
                      <p style={{ fontSize: '9pt', color: '#475569', margin: '2px 0 0 0' }}>{edu.institution}</p>
                      {edu.grade && <p style={{ fontSize: '9pt', color: '#2563eb', fontWeight: '600', margin: '2px 0 0 0' }}>{edu.grade}</p>}
                    </div>
                    <span style={{ fontSize: '9pt', color: '#475569', fontWeight: '600' }}>{edu.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '11pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #94a3b8', paddingBottom: '3px', margin: '0 0 8px 0', color: '#1e293b' }}>
                Key Projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {profileData.projects.map((proj) => (
                  <div key={proj.id} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ fontSize: '10pt', fontWeight: 'bold', margin: '0', color: '#0f172a' }}>
                        {proj.title} <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '9pt' }}>— {proj.subtitle}</span>
                      </h3>
                      <span style={{ fontSize: '9pt', color: '#475569', fontWeight: '600' }}>{proj.year}</span>
                    </div>
                    <p style={{ fontSize: '8.5pt', color: '#2563eb', margin: '0', fontWeight: '500' }}>
                      Technologies: {proj.techStack.join(', ')}
                    </p>
                    <p style={{ fontSize: '9pt', color: '#334155', margin: '2px 0 0 0', textAlign: 'justify' }}>
                      {proj.description}
                    </p>
                    <ul style={{ margin: '2px 0 0 0', paddingLeft: '16px', fontSize: '8.5pt', color: '#475569' }}>
                      {proj.features.map((feature, fIdx) => (
                        <li key={fIdx} style={{ margin: '1px 0' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '10.5pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #94a3b8', paddingBottom: '3px', margin: '0 0 8px 0', color: '#1e293b' }}>
                  Certifications
                </h2>
                <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '8.5pt', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {profileData.certifications.map((cert, idx) => (
                    <li key={idx}>
                      <strong style={{ color: '#0f172a' }}>{cert.name}</strong> ({cert.issuer}, {cert.year})
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 style={{ fontSize: '10.5pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #94a3b8', paddingBottom: '3px', margin: '0 0 8px 0', color: '#1e293b' }}>
                  Achievements
                </h2>
                <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '8.5pt', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {profileData.achievements.map((ach, idx) => (
                    <li key={idx}>
                      <strong style={{ color: '#0f172a' }}>{ach.title}</strong> — {ach.organization} ({ach.year})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
