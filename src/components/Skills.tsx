import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Database, TrendingUp, Laptop, Check } from 'lucide-react';
import { profileData } from '../data';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...profileData.skills.map(s => s.category)];

  const categoryIcons: Record<string, React.ReactNode> = {
    "Languages": <Terminal className="w-4 h-4" />,
    "Backend & CS Fundamentals": <Database className="w-4 h-4" />,
    "Machine Learning & Deep Learning": <Cpu className="w-4 h-4" />,
    "Data Analytics": <TrendingUp className="w-4 h-4" />,
    "Tools & Platforms": <Laptop className="w-4 h-4" />
  };

  const getFilteredSkills = () => {
    if (activeTab === "All") {
      return profileData.skills.flatMap(category => 
        category.skills.map(skill => ({ ...skill, category: category.category }))
      );
    }
    const cat = profileData.skills.find(s => s.category === activeTab);
    return cat ? cat.skills.map(skill => ({ ...skill, category: cat.category })) : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            <Cpu className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            My Dynamic <span className="text-blue-400">Technical Toolkit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-sans mt-4"
          >
            Highly-focused core expertise spanning from deep mathematical neural networks and data analytics, to low-level clean backend architectures.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              id={`skill-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
              key={category}
              onClick={() => setActiveTab(category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeTab === category
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.03]'
                  : 'bg-slate-900/40 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-700'
              }`}
            >
              {categoryIcons[category]}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          id="skills-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              key={`${skill.name}-${index}`}
              className="glass-card p-6 rounded-2xl border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold font-mono text-slate-400 uppercase tracking-wider text-xs bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    {skill.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Fast Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 glass-card p-6 rounded-2xl border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-display font-bold text-base">Continuous Learning & Adapting</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Constantly expanding horizons through hackathons, simulated job roles, and advanced vendor certifications.
              </p>
            </div>
          </div>
          <button
            id="view-certifications-btn"
            onClick={() => {
              const target = document.querySelector('#timeline');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-5 py-2.5 bg-slate-900 border border-slate-800 text-xs font-semibold tracking-wider text-slate-300 uppercase rounded-xl hover:text-white hover:border-slate-700 hover:bg-slate-900/80 transition-all cursor-pointer whitespace-nowrap"
          >
            View Certifications
          </button>
        </motion.div>

      </div>
    </section>
  );
}
