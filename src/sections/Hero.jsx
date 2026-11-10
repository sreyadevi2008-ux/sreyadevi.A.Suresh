import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, FolderGit2 } from 'lucide-react';
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

LOCATION: ${personalData.contact.location}
TIMEZONE: ${personalData.contact.timezone}

PROFILE SUMMARY
${personalData.fullBio}

EDUCATION
1. B.Tech Computer Science & Engineering (Artificial Intelligence)
   Thejus Engineering College, Thrissur | 2026 - 2030 (1st Year)
2. Higher Secondary Education (Class XII - Bio Science)
   Kerala State Board | 95%+ Distinction
   Subjects: Physics, Chemistry, Biology, Mathematics, English

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
      className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              HELLO, WORLD! I'M
            </span>
          </div>

          {/* Big bold name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-4">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Sreya Devi
            </span>
          </h1>

          {/* Rotating / Typing Role text */}
          <div className="h-10 sm:h-14 mb-5 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="inline-block w-1 h-7 sm:h-10 bg-cyan-400 ml-1.5 animate-pulse rounded-full" />
          </div>

          {/* Subtitle / Bio */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-7 font-normal">
            B.Tech CSE (Artificial Intelligence) Student | Exploring AI, Machine Learning & Software Development.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-9">
            {["Python", "C Programming", "AI & ML"].map((chip, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#0f172a]/90 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all hover:border-cyan-400 hover:scale-105 backdrop-blur-md"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            {/* View Projects Button */}
            <MagneticButton>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 ml-0.5" />
              </a>
            </MagneticButton>

            {/* Download Resume Button */}
            <MagneticButton>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-cyan-400/50 text-slate-100 font-semibold text-sm sm:text-base backdrop-blur-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                <span>Download Resume</span>
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
