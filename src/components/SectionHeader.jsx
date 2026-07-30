import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center max-w-2xl mx-auto"
    >
      {eyebrow && <p className="eyebrow mb-4 justify-center">{eyebrow}</p>}
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-ink leading-tight">
        {title}
        {highlight && <> <span className="gradient-text italic">{highlight}</span></>}
      </h1>
      {description && (
        <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
