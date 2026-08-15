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
  SiTypescript,
} from 'react-icons/si';
import useSpotlight from '../hooks/useSpotlight.js';

// Concepts (DSA, OOP, DBMS…) deliberately carry no icon — repeating one generic
// glyph across five rows looked like filler. Technologies keep their brand mark
// because that is what people actually scan for.
const categories = [
  {
    title: 'Backend & Distributed Systems',
    icon: SiNodedotjs,
    accent: 'text-emerald-400',
    primary: true,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-neutral-300' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
      { name: 'SQL', icon: SiSqlite, color: 'text-sky-400' },
      { name: 'REST APIs' },
      { name: 'Message queues' },
    ],
  },
  {
    title: 'AI Engineering & LLM Systems',
    icon: SiOpenai,
    accent: 'text-violet-light',
    primary: true,
    skills: [
      { name: 'LangChain', icon: SiLangchain, color: 'text-cyan-400' },
      { name: 'LangGraph', icon: SiOpenai, color: 'text-teal-300' },
      { name: 'RAG pipelines' },
      { name: 'Vector stores' },
      { name: 'Prompt engineering' },
      { name: 'LangSmith' },
      { name: 'Langfuse' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: FaCode,
    accent: 'text-gold',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Python', icon: SiPython, color: 'text-sky-400' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'C', icon: SiC, color: 'text-slate-400' },
    ],
  },
  {
    title: 'Frontend & Web Engineering',
    icon: SiReact,
    accent: 'text-cyan-400',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-200' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
    ],
  },
  {
    title: 'Core Computer Science',
    icon: FaBrain,
    accent: 'text-violet',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ],
  },
  {
    title: 'Tooling & Workflow',
    icon: SiDocker,
    accent: 'text-sky-400',
    skills: [
      { name: 'Docker', icon: SiDocker, color: 'text-sky-400' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: SiGithub, color: 'text-neutral-200' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'VS Code', icon: FaCode, color: 'text-sky-400' },
    ],
  },
];

export default function SkillsSection() {
  const spotlight = useSpotlight();

  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
      {categories.map((cat, idx) => {
        const CatIcon = cat.icon;
        return (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (idx % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card h-full"
            {...spotlight}
          >
            <div className="card-body">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <CatIcon className={`text-lg ${cat.accent}`} aria-hidden="true" />
                </span>
                <h3 className="font-display text-fluid-lg leading-tight text-ink">
                  {cat.title}
                </h3>
                {cat.primary && (
                  <span className="ml-auto shrink-0 rounded-full border border-gold/25 bg-gold/[0.07] px-2.5 py-1 font-mono text-fluid-xs text-gold">
                    core
                  </span>
                )}
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <li key={skill.name} className="chip">
                      {Icon && (
                        <Icon
                          className={`shrink-0 text-sm ${skill.color ?? ''}`}
                          aria-hidden="true"
                        />
                      )}
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
