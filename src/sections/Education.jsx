import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ACADEMIC MILESTONES"
          title="Education & Academic Path"
          subtitle="My academic foundation and educational path towards becoming an Artificial Intelligence engineer."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Scroll-drawn central line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.4)]" />

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
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070b16] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_18px_rgba(34,211,238,0.7)] z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse" />
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
                    <div className="rounded-[28px] bg-[#0c1427]/80 border border-white/10 p-6 sm:p-7 hover:border-violet-500/40 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Period Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#070b16] text-cyan-300 border border-cyan-500/30">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-1.5 mb-2">
                        <GraduationCap className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>

                      {/* Subject Badges */}
                      {item.subjects && (
                        <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-violet-950/50 text-violet-300 border border-violet-500/30"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-3 border-t border-white/5 space-y-2">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
