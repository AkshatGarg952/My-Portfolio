import SectionHeader from '../components/SectionHeader.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences } from '../data/experience.js';

export default function Experience() {
  return (
    <main className="shell-narrow pb-20 pt-28 sm:pt-32">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've"
        highlight="shipped"
        description="Three production internships across backend, AI and full-stack teams — each one owning real systems with real users behind them."
      />

      <div className="relative">
        {/* Timeline rail — fades out at both ends so it doesn't look clipped */}
        <div
          className="absolute bottom-8 left-0 top-8 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent"
          aria-hidden="true"
        />

        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} {...exp} index={i} />
        ))}
      </div>
    </main>
  );
}
