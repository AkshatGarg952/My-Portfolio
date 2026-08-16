// Single source of truth for identity, links and headline proof points.
// Everything that appears in more than one place lives here.

export const site = {
  name: 'Akshat Garg',
  initials: 'AG',
  role: 'Backend & AI Engineer',
  tagline: 'I build backend systems and AI pipelines that hold up in production.',
  location: 'Faridabad, Haryana, India',
  timezone: 'Asia/Kolkata',
  email: 'gargakshat952@gmail.com',
  available: true,
  availability: 'Open to SDE, backend & Gen AI roles',
};

export const links = {
  github: 'https://github.com/AkshatGarg952',
  linkedin: 'https://www.linkedin.com/in/akshat-garg-79b06428a/',
  twitter: 'https://x.com/AkshatGarg39865',
  resume:
    'https://drive.google.com/file/d/1T7jIhmsjw4mrH9eZVZWHd8cAw10ddLg0/view?usp=sharing',
  email: 'mailto:gargakshat952@gmail.com',
};

// The four numbers a recruiter should absorb in the first five seconds.
export const metrics = [
  {
    value: '3',
    label: 'Production internships',
    detail: 'Backend & AI teams, shipped to real users',
  },
  {
    value: '70%',
    label: 'Faster queue retrieval',
    detail: 'Buffered fetching + pagination across 10K+ jobs',
  },
  {
    value: '97%',
    label: 'Retrieval success rate',
    detail: 'Up from 82% after redesigning the memory layer',
  },
  {
    value: '1661',
    label: 'Peak CodeChef rating',
    detail: '3★ · Global rank 317 in Starters 154',
  },
];

export const focusAreas = [
  {
    title: 'Backend systems',
    body: 'Node.js, FastAPI and Express services with queueing, caching and pagination that survive real traffic.',
  },
  {
    title: 'Applied AI',
    body: 'RAG pipelines, LangGraph agents and memory layers wired into products people actually use.',
  },
  {
    title: 'Full-stack delivery',
    body: 'React front-ends built against my own APIs, shipped end to end and maintained after launch.',
  },
];
