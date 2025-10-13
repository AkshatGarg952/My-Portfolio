import { useEffect } from 'react';

export default function FloatingParticles() {
  useEffect(() => {
    const container = document.querySelector('.floating-particles');
    if (!container) return;

    const colors = ['#ff6b35', '#ffd700', '#8b5cf6', '#3b82f6', '#10b981'];
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 15 + 20;
      const delay = Math.random() * 8;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const endX = Math.random() * 300 - 150;
      const endY = Math.random() * -300 - 50;
      const rot = Math.random() * 720;

      p.style.cssText = `
        position: absolute; left: ${x}%; top: ${y}%; width: ${size}px; height: ${size}px;
        background: ${color}; border-radius: 50%; pointer-events: none; opacity: 0;
        box-shadow: 0 0 ${size * 4}px ${color};
        animation: float-${i} ${duration}s ease-in-out ${delay}s infinite;
      `;

      const kf = `@keyframes float-${i} {
        0%,100% { transform: translate(0,0) rotate(0deg); opacity: 0; }
        5% { opacity: 0.8; }
        50% { transform: translate(${endX}px, ${endY}px) rotate(${rot}deg); opacity: 1; }
        95% { opacity: 0.8; }
      }`;
      const style = document.createElement('style');
      style.textContent = kf;
      document.head.appendChild(style);
      container.appendChild(p);
    }
  }, []);

  return <div className="floating-particles fixed inset-0 pointer-events-none -z-10"></div>;
}