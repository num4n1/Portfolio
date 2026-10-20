import { useState, useEffect } from "react";
import "./site.css";
import { profile, projects, privateProjects, skills } from "./data.js";

const sections = ["work", "skills", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("root");
  useEffect(() => {
    const ids = ["root", ...sections];
    const update = () => {
      const doc = document.documentElement;
      if (window.scrollY < 80) return setActive("root");
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        return setActive(ids[ids.length - 1]);
      }
      const line = window.innerHeight * 0.35;
      let current = "root";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return active;
}

function Nav({ active }) {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#root" className={active === "root" ? "cur" : ""}>root</a>
      {sections.map((s) => (
        <span key={s}>
          <span className="sep">/</span>
          <a href={`#${s}`} className={active === s ? "cur" : ""}>{s}</a>
        </span>
      ))}
    </nav>
  );
}

function Row({ p, i }) {
  return (
    <li>
      <span className="idx">{i != null ? String(i + 1).padStart(2, "0") : "--"}</span>
      <div>
        <div className="title">
          {p.name} <span className="dim">· {p.tag}</span>
        </div>
        <p>{p.desc}</p>
      </div>
      {p.link ? (
        <a href={p.link} target="_blank" rel="noreferrer" className="gh">
          {p.linkLabel} ↗
        </a>
      ) : (
        <span className="dim gh">private</span>
      )}
    </li>
  );
}

function Work() {
  return (
    <section id="work">
      <h2>work</h2>
      <ul className="work">
        {projects.map((p, i) => (
          <Row key={p.name} p={p} i={i} />
        ))}
      </ul>
      <h3 className="dim sub">private repositories</h3>
      <ul className="work">
        {privateProjects.map((p) => (
          <Row key={p.name} p={p} />
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <section id="contact">
      <h2>contact</h2>
      <p>
        <button className="link" onClick={copy}>{profile.email}</button>{" "}
        <span className="dim" role="status">{copied ? "copied" : "(click to copy)"}</span>
      </p>
      <p>
        <a href={profile.github} target="_blank" rel="noreferrer">github ↗</a>
        <span className="dim"> · </span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
      </p>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <>
      <header className="bar">
        <div className="col">
          <Nav active={active} />
        </div>
      </header>
      <main className="col">
        <section id="root" className="hero">
          <h1>
            {profile.name}
            <span className="cursor" aria-hidden="true" />
          </h1>
          <p className="dim">
            {profile.role} · {profile.location}
          </p>
          <h2>tldr</h2>
          <p>{profile.tldr}</p>
        </section>
        <Work />
        <section id="skills">
          <h2>skills</h2>
          <dl className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <dt className="dim">{g.group}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
        <Contact />
        <footer className="dim">© {new Date().getFullYear()} {profile.name}</footer>
      </main>
    </>
  );
}
