import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Wrench,
  Terminal,
  Database,
  Layout,
  Table,
  BarChart3,
  Cpu,
  GitBranch,
  Layers,
  BookOpen,
  TerminalSquare
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

function SkillGroupCard({ title, icon: IconHeader, skills, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-[24px] bg-[#111b2e] border border-white/10 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent-blue/50 hover:shadow-[0_15px_35px_-10px_rgba(79,142,247,0.3)] backdrop-blur-xl flex flex-col justify-between"
    >
      {/* Subtle corner light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl group-hover:bg-accent-blue/20 transition-all pointer-events-none" />

      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 border border-accent-blue/30 text-accent-cyan shadow-sm">
            <IconHeader className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            <span className="text-[11px] font-mono text-slate-400">Core Competencies</span>
          </div>
        </div>

        {/* Skill Items */}
        <div className="space-y-4">
          {skills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                  </div>
                  <span className="font-mono text-accent-cyan text-xs font-semibold">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-2 w-full rounded-full bg-[#0a0f1c] overflow-hidden p-[2px] border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: delay + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-blue via-sky-400 to-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  />
                </div>

                <div className="text-[11px] text-slate-400 pl-5">
                  {skill.experience}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pill summary tag at bottom */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Verified Proficiency</span>
        <span className="text-accent-cyan">Active Practice</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TECHNICAL ARSENAL"
          title="Skills & Technologies"
          subtitle="A solid foundation in programming paradigms, modern data pipelines, and machine learning architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillGroupCard
            title="Languages"
            icon={Code2}
            skills={personalData.skills.languages}
            delay={0}
          />
          <SkillGroupCard
            title="AI & Machine Learning"
            icon={Brain}
            skills={personalData.skills.aiml}
            delay={0.15}
          />
          <SkillGroupCard
            title="Tools & Workflows"
            icon={Wrench}
            skills={personalData.skills.tools}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

