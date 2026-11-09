import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y, isHoveringLink } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    }
  }, []);

  const smoothX = useSpring(x, { stiffness: 450, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 450, damping: 28 });

  useEffect(() => {
    if (x > 0 && y > 0 && !isVisible) {
      setIsVisible(true);
    }
  }, [x, y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/50 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHoveringLink ? 48 : 28,
          height: isHoveringLink ? 48 : 28,
          backgroundColor: isHoveringLink ? 'rgba(34, 211, 238, 0.12)' : 'rgba(79, 142, 247, 0.05)',
          boxShadow: isHoveringLink 
            ? '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(34, 211, 238, 0.2)' 
            : '0 0 12px rgba(79, 142, 247, 0.2)',
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
        }}
      />
      {/* Small center electric core dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHoveringLink ? 0 : 1,
          transition: 'scale 0.15s ease'
        }}
      />
    </>
  );
}

