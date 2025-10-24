import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import FloatingParticles from '../components/FloatingParticles';
import { projects } from '../data/projects';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRefs = useRef([]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.transform = 'translateY(50px)';
        ref.style.transition = 'all 0.6s ease-out';
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

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
    <>
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] -z-20" />
      <div
        className="fixed inset-0 opacity-50 animate-mystical-pulse -z-10"
        style={{
          background: `radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
        }}
      />
      <FloatingParticles />
      <Navbar activePage={'Projects'} />

      {/* Main Content */}
     {/* Main Content */}
<main className="pt-24 pb-8 min-h-screen">
  {/* ✅ Fixed-width, centered container with balanced padding */}
  <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16">
    {/* Title */}
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4">
        <span className="mystical-text">Mystical</span>{' '}
        <span className="gradient-text">Creations</span>
      </h1>
      <div className="title-underline" />
    </div>

    {/* Project Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 place-items-center">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <ProjectCard project={project} onOpen={openModal} />
        </div>
      ))}
    </div>
  </div>
</main>


      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default Projects;
