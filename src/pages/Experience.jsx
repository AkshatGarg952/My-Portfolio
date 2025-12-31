// src/App.jsx
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard.jsx';
import FloatingParticles from '../components/FloatingParticles';
const experiences = [
  {
    company: "Resonate Fitness",
    role: "SWE Intern",
    duration: "Dec 2025 - Present",
    achievements: [
      "Contributing to backend productionization of Resonate Fitness by supporting infrastructure and deployment workflows for secure ingestion and real-time health analytics",
      "Engineered diagnostics pipelines to parse and normalize 20+ biomarkers from PDF reports, achieving 90% extraction accuracy, enabling longitudinal health trend analysis",
      "Implemented Google Fit ingestion services with scheduled syncs, idempotent processing, and retry logic to reliably aggregate steps, sleep, and workout data"
    ],
    tech: ["React", "Express", "MongoDB", "Javascript", "FastAPI", "Python", "Open AI"]
  },
  {
    company: "Dwarf AI",
    role: "Full Stack AI Intern",
    duration: "Jun 2025 - Jul 2025",
    achievements: [
      "Developed and deployed core backend modules for Clinify AI, enabling secure medical report uploads and AI-driven patient interactions",
      "Engineered and optimized a LangChain–ChromaDB RAG pipeline, improving answer relevance by 25% across 40+ evaluated queries",
      "Developed a session-based, multi-user chat system using FastAPI and JWT authentication, supporting concurrent authenticated conversations with persistent context",
      "Built and validated PDF report summarization and AI-guided follow-up workflows with 20+ internal users, reducing report analysis time by 30%",
    ],
    tech: ["React", "FastAPI", "MongoDB", "Python", "Docker", "AWS", "Langgraph", "ChromaDB", "Langchain"]
  }

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
