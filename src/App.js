// Professional React Portfolio - Single-file demo
// Save this as src/App.jsx in a create-react-app project.
// Dependencies: framer-motion, react-icons
// Install: npm install framer-motion react-icons

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const profile = {
  name: "Suman Kumari",
  title: "AI-Enabled Full Stack Developer — .NET Core | C# | React | ML/AI",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/sumannkumari03",
  github: "https://github.com/sumannkumari03",
  photo: null // optional: add a URL to a professional photo
};

const skills = [
  "C#", ".NET Core", "ASP.NET Web API", "React", "JavaScript", "ML.NET", "ONNX Runtime", "SQL Server", "Azure", "Docker"
];

const projects = [
  {
    title: "AI-Enabled Healthcare Management",
    desc: "Role-based portal with patient analytics and readmission risk prediction using ML.NET.",
    tech: [".NET Core", "React", "ML.NET", "SQL Server"],
    github: "https://github.com/your-github-username/healthcare-portal",
    demo: ""
  },
  {
    title: "Loan Risk Assessment",
    desc: "ML model to predict loan defaults with an interactive dashboard.",
    tech: ["ASP.NET Core", "React", "ML.NET"],
    github: "https://github.com/your-github-username/loan-risk",
    demo: ""
  },
  {
    title: "AI Chatbot for Support",
    desc: "Chatbot integrated in React frontend using OpenAI API to automate common queries.",
    tech: [".NET Core", "React", "OpenAI API"],
    github: "",
    demo: ""
  }
];

const containerStyle = {
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
  color: "#1f2937",
  lineHeight: 1.6,
  background: "linear-gradient(180deg,#f8fafc 0%, #ffffff 100%)",
  minHeight: "100vh",
  paddingBottom: 60
};

const card = {
  background: "white",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 8px 24px rgba(16,24,40,0.06)",
  border: "1px solid rgba(15,23,42,0.04)"
};

export default function App() {
  return (
    <div style={containerStyle}>
      <header style={{ maxWidth: 1000, margin: "40px auto 20px", padding: "0 20px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 34 }}>{profile.name}</h1>
              <p style={{ margin: "6px 0 0", color: "#4b5563" }}>{profile.title}</p>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
              <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope size={20} /></a>
            </div>
          </div>
        </motion.div>
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}>
        {/* Hero + CTA */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h2 style={{ marginTop: 6 }}>Hello — I build intelligent, scalable web applications</h2>
            <p style={{ color: "#374151" }}>
              I’m a Full Stack Developer focused on building production-ready systems using .NET Core, React, and Machine Learning.
              I enjoy turning data into actionable products and shipping features that users love.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <a href={`mailto:${profile.email}`} style={{ ...ctaStyle }}>Hire Me</a>
              <a href={profile.github} target="_blank" rel="noreferrer" style={{ ...ghostStyle }}>View GitHub</a>
            </div>

            <div style={{ marginTop: 24 }}>
              <h4 style={{ margin: "0 0 8px 0" }}>Top skills</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.slice(0, 8).map(s => (
                  <span key={s} style={{ padding: "6px 10px", borderRadius: 8, background: "#eef2ff", color: "#3730a3", fontSize: 13 }}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 }} style={{ textAlign: "center" }}>
            <div style={{ ...card }}>
              {profile.photo ? (
                <img src={profile.photo} alt="profile" style={{ width: 120, height: 120, borderRadius: 16, objectFit: "cover" }} />
              ) : (
                <div style={{ width: 120, height: 120, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "#eef2ff", margin: "0 auto" }}>
                  <span style={{ color: "#3730a3", fontWeight: 700, fontSize: 28 }}>{profile.name.split(" ").map(n=>n[0]).join("")}</span>
                </div>
              )}

              <h3 style={{ marginTop: 12, marginBottom: 6 }}>{profile.name}</h3>
              <p style={{ margin: 0, color: "#6b7280" }}>{profile.title}</p>

              <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 14 }}>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              </div>
            </div>
          </motion.aside>
        </section>

        {/* Projects */}
        <section style={{ marginTop: 36 }}>
          <h3>Selected Projects</h3>
          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", marginTop: 12 }}>
            {projects.map((p, i) => (
              <motion.article key={p.title} whileHover={{ translateY: -6 }} style={{ ...card }}> 
                <h4 style={{ margin: "0 0 8px 0" }}>{p.title}</h4>
                <p style={{ margin: "0 0 12px 0", color: "#374151" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tech.map(t => <span key={t} style={{ fontSize: 12, color: "#374151", background: "#f3f4f6", padding: "6px 8px", borderRadius: 8 }}>{t}</span>)}
                </div>

                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={linkBtn}>GitHub <FaExternalLinkAlt style={{ marginLeft: 6, verticalAlign: "text-top" }} /></a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" style={ghostLink}>Live Demo</a>}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience / Education */}
        <section style={{ marginTop: 36 }}>
          <h3>Experience & Education</h3>
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <div style={{ ...card }}>
              <strong>Full Stack Developer — Company Name</strong>
              <div style={{ color: "#6b7280", fontSize: 14 }}>Jun 2022 — Present</div>
              <p style={{ marginTop: 8 }}>Built backend APIs, integrated ML models for predictions, and implemented secure authentication (JWT + refresh tokens).</p>
            </div>

            <div style={{ ...card }}>
              <strong>B.Tech in Computer Science — University Name</strong>
              <div style={{ color: "#6b7280", fontSize: 14 }}>2016 — 2020</div>
              <p style={{ marginTop: 8 }}>Relevant coursework: Data Structures, Machine Learning, Database Systems.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ marginTop: 36, textAlign: "center" }}>
          <div style={{ display: "inline-block", ...card, padding: 28 }}>
            <h3 style={{ margin: 0 }}>Let’s build something together</h3>
            <p style={{ color: "#6b7280" }}>Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a> — I respond quickly to collaboration and job opportunities.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <a href={`mailto:${profile.email}`} style={{ ...ctaStyle }}>Contact</a>
              <a href={profile.github} target="_blank" rel="noreferrer" style={{ ...ghostStyle }}>See Code</a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: 48, textAlign: "center", color: "#9ca3af" }}>
        <small>© {new Date().getFullYear()} {profile.name} — Built with React.</small>
      </footer>
    </div>
  );
}

// --- Styles used by the component ---
const ctaStyle = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 10,
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  fontWeight: 600
};

const ghostStyle = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: 10,
  background: "transparent",
  border: "1px solid rgba(37,99,235,0.12)",
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 600
};

const linkBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid rgba(15,23,42,0.06)",
  textDecoration: "none",
  color: "#111827",
  fontWeight: 600
};

const ghostLink = {
  ...linkBtn,
  background: "transparent",
  border: "1px dashed rgba(15,23,42,0.06)",
  color: "#2563eb"
};
