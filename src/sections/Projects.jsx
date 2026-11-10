import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  HeartPulse,
  Terminal,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { personalData } from '../data/portfolioData';

const projectVisuals = {
  'marks-analyzer': {
    icon: BarChart3,
    gradient: 'from-violet-600/30 via-indigo-900/40 to-[#070d1e]',
    badge: 'Python • Data Analytics',
    accentColor: '#38bdf8',
    previewType: 'chart'
  },
  'ml-predictor': {
    icon: HeartPulse,
    gradient: 'from-cyan-600/30 via-blue-900/40 to-[#070d1e]',
    badge: 'Machine Learning • Scikit-Learn',
    accentColor: '#22d3ee',
    previewType: 'ml'
  },
  'c-banking-system': {
    icon: Terminal,
    gradient: 'from-purple-600/30 via-slate-900/40 to-[#070d1e]',
    badge: 'C Language • Algorithms',
    accentColor: '#a78bfa',
    previewType: 'terminal'
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FEATURED WORKS"
          title="Featured Bento Projects"
          subtitle="Real-world engineering challenges solved with clean algorithmic architectures, structured pipelines, and verified outcomes."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-12">
          {personalData.projects.map((project, index) => {
            const visual = projectVisuals[project.id] || {
              icon: FolderGit2,
              gradient: 'from-violet-600/30 to-[#070d1e]',
              badge: project.category,
              accentColor: '#38bdf8',
              previewType: 'chart'
            };
            const VisualIcon = visual.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-[28px] bg-[#0c1427]/80 border border-white/10 hover:border-violet-500/50 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* ── CARD VISUAL HEADER ── */}
                <div className={`relative h-48 w-full bg-gradient-to-br ${visual.gradient} border-b border-white/5 overflow-hidden flex items-center justify-center p-6`}>
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

                  {/* Central Graphic */}
                  <div className="relative flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500 ease-out z-10">
                    <div className="p-4 rounded-2xl bg-[#060c1c]/90 border border-white/10 shadow-2xl backdrop-blur-md">
                      <VisualIcon className="w-9 h-9" style={{ color: visual.accentColor }} />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-300 mt-2 bg-[#060c1c]/70 px-3 py-0.5 rounded-full border border-white/5">
                      {visual.badge}
                    </span>
                  </div>

                  {/* Top Highlight Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      Verified Model
                    </span>
                  </div>
                </div>

                {/* ── CARD BODY ── */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category & Title */}
                    <span className="text-cyan-400 font-mono text-[11px] font-semibold uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors mb-4">
                      {project.title}
                    </h3>

                    {/* ── STRUCTURED PROBLEM -> SOLUTION -> RESULT ── */}
                    <div className="space-y-3 mb-6">
                      
                      {/* Problem */}
                      <div className="p-3 rounded-2xl bg-[#131124]/70 border border-rose-500/20 text-xs">
                        <div className="flex items-center gap-1.5 text-rose-300 font-semibold mb-1">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                          <span>Problem</span>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          {project.problem || project.description}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-3 rounded-2xl bg-[#0c182d]/70 border border-cyan-500/20 text-xs">
                        <div className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-1">
                          <Lightbulb className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>Solution</span>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          {project.solution || project.longDescription}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="p-3 rounded-2xl bg-[#0d211d]/70 border border-emerald-500/20 text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>Result</span>
                        </div>
                        <p className="text-emerald-200 text-[11px] font-medium leading-relaxed">
                          {project.result || project.highlight}
                        </p>
                      </div>

                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-[#060a16] text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── ACTION BUTTONS: LIVE DEMO + GITHUB ── */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    {/* Live Demo Button */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transform hover:-translate-y-0.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#070b16] hover:bg-[#0f172a] border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white font-semibold text-xs transition-all transform hover:-translate-y-0.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
