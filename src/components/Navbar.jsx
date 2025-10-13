export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-6 py-4 sm:px-12 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-[rgba(255,107,53,0.3)] z-50">
      <div className="text-2xl mystical-text">Strange Portfolio</div>
      <div className="flex gap-8 text-gray-400 font-medium text-sm sm:text-base">
        {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`relative hover:text-primary transition-all duration-300 ${item === 'About' ? 'text-primary' : ''}`}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
}