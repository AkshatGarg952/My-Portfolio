import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import useSpotlight from '../hooks/useSpotlight.js';

export default function ExperienceCard({
  company,
  role,
  duration,
  achievements,
  tech,
  index = 0,
}) {
  const spotlight = useSpotlight();

  return (
    <div className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
      {/* Timeline node, sitting on the rail drawn by the parent */}
      <span className="absolute left-0 top-7 flex h-7 w-7 -translate-x-1/2 items-center justify-center">
        <span className="absolute h-7 w-7 rounded-full bg-bg" />
        <span className="absolute h-4 w-4 rounded-full border border-gold/50 bg-gold/20" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-gold shadow-glow" />
      </span>

      {/* Short connector so the node reads as attached to the card */}
      <span
        className="absolute left-3 top-[calc(1.75rem+0.5px)] h-px w-5 bg-gradient-to-r from-gold/40 to-transparent sm:w-7"
        aria-hidden="true"
      />

      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="card"
        {...spotlight}
      >
        <div className="card-body">
          <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.07]">
                <Building2 size={17} className="text-gold" />
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-fluid-xl leading-tight text-ink">
                  {company}
                </h2>
                <p className="mt-0.5 text-fluid-sm italic text-muted">{role}</p>
              </div>
            </div>

            <span className="shrink-0 self-start rounded-full border border-gold/25 bg-gold/[0.07] px-3.5 py-1.5 font-mono text-fluid-xs text-gold">
              {duration}
            </span>
          </header>

          <ul className="space-y-3">
            {achievements.map((text, i) => (
              <li
                key={i}
                className="flex gap-3 text-fluid-sm leading-relaxed text-ink-2"
              >
                <span
                  className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-gold/70"
                  aria-hidden="true"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-5">
            {tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
