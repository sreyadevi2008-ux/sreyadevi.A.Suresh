import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Code2, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070a14]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#111b2e] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-accent-cyan font-mono text-xs uppercase tracking-wider font-semibold">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-700/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Details */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{project.longDescription || project.description}</p>

              {project.highlight && (
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0a0f1c]/70 border border-accent-blue/20 text-sky-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                  <span>{project.highlight}</span>
                </div>
              )}

              {/* Technologies */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-accent-cyan" /> Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#0a0f1c] text-accent-sky border border-accent-blue/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-end gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold shadow-glow-blue hover:brightness-110 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo / Documentation
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

