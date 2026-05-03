'use client';

const skillGroups = [
  {
    label: 'AI & ML',
    icon: '🧠',
    color: '#7c6af7',
    skills: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'Computer Vision (CNN/YOLO)', level: 88 },
      { name: 'Reinforcement Learning', level: 78 },
      { name: 'Statistical Modeling', level: 82 },
      { name: 'Feature Engineering', level: 84 },
    ],
  },
  {
    label: 'Libraries & Frameworks',
    icon: '⚙️',
    color: '#2dd4bf',
    skills: [
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Stable-Baselines3', level: 78 },
      { name: 'OpenCV', level: 82 },
      { name: 'Pandas / NumPy', level: 92 },
      { name: 'FastAPI', level: 72 },
    ],
  },
  {
    label: 'Programming',
    icon: '💻',
    color: '#fbbf24',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 80 },
      { name: 'Java', level: 76 },
      { name: 'JavaScript / React', level: 65 },
      { name: 'Node.js / Express', level: 65 },
      { name: 'C / C++ (Basics)', level: 55 },
    ],
  },
  {
    label: 'Data & Visualization',
    icon: '📊',
    color: '#f472b6',
    skills: [
      { name: 'Power BI / Tableau', level: 78 },
      { name: 'Matplotlib / Seaborn', level: 85 },
      { name: 'Advanced Excel', level: 75 },
      { name: 'MySQL / SQLite', level: 80 },
    ],
  },
];

const tags = [
  'Model Validation', 'Cross-Validation', 'PCA', 'SHAP Explainability',
  'Transfer Learning', 'Git / GitHub', 'Linux', 'REST APIs',
  'SDLC', 'OOP', 'Data Structures', 'Algorithms', 'DBMS', 'Computer Networks',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-pulse tracking-widest mb-3">// SKILLS</div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-14 leading-tight">
          Technical
          <br />
          <span className="text-gradient">Arsenal</span>
        </h2>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-panel rounded-2xl border border-border p-6 hover:border-opacity-60 transition-all duration-300 hover-lift group"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = group.color + '40';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '';
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-display text-sm font-semibold text-text-primary">{group.label}</h3>
              </div>

              <div className="space-y-3.5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-xs text-text-secondary">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: group.color + 'cc' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}88, ${group.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tags */}
        <div>
          <p className="font-mono text-xs text-text-dim mb-4 tracking-widest">// ADDITIONAL COMPETENCIES</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-2 rounded-lg bg-panel border border-border text-text-secondary hover:border-pulse/40 hover:text-text-primary transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
