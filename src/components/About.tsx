import React from 'react';
import { motion } from 'motion/react';
import { User, BookOpen, Brain, Code, Award, GraduationCap } from 'lucide-react';
import { profileData } from '../data';

export default function About() {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      title: "AI & ML Focused",
      description: "Hands-on expertise in building neural networks (ANN, RNN, LSTM, CNN), NLP applications, and deploying real-world predictive modeling workflows."
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Backend Specialist",
      description: "Proficient in Python and Flask REST APIs, data structures & algorithms (DSA), and relational SQLite3 and Firebase backends."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: "Academic Excellence",
      description: "Final-year B.Tech Student in AIML at Shri Ramswaroop Memorial College with a 74.68% academic performance."
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      title: "Certified Practitioner",
      description: "AWS ML & AI Foundations certified, Oracle Cloud Infrastructure Associate, and GDG CodeRush Hackathon winner."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            <User className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Engineering Intelligent & <span className="text-blue-400">Scalable Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-sans mt-4"
          >
            Get to know my professional background, core technical focus areas, and dedication to code craftsmanship.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text / Story */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border-slate-800 relative group overflow-hidden"
            >
              {/* Corner decorative light */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                My Story & Ambition
              </h3>
              
              <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                As a final-year B.Tech student in Artificial Intelligence and Machine Learning, I have dedicated myself to bridging the gap between mathematical machine learning research and practical software engineering. My journey began with core Python development and quickly evolved into training deep neural architectures and engineering reliable, RESTful backends.
              </p>
              
              <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base mt-4">
                I thrive on solving complex backend problems, optimizing ML modeling pipelines, and integrating natural language models (like Google Vertex AI & Gemini) into reactive real-time applications. Whether it's organizing tabular booking logic or structuring academic predictions, my focus is always on high-contrast usability, speed, and complete clean code.
              </p>

              <div className="pt-6 border-t border-slate-800/80 mt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Location</div>
                  <div className="text-sm font-semibold text-white mt-1">Lucknow, India</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Interests</div>
                  <div className="text-sm font-semibold text-white mt-1">NLP, DL, APIs & Cloud</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border-slate-800 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-base font-display font-bold text-white mt-4">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
