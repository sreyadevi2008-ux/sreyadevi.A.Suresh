import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${alignClass} mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <span className="text-accent-cyan font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
          <span className="inline-block w-2 h-[2px] bg-accent-cyan rounded-full" />
          {eyebrow}
          <span className="inline-block w-2 h-[2px] bg-accent-cyan rounded-full" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

