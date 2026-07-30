import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Check } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'gargakshat952@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Faridabad, Haryana, India' },
];

const socials = [
  { label: 'GitHub', url: 'https://github.com/AkshatGarg952', icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/akshat-garg-79b06428a/', icon: Linkedin },
  { label: 'X (Twitter)', url: 'https://x.com/AkshatGarg39865', icon: Twitter },
];

export default function ContactInfo() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, i) => {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {contacts.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => copyToClipboard(item.value, i)}
              className="w-full flex items-center gap-4 p-5 glass glass-hover rounded-2xl text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider">{item.label}</p>
                <p className="text-ink truncate">{item.value}</p>
              </div>
              {copied === i && <Check size={16} className="text-emerald-400 shrink-0" />}
            </button>
          );
        })}
      </div>

      <div>
        <p className="text-xs text-muted uppercase tracking-wider mb-4">Find me online</p>
        <div className="flex gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl glass glass-hover text-muted hover:text-ink transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
