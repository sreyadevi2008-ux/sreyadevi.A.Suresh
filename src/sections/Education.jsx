import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ACADEMIC MILESTONES"
          title="Education & Journey"
          subtitle="My academic foundation and educational path towards becoming an Artificial Intelligence engineer."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Scroll-drawn central line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent shadow-[0_0_8px_rgba(34,211,238,0.4)]" />

          <div className="space-y-12 sm:space-y-16">
            {personalData.education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0f1c] border-2 border-accent-cyan flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.7)] z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                  </div>

                  {/* Spacer for 2-column layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12' : 'sm:pl-12'
                    }`}
                  >
                    <div className="rounded-[24px] bg-[#111b2e] border border-white/10 p-6 sm:p-7 hover:border-accent-blue/40 shadow-glow-card transition-all duration-300 hover:-translate-y-1">
                      {/* Period Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0a0f1c] text-accent-cyan border border-accent-blue/30">
                          <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-1.5 mb-3">
                        <GraduationCap className="w-4 h-4 text-accent-blue flex-shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-3 border-t border-white/5 space-y-1.5">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan mt-0.5 flex-shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

