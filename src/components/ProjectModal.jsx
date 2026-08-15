import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const closeRef = useRef(null);

  // Esc to dismiss, and move focus into the dialog when it opens so keyboard
  // users aren't left behind on the page underneath.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const id = setTimeout(() => closeRef.current?.focus(), 60);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(id);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-3xl shadow-lift"
          >
            <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-bg/85 px-6 py-4 backdrop-blur-xl">
              <h2 className="min-w-0 truncate font-display text-fluid-xl text-ink">
                {project.title}
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
              >
                <X size={19} />
              </button>
            </header>

            <div className="p-6">
              <img
                src={project.thumbnail}
                alt={`${project.title} interface`}
                className="mb-6 aspect-[16/9] w-full rounded-2xl border border-white/[0.07] object-cover"
              />

              <p className="text-fluid-base leading-relaxed text-ink-2">
                {project.description}
              </p>

              {project.achievements?.length > 0 && (
                <section className="mt-8">
                  <h3 className="eyebrow mb-5">Architecture &amp; highlights</h3>
                  <ul className="space-y-3.5">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-fluid-sm leading-relaxed text-ink-2"
                      >
                        <span
                          className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-gold/70"
                          aria-hidden="true"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="mt-8 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={15} /> Live demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={15} /> Source code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
