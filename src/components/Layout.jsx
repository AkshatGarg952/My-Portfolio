import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import ScrollProgress from './ScrollProgress';
import CommandPalette from './CommandPalette';
import BatSignal from './BatSignal';

export default function Layout({ children }) {
  const glowRef = useRef(null);

  useEffect(() => {
    // Pointer-following ambient light. Coarse pointers never fire mousemove, so
    // this stays inert on touch devices rather than burning battery.
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let frame = 0;
    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = glowRef.current;
        if (!el) return;
        el.style.setProperty('--x', `${e.clientX}px`);
        el.style.setProperty('--y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-bg font-sans text-ink">
      {/* Ambient stack — all fixed, all behind content, none interactive */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-bg" />
      <div className="grid-overlay pointer-events-none fixed inset-0 -z-20" />
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 -z-20 hidden md:block"
        style={{
          background:
            'radial-gradient(620px circle at var(--x, 50%) var(--y, 20%), rgba(232,185,97,0.055), transparent 70%)',
        }}
      />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-20 opacity-[0.03]" />
      <div className="pointer-events-none fixed left-[-20%] top-[-18%] -z-20 h-[55vw] w-[55vw] rounded-full bg-gold/[0.07] blur-[130px]" />
      <div className="pointer-events-none fixed bottom-[-20%] right-[-18%] -z-20 h-[50vw] w-[50vw] rounded-full bg-violet/[0.07] blur-[130px]" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[500] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#17130a]"
      >
        Skip to content
      </a>

      <Cursor />
      <ScrollProgress />
      <CommandPalette />
      <BatSignal />
      <Navbar />

      <div id="main" className="relative z-10 flex-1">
        {children}
      </div>

      <Footer />
    </div>
  );
}
