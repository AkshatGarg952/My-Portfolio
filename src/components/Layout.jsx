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
    const handleMove = (e) => {
      glowRef.current?.style.setProperty('--x', `${e.clientX}px`);
      glowRef.current?.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-ink font-sans">
      <div className="fixed inset-0 -z-30 bg-bg" />
      <div
        ref={glowRef}
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(228,182,90,0.06), transparent 70%)',
        }}
      />
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-[0.035] noise-overlay" />
      <div className="fixed -z-20 top-[-15%] left-[-15%] w-[50vw] h-[50vw] bg-gold/10 rounded-full blur-[120px]" />
      <div className="fixed -z-20 bottom-[-15%] right-[-15%] w-[45vw] h-[45vw] bg-violet/10 rounded-full blur-[120px]" />

      <Cursor />
      <ScrollProgress />
      <CommandPalette />
      <BatSignal />
      <Navbar />

      <div className="relative z-10">{children}</div>

      <Footer />
    </div>
  );
}
