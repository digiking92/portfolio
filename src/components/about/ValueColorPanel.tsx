import type { ReactElement } from 'react';
import { motion } from 'motion/react';

export type ValueTone = 'green' | 'navy' | 'purple' | 'yellow';

const TONE: Record<
  ValueTone,
  { panel: string; number: string; title: string; body: string; label: string }
> = {
  green: {
    panel: 'bg-brand-green text-brand-navy',
    number: 'text-brand-navy/20',
    title: 'text-brand-navy',
    body: 'text-brand-navy/75',
    label: 'text-brand-navy/55',
  },
  navy: {
    panel: 'bg-brand-navy text-white',
    number: 'text-white/15',
    title: 'text-white',
    body: 'text-white/70',
    label: 'text-brand-green',
  },
  purple: {
    panel: 'bg-[#1a1530] text-white border border-brand-purple/40',
    number: 'text-brand-purple/35',
    title: 'text-white',
    body: 'text-white/70',
    label: 'text-brand-purple',
  },
  yellow: {
    panel: 'bg-brand-yellow text-brand-navy',
    number: 'text-brand-navy/15',
    title: 'text-brand-navy',
    body: 'text-brand-navy/75',
    label: 'text-brand-navy/55',
  },
};

interface ValueColorPanelProps {
  index: number;
  title: string;
  description: string;
  tone: ValueTone;
}

/** Bold full-color value panels — clearly visible, About-only */
export default function ValueColorPanel({
  index,
  title,
  description,
  tone,
}: ValueColorPanelProps): ReactElement {
  const t = TONE[tone];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] min-h-[280px] sm:min-h-[340px] p-8 sm:p-12 flex flex-col justify-between ${t.panel}`}
    >
      <span
        className={`absolute -right-2 -top-4 sm:-right-4 sm:-top-8 font-display font-extrabold text-[9rem] sm:text-[12rem] leading-none select-none pointer-events-none ${t.number}`}
        aria-hidden
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <p className={`relative z-10 brand-label !text-[11px] ${t.label}`}>Principle</p>

      <div className="relative z-10 space-y-4 max-w-md">
        <h3 className={`font-display font-extrabold text-4xl sm:text-5xl tracking-tight ${t.title}`}>
          {title}
        </h3>
        <p className={`font-sans text-base sm:text-lg leading-relaxed ${t.body}`}>{description}</p>
      </div>
    </motion.article>
  );
}
