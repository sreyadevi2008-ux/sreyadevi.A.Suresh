import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Activity } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function NeuralBrainCanvas() {
  const canvasRef = useRef(null);
  const [interactiveMode, setInteractiveMode] = useState(false);

  // 3D Neural Brain Node Simulation
  useEffect(() => {
    if (!interactiveMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 300);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 300;
    };

    window.addEventListener('resize', handleResize);

    // Generate 3D brain-shaped point cloud (two hemispheres, frontal, occipital lobe)
    const points = [];
    const numPoints = 140;

    for (let i = 0; i < numPoints; i++) {
      // Brain parametric coordinates
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI - Math.PI / 2;

      // Hemispheric distortion: add separation between left and right hemispheres
      const hemisphere = Math.random() > 0.5 ? 1 : -1;
      const radiusX = 110 * Math.cos(v) * (0.8 + 0.2 * Math.cos(u));
      const radiusY = 85 * Math.sin(v) * (0.85 + 0.15 * Math.sin(u));
      const radiusZ = 95 * Math.cos(v) * Math.sin(u);

      points.push({
        x: radiusX + (hemisphere * 12),
        y: radiusY,
        z: radiusZ,
        origX: radiusX + (hemisphere * 12),
        origY: radiusY,
        origZ: radiusZ,
        color: Math.random() > 0.3 ? '#4f8ef7' : '#22d3ee',
        size: Math.random() * 2 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let angleY = 0;
    let angleX = 0.2;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.008;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const fov = 340;
      const projected = [];

      // Project 3D to 2D
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origZ * cosY + p.origX * sinY;

        // Rotate X
        let y1 = p.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.origY * sinX;

        // Perspective
        const scale = fov / (fov + z2 + 180);
        const x2d = x1 * scale + width / 2;
        const y2d = y1 * scale + height / 2;

        projected.push({
          x: x2d,
          y: y2d,
          z: z2,
          scale,
          color: p.color,
          size: p.size * scale,
          pulse: Math.sin(time * 0.003 + p.pulseOffset) * 0.5 + 0.5,
        });
      }

      // Sort by depth (painter's algorithm)
      projected.sort((a, b) => b.z - a.z);

      // Draw synapses / connecting lines
      ctx.lineWidth = 0.9;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 42 * p1.scale) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#38bdf8';
            ctx.globalAlpha = (1 - dist / (42 * p1.scale)) * 0.28 * p1.scale;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (0.8 + 0.4 * p.pulse), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.2, (p.z + 180) / 360) * (0.6 + 0.4 * p.pulse);
        ctx.shadowBlur = 10 * p.scale;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [interactiveMode]);

  return (
    <div className="relative group w-full max-w-lg mx-auto">
      {/* Outer ambient glow behind card */}
      <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-accent-blue/30 via-accent-cyan/20 to-accent-blue/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Surface Card - rounded-3xl / 24px and #111b2e background matching reference */}
      <div className="relative rounded-[24px] bg-[#111b2e] border border-white/10 p-5 sm:p-6 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Card Header Status Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan shadow-[0_0_8px_#22d3ee]" />
            </span>
            <span className="text-xs font-mono font-medium text-slate-300 tracking-wider">
              AI NEURAL CORE
            </span>
          </div>

          {/* Interactive Toggle Switch */}
          <button
            onClick={() => setInteractiveMode(!interactiveMode)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#0a0f1c] hover:bg-slate-800 text-accent-cyan border border-accent-blue/30 transition-all hover:scale-105"
            title="Toggle between Canvas Simulation and 3D Neural View"
          >
            {interactiveMode ? (
              <>
                <Sparkles className="w-3 h-3 text-accent-cyan" />
                <span>Reference View</span>
              </>
            ) : (
              <>
                <Activity className="w-3 h-3 text-accent-cyan animate-pulse" />
                <span>Live Canvas</span>
              </>
            )}
          </button>
        </div>

        {/* Visual Brain Container */}
        <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#070d18] border border-white/5 flex items-center justify-center">
          {interactiveMode ? (
            <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background radial glow */}
              <div className="absolute inset-0 bg-radial-gradient from-accent-blue/20 via-transparent to-transparent opacity-80" />
              
              {/* Reference neural brain image */}
              <img
                src="/hero-brain.jpg"
                alt="Glowing blue neural network brain representing Artificial Intelligence"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Glowing bottom horizon light */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#111b2e] to-transparent pointer-events-none" />
            </div>
          )}

          {/* Dynamic synaptic pulse indicator */}
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#0a0f1c]/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-sky-300 flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-accent-cyan" />
            <span>120 FLOPS Active</span>
          </div>
        </div>

        {/* Caption & Sub-line - matching reference exact text */}
        <div className="mt-5 text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {personalData.heroCard.title}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1 tracking-wide">
            {personalData.heroCard.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

