import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduced) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleOver = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor-hover]'));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-gold"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          borderColor: hovering ? 'rgba(228,182,90,0.8)' : 'rgba(228,182,90,0.35)',
          backgroundColor: hovering ? 'rgba(228,182,90,0.08)' : 'rgba(228,182,90,0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </>
  );
}
