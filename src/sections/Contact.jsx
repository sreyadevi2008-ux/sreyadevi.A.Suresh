import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Connect & Collaborate"
          subtitle="Interested in AI projects, academic collaborations, or tech discussions? Send a direct message or connect through GitHub and LinkedIn."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-12">
          {/* Left Column: Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-[28px] bg-[#0c1427]/80 border border-white/10 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                I am actively learning, coding, and open to hackathons, student research initiatives, and engineering collaborations.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#070b16]/80 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-300 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Campus</span>
                    <span className="font-semibold text-slate-200">
                      Thejus Engineering College
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      B.Tech CSE (Artificial Intelligence)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#070b16]/80 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-300 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Location</span>
                    <span className="font-semibold text-slate-200">
                      {personalData.contact.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#070b16]/80 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-300 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Timezone</span>
                    <span className="font-semibold text-slate-200">
                      {personalData.contact.timezone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels — Only GitHub and LinkedIn */}
              <div className="mt-7 pt-6 border-t border-white/5">
                <span className="block text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  Social Channels
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/sreyadevi2008-ux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#070b16] hover:bg-[#0f172a] text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/50 text-xs font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4 text-cyan-300" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#070b16] hover:bg-[#0f172a] text-slate-200 hover:text-white border border-white/10 hover:border-violet-400/50 text-xs font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
                  >
                    <Linkedin className="w-4 h-4 text-violet-300" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Simple Contact Form (Name + Message) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[28px] bg-[#0c1427]/80 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 font-normal">
                Leave your name and a brief note below. I'll read your message and follow up.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <strong>Thank you!</strong> Your message has been received successfully.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Name field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#070b16] border ${
                      errors.name ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Sreya, I'd like to connect regarding..."
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#070b16] border ${
                      errors.message ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
