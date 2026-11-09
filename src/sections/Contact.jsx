import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

// Map icon names
const socialIcons = {
  Github,
  Linkedin,
  Instagram,
  Mail
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
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

    // Simulate API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Connect & Collaborate"
          subtitle="Interested in AI projects, academic collaborations, or tech discussions? Send a message or reach out via social channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Info Card */}
            <div className="rounded-[24px] bg-[#111b2e] border border-white/10 p-6 sm:p-7 shadow-glow-card">
              <h3 className="text-xl font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                I am actively learning, coding, and open to hackathons, open source initiatives, and tech discussions.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#0a0f1c]/70 border border-white/5">
                  <div className="p-2 rounded-xl bg-accent-blue/10 text-accent-blue mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Email</span>
                    <a
                      href={`mailto:${personalData.contact.email}`}
                      className="font-medium text-slate-200 hover:text-accent-cyan transition-colors"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#0a0f1c]/70 border border-white/5">
                  <div className="p-2 rounded-xl bg-accent-cyan/10 text-accent-cyan mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Location</span>
                    <span className="font-medium text-slate-200">
                      {personalData.contact.location}
                    </span>
                    <span className="block text-[11px] text-slate-400">
                      Thejus Engineering College, Vellarakkad
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#0a0f1c]/70 border border-white/5">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Local Time</span>
                    <span className="font-medium text-slate-200">
                      {personalData.contact.timezone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="block text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  Social Profiles
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {personalData.contact.socials.map((social, i) => {
                    const Icon = socialIcons[social.icon] || Mail;
                    return (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a0f1c] hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-accent-blue/40 text-xs font-medium transition-all hover:scale-105"
                      >
                        <Icon className="w-3.5 h-3.5 text-accent-cyan" />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[24px] bg-[#111b2e] border border-white/10 p-6 sm:p-8 shadow-glow-card backdrop-blur-xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6">
                Have an inquiry or project opportunity? Fill in the form below.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <strong>Thank you!</strong> Your message has been sent successfully. Sreya will get back to you soon.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1c] border ${
                        errors.name ? 'border-rose-500' : 'border-white/10'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1c] border ${
                        errors.email ? 'border-rose-500' : 'border-white/10'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration, Question, or Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0f1c] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sreya, I came across your portfolio and wanted to reach out regarding..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1c] border ${
                      errors.message ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:brightness-110 text-white font-semibold text-sm shadow-glow-blue transition-all disabled:opacity-50"
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

