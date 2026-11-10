import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, FolderGit2, Brain, Cpu, Zap } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

/* ─── AI Futuristic keyframe styles ─── */
const aiStyles = `
  @keyframes scanline {
    0%   { top: -8%; opacity: 0.7; }
    100% { top: 108%; opacity: 0; }
  }
  @keyframes rotateCW  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
  @keyframes rotateCCW { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
  @keyframes dataStream {
    0%   { opacity: 0; transform: translateY(-20px); }
    20%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { opacity: 0; transform: translateY(20px); }
  }
  @keyframes holoPulse {
    0%, 100% { opacity: 0.4; box-shadow: 0 0 20px rgba(56,189,248,0.3); }
    50%       { opacity: 0.9; box-shadow: 0 0 40px rgba(56,189,248,0.7), 0 0 80px rgba(99,102,241,0.4); }
  }
  @keyframes cornerSpark {
    0%,100% { opacity:1; transform:scale(1);   }
    50%     { opacity:.4; transform:scale(1.6); }
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0px);   }
    50%     { transform: translateY(-8px);  }
  }
  @keyframes glitchBar {
    0%,96%   { opacity: 0; }
    97%      { opacity: 0.6; transform: translateX(-3px); }
    98%      { opacity: 0.4; transform: translateX(4px); }
    100%     { opacity: 0; }
  }
  .ai-scanline   { animation: scanline 3s linear infinite; }
  .ai-rotateCW   { animation: rotateCW  20s linear infinite; }
  .ai-rotateCCW  { animation: rotateCCW 14s linear infinite; }
  .ai-rotateCW2  { animation: rotateCW  32s linear infinite; }
  .ai-holo       { animation: holoPulse 2.5s ease-in-out infinite; }
  .ai-floatY     { animation: floatY 4s ease-in-out infinite; }
  .ai-glitch     { animation: glitchBar 5s linear infinite; }
  .ai-corner-tl  { animation: cornerSpark 1.4s ease-in-out infinite; }
  .ai-corner-tr  { animation: cornerSpark 1.4s ease-in-out infinite 0.35s; }
  .ai-corner-bl  { animation: cornerSpark 1.4s ease-in-out infinite 0.7s; }
  .ai-corner-br  { animation: cornerSpark 1.4s ease-in-out infinite 1.05s; }
  .data-row-1    { animation: dataStream 3.2s ease-in-out infinite; }
  .data-row-2    { animation: dataStream 3.2s ease-in-out infinite 1.1s; }
  .data-row-3    { animation: dataStream 3.2s ease-in-out infinite 2.1s; }
`;

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
      <style>{aiStyles}</style>
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

          {/* ═══════════════════════════════════════════
               RIGHT — AI Futuristic Profile Visual
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            {/* Root container — extra space for overlap cards */}
            <div className="relative ai-floatY" style={{ width: 320, height: 420 }}>

              {/* ░░ RING LAYER 1 — slow outer orbit ░░ */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="ai-rotateCW2"
                  style={{
                    width: 420, height: 420,
                    borderRadius: '50%',
                    border: '1px dashed rgba(99,102,241,0.18)',
                    position: 'absolute',
                  }}
                />
              </div>

              {/* ░░ RING LAYER 2 — mid orbit ░░ */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="ai-rotateCW"
                  style={{
                    width: 360, height: 360, borderRadius: '50%',
                    border: '1.5px solid rgba(56,189,248,0.15)',
                    position: 'absolute',
                  }}
                />
              </div>

              {/* ░░ RING LAYER 3 — inner reverse ░░ */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="ai-rotateCCW"
                  style={{
                    width: 300, height: 300, borderRadius: '50%',
                    border: '1px solid rgba(139,92,246,0.2)',
                    position: 'absolute',
                  }}
                />
              </div>

              {/* ░░ AMBIENT GLOW ░░ */}
              <div
                className="ai-holo"
                style={{
                  position: 'absolute', inset: 8,
                  borderRadius: 28,
                  background: 'radial-gradient(ellipse at 60% 40%, rgba(99,102,241,0.25) 0%, rgba(56,189,248,0.1) 60%, transparent 100%)',
                  filter: 'blur(18px)',
                }}
              />

              {/* ░░ MAIN PHOTO CARD ░░ */}
              <div
                style={{
                  position: 'absolute', inset: 0,
                  borderRadius: 28,
                  overflow: 'hidden',
                  border: '1.5px solid rgba(99,102,241,0.35)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.25), 0 0 0 1px rgba(56,189,248,0.08) inset',
                  background: '#070f1d',
                }}
              >
                {/* Profile image */}
                <img
                  src="/profile.jpg"
                  alt="Sreya Devi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />

                {/* AI scan line sweep */}
                <div
                  className="ai-scanline"
                  style={{
                    position: 'absolute', left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.0) 10%, rgba(56,189,248,0.7) 50%, rgba(99,102,241,0.7) 80%, transparent 100%)',
                    filter: 'blur(1px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Glitch bar */}
                <div
                  className="ai-glitch"
                  style={{
                    position: 'absolute', top: '35%', left: 0, right: 0, height: 2,
                    background: 'rgba(56,189,248,0.5)',
                    pointerEvents: 'none',
                  }}
                />

                {/* ── Corner HUD brackets ── */}
                {/* Top-left */}
                <div className="ai-corner-tl" style={{ position:'absolute', top:10, left:10, width:18, height:18, borderTop:'2px solid #38bdf8', borderLeft:'2px solid #38bdf8' }} />
                {/* Top-right */}
                <div className="ai-corner-tr" style={{ position:'absolute', top:10, right:10, width:18, height:18, borderTop:'2px solid #818cf8', borderRight:'2px solid #818cf8' }} />
                {/* Bottom-left */}
                <div className="ai-corner-bl" style={{ position:'absolute', bottom:10, left:10, width:18, height:18, borderBottom:'2px solid #38bdf8', borderLeft:'2px solid #38bdf8' }} />
                {/* Bottom-right */}
                <div className="ai-corner-br" style={{ position:'absolute', bottom:10, right:10, width:18, height:18, borderBottom:'2px solid #818cf8', borderRight:'2px solid #818cf8' }} />

                {/* ── Bottom glass HUD strip ── */}
                <div
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(4,12,24,0.95) 0%, rgba(4,12,24,0.6) 60%, transparent 100%)',
                    padding: '20px 16px 14px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <p style={{ color:'#fff', fontWeight:700, fontSize:13, letterSpacing:'0.05em', margin:0 }}>{personalData.name}</p>
                      <p style={{ color:'#38bdf8', fontSize:10, fontFamily:'monospace', marginTop:3, letterSpacing:'0.1em' }}>{personalData.roles[0]}</p>
                    </div>
                    {/* Mini waveform bars */}
                    <div style={{ display:'flex', alignItems:'flex-end', gap:2 }}>
                      {[6,10,7,13,9,5,11,8].map((h, i) => (
                        <div
                          key={i}
                          style={{
                            width: 3, height: h,
                            background: i % 2 === 0 ? '#38bdf8' : '#818cf8',
                            borderRadius: 2,
                            opacity: 0.7,
                            animation: `holoPulse ${0.6 + i * 0.1}s ease-in-out infinite`,
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ░░ FLOATING CARD — TOP LEFT: Available ░░ */}
              <motion.div
                initial={{ opacity: 0, y: -12, x: -8 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute', top: -18, left: -32, zIndex: 30,
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 14px',
                  borderRadius: 14,
                  background: 'rgba(6,20,42,0.92)',
                  border: '1px solid rgba(16,185,129,0.4)',
                  boxShadow: '0 4px 24px rgba(16,185,129,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span style={{ position:'relative', display:'flex', width:10, height:10 }}>
                  <span className="animate-ping" style={{ position:'absolute', inset:0, borderRadius:'50%', background:'#10b981', opacity:0.6 }} />
                  <span style={{ position:'relative', width:10, height:10, borderRadius:'50%', background:'#10b981', display:'block' }} />
                </span>
                <span style={{ color:'#34d399', fontSize:11, fontWeight:700, letterSpacing:'0.08em' }}>AVAILABLE FOR WORK</span>
              </motion.div>

              {/* ░░ FLOATING CARD — TOP RIGHT: AI Core ░░ */}
              <motion.div
                initial={{ opacity: 0, y: -12, x: 8 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute', top: -22, right: -28, zIndex: 30,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '10px 14px',
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.85) 0%, rgba(139,92,246,0.85) 100%)',
                  border: '1px solid rgba(167,139,250,0.5)',
                  boxShadow: '0 6px 32px rgba(99,102,241,0.45)',
                  backdropFilter: 'blur(10px)',
                  gap: 4,
                }}
              >
                <Brain size={18} color="#fff" />
                <span style={{ color:'#e0e7ff', fontSize:9, fontWeight:800, letterSpacing:'0.15em' }}>AI CORE</span>
              </motion.div>

              {/* ░░ FLOATING CARD — BOTTOM LEFT: Stats ░░ */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.15, duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute', bottom: -22, left: -30, zIndex: 30,
                  padding: '12px 16px',
                  borderRadius: 18,
                  background: 'rgba(6,20,42,0.92)',
                  border: '1px solid rgba(56,189,248,0.35)',
                  boxShadow: '0 8px 32px rgba(56,189,248,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:4 }}>
                  <Cpu size={12} color="#38bdf8" />
                  <span style={{ color:'#94a3b8', fontSize:9, letterSpacing:'0.1em', fontFamily:'monospace' }}>PROJECTS</span>
                </div>
                <p style={{ color:'#38bdf8', fontSize:22, fontWeight:900, lineHeight:1, margin:0 }}>3+</p>
                <div style={{ marginTop:5, height:2, width:40, borderRadius:2, background:'linear-gradient(90deg,#38bdf8,#818cf8)', opacity:0.7 }} />
              </motion.div>

              {/* ░░ FLOATING CARD — BOTTOM RIGHT: Tech Stack ░░ */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.25, duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute', bottom: -18, right: -28, zIndex: 30,
                  padding: '10px 12px',
                  borderRadius: 16,
                  background: 'rgba(6,20,42,0.92)',
                  border: '1px solid rgba(139,92,246,0.35)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.2)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex', flexDirection: 'column', gap: 5,
                }}
              >
                {[
                  { label: 'Python', color: '#fbbf24' },
                  { label: 'C Lang',  color: '#38bdf8' },
                  { label: 'AI / ML', color: '#a78bfa' },
                ].map(({ label, color }) => (
                  <div key={label} style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background:color, boxShadow:`0 0 6px ${color}` }} />
                    <span style={{ color:'#cbd5e1', fontSize:10, fontWeight:600, letterSpacing:'0.06em' }}>{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* ░░ FLOATING CARD — RIGHT MIDDLE: Live signal ░░ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.35, duration: 0.6 }}
                style={{
                  position: 'absolute', top: '38%', right: -44, zIndex: 30,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  padding: '8px 10px',
                  borderRadius: 12,
                  background: 'rgba(6,20,42,0.88)',
                  border: '1px solid rgba(56,189,248,0.25)',
                  boxShadow: '0 4px 20px rgba(56,189,248,0.15)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Zap size={12} color="#fbbf24" />
                <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
                  {['data-row-1','data-row-2','data-row-3'].map((cls, i) => (
                    <div key={i} className={cls} style={{ width:24, height:1.5, borderRadius:1, background: i===0 ? '#38bdf8' : i===1 ? '#818cf8' : '#10b981', opacity:0.9 }} />
                  ))}
                </div>
                <span style={{ color:'#64748b', fontSize:8, fontFamily:'monospace', letterSpacing:'0.08em' }}>LIVE</span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

