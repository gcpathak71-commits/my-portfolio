import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen, Briefcase, ChevronRight, FileDown, Trophy } from 'lucide-react';
import { profileData } from '../data';

interface TimelineProps {
  onOpenResume: () => void;
}

export default function Timeline({ onOpenResume }: TimelineProps) {
  const [activeTab, setActiveTab] = useState<"academic" | "certifications">("academic");

  return (
    <section id="timeline" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>04 / EXPERIENCE & EDUCATION</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            My Journey & <span className="text-blue-400">Credentials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-sans mt-4"
          >
            Chronological log of my engineering studies, certified learning pathways, hackathons, and technical accomplishments.
          </motion.p>
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80 flex items-center">
            <button
              id="timeline-tab-academic"
              onClick={() => setActiveTab("academic")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "academic"
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Work</span>
            </button>
            <button
              id="timeline-tab-certifications"
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "certifications"
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certs & Achievements</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "academic" ? (
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-1/2 before:w-[1px] before:bg-slate-850">
              
              {/* B.Tech Graduation */}
              {profileData.education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Indicator on vertical axis */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center z-10">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Card Content container */}
                  <div className={`pl-12 sm:pl-0 w-full sm:w-[45%] ${
                    idx % 2 === 0 ? 'sm:pr-8 text-left sm:text-right' : 'sm:pl-8'
                  }`}>
                    <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-blue-500/20 transition-all duration-300">
                      <div className={`flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-400 mb-2 ${
                        idx % 2 === 0 ? 'justify-start sm:justify-end' : ''
                      }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.duration}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-bold text-white leading-tight">{edu.degree}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2">{edu.institution}</p>
                      {edu.grade && (
                        <span className="inline-block px-2.5 py-1 bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold rounded-lg mt-4 font-mono">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Summer Internship in Academic Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col sm:flex-row items-start sm:flex-row-reverse"
              >
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center z-10">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                </div>

                <div className="pl-12 sm:pl-0 w-full sm:w-[45%] sm:pr-8 text-left sm:text-right">
                  <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 mb-2 justify-start sm:justify-end">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Summer 2025</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white leading-tight">Summer Internship in AIML</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2">SRDT Pvt. Ltd.</p>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2">
                      Focused on training and deploying real-world machine learning classifiers and natural language processing (NLP) parsers.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications Card Container */}
              <div className="space-y-6">
                <h3 className="text-lg font-display font-extrabold text-white flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-blue-400" />
                  Official Certifications
                </h3>
                {profileData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-5 rounded-2xl border-slate-800 hover:border-blue-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm sm:text-base font-display font-bold text-white leading-tight">{cert.name}</h4>
                        <p className="text-xs font-sans text-slate-400 mt-1">{cert.issuer}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-semibold text-blue-400 whitespace-nowrap">
                        {cert.year}
                      </span>
                    </div>
                    {cert.details && (
                      <p className="text-xs text-slate-500 font-sans mt-3 border-t border-slate-900 pt-2.5 leading-relaxed">
                        {cert.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Achievements Card Container */}
              <div className="space-y-6">
                <h3 className="text-lg font-display font-extrabold text-white flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-indigo-400" />
                  Achievements & Wins
                </h3>
                {profileData.achievements.map((ach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-5 rounded-2xl border-slate-800 hover:border-indigo-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm sm:text-base font-display font-bold text-white leading-tight">{ach.title}</h4>
                        <p className="text-xs font-sans text-slate-400 mt-1">{ach.organization}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-semibold text-indigo-400 whitespace-nowrap">
                        {ach.year}
                      </span>
                    </div>
                    {ach.details && (
                      <p className="text-xs text-slate-500 font-sans mt-3 border-t border-slate-900 pt-2.5 leading-relaxed">
                        {ach.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Download CV Call to Action banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 glass-card p-6 sm:p-8 rounded-2xl border-slate-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-display font-bold text-white">Need a copy of my Resume?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Download the comprehensive PDF resume containing all contact credentials.
            </p>
          </div>
          <button
            id="download-resume-timeline-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>Open & Save Resume (PDF)</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
