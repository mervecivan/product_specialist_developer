import { useState } from "react";

const projects = [
  {
    id: 1,
    type: "project",
    title: "KnittTogether",
    subtitle: "Full-Stack Social Platform",
    description:
      "A full-stack social platform built solo for knitting enthusiasts. Users can share their projects and engage with the community.",
    stack: ["React", "FastAPI", "PostgreSQL", "GCP", "JWT"],
    color: "#1a2744",
    accent: "#64FFDA",
    icon: "🧶",
  },
];

const teardowns = [
  {
    id: 1,
    title: "Match Factory!",
    company: "Peak Games",
    role: "Product Specialist Candidate Analysis",
    emoji: "🏭",
    color: "#1a1a2e",
    accent: "#64FFDA",
    tags: ["Retention", "Monetization", "UX", "Data Analysis"],
    summary:
      "An in-depth product teardown backed by Google Play review scraping and sentiment analysis. Two critical churn points identified: early stage (levels 0–100) and late stage (levels 2000+).",
    highlights: [
      "1,066 Google Play reviews analyzed",
      "Two distinct churn profiles identified",
      "Misleading ads & monetization pressure cluster",
      "3 concrete hypotheses for in-game economy improvements",
    ],
    notionLink: "https://app.notion.com/p/Match-Factory-Mobile-Game-Product-Analysis-38df7c40de7e80e1b3a5c04c597cb4c7?source=copy_link",
  },
  {
    id: 2,
    title: "Critical Strike",
    company: "Vertigo Games",
    role: "Comparative Product Analysis",
    emoji: "🎯",
    color: "#1a1a2e",
    accent: "#FF6B6B",
    tags: ["Competitive Analysis", "Game Design", "UX", "Retention"],
    summary:
      "A comparative analysis of Critical Strike and Polygun Arena. Game mechanics, retention loops, and monetization strategies were examined in depth.",
    highlights: [
      "Head-to-head comparison: Critical Strike vs Polygun Arena",
      "Core loop and retention mechanics breakdown",
      "User experience evaluation",
      "Feature suggestions and opportunity areas",
    ],
    notionLink: "https://app.notion.com/p/Critical-Strike-Mobil-Game-Product-Analysis-389f7c40de7e80bb84f5e2470eb3f640?source=copy_link",
  },
];

function TeardownCard({ teardown }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="teardown-card-wrapper"
      onClick={() => setFlipped(!flipped)}
      style={{ cursor: "pointer" }}
    >
      <div className={`teardown-card ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div
          className="card-face card-front"
          style={{ background: teardown.color }}
        >
          <div className="card-front-content">
            <div className="card-emoji">{teardown.emoji}</div>
            <div>
              <div className="card-company">{teardown.company}</div>
              <div className="card-title">{teardown.title}</div>
              <div className="card-role">{teardown.role}</div>
            </div>
            <div className="card-tags">
              {teardown.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag"
                  style={{
                    borderColor: teardown.accent,
                    color: teardown.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flip-hint">Click for details →</div>
          </div>
        </div>

        {/* Back */}
        <div
          className="card-face card-back"
          style={{ background: "#0D1117", border: `1px solid ${teardown.accent}` }}
        >
          <div className="card-back-content">
            <div
              className="card-back-title"
              style={{ color: teardown.accent }}
            >
              {teardown.title} — Analysis Summary
            </div>
            <p className="card-summary">{teardown.summary}</p>
            <ul className="card-highlights">
              {teardown.highlights.map((h, i) => (
                <li key={i}>
                  <span style={{ color: teardown.accent }}>▸</span> {h}
                </li>
              ))}
            </ul>
            <a
              href={teardown.notionLink}
              className="notion-btn"
              style={{ background: teardown.accent }}
              onClick={(e) => e.stopPropagation()}
            >
              View on Notion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Product & Frontend Developer</div>
          <h1 className="hero-name">
            Merve <span className="accent">Civan</span>
          </h1>
          <p className="hero-bio">
            A data-driven product thinker passionate about the gaming industry.
            <br />
            I examine user experience through both analytical and creative lenses.
          </p>
          <div className="hero-links">
            <a href="#teardowns" className="btn-primary">
              View My Analyses
            </a>
            <a href="#projects" className="btn-secondary">
              My Projects
            </a>
          </div>
        </div>
        <div className="hero-grid-decoration" aria-hidden="true">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="grid-dot" />
          ))}
        </div>
      </section>

      {/* Teardowns */}
      <section className="section" id="teardowns">
        <div className="section-inner">
          <div className="section-label">Product Analysis</div>
          <h2 className="section-title">Game Teardowns</h2>
          <p className="section-desc">
            Product teardowns I prepared by playing the games, collecting data,
            and analyzing user feedback.
          </p>
          <div className="teardown-grid">
            {teardowns.map((t) => (
              <TeardownCard key={t.id} teardown={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section section-alt" id="projects">
        <div className="section-inner">
          <div className="section-label">Development</div>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={{ background: p.color }}
              >
                <div className="project-icon">{p.icon}</div>
                <div className="project-title">{p.title}</div>
                <div
                  className="project-subtitle"
                  style={{ color: p.accent }}
                >
                  {p.subtitle}
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="stack-list">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="accent">Merve Civan</span> — Product & Frontend
          Developer
        </div>
      </footer>
    </div>
  );
}
