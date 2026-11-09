import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left shadow-[0_0_12px_rgba(34,211,238,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}

