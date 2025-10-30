import { useEffect, useRef, useState } from 'react';

const achievements = [
  "Achieved Highest Rating of 1661 (3 Star) on CodeChef.",
  "Attained a max rating of 1645 on LeetCode.",
  "Global Rank 317 in Codechef Starters 154.",
  "Global Rank 317 in Codechef Starters 154."
];

export default function JourneyBook() {
  const paragraphsRef = useRef([]);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => setShowHeading(true), 700);

    const typingTimer = setTimeout(() => {
      paragraphsRef.current.forEach((p, i) => {
        setTimeout(() => typeText(p, achievements[i], 30), i * 2500);
      });
    }, 1500);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(typingTimer);
    };
  }, []);

  const typeText = (el, text, speed) => {
    if (!el) return;
    let i = 0;
    el.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else clearInterval(interval);
    }, speed);
  };

  return (
    <div className="group relative bg-gradient-to-br from-[rgba(255,107,53,0.1)] to-[rgba(139,92,246,0.1)] border-2 border-[rgba(255,107,53,0.3)] rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_40px_rgba(255,107,53,0.3)]">
      {/* Soft animated background glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary via-mystical-purple to-mystical-blue opacity-25 blur-xl rounded-3xl transition-all duration-[1200ms] ease-in-out group-hover:opacity-40 group-hover:blur-2xl"></div>

      {/* Content fade-up */}
      <div
        className={`relative z-10 transition-all duration-700 ${
          showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-cinzel text-accent mb-6">
          My Journey & Achievements
        </h2>

        {achievements.map((_, i) => (
          <div key={i} className="flex items-center gap-2 mb-3">
            <span className="text-accent text-2xl leading-none relative top-[1px] transition-transform duration-700 group-hover:scale-125 group-hover:text-primary">
              ★
            </span>
            <p
              ref={el => (paragraphsRef.current[i] = el)}
              className="text-lg leading-relaxed text-white text-justify min-h-[1.5em]"
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}
