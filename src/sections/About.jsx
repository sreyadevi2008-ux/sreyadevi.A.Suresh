import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, GraduationCap, MapPin, Sparkles, BookOpen, HeartHandshake, Compass } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ stat, index }) {
  const { count, start } = useCountUp(stat.value, 1600);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={start}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-4 sm:p-5 rounded-2xl bg-[#091124]/90 border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all group hover:-translate-y-1 shadow-lg"
    >
      <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-extrabold text-white">
        <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
          {count}
        </span>
        <span className="text-cyan-400 text-2xl font-bold">{stat.suffix}</span>
      </div>
      <div className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
      <div className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="Curious Mind, Driven by AI"
          subtitle="Combining engineering rigor with artificial intelligence curiosity at Thejus Engineering College, Thrissur."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Avatar & Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group">
              {/* Glowing gradient border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-accent-cyan via-accent-blue to-indigo-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Inner Avatar Card */}
              <div className="relative rounded-3xl bg-[#091124]/90 p-6 sm:p-7 border border-white/10 text-center flex flex-col items-center max-w-sm backdrop-blur-xl shadow-2xl">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#0e172a] border-2 border-violet-500/40 mb-4 shadow-2xl group-hover:border-cyan-400/50 transition-colors">
                  {/* Photo */}
                  <img
                    src="/profile.jpg"
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating decorative badge */}
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-[#070b16]/90 border border-cyan-400/40 shadow-md">
                    <BrainCircuit className="w-4 h-4 text-cyan-300 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">{personalData.name}</h3>
                <p className="text-xs font-mono text-cyan-300 mt-1 font-semibold">
                  {personalData.degree}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 w-full flex flex-col gap-2.5 text-xs text-slate-300 text-left">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span>{personalData.institution}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{personalData.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white font-semibold">{personalData.name}</strong>, a first-year undergraduate pursuing <span className="text-accent-cyan font-medium">B.Tech in Computer Science and Engineering (Artificial Intelligence)</span> at <strong className="text-slate-100">{personalData.institution}</strong> in Thrissur, Kerala.
              </p>
              <p>
                My passion lies at the intersection of mathematical reasoning, structured algorithms, and intelligent systems. Every day, I dive deep into writing clean Python and C code, experimenting with datasets, and understanding the core mechanics of machine learning models.
              </p>
              <p>
                Whether it's building analytical programs to unpack academic data or coding algorithms that run with maximum efficiency, I thrive on hands-on creation and continuous learning.
              </p>
            </div>

            {/* Core Values / Focus Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              <div className="p-3.5 rounded-xl bg-[#111b2e]/60 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-accent-blue">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-slate-200">
                  Algorithmic Thinking
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111b2e]/60 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-accent-cyan">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-slate-200">
                  Data & ML Exploration
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111b2e]/60 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-slate-200">
                  Continuous Growth
                </div>
              </div>
            </div>

            {/* Stats Cards Grid with Count-up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {personalData.stats.map((stat, i) => (
                <StatItem key={i} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

