import { motion } from 'motion/react';

/** Abstract editorial panels for value alternating layout */
const PANELS = {
  clarity: (
    <div className="relative h-full min-h-[220px] sm:min-h-[280px] rounded-2xl border border-line bg-bg-elevated overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/15 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 space-y-3">
        {[100, 72, 88, 54].map((w, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
            className="h-2 rounded-full bg-fg/15 origin-left"
            style={{ width: `${w}%` }}
          />
        ))}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="h-2.5 rounded-full bg-brand-green origin-left w-[62%]"
        />
      </div>
    </div>
  ),
  excellence: (
    <div className="relative h-full min-h-[220px] sm:min-h-[280px] rounded-2xl border border-line bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-mesh-navy opacity-60" />
      <div className="absolute inset-8 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-lg border ${
              i === 4
                ? 'border-brand-yellow/50 bg-brand-yellow/20'
                : 'border-white/10 bg-white/5'
            }`}
          />
        ))}
      </div>
    </div>
  ),
  innovation: (
    <div className="relative h-full min-h-[220px] sm:min-h-[280px] rounded-2xl border border-line bg-bg-elevated overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-purple/25 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 w-44 h-44 rounded-full bg-brand-green/20 blur-3xl" />
      <svg className="absolute inset-0 w-full h-full p-10" viewBox="0 0 100 100" aria-hidden>
        <motion.circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="14"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </svg>
    </div>
  ),
  partnership: (
    <div className="relative h-full min-h-[220px] sm:min-h-[280px] rounded-2xl border border-line bg-bg-elevated overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 ${
              i === 1
                ? 'bg-brand-green/20 border-brand-green z-10'
                : 'bg-bg border-line -mx-3'
            }`}
          />
        ))}
      </div>
    </div>
  ),
} as const;

export type ValuePanelId = keyof typeof PANELS;

export default function ValueVisualPanel({ id }: { id: ValuePanelId }) {
  return PANELS[id];
}
