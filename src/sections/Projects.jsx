import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Code, ArrowUpRight, BarChart3, HeartPulse, Terminal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';
import ProjectModal from '../components/ProjectModal';
import { personalData } from '../data/portfolioData';

// Custom visual icons for each project card header
const projectVisuals = {
  'marks-analyzer': {
    icon: BarChart3,
    gradient: 'from-blue-600/30 to-indigo-900/40',
    badge: 'Python • Analytics',
    illustrationColor: '#38bdf8'
  },
  'ml-predictor': {
    icon: HeartPulse,
    gradient: 'from-cyan-600/30 to-blue-900/40',
    badge: 'Scikit-Learn • AI',
    illustrationColor: '#22d3ee'
  },
  'c-banking-system': {
    icon: Terminal,
    gradient: 'from-slate-700/40 to-slate-900/60',
    badge: 'C Language • Algorithms',
    illustrationColor: '#60a5fa'
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PORTFOLIO HIGHLIGHTS"
          title="Featured Projects"
          subtitle="Real projects demonstrating practical problem solving in Python, Machine Learning, and C systems programming."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {personalData.projects.map((project, index) => {
            const visual = projectVisuals[project.id] || {
              icon: Code,
              gradient: 'from-blue-600/30 to-indigo-900/40',
              badge: project.category,
              illustrationColor: '#38bdf8'
            };
            const VisualIcon = visual.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <TiltCard className="h-full rounded-[24px] bg-[#111b2e] border border-white/10 hover:border-accent-blue/50 flex flex-col justify-between overflow-hidden group shadow-glow-card transition-colors duration-300">
                  {/* Card Image / Visual Header */}
                  <div className={`relative h-48 w-full bg-gradient-to-br ${visual.gradient} border-b border-white/5 overflow-hidden flex items-center justify-center`}>
                    {/* Abstract Grid background */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

                    {/* Central Icon / Graphic */}
                    <div className="relative flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
                      <div className="p-4 rounded-2xl bg-[#0a0f1c]/80 border border-white/10 shadow-2xl backdrop-blur-md">
                        <VisualIcon className="w-10 h-10" style={{ color: visual.illustrationColor }} />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-slate-300 mt-2 bg-[#0a0f1c]/60 px-2.5 py-0.5 rounded-full border border-white/5">
                        {visual.badge}
                      </span>
                    </div>

                    {/* Hover Overlay Button to open modal */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute inset-0 bg-[#070a14]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-semibold text-xs tracking-wider uppercase transition-opacity duration-300 cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-accent-cyan font-mono text-[11px] font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-sky-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#0a0f1c] text-sky-300 border border-sky-900/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                        >
                          Details & Architecture
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} source on GitHub`}
                            className="p-2 rounded-xl bg-[#0a0f1c] hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 transition-all hover:scale-105"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title} live preview`}
                            className="p-2 rounded-xl bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 hover:from-accent-blue/40 hover:to-accent-cyan/40 text-accent-cyan border border-accent-blue/30 transition-all hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

