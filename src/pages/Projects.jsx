import { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import { projects } from '../data/projects.js';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    // Hold the data until the exit animation finishes so the modal doesn't
    // blank out mid-transition.
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="shell pb-20 pt-28 sm:pt-32">
      <SectionHeader
        eyebrow="Projects"
        title="Things I built"
        highlight="end to end"
        description="Real infrastructure decisions, deployed and running — not screenshots of tutorials. Open any card for the architecture behind it."
      />

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={openModal}
            index={index}
          />
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default Projects;
