import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define your page routes here
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 px-6 py-6 sm:px-12 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-[rgba(255,107,53,0.3)] z-50">
      {/* Logo */}
      <div className="text-2xl mystical-text">Strange Portfolio</div>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-primary font-medium text-base md:text-lg">
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="relative transition-all duration-300 group"
          >
            {name}
            <span 
              className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                activePage === name ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md border-l border-[rgba(255,107,53,0.3)] transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 text-primary font-medium text-lg pt-24 px-8">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className="relative transition-all duration-300 group"
            >
              {name}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activePage === name ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
        ></div>
      )}
    </nav>
  );
}
