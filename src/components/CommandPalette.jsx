import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Home, User, Code2, Briefcase, FolderGit2, Send,
  Github, Linkedin, FileText, Copy, CornerDownLeft, Sparkles, Check,
} from 'lucide-react';
import { site, links } from '../data/site.js';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const actions = useMemo(
    () => [
      { id: 'home', label: 'Home', group: 'Navigate', icon: Home, run: () => navigate('/') },
      { id: 'about', label: 'About', group: 'Navigate', icon: User, run: () => navigate('/about') },
      { id: 'skills', label: 'Skills', group: 'Navigate', icon: Code2, run: () => navigate('/skills') },
      { id: 'experience', label: 'Experience', group: 'Navigate', icon: Briefcase, run: () => navigate('/experience') },
      { id: 'projects', label: 'Projects', group: 'Navigate', icon: FolderGit2, run: () => navigate('/projects') },
      { id: 'contact', label: 'Contact', group: 'Navigate', icon: Send, run: () => navigate('/contact') },

      { id: 'resume', label: 'View résumé', group: 'Links', icon: FileText, run: () => window.open(links.resume, '_blank', 'noopener') },
      { id: 'github', label: 'Open GitHub', group: 'Links', icon: Github, run: () => window.open(links.github, '_blank', 'noopener') },
      { id: 'linkedin', label: 'Open LinkedIn', group: 'Links', icon: Linkedin, run: () => window.open(links.linkedin, '_blank', 'noopener') },

      {
        id: 'email',
        label: 'Copy email address',
        group: 'Actions',
        icon: Copy,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          } catch {
            /* clipboard unavailable — nothing useful to do */
          }
        },
      },
      {
        id: 'bat-signal',
        label: 'Signal the Bat',
        group: 'Actions',
        icon: Sparkles,
        run: () => window.dispatchEvent(new Event('trigger-bat-signal')),
      },
    ],
    [navigate]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q)
    );
  }, [actions, query]);

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

  useEffect(() => setActiveIndex(0), [query, open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setQuery('');
    const id = setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(id);
    };
  }, [open]);

  // Keep the highlighted row in view when arrowing past the fold.
  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const runAction = (action) => {
    action.run();
    if (!action.keepOpen) setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault();
      runAction(filtered[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/75 px-4 pt-[10vh] backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl shadow-lift"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
              <Search size={17} className="shrink-0 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Jump to a page or action…"
                aria-label="Search commands"
                className="w-full bg-transparent text-fluid-sm text-ink outline-none placeholder:text-faint"
              />
              <kbd className="hidden shrink-0 rounded border border-white/10 px-1.5 py-0.5 font-mono text-fluid-xs text-muted sm:block">
                esc
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[min(22rem,50svh)] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="px-5 py-8 text-center text-fluid-sm text-muted">
                  No matches for &ldquo;{query}&rdquo;.
                </p>
              ) : (
                filtered.map((action, i) => {
                  const Icon = action.icon;
                  const active = i === activeIndex;
                  const newGroup = i === 0 || filtered[i - 1].group !== action.group;

                  return (
                    <div key={action.id}>
                      {newGroup && (
                        <p className="px-5 pb-1.5 pt-3 font-mono text-fluid-xs uppercase tracking-[0.18em] text-faint">
                          {action.group}
                        </p>
                      )}
                      <button
                        data-active={active}
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => runAction(action)}
                        className={`flex w-full items-center gap-3 px-5 py-2.5 text-left text-fluid-sm transition-colors ${
                          active ? 'bg-white/[0.06] text-ink' : 'text-muted'
                        }`}
                      >
                        <Icon
                          size={15}
                          className={`shrink-0 ${active ? 'text-gold' : 'text-faint'}`}
                        />
                        <span className="flex-1 truncate">{action.label}</span>
                        {action.id === 'email' && copied && (
                          <span className="flex shrink-0 items-center gap-1 font-mono text-fluid-xs text-live">
                            <Check size={12} /> copied
                          </span>
                        )}
                        {active && action.id !== 'email' && (
                          <CornerDownLeft size={13} className="shrink-0 text-faint" />
                        )}
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
