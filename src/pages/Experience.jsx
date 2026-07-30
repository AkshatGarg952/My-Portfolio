import SectionHeader from '../components/SectionHeader.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences } from '../data/experience.js';

export default function Experience() {
  return (
    <main className="pt-32 pb-20 section-pad">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've"
          highlight="shipped"
          description="Production internships where I built and owned real backend systems."
        />

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-white/10" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} {...exp} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
