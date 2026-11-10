import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Terminal,
  Database,
  Layout,
  Table,
  BarChart3,
  Cpu,
  GitBranch,
  Layers,
  BookOpen,
  TerminalSquare,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

// Icon map helper
const iconMap = {
  Code2,
  Terminal,
  Database,
  Layout,
  Brain,
  Table,
  BarChart3,
  Cpu,
  GitBranch,
  Layers,
  BookOpen,
  TerminalSquare
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'aiml', label: 'AI & Data Science', icon: Brain },
    { id: 'tools', label: 'Tools & Workflows', icon: Layers },
  ];

  const skillGroups = [
    {
      id: 'languages',
      title: 'Programming Languages',
      badge: 'Core Foundation',
      icon: Code2,
      accent: 'from-violet-500 to-indigo-500',
      glowColor: 'rgba(139,92,246,0.3)',
      skills: personalData.skills.languages
    },
    {
      id: 'aiml',
      title: 'Artificial Intelligence & Data',
      badge: 'Specialization',
      icon: Brain,
      accent: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(34,211,238,0.3)',
      skills: personalData.skills.aiml
    },
    {
      id: 'tools',
      title: 'Tools & Development Ecosystem',
      badge: 'Productivity',
      icon: Layers,
      accent: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168,85,247,0.3)',
      skills: personalData.skills.tools
    }
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TECHNICAL ARSENAL"
          title="Skills & Capabilities"
          subtitle="A comprehensive toolkit spanning foundational programming, machine learning algorithms, and developer tooling."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105'
                    : 'bg-[#111b2e]/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/15 backdrop-blur-md'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {filteredGroups.map((group, groupIdx) => {
            const HeaderIcon = group.icon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
                className="group relative rounded-[28px] bg-[#0c1427]/80 border border-white/10 hover:border-violet-500/40 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Subtle Ambient Corner Glow */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                  style={{ background: group.glowColor }}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg`}>
                        <HeaderIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {group.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">{group.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Glowing Pill Badges & Progress Bars */}
                  <div className="space-y-4">
                    {group.skills.map((skill, skillIdx) => {
                      const Icon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skillIdx}
                          className="p-3 sm:p-3.5 rounded-2xl bg-[#070b16]/70 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group/pill"
                        >
                          <div className="flex items-center justify-between mb-2">
                            {/* Glowing Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111d38] border border-cyan-500/20 text-cyan-300 text-xs font-semibold shadow-[0_0_12px_rgba(34,211,238,0.12)] group-hover/pill:border-cyan-400 group-hover/pill:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                              <Icon className="w-3.5 h-3.5 text-cyan-300" />
                              <span>{skill.name}</span>
                            </div>

                            {/* Percentage */}
                            <span className="font-mono text-xs font-bold text-slate-300">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="h-2 w-full rounded-full bg-[#030611] overflow-hidden p-[1px] border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: groupIdx * 0.1 + skillIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                            />
                          </div>

                          {/* Experience note */}
                          <p className="text-[11px] text-slate-400 mt-1.5 font-normal">
                            {skill.experience}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card footer status */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Knowledge
                  </span>
                  <span className="text-cyan-400">B.Tech AI Curriculum</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
