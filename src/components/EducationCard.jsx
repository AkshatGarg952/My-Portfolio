export default function EducationCard() {
  const achievements = [
    '3★ CodeChef · Peak Rating 1661',
    'LeetCode Rating: 1645',
    'Global Rank 317 · CodeChef Starters 154',
    'Led an IPL Auction platform used to manage 500+ participants',
  ];

  return (
    <div className="glass glass-hover rounded-2xl p-6 sm:p-8 h-full">
      <h3 className="font-display text-xl sm:text-2xl text-ink mb-6">Highlights</h3>

      <div className="space-y-5">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-gold text-xl leading-none mt-0.5 shrink-0">★</span>
            <p className="text-muted leading-relaxed">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
