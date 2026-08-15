import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Check, Copy, Clock } from 'lucide-react';
import useSpotlight from '../hooks/useSpotlight.js';
import { site, links } from '../data/site.js';

const details = [
  { id: 'email', icon: Mail, label: 'Email', value: site.email, copyable: true },
  { id: 'location', icon: MapPin, label: 'Location', value: site.location },
  { id: 'response', icon: Clock, label: 'Response time', value: 'Usually within 24 hours' },
];

const socials = [
  { label: 'GitHub', url: links.github, icon: Github },
  { label: 'LinkedIn', url: links.linkedin, icon: Linkedin },
  { label: 'X (Twitter)', url: links.twitter, icon: Twitter },
];

export default function ContactInfo() {
  const [copied, setCopied] = useState(null);
  const spotlight = useSpotlight();

  const copy = async (value, id) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      // Clipboard can be blocked (insecure context, denied permission) — the
      // address is visible on screen either way, so just do nothing.
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="card" {...spotlight}>
        <div className="card-body space-y-2.5">
          {details.map((item) => {
            const Icon = item.icon;
            const isCopied = copied === item.id;

            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.07]">
                  <Icon size={16} className="text-gold" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-fluid-xs uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </span>
                  <span className="block truncate text-fluid-sm text-ink">{item.value}</span>
                </span>
                {item.copyable &&
                  (isCopied ? (
                    <Check size={15} className="shrink-0 text-live" />
                  ) : (
                    <Copy size={15} className="shrink-0 text-faint" />
                  ))}
              </>
            );

            return item.copyable ? (
              <button
                key={item.id}
                type="button"
                onClick={() => copy(item.value, item.id)}
                aria-label={`Copy ${item.label.toLowerCase()}`}
                className="flex w-full items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5 text-left transition-colors hover:border-white/[0.14] hover:bg-white/[0.04]"
              >
                {inner}
              </button>
            ) : (
              <div
                key={item.id}
                className="flex w-full items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>

      <div className="card" {...spotlight}>
        <div className="card-body">
          <p className="eyebrow mb-4">Find me online</p>
          <div className="grid grid-cols-3 gap-2.5">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.015] py-5 text-muted transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.04] hover:text-gold"
                >
                  <Icon size={19} />
                  <span className="font-mono text-fluid-xs">{s.label.split(' ')[0]}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
