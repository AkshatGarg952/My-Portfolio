import SectionHeader from '../components/SectionHeader.jsx';
import JourneyBook from '../components/JourneyBook.jsx';
import EducationCard from '../components/EducationCard.jsx';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="About" title="The person" highlight="behind the code" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <JourneyBook />
          </div>
          <div className="lg:col-span-2">
            <EducationCard />
          </div>
        </div>
      </div>
    </main>
  );
}
