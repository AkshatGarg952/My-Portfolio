import Navbar from '../components/Navbar';
import SkillsSection from '../components/SkillsSection';
import FloatingParticles from '../components/FloatingParticles';
import { Link } from 'react-router-dom';

export default function SkillsPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-[#1a0a0a] to-dark -z-20">
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,92,246,0.1)] via-transparent to-transparent opacity-30 animate-mystical-pulse" />
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(255,107,53,0.1)] via-transparent to-transparent opacity-30 animate-mystical-pulse" style={{ top: '20%', left: '80%' }} />
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(59,130,246,0.08)] via-transparent to-transparent opacity-30 animate-mystical-pulse" style={{ top: '60%', left: '40%' }} />
      </div>

      <FloatingParticles />
      <Navbar activePage={'Skills'} />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 mt-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4">
              <span className="mystical-text">Magical</span>{' '}
              <span className="gradient-text">Arsenal</span>
            </h1>
            <div className="title-underline mb-6" />
            <p className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto">
              A comprehensive collection of technologies, frameworks, and tools I've mastered to craft exceptional digital experiences
            </p>
          </div>

          {/* Skills Section */}
          <SkillsSection />

          {/* Call to Action */}
         
        </div>
      </main>
    </>
  );
}

