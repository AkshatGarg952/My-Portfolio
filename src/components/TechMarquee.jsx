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
  SiGit,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const items = [
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiExpress, name: 'Express' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPython, name: 'Python' },
  { icon: SiFastapi, name: 'FastAPI' },
  { icon: SiRedis, name: 'Redis' },
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiLangchain, name: 'LangChain' },
  { icon: SiDocker, name: 'Docker' },
  { icon: FaAws, name: 'AWS' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiGit, name: 'Git' },
];

const loop = [...items, ...items];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-12 animate-marquee hover:[animation-play-state:paused]">
        {loop.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 text-muted whitespace-nowrap">
              <Icon className="text-xl shrink-0" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
