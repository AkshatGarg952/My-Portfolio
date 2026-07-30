import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Home, User, Code2, Briefcase, FolderGit2, Send,
  Github, Linkedin, FileText, Copy, CornerDownLeft, Flashlight,
} from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1T7jIhmsjw4mrH9eZVZWHd8cAw10ddLg0/view?usp=sharing';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const actions = useMemo(
    () => [
      { id: 'home', label: 'Home', icon: Home, run: () => navigate('/') },
      { id: 'about', label: 'About', icon: User, run: () => navigate('/about') },
      { id: 'skills', label: 'Skills', icon: Code2, run: () => navigate('/skills') },
      { id: 'experience', label: 'Experience', icon: Briefcase, run: () => navigate('/experience') },
      { id: 'projects', label: 'Projects', icon: FolderGit2, run: () => navigate('/projects') },
      { id: 'contact', label: 'Contact', icon: Send, run: () => navigate('/contact') },
      { id: 'github', label: 'Open GitHub', icon: Github, run: () => window.open('https://github.com/AkshatGarg952', '_blank') },
      { id: 'linkedin', label: 'Open LinkedIn', icon: Linkedin, run: () => window.open('https://www.linkedin.com/in/akshat-garg-79b06428a/', '_blank') },
      { id: 'resume', label: 'View Resume', icon: FileText, run: () => window.open(RESUME_URL, '_blank') },
      { id: 'email', label: 'Copy email address', icon: Copy, run: () => navigator.clipboard.writeText('gargakshat952@gmail.com') },
      { id: 'bat-signal', label: 'Signal the Bat', icon: Flashlight, run: () => window.dispatchEvent(new Event('trigger-bat-signal')) },
    ],
    [navigate]
  );

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const onExternalOpen = () => setOpen(true);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('open-command-palette', onExternalOpen);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('open-command-palette', onExternalOpen);
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const runAndClose = (action) => {
    action.run();
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      runAndClose(filtered[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[12vh] bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg glass rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08]">
              <Search size={18} className="text-muted shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Jump to a page or action…"
                className="w-full bg-transparent outline-none text-ink placeholder:text-muted text-sm"
              />
              <kbd className="hidden sm:block text-[10px] text-muted border border-white/10 rounded px-1.5 py-0.5">esc</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-5 py-6 text-sm text-muted text-center">No matches.</p>
              )}
              {filtered.map((action, i) => {
                const Icon = action.icon;
                const active = i === activeIndex;
                return (
                  <button
                    key={action.id}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => runAndClose(action)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-sm text-left transition-colors ${
                      active ? 'bg-white/[0.06] text-ink' : 'text-muted'
                    }`}
                  >
                    <Icon size={16} className={active ? 'text-gold' : 'text-muted'} />
                    <span className="flex-1">{action.label}</span>
                    {active && <CornerDownLeft size={14} className="text-muted" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
