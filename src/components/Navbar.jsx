import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0f1c]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white"
          >
            <span className="relative font-mono font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent group-hover:to-accent-cyan transition-all">
              {personalData.logoText}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#22d3ee] animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111b2e]/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue/30 to-accent-cyan/20 border border-accent-blue/50 shadow-[0_0_15px_rgba(79,142,247,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Badge / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111b2e] border border-accent-blue/40 text-accent-cyan text-xs font-mono font-semibold tracking-wider shadow-[0_0_15px_rgba(79,142,247,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{personalData.badgeText}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#111b2e] border border-accent-blue/30 text-[11px] font-mono text-accent-cyan tracking-wider">
              {personalData.badgeText}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white rounded-xl bg-[#111b2e] border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-0 z-50 md:hidden bg-[#0a0f1c]/95 backdrop-blur-xl flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-mono text-lg font-bold text-white tracking-wider">
                {personalData.logoText}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3 my-auto py-8">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-lg font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-accent-blue/20 to-accent-cyan/15 text-white border border-accent-blue/40 font-semibold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-accent-cyan' : 'text-slate-600'}`} />
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-slate-400 font-mono">
                {personalData.degree}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                {personalData.institution}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

