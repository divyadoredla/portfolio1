'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(124, 106, 247, ${0.12 * (1 - d / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165, 148, 255, 0.5)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-pulse/5 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pulse/30 bg-pulse/5 text-xs font-mono text-pulse mb-8"
          style={{ animation: 'fadeUp 0.5s ease 0.1s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          Open to Internship Opportunities · 2026
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}
        >
          <span className="text-gradient">Divya Sri</span>
          <br />
          <span className="text-text-primary">Doredla</span>
        </h1>

        {/* Role */}
        <div
          className="font-mono text-sm sm:text-base text-text-secondary mb-6 tracking-widest uppercase"
          style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}
        >
          AI · Machine Learning · Computer Vision
        </div>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-body"
          style={{ animation: 'fadeUp 0.6s ease 0.4s both' }}
        >
          I build machines that <span className="text-glow font-medium">perceive, learn, and adapt</span> — from real-time vision systems
          to reinforcement learning agents that outthink chaos.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.6s ease 0.5s both' }}
        >
          <a
            href="#projects"
            className="group px-7 py-3.5 bg-pulse hover:bg-glow text-void font-display font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-pulse/30 hover:shadow-glow/40 hover:-translate-y-0.5"
          >
            View My Work
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-border hover:border-pulse/50 text-text-secondary hover:text-text-primary font-body rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          style={{ animation: 'fadeUp 0.6s ease 0.6s both' }}
        >
          {[
            { val: '95%', label: 'Model Accuracy' },
            { val: '150+', label: 'DSA Problems' },
            { val: '2×', label: 'Hackathon Winner' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient-subtle">{stat.val}</div>
              <div className="font-mono text-xs text-text-dim mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
