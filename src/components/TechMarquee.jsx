import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiRedis,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiNextdotjs,
  SiPostman,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

// Split across two rows that scroll in opposite directions — reads as motion
// design rather than a single ticker, and halves the width each row needs.
// `color` is each brand's official hex, nudged lighter where the official one
// goes muddy on the near-black background (Python, LangChain, Express, Next).
const rowOne = [
  { icon: SiNodedotjs, name: 'Node.js', color: '#5FA04E' },
  { icon: SiExpress, name: 'Express', color: '#E8E8EC' },
  { icon: SiFastapi, name: 'FastAPI', color: '#05998B' },
  { icon: SiPython, name: 'Python', color: '#4B8BBE' },
  { icon: SiRedis, name: 'Redis', color: '#FF4438' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: FaAws, name: 'AWS', color: '#FF9900' },
];

const rowTwo = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#E8E8EC' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: FaJava, name: 'Java', color: '#EA8A20' },
  { icon: SiLangchain, name: 'LangChain', color: '#59C7A8' },
  { icon: SiOpenai, name: 'LangGraph', color: '#74AA9C' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#38BDF8' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
];

function Row({ items, reverse = false }) {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="mask-fade-x relative w-full overflow-hidden">
      <div
        className={`flex w-max gap-10 hover:[animation-play-state:paused] sm:gap-14 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {loop.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${i}`}
              className="group flex items-center gap-2.5 whitespace-nowrap"
            >
              <Icon
                className="shrink-0 text-lg opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                style={{ color: item.color }}
                aria-hidden="true"
              />
              <span className="font-mono text-fluid-xs tracking-wide text-muted transition-colors duration-300 group-hover:text-ink">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="flex flex-col gap-4" aria-hidden="true">
      <Row items={rowOne} />
      <Row items={rowTwo} reverse />
    </div>
  );
}
