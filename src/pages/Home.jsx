import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, ArrowUpRight, FileText, ArrowDown } from 'lucide-react';
import SystemDiagram from '../components/SystemDiagram.jsx';
import StatusPill from '../components/StatusPill.jsx';
import TechMarquee from '../components/TechMarquee.jsx';
import MagneticButton from '../components/MagneticButton.jsx';
import Reveal from '../components/Reveal.jsx';
import useSpotlight from '../hooks/useSpotlight.js';
import { projects } from '../data/projects.js';
import { experiences } from '../data/experience.js';
import { site, links, metrics, focusAreas } from '../data/site.js';

const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const spotlight = useSpotlight();

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────── */}
      {/* The 92svh floor only applies once the hero is side-by-side. Stacked,
          it would stretch the two auto rows and open a dead gap between the
          copy and the diagram. */}
      <section className="shell grid gap-10 pb-16 pt-28 lg:min-h-[92svh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <StatusPill />

          <h1 className="mt-6 font-display text-fluid-4xl font-medium leading-[1.02] text-ink">
            {site.name}
          </h1>

          <p className="mt-3 font-display text-fluid-xl italic text-gold">{site.role}</p>

          <p className="mt-6 max-w-prose text-fluid-base leading-relaxed text-ink-2">
            {site.tagline} Three production internships building queues that stay ordered
            under load, retrieval layers that actually retrieve, and APIs other engineers
            can maintain after I&rsquo;ve moved on.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton>
              <Link to="/projects" className="btn-primary" data-cursor-hover>
                View my work <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                data-cursor-hover
              >
                <FileText size={15} /> Résumé
              </a>
            </MagneticButton>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-ink"
            >
              <Github size={19} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={19} />
            </a>
            <span className="h-4 w-px bg-white/10" />
            <Link
              to="/contact"
              className="btn-ghost"
              data-cursor-hover
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease }}
          className="h-[380px] sm:h-[460px] lg:h-[540px]"
        >
          <SystemDiagram />
        </motion.div>
      </section>

      <div className="flex justify-center pb-10 text-faint" aria-hidden="true">
        <ArrowDown size={17} className="animate-float" />
      </div>

      {/* ── Stack marquee ──────────────────────────────────────── */}
      <section className="border-y border-white/[0.06] py-7" aria-label="Technology stack">
        <TechMarquee />
      </section>

      {/* ── Proof ──────────────────────────────────────────────── */}
      <section className="shell section-y">
        <Reveal className="mb-10">
          <p className="eyebrow mb-4">By the numbers</p>
          <h2 className="max-w-2xl font-display text-fluid-2xl font-medium text-ink">
            Shipped work, not coursework.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div className="card h-full" {...spotlight}>
                <div className="card-body">
                  <p className="gradient-text font-display text-fluid-2xl font-medium">
                    {m.value}
                  </p>
                  <p className="mt-2 text-fluid-sm font-medium text-ink">{m.label}</p>
                  <p className="mt-1.5 text-fluid-xs leading-relaxed text-muted">
                    {m.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What I do ──────────────────────────────────────────── */}
      <section className="shell section-y pt-0">
        <Reveal className="mb-10">
          <p className="eyebrow mb-4">What I do</p>
          <h2 className="max-w-2xl font-display text-fluid-2xl font-medium text-ink">
            Three things I&rsquo;m genuinely good at.
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card h-full" {...spotlight}>
                <div className="card-body">
                  <span className="font-mono text-fluid-xs text-gold/70">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-fluid-lg text-ink">{f.title}</h3>
                  <p className="mt-2.5 text-fluid-sm leading-relaxed text-muted">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Featured work ──────────────────────────────────────── */}
      <section className="shell section-y pt-0">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="font-display text-fluid-2xl font-medium text-ink">
              Featured projects
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost" data-cursor-hover>
            View all <ArrowRight size={14} />
          </Link>
        </Reveal>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {projects.slice(0, 2).map((project, i) => (
            <Reveal key={project.title} delay={i * 0.09}>
              <Link
                to="/projects"
                className="card group block h-full"
                data-cursor-hover
                {...spotlight}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
                </div>

                <div className="card-body pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-fluid-lg text-ink">{project.title}</h3>
                    <ArrowUpRight
                      size={17}
                      className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                    />
                  </div>
                  <p className="mt-2 line-clamp-2 text-fluid-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Experience preview ─────────────────────────────────── */}
      <section className="shell section-y pt-0">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Experience</p>
            <h2 className="font-display text-fluid-2xl font-medium text-ink">
              Where I&rsquo;ve shipped
            </h2>
          </div>
          <Link to="/experience" className="btn-ghost" data-cursor-hover>
            Full history <ArrowRight size={14} />
          </Link>
        </Reveal>

        <div className="overflow-hidden rounded-3xl border border-white/[0.07]">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.06}>
              <Link
                to="/experience"
                data-cursor-hover
                className={`group flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-6 transition-colors duration-300 hover:bg-white/[0.03] sm:px-7 ${
                  i > 0 ? 'border-t border-white/[0.07]' : ''
                }`}
              >
                <div className="min-w-0">
                  <h3 className="font-display text-fluid-lg text-ink">{exp.company}</h3>
                  <p className="text-fluid-sm text-muted">{exp.role}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-fluid-xs text-faint">{exp.duration}</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────────── */}
      <section className="shell-narrow section-y pt-0 text-center">
        <Reveal>
          <p className="eyebrow eyebrow-center mb-5 justify-center">What&rsquo;s next</p>
          <h2 className="mx-auto max-w-3xl font-display text-fluid-3xl font-medium leading-[1.08] text-ink">
            Let&rsquo;s build something{' '}
            <span className="gradient-text italic">worth maintaining</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-fluid-base leading-relaxed text-muted">
            {site.availability}. If you&rsquo;re hiring for backend, platform or applied-AI
            work, I&rsquo;d like to hear about it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton>
              <Link to="/contact" className="btn-primary" data-cursor-hover>
                Start a conversation <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={links.email} className="btn-secondary" data-cursor-hover>
                {site.email}
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
