// src/App.jsx
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard.jsx';
import FloatingParticles from '../components/FloatingParticles';
import '../styles/Experience.css';
const experiences = [
  {
    company: "DWARF AI",
    role: "Full Stack AI Intern",
    duration: "Jun 2025 - Jul 2025",
    achievements: [
      "Collaborated with a team of 3 to build Clinify AI, a React.js, Tailwind CSS, and FastAPI-powered healthcare platform for medical report uploads and AI chat",
      "Designed a modular chatbot interface with 5 reusable React components, enabling PDF chat summaries that cut report creation time by 30%, enhancing clinician productivity",
      "Developed a Retrieval-Augmented Generation (RAG) pipeline with Langchain and ChromaDB for efficient PDF vector embeddings, improving chatbot response relevance by 25%",
      "Implemented context-aware chat sessions and automated PDF summaries, collectively reducing report generation time by 30%, streamlining clinician workflows",
      "Built a secure session-based chat system with JWT authentication, enabling multiple personalized conversations and enhancing data privacy compliance"
    ],
    tech: ["React", "FastAPI", "MongoDB", "Python", "Docker", "AWS", "Langgraph", "ChromaDB", "Langchain"]
  },

];

export default function Experience() {
  return (
    <>
      <div className="mystical-bg" />
      <FloatingParticles />

      <Navbar activePage={'Experience'} />

      <main className="min-h-screen pt-24 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-8 md:px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-4xl font-['Cinzel'] mb-2">
              <span className="text-yellow-400" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}>Mystical</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold">
                Journey
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-4 rounded-full relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg opacity-30 blur-sm animate-pulse" />
            </div>
          </div>

          {/* <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-red-500/10 border border-red-500/50 p-2 rounded-lg">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div> */}
          <div className="space-y-6">
  {experiences.map((exp, i) => (
    <ExperienceCard key={i} {...exp} />
  ))}
</div>
        </div>
      </main>
    </>
  );
}
