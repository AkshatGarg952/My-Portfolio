import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, FileText, ArrowUpRight } from 'lucide-react';
import { links } from '../data/site.js';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setScrolled(y > 16);
        // Only hide once past the hero, and never while the menu is open.
        setHidden(y > lastY && y > 160);
        lastY = y;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  // Lock the page behind the mobile sheet, and let Esc dismiss it.
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !isMenuOpen ? -110 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5"
      >
        <nav
          className={`flex w-full max-w-4xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled ? 'glass shadow-lift' : 'border border-transparent'
          }`}
        >
          <Link
            to="/"
            className="shrink-0 pl-1.5 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
            aria-label="Home"
          >
            AG<span className="text-gold">.</span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-fluid-sm font-medium transition-colors duration-300 ${
                    active ? 'text-[#17130a]' : 'text-muted hover:text-ink'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold to-gold-light"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
              aria-label="Open command palette"
              className="hidden items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1.5 font-mono text-fluid-xs text-muted transition-colors hover:border-white/25 hover:text-ink lg:flex"
            >
              <Command size={11} />K
            </button>

            {/* Resume is the single thing a recruiter is most likely to want,
                so it gets a permanent slot rather than living in a menu. */}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-fluid-sm font-semibold text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/[0.18] sm:flex"
            >
              <FileText size={13} />
              Résumé
            </a>

            <button
              onClick={() => setIsMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/92 backdrop-blur-2xl md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="safe-bottom flex h-full flex-col justify-between px-6 pb-8 pt-28"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col">
                {navItems.map((item, i) => {
                  const active = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.045, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-baseline justify-between border-b border-white/[0.07] py-4 font-display text-3xl transition-colors ${
                          active ? 'text-gold' : 'text-ink/85'
                        }`}
                      >
                        {item.name}
                        <span className="font-mono text-fluid-xs text-faint">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.a
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                View Résumé <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
