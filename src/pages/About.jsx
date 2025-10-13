import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import JourneyBook from '../components/JourneyBook';
import EducationCard from '../components/EducationCard';
import SkillsSection from '../components/SkillsSection';
import FloatingParticles from '../components/FloatingParticles';
import "../styles/AboutPage.css";
export default function AboutPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-[#1a0a0a] to-dark -z-20">
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(255,107,53,0.1)] via-transparent to-transparent opacity-30 animate-mystical-pulse" />
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,92,246,0.1)] via-transparent to-transparent opacity-30 animate-mystical-pulse" style={{ top: '20%', left: '80%' }} />
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(16,185,129,0.08)] via-transparent to-transparent opacity-30 animate-mystical-pulse" style={{ top: '60%', left: '40%' }} />
      </div>

      <FloatingParticles />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
            <div className="lg:col-span-3">
              <JourneyBook />
            </div>
            <div className="lg:col-span-2">
              <EducationCard />
            </div>
          </div>

          <SkillsSection />
        </div>
      </main>
    </>
  );
}