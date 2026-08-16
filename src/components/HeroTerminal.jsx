import { useCallback, useEffect, useMemo, useState } from 'react';
import { RotateCw } from 'lucide-react';
import { site } from '../data/site.js';

/**
 * The hero visual: a shell session that introduces me the way I'd actually
 * introduce myself — a few commands, real output, no fake telemetry.
 *
 * It replaced an architecture diagram, which looked like every other backend
 * portfolio and said nothing that wasn't already in the copy beside it.
 *
 * Everything is plain DOM + a single timeout scheduler, so there is no canvas,
 * no SVG animation engine, and nothing running once the session has played out.
 */

const PROMPT = 'akshat@dev';

// The session. `cmd` lines type character by character; everything else lands
// as a whole line, which is what a real shell does anyway.
const script = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: `${site.name} — ${site.role}`, tone: 'ink' },
  { kind: 'out', text: '{time}', tone: 'muted' },
  { kind: 'gap' },

  { kind: 'cmd', text: 'cat stack.txt' },
  { kind: 'kv', k: 'runtime', v: 'Node.js · Express · FastAPI' },
  { kind: 'kv', k: 'data', v: 'MongoDB · Redis · Postgres' },
  { kind: 'kv', k: 'applied ai', v: 'LangGraph · RAG · Vector DB', tone: 'violet' },
  { kind: 'gap' },

  { kind: 'cmd', text: 'ls projects/' },
  { kind: 'proj', name: 'KodeKshetra', text: '1v1 coding battles' },
  { kind: 'proj', name: 'Chess With Benefits', text: 'AI commentary' },
  { kind: 'proj', name: 'PlayPlexus', text: 'player matchmaking' },
  { kind: 'gap' },

  // Percentages live in the "By the numbers" section below, where each one has
  // room for the sentence that makes it mean something. Out of context they
  // read as trivia, so this block stays plain-English.
  { kind: 'cmd', text: './ship --status' },
  { kind: 'ok', v: '3', text: 'production internships' },
  { kind: 'ok', text: 'APIs built to survive real traffic' },
  { kind: 'ok', text: 'AI features people actually use' },
  { kind: 'gap' },

  { kind: 'cmd', text: 'status', trailing: true },
  { kind: 'out', text: site.availability, tone: 'live' },
];

// Tuned so the whole session lands in ~6s: any slower and the last line (the
// one that says I'm hiring-available) shows up after most people have scrolled.
const CHAR_MS = 26;
const LINE_MS = 110;
const AFTER_CMD_MS = 300;

const toneClass = {
  ink: 'text-ink',
  muted: 'text-muted',
  violet: 'text-violet-light',
  live: 'text-live',
};

function Prompt() {
  return (
    <span className="shrink-0 select-none">
      <span className="text-violet-light/80">{PROMPT}</span>
      <span className="text-faint"> ~ </span>
      <span className="text-gold">$</span>
    </span>
  );
}

function Caret() {
  return (
    <span className="ml-0.5 inline-block w-[0.5em] translate-y-[1px] bg-gold align-baseline animate-caret-blink">
      <span className="invisible">.</span>
    </span>
  );
}

export default function HeroTerminal() {
  const [animate, setAnimate] = useState(true);
  const [run, setRun] = useState(0); // bumping this replays the session
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(0);
  const [time, setTime] = useState('');

  // Reduced motion gets the finished session, not a stripped-down one.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setAnimate(!mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // Local clock — the one genuinely live value on the page.
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: site.timezone,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setStep(0);
    setTyped(0);
  }, [run, animate]);

  useEffect(() => {
    if (!animate || step >= script.length) return undefined;

    const line = script[step];
    const next = () => {
      setStep((s) => s + 1);
      setTyped(0);
    };

    if (line.kind === 'cmd') {
      if (typed < line.text.length) {
        // Jitter the cadence so it reads as typing rather than a ticker.
        const id = setTimeout(() => setTyped((t) => t + 1), CHAR_MS + Math.random() * 34);
        return () => clearTimeout(id);
      }
      const id = setTimeout(next, AFTER_CMD_MS);
      return () => clearTimeout(id);
    }

    const id = setTimeout(next, line.kind === 'gap' ? 90 : LINE_MS);
    return () => clearTimeout(id);
  }, [animate, step, typed]);

  const done = !animate || step >= script.length;
  const replay = useCallback(() => setRun((r) => r + 1), []);

  const visible = useMemo(
    () => (animate ? script.slice(0, step + 1) : script),
    [animate, step]
  );

  const locationLine = `${site.location.split(',').slice(-2).join(',').trim()}${
    time ? ` · ${time} IST` : ''
  }`;

  return (
    <div className="card flex h-full w-full flex-col">
      {/* Title bar */}
      <div className="relative z-10 flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/45" />
        </div>
        <span className="truncate font-mono text-fluid-xs uppercase tracking-[0.2em] text-muted">
          {PROMPT} — zsh
        </span>
        <button
          type="button"
          onClick={replay}
          data-cursor-hover
          aria-label="Replay the terminal session"
          className="ml-auto shrink-0 rounded-full p-1.5 text-faint transition-colors duration-300 hover:text-gold"
        >
          <RotateCw size={13} />
        </button>
      </div>

      {/* Session */}
      <div
        className="relative z-10 min-h-0 flex-1 overflow-hidden px-4 py-4 font-mono text-fluid-xs leading-[1.75] sm:px-5"
        aria-hidden="true"
      >
        {visible.map((line, i) => {
          const active = animate && i === step;
          const key = `${run}-${i}`;

          if (line.kind === 'gap') return <div key={key} className="h-2.5" />;

          if (line.kind === 'cmd') {
            const text = active ? line.text.slice(0, typed) : line.text;
            const showCaret = active || (done && line.trailing && i === visible.length - 1);
            return (
              <div key={key} className="flex items-baseline gap-2">
                <Prompt />
                <span className="text-ink">
                  {text}
                  {showCaret && <Caret />}
                </span>
              </div>
            );
          }

          if (line.kind === 'kv') {
            return (
              <div key={key} className="flex items-baseline gap-2">
                <span className="w-[4.75rem] shrink-0 text-faint sm:w-[5.5rem]">{line.k}</span>
                <span className={toneClass[line.tone] ?? 'text-ink-2'}>{line.v}</span>
              </div>
            );
          }

          if (line.kind === 'proj') {
            return (
              <div key={key} className="flex items-baseline gap-2">
                <span className="shrink-0 text-ink">{line.name}</span>
                <span className="shrink-0 text-faint">·</span>
                <span className="truncate text-muted">{line.text}</span>
              </div>
            );
          }

          if (line.kind === 'ok') {
            return (
              <div key={key} className="flex items-baseline gap-2">
                <span className="shrink-0 text-live">✓</span>
                {line.v && <span className="shrink-0 font-semibold text-gold">{line.v}</span>}
                <span className="truncate text-ink-2">{line.text}</span>
              </div>
            );
          }

          const text = line.text === '{time}' ? locationLine : line.text;
          return (
            <div key={key} className={toneClass[line.tone] ?? 'text-ink-2'}>
              {text}
            </div>
          );
        })}
      </div>

      {/* Status bar */}
      <div className="relative z-10 flex items-center gap-3 border-t border-white/[0.07] px-4 py-2.5 font-mono text-fluid-xs text-faint">
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-live animate-pulse-ring" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
          </span>
          <span className="text-muted">main</span>
        </span>
        <span className="h-3 w-px bg-white/10" />
        <span className="truncate">~/akshat/portfolio</span>
        <span className="ml-auto shrink-0">{site.initials}</span>
      </div>

      {/* The session as prose, for screen readers and for search engines that
          would otherwise index a pile of animated spans. */}
      <p className="sr-only">
        {site.name}, {site.role}, based in {site.location}. Stack: Node.js, Express and
        FastAPI; MongoDB, Redis and Postgres; LangGraph, RAG pipelines and vector
        databases. Projects: KodeKshetra, Chess With Benefits and PlayPlexus. Three
        production internships, APIs built to survive real traffic, and AI features people
        actually use. {site.availability}.
      </p>
    </div>
  );
}
