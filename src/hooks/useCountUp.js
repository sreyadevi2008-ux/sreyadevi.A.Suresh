import { useState, useEffect } from 'react';

export function useCountUp(targetNumber, duration = 1500, startImmediately = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startImmediately);

  useEffect(() => {
    if (!started) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * targetNumber));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetNumber, duration, started]);

  return { count, start: () => setStarted(true) };
}

