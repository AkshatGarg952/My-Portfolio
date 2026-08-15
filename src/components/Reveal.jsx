import { motion } from 'framer-motion';

/**
 * The one scroll-reveal used across the site, so every section enters with the
 * same timing instead of each page inventing its own.
 *
 * `delay` staggers siblings; `as` lets it wrap a semantic element.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
