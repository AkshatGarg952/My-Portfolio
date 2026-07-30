import { motion } from 'framer-motion';

const techColors = ['#E4B65A', '#8C7CF0', '#6cb8ff', '#6aff8e', '#ffe985', '#ff7d6f'];

export default function ExperienceCard({ company, role, duration, achievements, tech, index = 0 }) {
  return (
    <div className="relative pl-10 sm:pl-14 pb-14 last:pb-0">
      <span className="absolute left-0 sm:left-1 top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-bg shadow-glow" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="glass glass-hover rounded-2xl p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-ink">{company}</h2>
            <p className="text-muted italic">{role}</p>
          </div>
          <span className="text-xs font-medium text-gold border border-gold/30 bg-gold/5 rounded-full px-3.5 py-1.5 whitespace-nowrap self-start">
            {duration}
          </span>
        </div>

        <ul className="space-y-2.5 mb-5">
          {achievements.map((text, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
              {text}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
          {tech.map((t, i) => {
            const color = techColors[i % techColors.length];
            return (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full border"
                style={{ color, borderColor: `${color}40`, background: `${color}0d` }}
              >
                {t}
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
