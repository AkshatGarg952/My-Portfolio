import { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { icon: "☕", name: "Java" },
      { icon: "🟨", name: "JavaScript" },
      { icon: "🐍", name: "Python" },
      { icon: "🔵", name: "C" },
    ],
  },

  {
    title: "Backend & Distributed Systems",
    icon: "⚙️",
    skills: [
      { icon: "🟩", name: "Node.js" },
      { icon: "🚀", name: "Express.js" },
      { icon: "⚡", name: "FastAPI" },
      { icon: "🍃", name: "MongoDB" },
      { icon: "🔴", name: "Redis" },
      { icon: "🗄️", name: "SQL" },
      { icon: "🔗", name: "REST APIs" },
    ],
  },

  {
    title: "Frontend & Web Engineering",
    icon: "🎨",
    skills: [
      { icon: "⚛️", name: "React.js" },
      { icon: "▲", name: "Next.js" },
      { icon: "🎨", name: "Tailwind CSS" },
      { icon: "🌐", name: "HTML" }
    ],
  },

  {
    title: "AI Engineering & LLM Systems",
    icon: "🤖",
    skills: [
      { icon: "🤖", name: "LangChain" },
      { icon: "🕸️", name: "LangGraph" },
      { icon: "📚", name: "RAG Pipelines" },
      { icon: "✍️", name: "Prompt Engineering" },
      { icon: "🔍", name: "LangSmith" },
      { icon: "📊", name: "Langfuse" },
    ],
  },

  {
    title: "Core Computer Science",
    icon: "🧠",
    skills: [
      { icon: "🧩", name: "Data Structures & Algorithms" },
      { icon: "🏗️", name: "Object-Oriented Programming" },
      { icon: "💾", name: "DBMS" },
      { icon: "🖥️", name: "Operating Systems" },
      { icon: "🌐", name: "Computer Networks" },
    ],
  },

  {
    title: "Developer Tools & Workflow",
    icon: "🛠️",
    skills: [
      { icon: "🐙", name: "GitHub" },
      { icon: "🔧", name: "Git" },
      { icon: "📝", name: "VS Code" },
      { icon: "📮", name: "Postman" },
    ],
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill-row").forEach((row, index) => {
      row.style.opacity = "0";
      row.style.transform = "translateY(50px)";
      row.style.transition = `all 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`;
      observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, rowIndex) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="mt-20 mb-16">
      

      <div className="space-y-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            className="
              skill-row skill-card
              flex flex-col md:flex-row gap-4 md:gap-8
              border border-[rgba(139,92,246,0.25)]
              rounded-2xl px-6 md:px-8 py-6
              hover:border-mystical-purple hover:border-opacity-60
              hover:shadow-2xl hover:shadow-mystical-purple/30
              hover:-translate-y-1
              backdrop-blur-sm
            "
            style={{
              background: `linear-gradient(135deg, 
                rgba(139, 92, 246, 0.08) 0%, 
                rgba(59, 130, 246, 0.08) 50%,
                rgba(139, 92, 246, 0.05) 100%)`,
            }}
          >
            {/* Category Title with Icon */}
            <div className="md:w-64 shrink-0 flex items-center gap-3">
              <div className="text-3xl skill-icon">{cat.icon}</div>
              <h3 className="font-cinzel text-mystical-purple text-lg md:text-xl font-semibold">
                {cat.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="flex-1 flex flex-wrap gap-3 items-center">
              {cat.skills.map((skill, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredSkill(`${idx}-${i}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`
                    skill-badge
                    group relative
                    flex items-center gap-2.5
                    px-5 py-2.5
                    rounded-full
                    bg-gradient-to-r from-white/8 to-white/5
                    border border-white/15
                    text-sm text-white font-medium
                    hover:from-white/15 hover:to-white/10
                    hover:border-primary/60
                    hover:shadow-lg hover:shadow-primary/20
                    cursor-pointer
                    backdrop-blur-sm
                    ${hoveredSkill === `${idx}-${i}` ? 'scale-105' : ''}
                  `}
                  style={{
                    transitionDelay: hoveredSkill === `${idx}-${i}` ? '0s' : `${i * 0.02}s`,
                  }}
                >
                  <span className="text-xl skill-icon group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="whitespace-nowrap relative z-10">{skill.name}</span>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-mystical-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}