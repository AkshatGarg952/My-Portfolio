import { motion } from 'framer-motion';
import useSpotlight from '../hooks/useSpotlight.js';

/**
 * My story.
 *
 * This used to type itself out character by character, which meant the page sat
 * empty for the better part of twenty seconds and screen readers / crawlers got
 * nothing at all. The text is now real DOM content that fades in on a short
 * stagger — same sense of the words arriving, none of the waiting.
 */
const paragraphs = [
  "I'm Akshat Garg, a backend and AI engineer who likes building software that solves a real problem — not projects that only look good on a résumé.",
  "Over the past year I've worked across three startups shipping production APIs, AI-powered workflows and scalable backend services used by real people. The part I enjoy most is taking a fuzzy idea, breaking it into pieces, and turning it into something reliable enough that nobody has to think about it again.",
  "My interests sit at the intersection of backend engineering, distributed systems and applied AI: optimising services handling thousands of requests, designing microservices that stay maintainable, and wiring LLMs into products in ways that actually hold up outside a demo.",
  "Outside of work you'll usually find me on DSA problems, poking at a new piece of infrastructure, or building a side project purely because the idea wouldn't leave me alone.",
];

export default function JourneyBook() {
  const spotlight = useSpotlight();

  return (
    <div className="card h-full" {...spotlight}>
      <div className="card-body">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="font-display text-fluid-xl text-ink">My story</h2>
          <span className="h-px flex-1 bg-white/[0.09]" aria-hidden="true" />
        </div>

        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`leading-relaxed text-ink-2 ${
                i === 0 ? 'text-fluid-lg text-ink' : 'text-fluid-base'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
