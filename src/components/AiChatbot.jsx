import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: personalData.aiBot?.welcomeMessage || "Hi! I'm Sreya's AI Assistant. Ask me anything about Sreya's education, skills, projects, or internship availability!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = personalData.aiBot?.quickPrompts || [
    "Who is Sreya?",
    "What are her key skills?",
    "Tell me about her projects",
    "Where does she study?",
    "How can I contact her?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query) => {
    const q = query.toLowerCase();
    const responses = personalData.aiBot?.responses || {};

    if (q.includes('who') || q.includes('about') || q.includes('intro') || q.includes('sreya')) {
      return responses.who || `Sreya Devi is a B.Tech CSE (Artificial Intelligence) undergraduate at Thejus Engineering College, Thrissur, Kerala. She is an aspiring AI engineer building real-world projects in Python, Machine Learning, and C.`;
    }
    if (q.includes('skill') || q.includes('stack') || q.includes('python') || q.includes('language') || q.includes('tech')) {
      return responses.skills || `Sreya's core skills include Python (90%), C Programming (85%), SQL (75%), HTML/CSS, NumPy, Pandas, Scikit-Learn, Matplotlib, and Git.`;
    }
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built')) {
      return responses.projects || `Sreya has created 3 key projects:\n1. Student Academic Performance Analyzer (Python & Pandas)\n2. Smart Healthcare Risk Prediction Model (ML with 88% accuracy)\n3. High-Performance Student Record Manager (Pure C & BSTs).`;
    }
    if (q.includes('study') || q.includes('college') || q.includes('degree') || q.includes('education') || q.includes('thejus') || q.includes('plus two') || q.includes('bio')) {
      return responses.education || `Sreya studies B.Tech CSE (Artificial Intelligence) at Thejus Engineering College, Thrissur, Kerala (2026-2030). She completed Higher Secondary (Class XII) in Bio Science (Physics, Chemistry, Biology, Mathematics, English) with 95%+ distinction.`;
    }
    if (q.includes('intern') || q.includes('hire') || q.includes('available') || q.includes('job') || q.includes('work')) {
      return responses.availability || `Yes! Sreya is actively available for summer internships, student AI collaborations, and engineering roles. Check out the Contact section below!`;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('message')) {
      return responses.contact || `You can send Sreya a direct message using the contact form on this page, or connect with her on GitHub and LinkedIn!`;
    }
    if (q.includes('resume') || q.includes('cv')) {
      return `You can download Sreya's official resume directly using the 'Download Resume' button in the Hero section!`;
    }

    return `Sreya Devi is a B.Tech CSE (Artificial Intelligence) student at Thejus Engineering College. You can explore her projects above or ask about her skills, background, and internship availability!`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query.trim()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate smart AI typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: generateAnswer(query)
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON (BOTTOM-RIGHT) ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-violet-600 via-purple-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center gap-2.5 transition-all"
          aria-label="Toggle AI Assistant"
        >
          {/* Pulsing Outer Ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse pointer-events-none" />

          <div className="relative flex items-center gap-2">
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <>
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                <span className="hidden sm:inline-block font-mono text-xs font-bold tracking-wide pr-1">
                  Ask Sreya AI
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </>
            )}
          </div>
        </motion.button>
      </div>

      {/* ── CHAT POPUP WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] md:w-[400px] h-[520px] max-h-[82vh] rounded-[28px] bg-[#091124]/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-[#070b16]/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#070b16] flex items-center justify-center font-bold text-xs text-white">
                    SD
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#070b16]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Sreya AI Assistant</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <span className="text-[11px] font-mono text-cyan-300">Online • Ask anything</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-violet-600/30 border border-violet-400/30 flex items-center justify-center text-cyan-300 flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-br-none shadow-md'
                        : 'bg-[#101b33] border border-white/10 text-slate-200 rounded-bl-none shadow-inner'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="font-mono text-[10px] text-cyan-300 ml-1">Sreya AI is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-3 py-2 border-t border-white/5 bg-[#060c1c]/60 overflow-x-auto flex gap-1.5 scrollbar-none">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] hover:bg-violet-600/30 border border-white/10 hover:border-violet-400 text-slate-300 hover:text-white transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-[#070b16] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Sreya's AI projects..."
                className="flex-1 bg-[#0f172a] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

