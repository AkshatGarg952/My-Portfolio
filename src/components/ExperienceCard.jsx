import { useEffect, useRef } from 'react';

// Fixed color palette (used by index)
const techColors = [
  '#6cb8ff',  // blue
  '#6aff8e',  // green
  '#12f0c2',  // teal
  '#ffe985',  // yellow
  '#ff7d6f',  // orange
  '#8fbcff',  // light blue
  '#6fd2f7',  // navy blue
];

export default function ExperienceCard({ company, role, duration, achievements, tech }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const timer = setTimeout(() => {
      card.classList.add('visible');
    }, 500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    
    <div
  ref={cardRef}
  className="
    experience-card relative overflow-hidden opacity-0 translate-y-8
    bg-orange-500/5 border-2 border-orange-500/30 rounded-2xl p-6
    transition-all duration-500
    hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1
    will-change-transform will-change-opacity
    w-[95%] sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] mx-auto
  "
  onMouseEnter={e => e.currentTarget.querySelector('.experience-glow').style.opacity = '1'}
  onMouseLeave={e => e.currentTarget.querySelector('.experience-glow').style.opacity = '0'}
>

      {/* Rotating glow effect */}
      <div
  className="experience-glow absolute top-1/2 left-1/2 w-[200%] h-[200%] opacity-0 transition-opacity duration-700 -z-10"
  style={{
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 60%)',
    animation: 'rotateGlow 10s linear infinite',
  }}
/>


      {/* Header: Company + Duration in one line */}
      <div className="card-header flex justify-between items-center mb-4 gap-6">
        <div>
          <h2
            className="text-2xl font-['Cinzel'] font-semibold text-white mb-1"
            style={{ textShadow: '0 0 20px rgba(255, 107, 53, 0.3)' }}
          >
            {company}
          </h2>
          <p className="text-m italic text-white">{role}</p>
        </div>

        {/* ✅ Improved Duration Tag */}
        <div className="text-sm text-white font-medium whitespace-nowrap px-4 py-1.5 bg-orange-500/20 rounded-lg border border-orange-500/40 self-start shadow-sm shadow-orange-500/20">
          {duration}
        </div>
      </div>

      {/* Achievements */}
      <ul className="achievements-list space-y-2 mb-4">
        {achievements.map((text, i) => (
          <li
            key={i}
            className="
              achievement-item flex items-start gap-3 p-1 rounded
              transition-all duration-300 opacity-0 -translate-x-5
              hover:bg-orange-500/10 hover:translate-x-2
            "
            style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
          >
            <div
              className="bullet w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"
              style={{
                boxShadow: '0 0 8px rgba(255,107,53,0.6)',
                animation: 'bulletPulse 2s ease-in-out infinite',
              }}
            />
            <span className="achievement-text text-white text-sm leading-relaxed flex-1">
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="tech-stack pt-4 border-t border-orange-500/30 flex flex-wrap gap-2">
        {tech.map((tag, i) => (
          <TechTag key={i} label={tag} color={techColors[i % techColors.length]} />
        ))}
      </div>
    </div>
  );
}

// Tech Tag Component (unchanged)
function TechTag({ label, color }) {
  const handleClick = (e) => {
    const ripple = document.createElement('span');
    ripple.className =
      'pointer-events-none absolute top-1/2 left-1/2 w-0 h-0 rounded-full opacity-60 transform -translate-x-1/2 -translate-y-1/2';
    ripple.style.background = color ? color + '66' : 'rgba(139,92,246,0.4)';
    ripple.style.transition = 'width 0.5s ease, height 0.5s ease';
    e.currentTarget.appendChild(ripple);
    setTimeout(() => {
      ripple.style.width = '200px';
      ripple.style.height = '200px';
      ripple.style.opacity = '0';
    }, 10);
    setTimeout(() => ripple.remove(), 510);
  };

  return (
    <span
      onClick={handleClick}
      className={`
        tech-tag py-1 px-3 border rounded-full text-xs font-semibold cursor-pointer
        transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        relative overflow-hidden
        hover:bg-purple-500/30 hover:border-purple-500
        hover:-translate-y-0.5 hover:scale-105
        hover:shadow-lg hover:shadow-purple-500/40
      `}
      style={{
        background: color ? color + '22' : 'rgba(139,92,246,0.2)',
        borderColor: color || 'rgba(139,92,246,0.4)',
        color: color || 'var(--mystical-purple)',
        boxShadow: color ? `0 1px 8px ${color}40` : '0 1px 8px rgba(139,92,246,0.2)',
      }}
    >
      {label}
    </span>
  );
}
