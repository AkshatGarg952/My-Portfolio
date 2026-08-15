import SectionHeader from '../components/SectionHeader.jsx';
import SkillsSection from '../components/SkillsSection.jsx';

export default function SkillsPage() {
  return (
    <main className="shell pb-20 pt-28 sm:pt-32">
      <SectionHeader
        eyebrow="Skills"
        title="The toolkit I"
        highlight="ship with"
        description="Weighted toward backend systems and applied AI — the two areas where I've done production work rather than tutorials. Everything here has been used on something real."
      />
      <SkillsSection />
    </main>
  );
}
