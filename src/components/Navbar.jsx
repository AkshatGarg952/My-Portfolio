import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, Flashlight } from 'lucide-react';

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
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-4"
      >
        <nav
          className={`w-full max-w-3xl flex items-center justify-between gap-4 rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/20' : 'border border-transparent'
          }`}
        >
          <Link to="/" className="font-display text-lg font-semibold text-ink tracking-tight shrink-0">
            AG<span className="text-gold">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    active ? 'text-[#181206]' : 'text-muted hover:text-ink'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-light -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event('trigger-bat-signal'))}
              aria-label="Signal the Bat"
              title="Signal the Bat"
              className="w-9 h-9 flex items-center justify-center text-muted hover:text-gold transition-colors"
            >
              <Flashlight size={18} />
            </button>

            <button
              onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
              className="hidden md:flex items-center gap-1.5 text-xs text-muted border border-white/10 rounded-full px-3 py-1.5 hover:border-white/25 hover:text-ink transition-colors"
            >
              <Command size={12} /> K
            </button>

            <button
              onClick={() => setIsMenuOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-ink"
              aria-label="Toggle menu"
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
            className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-24 mx-4 glass rounded-2xl p-4 flex flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active ? 'bg-gold/10 text-gold' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
