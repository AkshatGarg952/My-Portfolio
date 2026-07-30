import { motion } from 'framer-motion';
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
      { icon: <FaJava className="text-lg text-red-500" />, name: 'Java' },
      { icon: <SiJavascript className="text-lg text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiPython className="text-lg text-blue-400" />, name: 'Python' },
      { icon: <SiC className="text-lg text-slate-400" />, name: 'C' },
    ],
  },
  {
    title: 'Backend & Distributed Systems',
    icon: <SiNodedotjs className="text-2xl text-green-500" />,
    skills: [
      { icon: <SiNodedotjs className="text-lg text-green-500" />, name: 'Node.js' },
      { icon: <SiExpress className="text-lg text-gray-300" />, name: 'Express.js' },
      { icon: <SiFastapi className="text-lg text-teal-400" />, name: 'FastAPI' },
      { icon: <SiMongodb className="text-lg text-green-400" />, name: 'MongoDB' },
      { icon: <SiRedis className="text-lg text-red-500" />, name: 'Redis' },
      { icon: <SiSqlite className="text-lg text-blue-400" />, name: 'SQL' },
      { icon: <SiNodedotjs className="text-lg text-green-500" />, name: 'REST APIs' },
    ],
  },
  {
    title: 'Frontend & Web Engineering',
    icon: <SiReact className="text-2xl text-cyan-400" />,
    skills: [
      { icon: <SiReact className="text-lg text-cyan-400" />, name: 'React.js' },
      { icon: <SiNextdotjs className="text-lg text-white" />, name: 'Next.js' },
      { icon: <SiTailwindcss className="text-lg text-cyan-400" />, name: 'Tailwind CSS' },
      { icon: <SiHtml5 className="text-lg text-orange-500" />, name: 'HTML' },
    ],
  },
  {
    title: 'AI Engineering & LLM Systems',
    icon: <SiOpenai className="text-2xl text-teal-400" />,
    skills: [
      { icon: <SiLangchain className="text-lg text-cyan-400" />, name: 'LangChain' },
      { icon: <SiOpenai className="text-lg text-teal-400" />, name: 'LangGraph' },
      { icon: <SiOpenai className="text-lg text-teal-400" />, name: 'RAG Pipelines' },
      { icon: <SiOpenai className="text-lg text-teal-400" />, name: 'Prompt Engineering' },
      { icon: <SiOpenai className="text-lg text-teal-400" />, name: 'LangSmith' },
      { icon: <SiOpenai className="text-lg text-teal-400" />, name: 'Langfuse' },
    ],
  },
  {
    title: 'Core Computer Science',
    icon: <FaBrain className="text-2xl text-violet" />,
    skills: [
      { icon: <FaBrain className="text-lg text-violet" />, name: 'Data Structures & Algorithms' },
      { icon: <FaBrain className="text-lg text-violet" />, name: 'Object-Oriented Programming' },
      { icon: <FaBrain className="text-lg text-violet" />, name: 'DBMS' },
      { icon: <FaBrain className="text-lg text-violet" />, name: 'Operating Systems' },
      { icon: <FaBrain className="text-lg text-violet" />, name: 'Computer Networks' },
    ],
  },
  {
    title: 'Developer Tools & Workflow',
    icon: <SiDocker className="text-2xl text-blue-400" />,
    skills: [
      { icon: <SiDocker className="text-lg text-blue-400" />, name: 'Docker' },
      { icon: <FaAws className="text-lg text-orange-500" />, name: 'AWS' },
      { icon: <SiGithub className="text-lg text-white" />, name: 'GitHub' },
      { icon: <SiGit className="text-lg text-orange-500" />, name: 'Git' },
      { icon: <SiPostman className="text-lg text-orange-500" />, name: 'Postman' },
      { icon: <FaCode className="text-lg text-blue-400" />, name: 'VS Code' },
    ],
  },
];

export default function SkillsSection() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 mb-8">
      {skillCategories.map((cat, idx) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
          onMouseMove={handleMouseMove}
          className="group relative overflow-hidden glass glass-hover rounded-2xl p-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(228,182,90,0.08), transparent 70%)',
            }}
          />

          <div className="relative flex items-center gap-3 mb-5">
            {cat.icon}
            <h3 className="font-display text-lg text-ink">{cat.title}</h3>
          </div>

          <div className="relative flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-sm text-muted border border-white/10 bg-white/[0.02] hover:border-gold/40 hover:text-ink transition-colors"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
