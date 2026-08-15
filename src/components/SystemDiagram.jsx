import { useEffect, useState } from 'react';

/**
 * The hero visual: a stylised request tracing through the kind of stack I
 * actually build — gateway, workers, queue, retrieval, and the stores behind
 * them. Everything is SVG on a fixed viewBox, so it stays crisp and correctly
 * proportioned from a 320px phone up to a 4K display without a single
 * breakpoint.
 *
 * Motion is SMIL (animateMotion) rather than rAF: the browser drives it off the
 * compositor, it costs no JS frame budget, and it pauses when the tab is hidden.
 */

const NODE_W = 104;
const NODE_H = 42;

// Tier 1 → 4, top to bottom. `x` is the centre of each node.
const nodes = [
  { id: 'client', label: 'Client', x: 200, y: 40, w: 112, tone: 'ink' },
  { id: 'gateway', label: 'API Gateway', x: 200, y: 140, w: 128, tone: 'gold' },

  { id: 'workers', label: 'Workers', x: 68, y: 250, tone: 'gold' },
  { id: 'queue', label: 'Queue', x: 200, y: 250, tone: 'gold' },
  { id: 'rag', label: 'RAG', x: 332, y: 250, tone: 'violet' },

  { id: 'mongo', label: 'MongoDB', x: 68, y: 360, tone: 'muted' },
  { id: 'redis', label: 'Redis', x: 200, y: 360, tone: 'muted' },
  { id: 'vector', label: 'Vector DB', x: 332, y: 360, tone: 'violet' },
];

// Wiring between node edges. `hop` is which wave the packet belongs to, which
// staggers the animation so one request appears to cascade down the system.
const edges = [
  { id: 'e-c-g', d: 'M200,61 L200,119', hop: 0 },
  { id: 'e-g-w', d: 'M200,161 C200,200 68,198 68,229', hop: 1 },
  { id: 'e-g-q', d: 'M200,161 L200,229', hop: 1 },
  { id: 'e-g-r', d: 'M200,161 C200,200 332,198 332,229', hop: 1 },
  { id: 'e-w-m', d: 'M68,271 L68,339', hop: 2 },
  { id: 'e-q-rd', d: 'M200,271 L200,339', hop: 2 },
  { id: 'e-r-v', d: 'M332,271 L332,339', hop: 2 },
];

const CYCLE = 3.6; // seconds for a full request to reach the stores
const HOP_DUR = 1.1;

const tones = {
  ink: { stroke: 'rgba(244,243,239,0.30)', fill: 'rgba(244,243,239,0.04)', text: '#F4F3EF' },
  gold: { stroke: 'rgba(232,185,97,0.42)', fill: 'rgba(232,185,97,0.06)', text: '#F6DCA0' },
  violet: { stroke: 'rgba(140,124,240,0.45)', fill: 'rgba(140,124,240,0.07)', text: '#B3A8F7' },
  muted: { stroke: 'rgba(255,255,255,0.14)', fill: 'rgba(255,255,255,0.025)', text: '#B7B6BE' },
};

export default function SystemDiagram() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setAnimate(!mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <div className="card flex h-full w-full flex-col">
      {/* Header strip — reads like a trace viewer */}
      <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            {animate && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-live animate-pulse-ring" />
            )}
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
          </span>
          <span className="font-mono text-fluid-xs uppercase tracking-[0.2em] text-muted truncate">
            Request trace
          </span>
        </div>
        <span className="font-mono text-fluid-xs text-faint shrink-0">POST /api/jobs</span>
      </div>

      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-10 min-h-0 w-full flex-1 p-2"
        role="img"
        aria-label="Diagram of a request flowing from a client through an API gateway to workers, a queue and a RAG pipeline, then into MongoDB, Redis and a vector database."
      >
        <defs>
          <linearGradient id="sd-packet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6DCA0" />
            <stop offset="100%" stopColor="#E8B961" />
          </linearGradient>

          <filter id="sd-glow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {edges.map((e) => (
            <path key={e.id} id={e.id} d={e.d} fill="none" />
          ))}
        </defs>

        {/* Wiring */}
        <g fill="none" strokeLinecap="round">
          {edges.map((e) => (
            <g key={e.id}>
              <path d={e.d} stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
              <path
                d={e.d}
                stroke="rgba(232,185,97,0.30)"
                strokeWidth="1"
                strokeDasharray="3 6"
                className={animate ? 'animate-dash-flow' : undefined}
              />
            </g>
          ))}
        </g>

        {/* Packets — one per edge, staggered by hop */}
        {animate && (
          <g filter="url(#sd-glow)">
            {edges.map((e) => {
              const begin = `${(e.hop * HOP_DUR).toFixed(2)}s`;
              const dur = `${HOP_DUR}s`;
              return (
                <circle key={`p-${e.id}`} r="3.4" fill="url(#sd-packet)" opacity="0">
                  <animateMotion
                    dur={dur}
                    begin={begin}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1"
                  >
                    {/* xlinkHref alongside href: Safari only picked up the
                        SVG2 `href` form on mpath relatively recently. */}
                    <mpath href={`#${e.id}`} xlinkHref={`#${e.id}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.15;0.82;1"
                    dur={dur}
                    begin={begin}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </g>
        )}

        {/* Nodes */}
        {nodes.map((n) => {
          const w = n.w ?? NODE_W;
          const tone = tones[n.tone];
          return (
            <g key={n.id}>
              <rect
                x={n.x - w / 2}
                y={n.y - NODE_H / 2}
                width={w}
                height={NODE_H}
                rx="11"
                fill={tone.fill}
                stroke={tone.stroke}
                strokeWidth="1"
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fill={tone.text}
                fontFamily="'JetBrains Mono', ui-monospace, monospace"
                fontSize="11.5"
                letterSpacing="0.04em"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Repeating the cycle time as a caption keeps the visual honest: it is a
          diagram of an architecture, not a live telemetry feed. */}
      <p className="sr-only">
        Illustrative architecture diagram. Cycle length {CYCLE} seconds.
      </p>
    </div>
  );
}
