import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, ArrowDown } from 'lucide-react';
import HeroVisual from '../components/HeroVisual.jsx';
import StatusPill from '../components/StatusPill.jsx';
import TechMarquee from '../components/TechMarquee.jsx';
import MagneticButton from '../components/MagneticButton.jsx';
import { projects } from '../data/projects.js';

const stats = [
  { value: '3', label: 'Production internships' },
  { value: '3★', label: 'CodeChef · 1661 peak' },
  { value: '1645', label: 'LeetCode rating' },
  { value: '500+', label: 'Users on a platform I led' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[92vh] flex items-center section-pad pt-32 pb-16">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <StatusPill />
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-ink">
              Akshat Garg
            </h1>
            <p className="mt-3 text-xl sm:text-2xl text-gold font-medium font-display italic">
              Full-Stack Developer &amp; AI Engineer
            </p>

            <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
              I design and ship reliable backend systems, scalable APIs, and AI-powered
              products &mdash; from idea to production, used by real people.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link to="/projects" className="btn-primary" data-cursor-hover>
                  View My Work <ArrowRight size={16} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact" className="btn-secondary" data-cursor-hover>
                  Get In Touch
                </Link>
              </MagneticButton>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://github.com/AkshatGarg952"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-ink transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-garg-79b06428a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-ink transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-[360px] sm:h-[440px] lg:h-[520px]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      <div className="flex justify-center pb-10 text-muted">
        <ArrowDown size={18} className="animate-float" />
      </div>

      {/* Tech marquee */}
      <section className="border-y border-white/[0.06] py-8">
        <TechMarquee />
      </section>

      {/* Quick facts */}
      <section className="section-pad py-24 max-w-6xl mx-auto">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass glass-hover rounded-2xl p-6 text-center">
              <p className="font-display text-3xl sm:text-4xl gradient-text font-medium">{s.value}</p>
              <p className="text-muted text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured work */}
      <section className="section-pad py-8 max-w-6xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-medium">Featured projects</h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted hover:text-gold transition-colors"
            data-cursor-hover
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to="/projects"
                className="group block glass glass-hover rounded-2xl overflow-hidden"
                data-cursor-hover
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs text-muted border border-white/10 rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-pad py-32 max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl sm:text-5xl text-ink font-medium leading-tight">
            Let&rsquo;s build something <span className="gradient-text italic">great</span> together.
          </h2>
          <div className="mt-10">
            <MagneticButton>
              <Link to="/contact" className="btn-primary" data-cursor-hover>
                Start a conversation <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
