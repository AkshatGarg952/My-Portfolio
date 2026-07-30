import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-white/[0.06] mt-32">
      <div className="max-w-6xl mx-auto section-pad py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted text-center sm:text-left">
          © {new Date().getFullYear()} Akshat Garg. Built with React &amp; Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AkshatGarg952"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-garg-79b06428a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:gargakshat952@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-ink transition-colors"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="ml-2 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
