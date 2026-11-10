import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, FolderGit2, Brain, Cpu } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const heroRoles = [
    "Aspiring AI Engineer",
    "Machine Learning Enthusiast",
    "Python Developer"
  ];

  // Rotating / Typing role state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const resumeContent = `
======================================================
                  SREYA DEVI
    B.Tech CSE (Artificial Intelligence) Student
  Thejus Engineering College, Thrissur, Kerala, India
======================================================

CONTACT
Email: ${personalData.contact.email}
Location: ${personalData.contact.location}
Timezone: ${personalData.contact.timezone}

PROFILE SUMMARY
${personalData.fullBio}

EDUCATION
1. B.Tech Computer Science & Engineering (Artificial Intelligence)
   Thejus Engineering College, Thrissur | 2026 - 2030 (1st Year)
2. Higher Secondary Education (Class XII - Science & CS)
   Kerala State Board | 95%+ Distinction

TECHNICAL SKILLS
- Languages: Python, C Programming, SQL, HTML/CSS
- AI & Data Science: Machine Learning Foundations, NumPy, Pandas, Matplotlib
- Tools: Git, GitHub, VS Code, Jupyter Notebooks, Linux CLI

FEATURED PROJECTS
1. Student Academic Performance Analyzer (Python, Pandas, Matplotlib)
2. Smart Healthcare Risk Prediction Model (Machine Learning, Scikit-Learn)
3. High-Performance Student Record Manager (C Language, Algorithms)

======================================================
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sreya_Devi_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[420px] h-[420px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-cyan-500/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ═══════════════════════════════════════════
               LEFT — HERO TEXT & CALL TO ACTIONS
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small uppercase eyebrow text */}
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
                HELLO, WORLD! I'M
              </span>
            </div>

            {/* Very large name */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04] mb-3">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Sreya Devi
              </span>
            </h1>

            {/* Typing Animation Role */}
            <div className="h-10 sm:h-14 mb-4 flex items-center">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="inline-block w-1 h-7 sm:h-10 bg-cyan-400 ml-1.5 animate-pulse rounded-full" />
            </div>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-6 font-normal">
              B.Tech CSE (Artificial Intelligence) Student | Exploring AI, Machine Learning & Software Development.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              {["Python", "C Programming", "AI & ML"].map((chip, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#0f172a]/90 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.12)] transition-all hover:border-cyan-400 hover:scale-105 backdrop-blur-md"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Two CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* View Projects (Gradient Purple) */}
              <MagneticButton>
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 ml-0.5" />
                </a>
              </MagneticButton>

              {/* Download Resume (Outline Glass) */}
              <MagneticButton>
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-cyan-400/50 text-slate-100 font-semibold text-sm sm:text-base backdrop-blur-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                  <span>Download Resume</span>
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════
               RIGHT — ARCH SHAPE PHOTO WITH FLOATING CARDS
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-[300px] sm:w-[340px] md:w-[380px] h-[440px] sm:h-[480px]">
              
              {/* Outer Glow Halo behind Arch */}
              <div className="absolute inset-0 rounded-t-[170px] sm:rounded-t-[190px] rounded-b-3xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 blur-2xl opacity-40 scale-105 pointer-events-none" />

              {/* Glowing Gradient Border Wrapper */}
              <div className="relative w-full h-full p-[2px] rounded-t-[170px] sm:rounded-t-[190px] rounded-b-3xl bg-gradient-to-tr from-violet-600 via-purple-500 to-cyan-400 shadow-[0_0_50px_rgba(139,92,246,0.35)]">
                
                {/* Arch Inner Card */}
                <div className="relative w-full h-full rounded-t-[168px] sm:rounded-t-[188px] rounded-b-[22px] overflow-hidden bg-[#070b16]">
                  
                  {/* Sreya's Photo with clean solid black background */}
                  <img
                    src="/profile.jpg"
                    alt="Sreya Devi"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                  />

                  {/* Bottom subtle gradient shadow for badge clarity */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050814]/90 via-[#050814]/40 to-transparent pointer-events-none" />

                  {/* Name Tag at bottom */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between z-10">
                    <div>
                      <p className="text-white font-bold text-sm tracking-wide">{personalData.name}</p>
                      <p className="text-cyan-400 text-xs font-mono font-medium mt-0.5">B.Tech CSE (AI)</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 flex items-center justify-center text-white text-xs font-extrabold shadow-lg">
                      SD
                    </div>
                  </div>
                </div>
              </div>

              {/* ░░ FLOATING CARD 1: "Available for Work" (Top-Left) ░░ */}
              <motion.div
                initial={{ opacity: 0, y: -10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -left-6 sm:-left-8 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0b1329]/90 border border-emerald-500/40 shadow-[0_8px_30px_rgba(16,185,129,0.2)] backdrop-blur-xl"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 text-xs font-semibold tracking-wide">Available for Work</span>
              </motion.div>

              {/* ░░ FLOATING CARD 2: "AI CORE" (Top-Right) ░░ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-5 -right-5 sm:-right-7 z-20 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600/90 to-purple-700/90 border border-violet-400/40 shadow-[0_8px_32px_rgba(139,92,246,0.4)] backdrop-blur-xl"
              >
                <Brain className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-extrabold tracking-wider">AI CORE</span>
              </motion.div>

              {/* ░░ FLOATING CARD 3: "PROJECTS 3+" (Bottom-Left) ░░ */}
              <motion.div
                initial={{ opacity: 0, x: -15, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute -bottom-5 -left-6 sm:-left-8 z-20 px-4 py-2.5 rounded-2xl bg-[#0b1329]/90 border border-cyan-500/40 shadow-[0_8px_32px_rgba(34,211,238,0.2)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-1.5 text-cyan-400 text-[11px] font-mono font-medium">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PROJECTS 3+</span>
                </div>
                <div className="text-slate-400 text-[10px] font-medium mt-0.5">Python • ML • C</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
