import { useEffect } from 'react';

const skillCategories = [
  {
    title: "Frontend Magic",
    skills: [
      { icon: "⚛️", name: "React.js", level: "advanced" },
      { icon: "🟨", name: "JavaScript", level: "advanced" },
      { icon: "🎨", name: "Tailwind CSS", level: "intermediate" },
      { icon: "🌐", name: "HTML/CSS", level: "advanced" },
      { icon: "⚡", name: "Next.js", level: "intermediate" },
      { icon: "🔌", name: "Socket.io", level: "intermediate" },
    ]
  },
  {
    title: "Backend Sorcery",
    skills: [
      { icon: "🐍", name: "Python", level: "advanced" },
      { icon: "⚡", name: "FastAPI", level: "advanced" },
      { icon: "🟩", name: "Node.js", level: "intermediate" },
      { icon: "🚀", name: "Express.js", level: "advanced" },
      { icon: "🍃", name: "MongoDB", level: "intermediate" },
      { icon: "☕", name: "Java", level: "intermediate" },
    ]
  },
];

export default function SkillsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.querySelectorAll('.skill-item').forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0) rotateX(0)';
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-category').forEach(cat => {
      cat.style.opacity = '0';
      cat.style.transform = 'translateY(50px)';
      cat.style.transition = 'all 0.8s ease-out';
      observer.observe(cat);
    });
  }, []);

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-cinzel text-accent mb-8 text-center">Magical Arsenal</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="
              skill-category group relative overflow-hidden 
              bg-gradient-to-br from-[rgba(139,92,246,0.05)] to-[rgba(59,130,246,0.05)] 
              border-2 border-[rgba(139,92,246,0.2)] rounded-2xl p-6 
              transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] 
              hover:scale-[1.06] hover:border-mystical-purple 
              hover:shadow-2xl hover:shadow-mystical-purple/25
            "
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            {/* Glow when hovered */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(139,92,246,0.08)] to-[rgba(59,130,246,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out -z-10"></div>

            <h3 className="text-lg font-cinzel text-mystical-purple text-center mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-mystical-purple after:to-mystical-blue after:rounded-full">
              {cat.title}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {cat.skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-item bg-white/5 border border-white/10 rounded-xl p-3 text-center transition-all duration-500 hover:bg-white/10 hover:border-primary opacity-0 translate-y-8"
                >
                  <span className="block text-3xl mb-1 animate-skill-icon-float">{skill.icon}</span>
                  <div className="text-xs text-white font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
