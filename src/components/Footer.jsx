import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, FileText } from 'lucide-react';
import { site, links } from '../data/site.js';

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { label: 'GitHub', href: links.github, icon: Github },
  { label: 'LinkedIn', href: links.linkedin, icon: Linkedin },
  { label: 'Email', href: links.email, icon: Mail },
  { label: 'Résumé', href: links.resume, icon: FileText },
];

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });

  return (
    <footer className="relative z-10 mt-24 border-t border-white/[0.07]">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-tight text-ink"
            >
              {site.initials}
              <span className="text-gold">.</span>
            </Link>
            <p className="mt-4 text-fluid-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 font-mono text-fluid-xs text-faint">{site.location}</p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            <p className="mb-1 font-mono text-fluid-xs uppercase tracking-[0.2em] text-faint">
              Pages
            </p>
            {pages.map((p) => (
              <Link
                key={p.name}
                to={p.path}
                className="text-fluid-sm text-muted transition-colors hover:text-ink"
              >
                {p.name}
              </Link>
            ))}
          </nav>

          <div>
            <p className="mb-4 font-mono text-fluid-xs uppercase tracking-[0.2em] text-faint">
              Elsewhere
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-xl text-muted hover:text-gold"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rule my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center font-mono text-fluid-xs text-faint sm:text-left">
            © {new Date().getFullYear()} {site.name} · Built with React, Tailwind &amp;
            Framer Motion
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 font-mono text-fluid-xs text-muted transition-all hover:border-gold/40 hover:text-gold"
          >
            Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
