import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/**
 * Page and section heading. Left-aligned by default — it reads as editorial
 * rather than "landing page template", and it gives long descriptions a
 * comfortable measure instead of centring them into a narrow column.
 */
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className={`eyebrow mb-5 ${centered ? 'eyebrow-center justify-center' : ''}`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.06, ease }}
        className="font-display text-fluid-3xl font-medium leading-[1.06] text-ink"
      >
        {title}
        {highlight && (
          <>
            {' '}
            <span className="gradient-text italic">{highlight}</span>
          </>
        )}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease }}
          className={`mt-5 text-fluid-base leading-relaxed text-muted ${centered ? 'mx-auto' : ''} max-w-prose`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
