import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import JourneyBook from '../components/JourneyBook.jsx';
import EducationCard from '../components/EducationCard.jsx';
import Reveal from '../components/Reveal.jsx';
import MagneticButton from '../components/MagneticButton.jsx';
import useSpotlight from '../hooks/useSpotlight.js';
import { site, links, focusAreas } from '../data/site.js';

export default function AboutPage() {
  const spotlight = useSpotlight();

  return (
    <main className="shell pb-20 pt-28 sm:pt-32">
      <SectionHeader
        eyebrow="About"
        title="The person"
        highlight="behind the code"
        description="Backend and AI engineer, based in India, happiest when a system that used to fall over quietly stops falling over."
      />

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <JourneyBook />
        </Reveal>

        <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-2">
          <Reveal delay={0.08}>
            <EducationCard />
          </Reveal>

          <Reveal delay={0.14}>
            <div className="card" {...spotlight}>
              <div className="card-body space-y-3">
                <p className="eyebrow mb-1">Details</p>

                <div className="flex items-center gap-3 text-fluid-sm text-ink-2">
                  <MapPin size={15} className="shrink-0 text-gold" />
                  {site.location}
                </div>
                <a
                  href={links.email}
                  className="flex items-center gap-3 break-all text-fluid-sm text-ink-2 transition-colors hover:text-gold"
                >
                  <Mail size={15} className="shrink-0 text-gold" />
                  {site.email}
                </a>
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-fluid-sm text-ink-2 transition-colors hover:text-gold"
                >
                  <FileText size={15} className="shrink-0 text-gold" />
                  View résumé
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* How I work — gives the About page a second beat instead of ending flat */}
      <section className="mt-20">
        <Reveal className="mb-10">
          <p className="eyebrow mb-4">How I work</p>
          <h2 className="max-w-2xl font-display text-fluid-2xl font-medium text-ink">
            Ship it, then make sure it stays shipped.
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card h-full" {...spotlight}>
                <div className="card-body">
                  <span className="font-mono text-fluid-xs text-gold/70">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-fluid-lg text-ink">{f.title}</h3>
                  <p className="mt-2.5 text-fluid-sm leading-relaxed text-muted">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mt-16 flex flex-wrap items-center gap-3">
        <MagneticButton>
          <Link to="/experience" className="btn-primary" data-cursor-hover>
            See my experience <ArrowRight size={16} />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link to="/contact" className="btn-secondary" data-cursor-hover>
            Get in touch
          </Link>
        </MagneticButton>
      </Reveal>
    </main>
  );
}
