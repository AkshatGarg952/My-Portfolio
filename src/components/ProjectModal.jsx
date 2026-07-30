import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[300] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/[0.08] sticky top-0 bg-surface/90 backdrop-blur-md">
              <h2 className="font-display text-2xl text-ink">{project.title}</h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-muted hover:text-ink transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 sm:h-72 object-cover rounded-xl mb-6"
              />
              <p className="text-muted leading-relaxed mb-6">{project.description}</p>

              {project.achievements && project.achievements.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display text-lg text-ink mb-4">Technical highlights</h3>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-3 text-muted leading-relaxed text-sm">
                        <span className="text-gold shrink-0 mt-0.5">+</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs text-muted border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !px-5"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2.5 !px-5"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
