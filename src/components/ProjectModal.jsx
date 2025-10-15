import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      <div
        className="bg-dark border-2 border-[rgba(255,107,53,0.3)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-300"
        style={{
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(-50px)',
          opacity: isOpen ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 pb-3 border-b border-[rgba(255,107,53,0.3)]">
          <h2 className="text-2xl md:text-3xl font-cinzel text-accent">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray text-3xl hover:text-primary hover:bg-[rgba(255,107,53,0.1)] rounded-full p-2 transition-all duration-300 hover:rotate-90"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-6"
          />
          <p className="text-gray leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[rgba(59,130,246,0.2)] border border-[rgba(59,130,246,0.4)] rounded-full text-blue text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 bg-[rgba(139,92,246,0.2)] border-2 border-[rgba(139,92,246,0.4)] rounded-lg text-purple font-semibold hover:bg-[rgba(139,92,246,0.3)] hover:border-purple"
            >
              <span>Folder</span> GitHub
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,107,53,0.2)] border-2 border-[rgba(255,107,53,0.4)] rounded-lg text-primary font-semibold hover:bg-[rgba(255,107,53,0.3)] hover:border-primary"
            >
              <span>Rocket</span> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;