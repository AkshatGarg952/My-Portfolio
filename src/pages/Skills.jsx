import SectionHeader from '../components/SectionHeader.jsx';
import SkillsSection from '../components/SkillsSection.jsx';

export default function SkillsPage() {
  return (
    <main className="pt-32 pb-20 section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use to"
          highlight="ship"
          description="A practical toolkit spanning backend systems, AI engineering, and full-stack development — built through real production work."
        />
        <SkillsSection />
      </div>
    </main>
  );
}
