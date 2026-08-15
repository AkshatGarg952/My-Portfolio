import { useCallback } from 'react';

/**
 * Feeds the cursor position into a `.card`'s --mx/--my custom properties so its
 * ::after sheen tracks the pointer. Spread onto any element using `.card`:
 *
 *   const spotlight = useSpotlight();
 *   <div className="card" {...spotlight}>…</div>
 *
 * Touch devices never fire mousemove, so this is a no-op there — the card just
 * stays in its resting state.
 */
export default function useSpotlight() {
  const onMouseMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  return { onMouseMove };
}
