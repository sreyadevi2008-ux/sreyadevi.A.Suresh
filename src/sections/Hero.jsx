import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, FolderGit2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  // Rotating / Typing role state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalData.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
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
    // Generate a downloadable plain-text / printable resume for Sreya Devi
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
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Soft Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (matches reference screenshot styling exactly) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small cyan uppercase eyebrow text */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-accent-cyan font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                {personalData.eyebrow}
              </span>
            </div>

            {/* Large bold white name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-3">
              {personalData.name}
            </h1>

            {/* Rotating / Typing Role Heading */}
            <div className="h-10 sm:h-14 mb-4 flex items-center">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="inline-block w-1 h-7 sm:h-9 bg-accent-cyan ml-1.5 animate-pulse" />
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-6 font-normal">
              {personalData.shortBio}
            </p>

            {/* Skill tags as pill-shaped chips with dark blue background and blue text */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              {personalData.heroChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#0e172a] text-[#38bdf8] border border-sky-800/40 shadow-[0_0_12px_rgba(56,189,248,0.1)] transition-all hover:border-sky-500/60 hover:scale-105"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Two CTA Buttons: View Projects (filled) and Download Resume (outline) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Filled View Projects Button */}
              <MagneticButton>
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-glow-violet hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 ml-0.5" />
                </a>
              </MagneticButton>

              {/* Outline Download Resume Button */}
              <MagneticButton>
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#111b2e]/80 hover:bg-[#16233b] border border-accent-blue/40 hover:border-accent-cyan/60 text-slate-100 font-semibold text-sm sm:text-base backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-accent-cyan" />
                  <span>Download Resume</span>
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Visual Column: Profile Photo with glowing card */}
          {/* Right Visual Column — Modern Overlap UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            {/* Outer container with extra padding for overlapping cards */}
            <div className="relative w-72 sm:w-80 lg:w-96" style={{ height: '26rem' }}>

              {/* ── Decorative spinning rings ── */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[340px] h-[340px] rounded-full border border-violet-500/20 animate-[spin_18s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[290px] h-[290px] rounded-full border border-sky-400/15 animate-[spin_12s_linear_infinite_reverse]" />
              </div>

              {/* ── Deep glow behind card ── */}
              <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/30 via-sky-500/20 to-indigo-600/30 blur-2xl" />

              {/* ── Main Photo Card ── */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.3)] bg-[#070f1d]">
                <img
                  src="/profile.jpg"
                  alt="Sreya Devi"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040c18]/80 via-transparent to-transparent" />
              </div>

              {/* ── Floating card: TOP-LEFT — Available badge ── */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -top-4 -left-6 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0d1f38]/90 border border-emerald-500/30 shadow-[0_4px_24px_rgba(16,185,129,0.15)] backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 text-xs font-semibold tracking-wide">Available for work</span>
              </motion.div>

              {/* ── Floating card: TOP-RIGHT — AI badge ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-5 -right-6 z-20 flex flex-col items-center px-3 py-2.5 rounded-2xl bg-gradient-to-br from-violet-600/80 to-indigo-700/80 border border-violet-400/30 shadow-[0_4px_30px_rgba(139,92,246,0.4)] backdrop-blur-md"
              >
                <span className="text-2xl">🤖</span>
                <span className="text-white text-[10px] font-bold tracking-widest mt-0.5">AI & ML</span>
              </motion.div>

              {/* ── Floating card: BOTTOM-LEFT — Projects stat ── */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-5 -left-7 z-20 px-4 py-3 rounded-2xl bg-[#0d1f38]/90 border border-sky-500/30 shadow-[0_8px_32px_rgba(56,189,248,0.2)] backdrop-blur-md"
              >
                <p className="text-sky-400 text-xl font-extrabold leading-none">3+</p>
                <p className="text-slate-400 text-[10px] font-medium mt-1 tracking-wide">Projects Built</p>
              </motion.div>

              {/* ── Floating card: BOTTOM-RIGHT — Tech stack pill ── */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute -bottom-4 -right-6 z-20 flex flex-col gap-1.5 px-3 py-2.5 rounded-2xl bg-[#0d1f38]/90 border border-indigo-500/30 shadow-[0_8px_32px_rgba(99,102,241,0.2)] backdrop-blur-md"
              >
                {['Python', 'C', 'AI'].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/15 rounded-full px-2 py-0.5 text-center tracking-wide">
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* ── Name badge at photo bottom ── */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm tracking-wide drop-shadow">{personalData.name}</p>
                  <p className="text-accent-cyan text-[11px] font-mono mt-0.5 drop-shadow">{personalData.roles[0]}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-sky-400 flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">SD</span>
                </div>
              </div>

              {/* ── Decorative corner dots ── */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-sky-400 opacity-60 animate-pulse" />
              <div className="absolute bottom-10 left-6 w-1.5 h-1.5 rounded-full bg-violet-400 opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

