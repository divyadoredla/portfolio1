'use client';

const experiences = [
  {
    company: 'Infosys Springboard',
    role: 'AI Engineering Intern',
    period: 'Nov 2025 – Feb 2026',
    duration: '4 months',
    type: 'Internship',
    color: '#7c6af7',
    points: [
      'Architected a real-time video surveillance system using YOLOv8 and CNN, achieving 90% detection accuracy on live CCTV streams across 3 camera feeds simultaneously.',
      'Reduced manual security monitoring workload by 30% via an automated alert pipeline that classified 12 distinct activity categories and triggered real-time notifications.',
      'Trained models on 10k+ labeled video frames using transfer learning, cutting training time by 40% compared to training from scratch.',
    ],
    skills: ['Computer Vision', 'YOLO', 'CNN', 'TensorFlow', 'OpenCV', 'Python'],
  },
];

const education = [
  {
    institution: 'Narasaraopeta Engineering College',
    degree: 'B.Tech in Artificial Intelligence',
    period: '2023 – 2027',
    score: 'CGPA: 8.7 / 10.0',
    color: '#2dd4bf',
    highlight: true,
  },
  {
    institution: 'Oxford VIT College',
    degree: 'Intermediate (Class XII)',
    period: '2020 – 2023',
    score: null,
    color: '#8888aa',
    highlight: false,
  },
  {
    institution: 'Narayana School',
    degree: 'Secondary (SSC)',
    period: '2019 – 2020',
    score: null,
    color: '#44445a',
    highlight: false,
  },
];

const certifications = [
  { name: 'MERN Stack Internship', issuer: 'AICTE – EY', icon: '⚡' },
  { name: 'Python Programming', issuer: 'NPTEL', icon: '🐍' },
  { name: 'DSA in Java + AI/ML', issuer: 'Apna College', icon: '🔷' },
  { name: 'Java OOP Certification', issuer: 'Coding Ninjas', icon: '☕' },
];

const achievements = [
  { place: '2nd', event: 'Technova 2K26 Hackathon', detail: '24-hour event · Shri Vishnu Engineering College, Bhimavaram · 2026', icon: '🥈' },
  { place: '1st', event: 'Coding Competition', detail: 'Narasaraopeta Engineering College · 2025', icon: '🥇' },
  { place: '150+', event: 'DSA Problems Solved', detail: 'LeetCode · Arrays, Trees, DP, Graphs', icon: '💻' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-pulse tracking-widest mb-3">// EXPERIENCE</div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-14 leading-tight">
          Where I've
          <br />
          <span className="text-gradient">Built Things</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Left: Experience + Education timeline */}
          <div className="space-y-8">
            <h3 className="font-display text-lg font-semibold text-text-primary border-b border-border pb-3">
              Professional Experience
            </h3>

            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="relative pl-6 border-l-2 border-pulse/40 hover:border-pulse transition-colors duration-300"
              >
                <div
                  className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full border-2 border-void"
                  style={{ background: exp.color }}
                />
                
                <div className="bg-panel rounded-xl p-6 border border-border hover:border-pulse/30 transition-colors hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="font-display text-lg font-bold text-text-primary">{exp.role}</h4>
                      <p className="font-body text-sm text-pulse font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-text-dim">{exp.period}</div>
                      <div className="font-mono text-xs text-text-dim">{exp.duration}</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-sm font-body text-text-secondary leading-relaxed">
                        <span className="text-pulse mt-1 flex-shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((s) => (
                      <span key={s} className="font-mono text-xs px-2.5 py-1 rounded-lg bg-muted text-text-secondary border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <h3 className="font-display text-lg font-semibold text-text-primary border-b border-border pb-3 mt-10">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className={`relative pl-6 border-l-2 transition-colors duration-300 ${edu.highlight ? 'border-teal/60 hover:border-teal' : 'border-border'}`}
                >
                  <div
                    className="absolute -left-2 top-0 w-3 h-3 rounded-full border-2 border-void"
                    style={{ background: edu.color }}
                  />
                  <div className={`p-4 rounded-lg border transition-colors ${edu.highlight ? 'bg-panel border-teal/20 hover:border-teal/40' : 'border-transparent'}`}>
                    <div className="flex justify-between gap-2 flex-wrap">
                      <div>
                        <div className="font-display text-sm font-semibold text-text-primary">{edu.degree}</div>
                        <div className="font-body text-xs text-text-secondary mt-0.5">{edu.institution}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-xs text-text-dim">{edu.period}</div>
                        {edu.score && <div className="font-mono text-xs text-teal mt-0.5 font-semibold">{edu.score}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certs + Achievements */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary border-b border-border pb-3 mb-4">
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-panel border border-border hover:border-pulse/30 transition-colors group cursor-default"
                  >
                    <span className="text-lg flex-shrink-0">{cert.icon}</span>
                    <div>
                      <div className="font-body text-sm text-text-primary font-medium group-hover:text-glow transition-colors">{cert.name}</div>
                      <div className="font-mono text-xs text-text-dim">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary border-b border-border pb-3 mb-4">
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((ach) => (
                  <div
                    key={ach.event}
                    className="p-4 rounded-xl bg-panel border border-border hover:border-amber/30 transition-colors group cursor-default"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{ach.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-display text-lg font-bold text-amber">{ach.place}</span>
                          <span className="font-body text-sm font-semibold text-text-primary">{ach.event}</span>
                        </div>
                        <p className="font-mono text-xs text-text-dim leading-relaxed">{ach.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
