import { motion } from 'motion/react';
import type { HeroSlideVisual } from '../data/ctopData';

interface HeroVisualProps {
  variant?: HeroSlideVisual;
}

const CONFIG = {
  growth: {
    title: 'Growth System',
    metricLabel: 'Revenue Growth',
    metric: '+38% YoY',
    bars: [42, 48, 51, 58, 62, 70, 74, 82],
    cards: [
      { label: 'Qualified Leads', value: '186', color: 'text-brand-yellow' },
      { label: 'Conversion Rate', value: '4.2%', color: 'text-brand-green' },
      { label: 'Pipeline Value', value: '$2.4M', color: 'text-brand-orange' },
      { label: 'ROAS', value: '3.6x', color: 'text-brand-purple' },
    ],
    progress: 72,
    chips: [
      { label: 'Strategy', className: 'border-white/15 text-white', pos: 'top-[12%] left-0' },
      { label: 'Build', className: 'border-brand-green/40 text-brand-green', pos: 'top-[22%] right-0' },
      { label: 'Grow', className: 'border-brand-orange/40 text-brand-orange', pos: 'bottom-[18%] left-[4%]' },
      { label: 'Scale', className: 'border-brand-purple/40 text-brand-purple', pos: 'bottom-[10%] right-[8%]' },
    ],
  },
  systems: {
    title: 'System Map',
    metricLabel: 'Pipeline Value',
    metric: '$1.8M',
    bars: [50, 54, 58, 63, 68, 72, 78, 84],
    cards: [
      { label: 'Qualified Leads', value: '142', color: 'text-brand-yellow' },
      { label: 'Conversion Rate', value: '3.9%', color: 'text-brand-green' },
      { label: 'CAC', value: '$84', color: 'text-brand-orange' },
      { label: 'ROAS', value: '3.1x', color: 'text-brand-purple' },
    ],
    progress: 81,
    chips: [
      { label: 'Strategy', className: 'border-brand-green/40 text-brand-green', pos: 'top-[12%] left-0' },
      { label: 'Build', className: 'border-brand-yellow/40 text-brand-yellow', pos: 'top-[22%] right-0' },
      { label: 'Grow', className: 'border-brand-orange/40 text-brand-orange', pos: 'bottom-[18%] left-[4%]' },
      { label: 'Scale', className: 'border-brand-purple/40 text-brand-purple', pos: 'bottom-[10%] right-[8%]' },
    ],
  },
  performance: {
    title: 'Performance Hub',
    metricLabel: 'ROAS',
    metric: '3.8x',
    bars: [38, 44, 49, 55, 60, 66, 71, 79],
    cards: [
      { label: 'Qualified Leads', value: '214', color: 'text-brand-yellow' },
      { label: 'CAC', value: '$67', color: 'text-brand-green' },
      { label: 'Appointment Rate', value: '28%', color: 'text-brand-orange' },
      { label: 'Conversion Rate', value: '5.1%', color: 'text-brand-purple' },
    ],
    progress: 76,
    chips: [
      { label: 'Strategy', className: 'border-brand-orange/40 text-brand-orange', pos: 'top-[12%] left-0' },
      { label: 'Build', className: 'border-brand-green/40 text-brand-green', pos: 'top-[22%] right-0' },
      { label: 'Grow', className: 'border-brand-yellow/40 text-brand-yellow', pos: 'bottom-[18%] left-[4%]' },
      { label: 'Scale', className: 'border-white/15 text-white', pos: 'bottom-[10%] right-[8%]' },
    ],
  },
  ai: {
    title: 'AI Operations',
    metricLabel: 'Automation Hours Saved',
    metric: '28h / wk',
    bars: [46, 50, 55, 61, 66, 72, 77, 85],
    cards: [
      { label: 'Appointment Rate', value: '31%', color: 'text-brand-purple' },
      { label: 'Qualified Leads', value: '168', color: 'text-brand-green' },
      { label: 'CAC', value: '$72', color: 'text-brand-yellow' },
      { label: 'Conversion Rate', value: '4.6%', color: 'text-brand-orange' },
    ],
    progress: 79,
    chips: [
      { label: 'Strategy', className: 'border-brand-purple/40 text-brand-purple', pos: 'top-[12%] left-0' },
      { label: 'Build', className: 'border-brand-green/40 text-brand-green', pos: 'top-[22%] right-0' },
      { label: 'Grow', className: 'border-brand-yellow/40 text-brand-yellow', pos: 'bottom-[18%] left-[4%]' },
      { label: 'Scale', className: 'border-brand-orange/40 text-brand-orange', pos: 'bottom-[10%] right-[8%]' },
    ],
  },
} as const;

const CHIP_FLOAT = [
  { y: [0, -8, 0, 5, 0], x: [0, 3, 0, -2, 0], duration: 7.5 },
  { y: [0, 6, 0, -7, 0], x: [0, -4, 0, 3, 0], duration: 8.5 },
  { y: [0, -6, 0, 8, 0], x: [0, 2, 0, -3, 0], duration: 9 },
  { y: [0, 7, 0, -5, 0], x: [0, -3, 0, 4, 0], duration: 8 },
];

export default function HeroVisual({ variant = 'growth' }: HeroVisualProps) {
  const cfg = CONFIG[variant];

  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      <motion.div
        className="absolute inset-0 rounded-full border border-brand-navy/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-6 rounded-full border border-dashed border-brand-slate/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-12 rounded-full bg-gradient-to-br from-brand-green/30 via-brand-purple/10 to-brand-orange/15 blur-2xl" />

      <motion.div
        key={variant}
        initial={{ opacity: 0, y: 24, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[18%] rounded-3xl border border-white/10 bg-brand-navy/95 backdrop-blur-xl shadow-2xl shadow-brand-navy/40 overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-brand-orange/80" />
          <span className="w-2 h-2 rounded-full bg-brand-yellow/80" />
          <span className="w-2 h-2 rounded-full bg-brand-green/80" />
          <span className="ml-3 brand-label !text-[10px] text-brand-slate">{cfg.title}</span>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="brand-label !text-[9px] text-brand-slate">{cfg.metricLabel}</p>
              <p className="font-display text-xl sm:text-2xl font-extrabold text-white truncate">
                {cfg.metric}
              </p>
            </div>
            <div className="flex items-end gap-1 h-14 shrink-0">
              {cfg.bars.map((h, i) => (
                <motion.div
                  key={`${variant}-bar-${i}`}
                  className="w-2.5 rounded-sm bg-gradient-to-t from-brand-green/40 to-brand-green"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.55, ease: 'easeOut' }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {cfg.cards.map((card, i) => (
              <motion.div
                key={`${variant}-${card.label}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="rounded-xl bg-[#132337] border border-white/10 px-3 py-2.5"
              >
                <p className="brand-label !text-[8px] text-brand-slate leading-tight">{card.label}</p>
                <p className={`font-display font-bold text-sm mt-0.5 ${card.color}`}>{card.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={`${variant}-progress`}
              className="h-full rounded-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-orange"
              initial={{ width: '0%' }}
              animate={{ width: `${cfg.progress}%` }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>

      {cfg.chips.map((chip, i) => {
        const float = CHIP_FLOAT[i % CHIP_FLOAT.length];
        return (
          <motion.div
            key={`${variant}-chip-${chip.label}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: float.y,
              x: float.x,
            }}
            transition={{
              opacity: { delay: 0.35 + i * 0.08, duration: 0.4 },
              scale: { delay: 0.35 + i * 0.08, duration: 0.4 },
              y: {
                delay: 0.6 + i * 0.15,
                duration: float.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                delay: 0.6 + i * 0.15,
                duration: float.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className={`absolute z-20 px-3 py-2 rounded-full bg-brand-navy border shadow-xl ${chip.className} ${chip.pos}`}
          >
            <span className="font-sans text-xs font-semibold">{chip.label}</span>
          </motion.div>
        );
      })}

      <div className="absolute top-[40%] left-[8%] w-2.5 h-2.5 bg-brand-green rounded-full blur-[1px] animate-pulse" />
      <div className="absolute top-[55%] right-[6%] w-2 h-2 bg-brand-yellow rounded-full blur-[1px] animate-pulse" />
    </div>
  );
}
