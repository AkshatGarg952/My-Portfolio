import { useEffect, useRef, useState } from 'react';

const introductionParagraphs = [
  "I'm Akshat Garg, a Backend & AI Engineer who enjoys building software that solves real problems, not just projects that look good on a resume",
  "Over the past year, I've worked across startups where I've shipped production APIs, AI powered workflows, scalable backend services, and distributed systems used by real users. I enjoy taking complex ideas, breaking them down, and turning them into reliable, maintainable products",
  "My interests lie at the intersection of backend engineering, distributed systems, and applied AI. Whether it's optimizing systems handling thousands of requests, designing microservices, or integrating LLMs into practical applications, I'm always drawn toward building software that's fast, scalable, and genuinely useful",
  "Outside of work, you'll usually find me solving DSA problems, experimenting with new technologies, or building side projects simply because an idea sounded interesting enough to explore"
];

export default function JourneyBook() {
  const paragraphsRef = useRef([]);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => setShowHeading(true), 700);

    const typingTimer = setTimeout(() => {
      paragraphsRef.current.forEach((p, i) => {
        setTimeout(() => typeText(p, introductionParagraphs[i], 20), i * 3000);
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
          About Me
        </h2>

        {introductionParagraphs.map((_, i) => (
          <p
            key={i}
            ref={el => (paragraphsRef.current[i] = el)}
            className="text-lg leading-relaxed text-white text-justify mb-4 min-h-[3em]"
          ></p>
        ))}
      </div>
    </div>
  );
}
