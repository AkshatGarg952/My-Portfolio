// src/App.jsx
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard.jsx';
import FloatingParticles from '../components/FloatingParticles';
const experiences = [
   {
    company: "Zyvka",
    role: "Backend Developer Intern",
    duration: "Feb 2026 - Present",
    achievements: [
      "Migrated four in-memory job queues to a BullMQ + Redis distributed architecture, enabling persistent job storage and fault-tolerant processing for AI call and evaluation pipelines",
      "Implemented queue workers with controlled concurrency limits (8 USA calls, 10 India calls, 5 AI evaluations) to manage asynchronous workloads reliably",
      "Added retry and backoff strategies to handle failures across external services used in the pipeline",
      "Integrated queue workers with AI voice and evaluation workflows powered by OpenAI, Exotel, and Vapi, ensuring stable processing of AI-driven calls"
    ],
    tech: ["Express", "MongoDB", "Typescript", "BullMQ", "Redis", "OpenAI", "Exotel", "Vapi"]
  },
  {
    company: "Resonate Fitness",
    role: "SWE Intern",
    duration: "Dec 2025 - Present",
    achievements: [
      "Led backend productionization of health analytics pipelines by building secure ingestion services, validation layers, and data pipelines",
      "Reduced ingestion failures from 35% to <5% by implementing robust validation and processing mechanisms for incoming health data",
      "Architected a production-grade memory layer with metadata validation, PII sanitization, retry/backoff strategies, and legacy fallback retrieval",
      "Improved retrieval success rate from 82% to 97% through reliable metadata handling and fallback retrieval mechanisms",
      "Engineered diagnostics and food ingestion pipelines with AI parsing and biomarker normalization across 75 markers, reducing processing time by 45% and cleanup effort by 60%"
    ],
    tech: ["Mem0", "Express", "MongoDB", "Javascript", "FastAPI", "Python", "Open AI", "React.js"]
  },
  {
    company: "Dwarf AI",
    role: "Full Stack AI Intern",
    duration: "Jun 2025 - Jul 2025",
    achievements: [
      "Developed and deployed backend services for Clinify AI, enabling secure medical report uploads and multi-user AI sessions using FastAPI, JWT authentication, and REST APIs",
      "Engineered and optimized a LangChain–ChromaDB RAG pipeline, improving answer relevance by 25% across 40+ evaluated queries",
      "Implemented LLM-based conversational session summarization workflows to generate structured insights from AI interactions",
      "Built follow-up conversation workflows to assist users after report analysis sessions",
      "Validated the system with 20+ internal users, reducing manual review time by 30%"
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
