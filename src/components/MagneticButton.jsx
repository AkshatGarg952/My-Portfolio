import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Nudges whatever it wraps toward the cursor on hover.
 *
 *   <MagneticButton><Link to="/projects" className="btn-primary">…</Link></MagneticButton>
 *
 * Disabled on coarse pointers and under reduced-motion, where the effect is
 * either impossible or unwanted.
 */
export default function MagneticButton({ children, className = '', strength = 0.28 }) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(fine && !reduced);
  }, []);

  const handleMouseMove = (e) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={enabled ? { x: springX, y: springY } : undefined}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
