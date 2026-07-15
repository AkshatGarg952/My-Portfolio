export default function EducationCard() {
  const achievements = [
    "3★ CodeChef · Peak Rating 1661",
    "LeetCode Rating: 1645",
    "Global Rank 317 · CodeChef Starters 154",
    "Led an IPL Auction platform used to manage 500+ participants",
  ];

  return (
    <div className="group bg-[rgba(255,107,53,0.05)] border-2 border-[rgba(255,107,53,0.3)] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-transform transition-colors transition-shadow ease-[cubic-bezier(0.22,1,0.36,1)] duration-[1200ms] hover:scale-[1.05] hover:border-primary hover:shadow-2xl hover:shadow-primary/30">
      <div className="education-glow absolute -inset-full bg-radial-gradient from-[rgba(255,107,53,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-[1200ms] animate-education-pulse"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl sm:text-2xl font-cinzel text-accent mb-6 animate-title-glow">
          Key Achievements
        </h3>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-accent text-2xl leading-none relative top-[2px] transition-transform duration-700 group-hover:scale-125 group-hover:text-primary flex-shrink-0">
                ★
              </span>
              <p className="text-white leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
