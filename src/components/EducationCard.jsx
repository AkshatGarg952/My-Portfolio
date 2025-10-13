export default function EducationCard() {
  return (
    <div className="group bg-[rgba(255,107,53,0.05)] border-2 border-[rgba(255,107,53,0.3)] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-transform transition-colors transition-shadow ease-[cubic-bezier(0.22,1,0.36,1)] duration-[1200ms] hover:scale-[1.05] hover:border-primary hover:shadow-2xl hover:shadow-primary/30">
      <div className="education-glow absolute -inset-full bg-radial-gradient from-[rgba(255,107,53,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-[1200ms] animate-education-pulse"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl sm:text-2xl font-cinzel text-accent mb-3 animate-title-glow">
          Indian Institute of Information Technology, Bhopal
        </h3>
        <p className="text-primary font-semibold">Bachelor of Technology</p>
        <p className="text-gray-300">Electronics and Communication Engineering</p>
        <p className="text-muted mt-auto pt-6">3rd Year Student</p>
      </div>
    </div>
  );
}
