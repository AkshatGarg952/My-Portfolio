import React from 'react';
import { FaPlay } from "react-icons/fa"; // Play icon

const ProjectCard = ({ project, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(project)}
      className="project-card group cursor-pointer bg-[rgba(255,107,53,0.05)] border-2 border-[rgba(255,107,53,0.3)] rounded-2xl overflow-hidden relative transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-[0_20px_50px_rgba(255,107,53,0.2)] w-[290px] sm:w-[310px] md:w-[330px] lg:w-[350px] max-w-full"
    >
      <div className="project-glow" />

      {/* IMAGE SECTION */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-[rgba(255,107,53,0.1)] to-[rgba(139,92,246,0.1)]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ display: 'block' }}
        />
        {/* Circular Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-xl opacity-90 transition-transform duration-300 group-hover:scale-110">
            <FaPlay />
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6">
        <h3 className="text-2xl font-cinzel text-accent mb-3">{project.title}</h3>
        <p className="text-[1.1rem] text-gray text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[rgba(59,130,246,0.2)] border border-[rgba(59,130,246,0.4)] rounded-full text-blue text-xs font-semibold transition-all duration-300 hover:bg-[rgba(59,130,246,0.3)] hover:border-blue hover:-translate-y-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[rgba(139,92,246,0.2)] border-2 border-[rgba(139,92,246,0.4)] rounded-lg text-purple font-semibold transition-all duration-300 hover:bg-[rgba(139,92,246,0.3)] hover:border-purple hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,92,246,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Folder</span> GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,107,53,0.2)] border-2 border-[rgba(255,107,53,0.4)] rounded-lg text-primary font-semibold transition-all duration-300 hover:bg-[rgba(255,107,53,0.3)] hover:border-primary hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(255,107,53,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Rocket</span> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
