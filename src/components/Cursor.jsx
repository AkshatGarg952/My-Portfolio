import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Two-part cursor: a hard dot that tracks exactly, and a soft ring that lags
 * behind on a spring. Only mounts on fine pointers with motion enabled — on a
 * phone, or with reduced motion on, the native cursor is left alone.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 26, stiffness: 320, mass: 0.45 });
  const ringY = useSpring(y, { damping: 26, stiffness: 320, mass: 0.45 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e) =>
      setHovering(Boolean(e.target.closest?.('a, button, [data-cursor-hover], input, textarea')));
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = hovering ? 48 : 28;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: pressed ? ringSize * 0.82 : ringSize,
          height: pressed ? ringSize * 0.82 : ringSize,
          borderColor: hovering ? 'rgba(232,185,97,0.85)' : 'rgba(232,185,97,0.32)',
          backgroundColor: hovering ? 'rgba(232,185,97,0.10)' : 'rgba(232,185,97,0)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
      />
    </>
  );
}
