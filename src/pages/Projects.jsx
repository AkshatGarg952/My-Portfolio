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
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  return (
    <main className="pt-32 pb-20 section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          description="A few things I've built end-to-end — real users, real infrastructure decisions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} onOpen={openModal} index={index} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default Projects;
