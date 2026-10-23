import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';
import { projects } from './data/projects.js';
import { experiences } from './data/experience.js';
import { links, metrics, site } from './data/site.js';

const navItems = [
  { label: 'Home', target: 'top' },
  { label: 'Work', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Stack', target: 'stack' },
  { label: 'Contact', target: 'contact' },
];

const skillGroups = [
  {
    number: '01',
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '02',
    title: 'AI systems',
    skills: ['LangGraph', 'LangChain', 'OpenAI', 'Gemini', 'RAG', 'pgvector'],
  },
  {
    number: '03',
    title: 'Infrastructure',
    skills: ['Redis', 'BullMQ', 'AWS S3', 'Docker', 'Temporal', 'WebRTC'],
  },
  {
    number: '04',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty('--scroll-progress', String(progress));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] }
    );

    navItems.forEach(({ target }) => {
      const section = document.getElementById(target);
      if (section) observer.observe(section);
    });

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="site-frame">
      <div className="scroll-meter" aria-hidden="true" />
      <Header activeSection={activeSection} theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <Metrics />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header({ activeSection, theme, setTheme }) {
  return (
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Akshat Garg, back to top">
        akshat<span>garg</span><i>.</i>
      </a>

      <nav className="nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={activeSection === item.target ? 'is-active' : ''}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero page-shell" id="top">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="kicker"><span className="status-dot" /> Available for backend &amp; AI roles</p>
        <h1>
          Akshat Garg
          <span>builds reliable systems.</span>
        </h1>
        <p className="hero-role">Backend engineer / AI systems builder</p>
        <p className="hero-intro">
          I turn complicated product ideas into dependable APIs, queues, retrieval layers,
          and real-time experiences. My favorite work lives where backend engineering meets
          applied AI.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowDownRight size={17} />
          </a>
          <a className="text-link" href={links.resume} target="_blank" rel="noreferrer">
            <FileText size={15} /> Résumé <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="social-row" aria-label="Social links">
          <span>Find me</span>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.twitter} target="_blank" rel="noreferrer">X / Twitter</a>
          <a href={links.email}>Email</a>
        </div>
      </motion.div>

    </section>
  );
}

function Metrics() {
  return (
    <motion.section className="metrics-strip page-shell" {...reveal} aria-label="Career highlights">
      {metrics.map((metric, index) => (
        <div className="metric" key={metric.label}>
          <span className="metric-index">0{index + 1}</span>
          <strong>{metric.value}</strong>
          <div>
            <p>{metric.label}</p>
            <span>{metric.detail}</span>
          </div>
        </div>
      ))}
    </motion.section>
  );
}

function SectionHeading({ index, eyebrow, title, note }) {
  return (
    <motion.div className="section-heading" {...reveal}>
      <div>
        <span className="section-index">{index}</span>
        <p className="kicker">{eyebrow}</p>
      </div>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="section page-shell" id="projects">
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title="Projects built to be used, not just viewed."
        note="Three products combining real-time systems, product thinking, and applied AI."
      />

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article className="project-row" key={project.title} {...reveal}>
            <div className="project-number">0{index + 1}</div>
            <div className="project-copy">
              <p className="project-type">Full-stack product · {project.tech.length} technologies</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tech.slice(0, 5).map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
            </div>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                Live <ArrowUpRight size={15} />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                Code <Github size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section page-shell" id="experience">
      <SectionHeading
        index="02"
        eyebrow="Field notes"
        title="What I shipped, and where."
        note="A running log of production work. Open an entry for the implementation details."
      />

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <motion.details className="experience-entry" key={`${experience.company}-${experience.duration}`} open={index === 0} {...reveal}>
            <summary>
              <span className="entry-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="entry-date">{experience.duration}</span>
              <span className="entry-title">
                <strong>{experience.role}</strong>
                <em>{experience.company}</em>
              </span>
              <span className="entry-control" aria-hidden="true">+</span>
            </summary>
            <div className="experience-body">
              <ul>
                {experience.achievements.slice(0, 4).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="experience-tech">
                {experience.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section page-shell" id="stack">
      <SectionHeading
        index="03"
        eyebrow="Working set"
        title="Tools I reach for when the work gets real."
      />

      <motion.div className="stack-grid" {...reveal}>
        {skillGroups.map((group) => (
          <article className="stack-group" key={group.title}>
            <span>{group.number}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </motion.div>

      <motion.blockquote className="manifesto" {...reveal}>
        <p>“The best backend is the one users never have to think about.”</p>
        <footer>My operating principle</footer>
      </motion.blockquote>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = links.email;
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div className="page-shell contact-inner" {...reveal}>
        <p className="kicker">Have a hard problem?</p>
        <h2>Let’s make it work.</h2>
        <p>
          I’m interested in backend, platform, and applied AI roles where thoughtful
          engineering matters more than buzzwords.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href={links.email}>
            <Mail size={17} /> Start a conversation
          </a>
          <button className="copy-email" type="button" onClick={copyEmail}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : site.email}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer page-shell">
      <p>© {new Date().getFullYear()} Akshat Garg</p>
      <p>Faridabad, India · IST</p>
      <div>
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
        <a href={links.email} aria-label="Email"><Mail size={16} /></a>
      </div>
    </footer>
  );
}

export default App;
