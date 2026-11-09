import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070b16] border-t border-white/5 py-12 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-mono font-bold text-lg">
            <span>{personalData.logoText}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Designed & built by {personalData.name} © 2026
          </p>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            B.Tech CSE (AI) • {personalData.institution}
          </p>
        </div>

        {/* Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111b2e] hover:bg-[#16233b] border border-white/10 hover:border-accent-blue/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-cyan group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

