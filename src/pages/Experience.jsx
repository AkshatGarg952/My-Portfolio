// src/App.jsx
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard.jsx';
import FloatingParticles from '../components/FloatingParticles';
const experiences = [
  {
    company: "Zecruit AI",
    role: "Software Engineer Intern",
    duration: "Jun 2026 - Present",
    achievements: [
  "Fixed an end-to-end AI interview generation bug by enabling post-call extraction variables across React, FastAPI, LLM prompts, and response normalization workflows",
  "Extended AI-driven interview configuration by designing prompt schemas and structured JSON outputs to generate dynamic post-call extraction parameters"
],
    tech: ["FastAPI", "Postgres", "Typescript", "Python", "Supabase"]
  },
   {
    company: "Zyvka",
    role: "Backend Developer Intern",
    duration: "Feb 2026 - Jun 2026",
    achievements: [
  "Built and shipped scalable backend APIs using Node.js, Express.js, MongoDB, and Redis to power production queue workflows",
  "Replaced 6 hardcoded queue routes with a dynamic routing architecture, making the system easier to maintain and extend",
  "Optimized queue retrieval for 10K+ jobs using buffered fetching, filtering, and pagination, improving response efficiency by 70%",
  "Developed scheduling and rerun workflows with configurable validation, enabling reliable execution across multiple pipelines",
  "Designed intelligent priority management with collision avoidance and safe reordering to ensure stable queue execution",
  "Collaborated across engineering teams to build, test, and deploy production-ready backend features"
],
    tech: ["Express", "MongoDB", "Typescript", "BullMQ", "Redis", "OpenAI", "Exotel", "Vapi"]
  },
  {
    company: "Resonate Fitness",
    role: "SWE Intern",
    duration: "Dec 2025 - Feb 2026",
    achievements: [
  "Built secure backend microservices using FastAPI for AI-powered healthcare and nutrition workflows",
  "Designed resilient data ingestion pipelines with validation, retry mechanisms, and metadata verification to improve reliability",
  "Engineered AI-powered diagnostics and biomarker processing workflows, significantly reducing manual processing effort",
  "Architected an intelligent memory and retrieval layer with fallback mechanisms, improving retrieval success from 82% to 97%",
  "Developed responsive frontend interfaces using React.js and Tailwind CSS, integrating seamlessly with backend APIs",
  "Worked across the full stack, contributing to feature development, debugging, deployment, and production improvements"
],
    tech: ["Mem0", "Express", "MongoDB", "Javascript", "FastAPI", "Python", "Open AI", "React.js"]
  },
  {
    company: "Dwarf AI",
    role: "Full Stack AI Intern",
    duration: "Jun 2025 - Jul 2025",
    achievements: [
  "Built backend services for Clinify AI using FastAPI, enabling secure medical report uploads and multi-user AI workflows",
  "Engineered LangChain and ChromaDB based RAG pipelines, improving LLM response relevance by 25%",
  "Developed AI-powered report summarization and follow-up workflows, reducing manual review effort by 30%",
  "Built responsive frontend interfaces using React.js and Tailwind CSS for AI-powered healthcare applications",
  "Integrated REST APIs, authentication, and AI services to deliver seamless end-to-end user experiences",
  "Contributed across the product lifecycle, from implementation and testing to deployment and iterative improvements"
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
