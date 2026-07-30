import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Right half of a bat silhouette, drawn from the centerline outward and back.
// Mirrored via a scaled <g> to guarantee perfect symmetry.
const WING_HALF = 'M100,35 L108,15 L114,32 L198,45 L140,58 L100,50 Z';

export default function BatSignal() {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const trigger = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setActive(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setActive(false), reduced ? 2000 : 4500);
    };

    window.addEventListener('trigger-bat-signal', trigger);
    return () => {
      window.removeEventListener('trigger-bat-signal', trigger);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[150] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Projector cone rising from off-screen bottom */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[560px] max-w-[85vw] h-[78vh]"
            style={{
              background: 'linear-gradient(to top, rgba(228,182,90,0.22), rgba(228,182,90,0.05) 65%, transparent)',
              clipPath: 'polygon(47% 100%, 53% 100%, 100% 0%, 0% 0%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Glowing sky patch, with the bat centered inside it */}
          <motion.div
            className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[46vw] h-[46vw] max-w-[520px] max-h-[520px] rounded-full flex items-center justify-center"
            style={{
              background:
                'radial-gradient(circle, rgba(243,212,140,0.5) 0%, rgba(228,182,90,0.32) 32%, rgba(228,182,90,0.1) 55%, transparent 72%)',
              filter: 'blur(1px)',
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.svg
              viewBox="0 0 200 100"
              className="w-[58%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <g fill="#0A0A0C">
                <path d={WING_HALF} />
                <g transform="translate(200,0) scale(-1,1)">
                  <path d={WING_HALF} />
                </g>
              </g>
            </motion.svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-gold/70 text-center px-4"
          >
            Some nights need a signal
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
