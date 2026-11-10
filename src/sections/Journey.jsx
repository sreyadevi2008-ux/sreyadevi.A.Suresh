import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Code2,
  Brain,
  GraduationCap,
  Award,
  Terminal,
  ExternalLink,
  Laptop,
  Flame,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

export default function Journey() {
  const cards = [
    {
      id: 'portrait',
      colSpan: 'md:col-span-6 lg:col-span-5',
      height: 'h-[360px] sm:h-[420px]',
      title: 'Professional Portrait',
      tag: 'Identity & Vision',
      tagColor: 'border-violet-500/40 text-violet-300 bg-violet-950/40',
      caption: 'Dedicated to mastering AI foundations, algorithms, and practical engineering solutions.',
      isPortrait: true
    },
    {
      id: 'coding',
      colSpan: 'md:col-span-6 lg:col-span-7',
      height: 'h-[360px] sm:h-[420px]',
      title: 'Deep Work: Coding & Model Training',
      tag: 'Python & PyTorch',
      tagColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40',
      caption: 'Writing clean code, designing data pipelines, and implementing algorithmic problem solving.',
      isCode: true
    },
    {
      id: 'project-showcase',
      colSpan: 'md:col-span-6 lg:col-span-7',
      height: 'h-[340px] sm:h-[380px]',
      title: 'AI Model Benchmarks & Metrics',
      tag: 'Healthcare ML & Analytics',
      tagColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40',
      caption: '88% test accuracy classification model & automated GPA performance analyzers.',
      isProject: true
    },
    {
      id: 'college',
      colSpan: 'md:col-span-6 lg:col-span-5',
      height: 'h-[340px] sm:h-[380px]',
      title: 'Thejus Engineering College & Hackathons',
      tag: 'Thrissur, Kerala',
      tagColor: 'border-purple-500/40 text-purple-300 bg-purple-950/40',
      caption: 'Active participant in campus coding clubs, student AI workshops, and hackathon challenges.',
      isCollege: true
    }
  ];

  return (
    <section id="journey" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PHOTO BOARD & HIGHLIGHTS"
          title="My Journey in Tech"
          subtitle="A visual snapshot of my academic milestones, hands-on development sessions, and passion for Artificial Intelligence."
        />

        {/* Pinterest-Style Bento Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          {/* ── CARD 1: Professional Portrait ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 lg:col-span-5 group relative rounded-[28px] overflow-hidden border border-white/10 hover:border-violet-500/50 shadow-2xl transition-all duration-500 h-[380px] sm:h-[420px] bg-[#070b16]"
          >
            {/* Background Image with Zoom on Hover — Clean Face Crop */}
            <img
              src="/journey-portrait.jpg"
              alt="Sreya Devi"
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Tag Badge Top */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-violet-500/40 text-violet-300 bg-[#070d1e]/80 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-violet-400" />
                Identity & Vision
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                Sreya Devi
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                B.Tech CSE (Artificial Intelligence) Student at Thejus Engineering College, Thrissur.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 2: Coding & Development Session ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6 lg:col-span-7 group relative rounded-[28px] overflow-hidden border border-white/10 hover:border-cyan-500/50 shadow-2xl transition-all duration-500 h-[380px] sm:h-[420px] bg-[#091124] p-5 sm:p-7 flex flex-col justify-between"
          >
            {/* Animated Glow in Corner */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all" />

            {/* Top Bar with Tag and Live Status */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/40 text-cyan-300 bg-[#060c1c]/80 backdrop-blur-md">
                <Laptop className="w-3 h-3 text-cyan-400" />
                Deep Work • Python & C
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active Practice
              </span>
            </div>

            {/* Simulated Terminal / Code Snippet */}
            <div className="relative z-10 my-3 rounded-2xl bg-[#040814]/90 border border-white/10 p-4 font-mono text-xs sm:text-[13px] text-slate-300 shadow-inner overflow-hidden group-hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2 text-[11px] text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-slate-400">sreya_neural_net.py</span>
              </div>
              <p className="text-violet-400 font-semibold">import <span className="text-cyan-300">torch</span></p>
              <p className="text-slate-400">class <span className="text-amber-300 font-bold">HealthClassifier</span>(nn.Module):</p>
              <p className="pl-4 text-slate-300">def <span className="text-cyan-300">__init__</span>(self, features=12):</p>
              <p className="pl-8 text-slate-400">super().<span className="text-cyan-300">__init__</span>()</p>
              <p className="pl-8 text-cyan-200">self.layer = nn.Linear(features, 64)</p>
              <p className="pl-4 text-emerald-400 mt-1"># Test Accuracy: 88% verified</p>
            </div>

            {/* Bottom Caption */}
            <div className="z-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                Late Night Coding & Algorithmic Practice
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Translating mathematical concepts into optimized Python code, training machine learning models, and building memory-efficient C systems.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 3: Project Analytics & AI Benchmarks ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-7 group relative rounded-[28px] overflow-hidden border border-white/10 hover:border-emerald-500/50 shadow-2xl transition-all duration-500 h-[340px] sm:h-[380px] bg-[#091124] p-5 sm:p-7 flex flex-col justify-between"
          >
            {/* Soft Ambient Light */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-500/40 text-emerald-300 bg-[#060c1c]/80 backdrop-blur-md">
                <Brain className="w-3 h-3 text-emerald-400" />
                AI Model Metrics • 88% Accuracy
              </span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                Scikit-Learn & Pandas
              </span>
            </div>

            {/* Visual Analytics Representation */}
            <div className="relative z-10 my-2 grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#040814]/80 border border-white/5 backdrop-blur-md text-center">
                <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  88%
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1">Classification F1</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#040814]/80 border border-white/5 backdrop-blur-md text-center">
                <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  500+
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1">Records Evaluated</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#040814]/80 border border-white/5 backdrop-blur-md text-center">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  &lt;2ms
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1">Binary Search Speed</p>
              </div>
            </div>

            {/* Caption */}
            <div className="z-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                Real-World Problem Solving & Research
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Engineered end-to-end data pipelines for academic marks analytics and clinical disease risk prediction models.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 4: Thejus College & Hackathons ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-6 lg:col-span-5 group relative rounded-[28px] overflow-hidden border border-white/10 hover:border-purple-500/50 shadow-2xl transition-all duration-500 h-[340px] sm:h-[380px] bg-[#070b16] p-5 sm:p-7 flex flex-col justify-between"
          >
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0f24] to-[#050814]" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition-all" />

            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-purple-500/40 text-purple-300 bg-[#060c1c]/80 backdrop-blur-md">
                <GraduationCap className="w-3 h-3 text-purple-400" />
                Thejus Engineering College
              </span>
              <span className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300">
                <Award className="w-4 h-4" />
              </span>
            </div>

            {/* Milestone Badge */}
            <div className="z-10 my-2 p-4 rounded-2xl bg-[#05091a]/90 border border-purple-500/30 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Flame className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">B.Tech CSE (AI) • 2026-2030</h4>
                  <p className="text-xs text-purple-300 font-mono">Thrissur, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="z-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-purple-300 transition-colors">
                Hackathons & Campus Collaboration
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Active in technical symposiums, peer programming groups, and coding competitions across Kerala.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

