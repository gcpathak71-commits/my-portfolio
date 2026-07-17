import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Search, ArrowUpRight, Github, ExternalLink, SlidersHorizontal, Terminal, Code } from 'lucide-react';
import { profileData, Project } from '../data';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "Machine Learning", "Backend / API", "Mobile / Firebase"];

  const getProjectCategory = (project: Project): string => {
    const tech = project.techStack.map(t => t.toLowerCase());
    if (tech.includes("vertex ai + gemini") || tech.includes("scikit-learn") || tech.includes("tensorflow")) {
      return "Machine Learning";
    }
    if (tech.includes("flask") || tech.includes("sqlite3") || tech.includes("rest api")) {
      return "Backend / API";
    }
    return "Mobile / Firebase";
  };

  const filteredProjects = profileData.projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const category = getProjectCategory(project);
    const matchesFilter = selectedFilter === "All" || category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/60">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 / PORTFOLIO CASE STUDIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white"
          >
            Production-Ready <span className="text-blue-400">AI & Web Applications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 font-sans mt-4"
          >
            Explore real functional repositories featuring machine learning recommenders, academic prediction systems, and secure semantic matching engines.
          </motion.p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="glass-card p-6 rounded-2xl border-slate-800/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 mr-2 shrink-0 hidden sm:block" />
            {filters.map(filter => (
              <button
                id={`project-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'bg-transparent text-slate-400 border border-transparent hover:text-white hover:border-slate-850'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="project-search-input"
              type="text"
              placeholder="Search by tech stack, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            id="projects-grid"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 bg-slate-900/30"
              >
                <div className="p-6 space-y-4">
                  {/* Category & Year Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2.5 py-1 rounded">
                      {getProjectCategory(project)}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{project.year}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1 leading-relaxed">{project.subtitle}</p>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Interactive Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-900 border border-slate-850/60 rounded text-[10px] sm:text-xs text-slate-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-slate-900 border border-slate-850/60 rounded text-[10px] sm:text-xs text-slate-500 font-mono">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="p-6 border-t border-slate-900 bg-slate-950/40 flex items-center justify-between gap-4 mt-auto">
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      id={`project-card-github-${project.id}`}
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                      title="View GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      id={`project-card-live-${project.id}`}
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center p-12 glass-card rounded-2xl border-slate-800">
            <p className="text-slate-400 font-sans text-sm sm:text-base">No projects matched your search or selected filter.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedFilter("All"); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Rendering Project modal if selected */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
