'use client';
import { useState } from 'react';

const projects = [
  {
    id: 'traffic-rl',
    featured: true,
    title: 'Incident-Resilient Traffic Signal Control',
    tagline: 'RL agent that reroutes 40% faster under real-world disruptions',
    description:
      'Built a custom OpenAI Gymnasium environment simulating multi-intersection traffic networks with dynamic incident injection. Trained a PPO agent via Stable-Baselines3 that learns adaptive signal timing policies — outperforming fixed-timing baselines by 40% in throughput recovery during road closures and accidents.',
    stack: ['Python', 'Stable-Baselines3', 'Gymnasium', 'FastAPI', 'Gradio', 'Hugging Face'],
    metrics: [
      { val: '40%', label: 'Faster Recovery' },
      { val: 'PPO', label: 'Algorithm' },
      { val: 'Live', label: 'HF Demo' },
    ],
    links: { github: 'https://github.com', demo: 'https://huggingface.co/divyasridoredla/traffic-incident-resilient' },
    color: 'pulse',
    icon: '🚦',
    type: 'Reinforcement Learning',
    date: 'Apr 2026',
    award: '🏆 2nd Place · Technova 2K26',
  },
  {
    id: 'surveillance',
    featured: true,
    title: 'AI Video Surveillance Platform',
    tagline: 'Real-time activity recognition with 90% detection accuracy',
    description:
      'Developed a production-grade security monitoring system at Infosys Springboard using a dual-model architecture: YOLOv8 for real-time object/person detection and a CNN classifier for fine-grained activity categorization. Integrated an automated alert pipeline that reduced manual monitoring workload by 30%.',
    stack: ['Python', 'YOLO', 'TensorFlow', 'CNN', 'OpenCV', 'REST API'],
    metrics: [
      { val: '90%', label: 'Detection Acc.' },
      { val: '30%', label: '↓ Manual Work' },
      { val: 'Real-time', label: 'Inference' },
    ],
    links: { github: 'https://github.com' },
    color: 'teal',
    icon: '🎥',
    type: 'Computer Vision',
    date: 'Feb 2026',
    award: null,
  },
  {
    id: 'retention',
    featured: true,
    title: 'Student Retention Prediction System',
    tagline: '95% accuracy ensemble model for early dropout intervention',
    description:
      'Tackled a real educational challenge: identifying at-risk students before they drop out. Combined XGBoost, Random Forest, and a shallow ANN in a voting ensemble. Performed exhaustive EDA to surface dropout signals, then applied SHAP explainability so advisors could understand which factors drove each prediction.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'TensorFlow', 'SHAP', 'Pandas'],
    metrics: [
      { val: '95%', label: 'Accuracy' },
      { val: 'SHAP', label: 'Explainability' },
      { val: '3-Model', label: 'Ensemble' },
    ],
    links: { github: 'https://github.com' },
    color: 'amber',
    icon: '📊',
    type: 'Predictive ML',
    date: 'Apr 2025',
    award: null,
  },
  {
    id: 'spotify',
    featured: false,
    title: 'Spotify Genre Classifier',
    tagline: '85% accuracy across multi-genre audio feature classification',
    description:
      'Applied PCA for dimensionality reduction on Spotify's audio feature space (danceability, energy, tempo, valence, etc.) and evaluated SVM, Random Forest, and XGBoost classifiers. Used SHAP feature importance to reveal which acoustic properties most strongly separate genres.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'PCA', 'Matplotlib', 'Seaborn'],
    metrics: [
      { val: '85%', label: 'Accuracy' },
      { val: 'PCA', label: 'Dimensionality Reduction' },
    ],
    links: { github: 'https://github.com' },
    color: 'pulse',
    icon: '🎵',
    type: 'Classification',
    date: 'Jun 2025',
    award: null,
  },
];

const colorMap = {
  pulse: { accent: '#7c6af7', bg: 'rgba(124,106,247,0.08)', border: 'rgba(124,106,247,0.2)' },
  teal: { accent: '#2dd4bf', bg: 'rgba(45,212,191,0.08)', border: 'rgba(45,212,191,0.2)' },
  amber: { accent: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
};

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');
  const displayed = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="font-mono text-xs text-pulse tracking-widest mb-3">// PROJECTS</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary leading-tight">
              Featured
              <br />
              <span className="text-gradient">Work</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-lg bg-panel border border-border">
            {(['featured', 'all'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 capitalize ${
                  filter === f
                    ? 'bg-pulse text-void font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6">
          {displayed.map((project, i) => {
            const colors = colorMap[project.color as keyof typeof colorMap];
            return (
              <article
                key={project.id}
                className="group relative rounded-2xl border border-border hover:border-opacity-60 bg-panel hover-lift cursor-default overflow-hidden"
                style={{
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = colors.border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 50%, ${colors.bg}, transparent 60%)` }}
                />

                <div className="relative p-6 sm:p-8 grid sm:grid-cols-[1fr_auto] gap-6">
                  {/* Left */}
                  <div>
                    {/* Top row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-2xl">{project.icon}</span>
                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded-full border"
                        style={{ color: colors.accent, borderColor: colors.border, background: colors.bg }}
                      >
                        {project.type}
                      </span>
                      {project.award && (
                        <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber/10 border border-amber/20 text-amber">
                          {project.award}
                        </span>
                      )}
                      <span className="font-mono text-xs text-text-dim ml-auto">{project.date}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-2 group-hover:text-gradient-subtle transition-all">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-pulse mb-3">{project.tagline}</p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 rounded-lg bg-muted text-text-secondary border border-border hover:border-border/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors border border-border hover:border-border/80 px-3 py-2 rounded-lg"
                          target="_blank" rel="noopener noreferrer"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          GitHub
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="flex items-center gap-2 font-mono text-xs px-3 py-2 rounded-lg transition-colors"
                          style={{ color: colors.accent, borderColor: colors.border, border: `1px solid ${colors.border}`, background: colors.bg }}
                          target="_blank" rel="noopener noreferrer"
                        >
                          ↗ Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="flex sm:flex-col gap-3 sm:min-w-[120px]">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex-1 sm:flex-none text-center p-3 rounded-xl border"
                        style={{ borderColor: colors.border, background: colors.bg }}
                      >
                        <div className="font-display text-xl font-bold" style={{ color: colors.accent }}>
                          {m.val}
                        </div>
                        <div className="font-mono text-xs text-text-dim mt-0.5 whitespace-nowrap">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
