import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "P. Naveen",
  role: "Computer Science Engineer",
  email: "pslisettynaveen322@gmail.com",
  github: "https://github.com/palisettynaveen322-ship-it",
  linkedin: "https://www.linkedin.com/in/naveen-palisetty-51a974356/",
};

const skills = [
  ["Programming", "Java", "Python", "C", "JavaScript"],
  ["Web & App", "HTML", "CSS", "React", "Android Development"],
  ["Core CS", "Data Structures", "DBMS", "Operating Systems", "Computer Networks"],
  ["Exploring", "Artificial Intelligence", "Cybersecurity", "Computer Vision", "Full-Stack Development"],
];

const projects = [
  {
    number: "01",
    name: "JARVIS",
    type: "PERSONAL AI ASSISTANT",
    description: "A desktop-based personal AI assistant with a PySide6 interface and an LLM-powered conversation workflow.",
    tags: ["Python", "PySide6", "OpenAI-compatible API"],
    status: "In development",
    link: "https://github.com/palisettynaveen322-ship-it/JARVIS",
  },
  {
    number: "02",
    name: "Quiz Master",
    type: "AI-POWERED APPLICATION",
    description: "An interactive quiz application that uses an AI API to support question generation and quiz experiences.",
    tags: ["JavaScript", "API Integration", "Web"],
    status: "Project",
    link: "https://github.com/teja25925/Quiz-Master",
  },
  {
    number: "03",
    name: "TabAlert",
    type: "ANDROID APPLICATION",
    description: "An Android project focused on building a useful mobile experience. Add a concise feature summary before publishing.",
    tags: ["Android", "Java"],
    status: "Project",
    link: profile.github,
  },
  {
    number: "04",
    name: "YOLO Person Counter",
    type: "COMPUTER VISION",
    description: "A Python and OpenCV project exploring person detection and counting from visual input.",
    tags: ["Python", "OpenCV", "YOLO"],
    status: "Project",
    link: profile.github,
  },
];

const certifications = [
  ["NPTEL — Programming in Java", "Elite + Gold | Top 1% (as provided)"],
  ["Web Designing & Multimedia Technology", "91%"],
  ["Full-Stack Development", "Certification"],
  ["Quantum Fundamentals", "Fundamentals and hands-on work"],
  ["Introduction to Computers", "IIT Bombay"],
];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Naveen home"><span className="brand-mark">N</span><span>P. NAVEEN<span className="brand-dot">.</span></span></a>
      <nav>
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#journey">Journey</a><a href="#contact" className="nav-contact">Let's talk <span>↗</span></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> OPEN TO LEARNING & OPPORTUNITIES</div>
        <h1>Building ideas<br />into <span className="gradient-text">technology.</span></h1>
        <p className="hero-intro">I'm <strong>P. Naveen</strong>, a Computer Science Engineer interested in software development, AI and cybersecurity. I enjoy learning by building practical projects.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button button-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="hero-meta"><span><i /> JAVA &nbsp;·&nbsp; PYTHON &nbsp;·&nbsp; WEB</span><span className="meta-line" /><span>BASED IN INDIA</span></div>
      </div>
      <div className="hero-visual">
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        <div className="photo-frame">
          <div className="photo-topline"><span>PROFILE / 001</span><span>● ONLINE</span></div>
          <img src="/images/naveen-profile.jpg" alt="Portrait of P. Naveen" />
          <div className="photo-caption"><span>ENGINEER IN PROGRESS</span><span>2026 — ∞</span></div>
        </div>
        <div className="floating-chip chip-top"><span className="chip-symbol">⌘</span><span><b>Curious mind</b><small>Always learning</small></span></div>
        <div className="floating-chip chip-bottom"><span className="chip-symbol blue">⌁</span><span><b>Build. Learn. Repeat.</b><small>Code with purpose</small></span></div>
        <div className="crosshair cross-a">+</div><div className="crosshair cross-b">+</div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}

function SectionTitle({ label, title, subtitle }) {
  return <div className="section-title"><div className="eyebrow">{label}</div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

function About() {
  return (
    <section className="section-wrap content-section" id="about">
      <SectionTitle label="01 / ABOUT ME" title={<>A little about <span className="gradient-text">my journey.</span></>} />
      <div className="about-grid">
        <div className="about-lead"><p className="large-copy">I’m a curious developer who likes understanding how things work — then turning that understanding into something useful.</p><p>My journey began with a Diploma in Computer Engineering and continues through B.Tech. Along the way, I've explored programming, application development, AI-powered tools and computer vision.</p></div>
        <div className="about-facts">
          <div className="fact"><span className="fact-index">01</span><div><b>Learning by building</b><p>Hands-on projects, experimentation and continuous improvement.</p></div></div>
          <div className="fact"><span className="fact-index">02</span><div><b>Broad technical curiosity</b><p>Software engineering, AI/ML and cybersecurity fundamentals.</p></div></div>
          <div className="fact"><span className="fact-index">03</span><div><b>Focused on growth</b><p>Strengthening core CS concepts and practical development skills.</p></div></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <div className="section-wrap">
        <SectionTitle label="02 / TOOLKIT" title={<>Technologies I <span className="gradient-text">work with.</span></>} subtitle="A snapshot of the tools and concepts I've studied or explored. This list will grow as I build." />
        <div className="skill-grid">{skills.map(([group, ...items]) => <div className="skill-card" key={group}><div className="skill-card-head"><span>{group}</span><span>↗</span></div><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-wrap content-section" id="projects">
      <SectionTitle label="03 / SELECTED WORK" title={<>Things I've <span className="gradient-text">built.</span></>} subtitle="A selection of projects from my learning and development journey." />
      <div className="project-list">{projects.map(project => <article className="project-row" key={project.number}>
        <span className="project-number">{project.number}</span>
        <div className="project-main"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        <div className="project-side"><span className="project-status">{project.status}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>↗</a></div>
      </article>)}</div>
    </section>
  );
}

function Journey() {
  return (
    <section className="content-section journey-section" id="journey">
      <div className="section-wrap">
        <SectionTitle label="04 / EDUCATION & CREDENTIALS" title={<>The foundation of <span className="gradient-text">my journey.</span></>} />
        <div className="journey-grid">
          <div><h3 className="column-heading">Education</h3><div className="timeline-item"><span className="timeline-dot" /><div><small>2026 — PRESENT</small><h4>B.Tech — Computer Science</h4><p>KL University · Lateral entry</p></div></div><div className="timeline-item"><span className="timeline-dot" /><div><small>COMPLETED 2026</small><h4>Diploma — Computer Engineering</h4><p>A.A.N.M & V.V.R.S.R Polytechnic, Gudlavalleru</p><p className="highlight-line">CGPA: 9.82</p></div></div></div>
          <div><h3 className="column-heading">Certifications</h3><div className="cert-list">{certifications.map(([name, detail]) => <div className="cert-item" key={name}><span className="cert-icon">↗</span><div><b>{name}</b><small>{detail}</small></div></div>)}</div></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-panel"><div className="eyebrow">05 / CONTACT</div><h2>Have an idea?<br /><span className="gradient-text">Let's connect.</span></h2><p>I'm always interested in learning, collaborating and discussing technology.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <span>↗</span></a>
        <div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div>
      </div>
      <footer><a className="brand" href="#home"><span className="brand-mark">N</span><span>P. NAVEEN<span className="brand-dot">.</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </section>
  );
}

function App() {
  return <><Header /><main><Hero /><About /><Skills /><Projects /><Journey /><Contact /></main></>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
