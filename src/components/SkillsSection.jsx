import { useEffect, useState } from 'react';
import { FaBrain, FaJava, FaAws, FaCode } from 'react-icons/fa';
import {
  SiC,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlite,
  SiTailwindcss,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaJava className="text-2xl text-red-500" />,
    skills: [
      { icon: <FaJava className="text-xl text-red-500" />, name: 'Java' },
      { icon: <SiJavascript className="text-xl text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiPython className="text-xl text-blue-500" />, name: 'Python' },
      { icon: <SiC className="text-xl text-slate-400" />, name: 'C' },
    ],
  },

  {
    title: 'Backend & Distributed Systems',
    icon: <SiNodedotjs className="text-2xl text-green-600" />,
    skills: [
      { icon: <SiNodedotjs className="text-xl text-green-600" />, name: 'Node.js' },
      { icon: <SiExpress className="text-xl text-gray-300" />, name: 'Express.js' },
      { icon: <SiFastapi className="text-xl text-teal-500" />, name: 'FastAPI' },
      { icon: <SiMongodb className="text-xl text-green-500" />, name: 'MongoDB' },
      { icon: <SiRedis className="text-xl text-red-600" />, name: 'Redis' },
      { icon: <SiSqlite className="text-xl text-blue-400" />, name: 'SQL' },
      { icon: <SiNodedotjs className="text-xl text-green-600" />, name: 'REST APIs' },
    ],
  },

  {
    title: 'Frontend & Web Engineering',
    icon: <SiReact className="text-2xl text-cyan-400" />,
    skills: [
      { icon: <SiReact className="text-xl text-cyan-400" />, name: 'React.js' },
      { icon: <SiNextdotjs className="text-xl text-white" />, name: 'Next.js' },
      { icon: <SiTailwindcss className="text-xl text-cyan-400" />, name: 'Tailwind CSS' },
      { icon: <SiHtml5 className="text-xl text-orange-500" />, name: 'HTML' },
    ],
  },

  {
    title: 'AI Engineering & LLM Systems',
    icon: <SiOpenai className="text-2xl text-teal-500" />,
    skills: [
      { icon: <SiLangchain className="text-xl text-cyan-400" />, name: 'LangChain' },
      { icon: <SiOpenai className="text-xl text-teal-500" />, name: 'LangGraph' },
      { icon: <SiOpenai className="text-xl text-teal-500" />, name: 'RAG Pipelines' },
      { icon: <SiOpenai className="text-xl text-teal-500" />, name: 'Prompt Engineering' },
      { icon: <SiOpenai className="text-xl text-teal-500" />, name: 'LangSmith' },
      { icon: <SiOpenai className="text-xl text-teal-500" />, name: 'Langfuse' },
    ],
  },

  {
    title: 'Core Computer Science',
    icon: <FaBrain className="text-2xl text-purple-400" />,
    skills: [
      { icon: <FaBrain className="text-xl text-purple-400" />, name: 'Data Structures & Algorithms' },
      { icon: <FaBrain className="text-xl text-purple-400" />, name: 'Object-Oriented Programming' },
      { icon: <FaBrain className="text-xl text-purple-400" />, name: 'DBMS' },
      { icon: <FaBrain className="text-xl text-purple-400" />, name: 'Operating Systems' },
      { icon: <FaBrain className="text-xl text-purple-400" />, name: 'Computer Networks' },
    ],
  },

  {
    title: 'Developer Tools & Workflow',
    icon: <SiDocker className="text-2xl text-blue-400" />,
    skills: [
      { icon: <SiDocker className="text-xl text-blue-400" />, name: 'Docker' },
      { icon: <FaAws className="text-xl text-orange-500" />, name: 'AWS' },
      { icon: <SiGithub className="text-xl text-white" />, name: 'GitHub' },
      { icon: <SiGit className="text-xl text-orange-500" />, name: 'Git' },
      { icon: <SiPostman className="text-xl text-orange-500" />, name: 'Postman' },
      { icon: <FaCode className="text-xl text-blue-400" />, name: 'VS Code' },
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
              <div className="text-3xl skill-icon flex items-center justify-center">{cat.icon}</div>
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
                  <span className="text-xl skill-icon group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
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
