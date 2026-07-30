import { useEffect, useRef } from 'react';

const COLORS = ['rgba(228,182,90,', 'rgba(140,124,240,'];

export default function HeroVisual() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, nodes, raf;
    const mouse = { x: 0, y: 0, active: false };

    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(20, Math.min(55, Math.floor((width * height) / 9000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 120) {
            const force = (120 - dist) / 120;
            n.x += (dx / dist) * force * 1.4;
            n.y += (dy / dist) * force * 1.4;
          }
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(228,182,90,${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.fillStyle = `${n.c}0.9)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${n.c}0.6)`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduced) raf = requestAnimationFrame(step);
    };

    init();
    step();

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleLeave = () => {
      mouse.active = false;
    };
    const handleResize = () => init();

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseleave', handleLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[320px]">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
