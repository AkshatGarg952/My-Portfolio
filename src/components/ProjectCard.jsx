import { motion } from 'framer-motion';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';
import useSpotlight from '../hooks/useSpotlight.js';

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const spotlight = useSpotlight();

  // The card itself is the primary target, so it needs to behave like a button
  // for keyboard users too — not just respond to clicks.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      className="card group flex h-full cursor-pointer flex-col"
      data-cursor-hover
      {...spotlight}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.thumbnail}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />

        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-bg/60 text-ink opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <Maximize2 size={13} />
        </span>
      </div>

      <div className="card-body flex flex-1 flex-col pt-5">
        {/* The index sits with the title rather than over the thumbnail, where
            it competed with whatever the screenshot happened to show. */}
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-fluid-xs text-gold/70">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display text-fluid-lg text-ink">{project.title}</h3>
        </div>

        <p className="mt-2 line-clamp-3 text-fluid-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {/* mt-auto keeps the link row on the baseline across a ragged grid */}
        <div className="mt-auto flex items-center gap-5 border-t border-white/[0.07] pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-fluid-sm text-muted transition-colors hover:text-ink"
          >
            <Github size={15} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-fluid-sm text-gold transition-colors hover:text-gold-light"
          >
            <ExternalLink size={15} /> Live demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
