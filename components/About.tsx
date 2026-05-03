'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            {/* Avatar placeholder with geometric design */}
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-pulse/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-teal/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Center avatar */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-surface to-panel border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gradient mb-1">DS</div>
                  <div className="font-mono text-xs text-text-dim">AI/ML</div>
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 90, 180, 270].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    top: `${50 - 48 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
                    background: i % 2 === 0 ? '#7c6af7' : '#2dd4bf',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>

            {/* Role badge */}
            <div className="mt-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border-glow bg-panel">
                <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <div>
                  <div className="font-display text-sm font-semibold text-text-primary">AI Engineering Intern</div>
                  <div className="font-mono text-xs text-text-secondary">Infosys Springboard · 2025–2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="font-mono text-xs text-pulse tracking-widest mb-3">// ABOUT ME</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Wiring intelligence
              <br />
              <span className="text-gradient">into everything.</span>
            </h2>

            <p className="text-text-secondary leading-relaxed mb-5 font-body">
              I'm a third-year B.Tech AI student at Narasaraopeta Engineering College (CGPA 8.7/10), obsessed with the question: <em className="text-text-primary not-italic">how do we make machines genuinely intelligent?</em> Not just pattern-matchers, but systems that reason under uncertainty, adapt to disruption, and take action in the real world.
            </p>
            <p className="text-text-secondary leading-relaxed mb-5 font-body">
              My work spans computer vision (CNN, YOLO-based surveillance systems), predictive ML (XGBoost ensemble models), and reinforcement learning agents trained to reroute traffic around real-world incidents — work that earned 2nd place at Technova 2K26 among 200+ teams.
            </p>
            <p className="text-text-secondary leading-relaxed font-body">
              Outside the lab, I've solved 150+ algorithmic problems on LeetCode and am sharpening my full-stack instincts to bring AI models from notebook to production. I'm looking for a team building something real with AI.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'B.Tech AI', val: 'NEC · CGPA 8.7' },
                { icon: '📍', label: 'Location', val: 'Guntur, AP · India' },
                { icon: '🔬', label: 'Focus', val: 'Vision · RL · MLOps' },
                { icon: '🏆', label: 'Hackathons', val: '2× Placed' },
              ].map((fact) => (
                <div key={fact.label} className="flex items-center gap-3 p-3 rounded-lg bg-panel border border-border hover:border-pulse/30 transition-colors">
                  <span className="text-lg">{fact.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-text-dim">{fact.label}</div>
                    <div className="font-body text-sm text-text-primary font-medium">{fact.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
