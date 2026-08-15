import { motion } from 'framer-motion';
import { Trophy, Code2, Globe, Users } from 'lucide-react';
import useSpotlight from '../hooks/useSpotlight.js';

const highlights = [
  {
    icon: Trophy,
    label: '3★ on CodeChef',
    detail: 'Peak rating 1661',
  },
  {
    icon: Code2,
    label: 'LeetCode 1645',
    detail: 'Consistent contest participation',
  },
  {
    icon: Globe,
    label: 'Global rank 317',
    detail: 'CodeChef Starters 154',
  },
  {
    icon: Users,
    label: 'Led an IPL auction platform',
    detail: 'Managed 500+ participants live',
  },
];

export default function EducationCard() {
  const spotlight = useSpotlight();

  return (
    <div className="card h-full" {...spotlight}>
      <div className="card-body">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="font-display text-fluid-xl text-ink">Highlights</h2>
          <span className="h-px flex-1 bg-white/[0.09]" aria-hidden="true" />
        </div>

        <ul className="space-y-3">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.07]">
                  <Icon size={15} className="text-gold" />
                </span>
                <div className="min-w-0">
                  <p className="text-fluid-sm font-medium leading-snug text-ink">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-fluid-xs text-muted">{item.detail}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
