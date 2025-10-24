// src/App.jsx
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard.jsx';
import FloatingParticles from '../components/FloatingParticles';
import '../styles/Experience.css';
const experiences = [
  {
    company: "DWARF AI",
    role: "Full Stack Developer Intern",
    duration: "Jun 2024 - Present",
    achievements: [
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
      "Implemented AI-powered features and machine learning models for enhanced user experience",
      "Optimized application performance, reducing load times by 40%",
      "Collaborated with cross-functional teams to deliver high-quality software solutions"
    ],
    tech: ["React", "Node.js", "MongoDB", "Python", "TensorFlow", "AWS", "Docker"]
  },
  {
    company: "IIIT Bhopal",
    role: "Research Assistant",
    duration: "Jan 2024 - May 2024",
    achievements: [
      "Conducted research on machine learning algorithms and their applications",
      "Analyzed large datasets and implemented data visualization solutions",
      "Co-authored research papers on AI and published findings in academic journals",
      "Assisted in teaching undergraduate courses and mentoring students"
    ],
    tech: ["Python", "Jupyter", "Pandas", "Scikit-learn", "Matplotlib", "TensorFlow"]
  },
  {
    company: "Freelance",
    role: "Freelance Developer",
    duration: "2023 - Present",
    achievements: [
      "Delivered 15+ successful web development projects for diverse clients",
      "Created responsive and user-friendly interfaces with modern design principles",
      "Consistently met project deadlines while maintaining high code quality",
      "Built long-term relationships with clients through excellent communication"
    ],
    tech: ["React", "Vue.js", "WordPress", "PHP", "MySQL", "Figma"]
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