import { motion } from 'motion/react';

const LABELS = [
  'Strategy',
  'Brand',
  'Website',
  'Funnel',
  'Marketing',
  'Automation',
  'Analytics',
] as const;

const TONES = [
  'border-brand-green text-brand-navy',
  'border-brand-yellow text-brand-navy',
  'border-brand-orange text-brand-navy',
  'border-brand-purple text-brand-navy',
  'border-brand-green text-brand-navy',
  'border-brand-yellow text-brand-navy',
  'border-brand-orange text-brand-navy',
] as const;

const NODES = LABELS.map((label, i) => {
  const angle = ((i / LABELS.length) * 360 - 90) * (Math.PI / 180);
  const r = 40;
  return {
    label,
    x: Number((50 + r * Math.cos(angle)).toFixed(1)),
    y: Number((50 + r * Math.sin(angle)).toFixed(1)),
    tone: TONES[i],
  };
});

/** Connected growth system diagram — high contrast on navy */
export default function SolutionVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      {/* Soft stage so shape lifts off navy */}
      <div className="absolute inset-[4%] rounded-full bg-white/[0.04] border border-white/10 shadow-[0_0_80px_rgba(74,222,128,0.12)]" />

      <div className="absolute inset-[8%] rounded-full border-2 border-brand-green/35" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-white/25 animate-spin-slow" />
      <div className="absolute inset-[24%] rounded-full bg-gradient-to-br from-brand-green/25 via-transparent to-brand-yellow/15 blur-md" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden>
        {NODES.map((node) => (
          <motion.line
            key={node.label}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#4ADE80"
            strokeOpacity="0.55"
            strokeWidth="0.55"
            strokeDasharray="1.8 1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-[32%] rounded-full bg-white border-[3px] border-brand-green flex flex-col items-center justify-center text-center px-3 shadow-[0_0_40px_rgba(74,222,128,0.35)]"
      >
        <span className="font-display font-extrabold text-brand-navy text-sm sm:text-base leading-tight">
          Growth System
        </span>
        <motion.span
          className="mt-2 w-2.5 h-2.5 rounded-full bg-brand-green"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.45, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {NODES.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.06 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white border-2 shadow-lg shadow-black/25 whitespace-nowrap hover:scale-105 transition-transform ${node.tone}`}
          >
            <span className="font-sans text-[11px] sm:text-xs font-bold">{node.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
