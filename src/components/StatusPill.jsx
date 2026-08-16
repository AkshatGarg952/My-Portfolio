import { useEffect, useState } from 'react';
import { site } from '../data/site.js';

export default function StatusPill() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
          timeZone: site.timezone,
        }).format(new Date())
      );

    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 font-mono text-fluid-xs text-muted">
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-live animate-pulse-ring" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
      </span>
      <span className="text-ink-2">{site.availability}</span>
      {/* The label got longer; below sm the clock would push the pill onto a
          second line, so it drops out here — the hero terminal still shows it. */}
      {time && (
        <span className="hidden items-center gap-2.5 sm:inline-flex">
          <span className="h-3 w-px bg-white/12" aria-hidden="true" />
          <span className="whitespace-nowrap">{time} IST</span>
        </span>
      )}
    </div>
  );
}
