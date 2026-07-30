import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onOpen, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={() => onOpen(project)}
      className="group cursor-pointer glass glass-hover rounded-2xl overflow-hidden"
      data-cursor-hover
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-ink mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs text-muted border border-white/10 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
          >
            <Github size={15} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-gold hover:text-gold-light transition-colors"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
