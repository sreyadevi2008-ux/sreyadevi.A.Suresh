import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100, isHoveringLink: false });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, [data-interactive="true"]');
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        isHoveringLink: Boolean(isInteractive)
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

