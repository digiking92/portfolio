import { motion } from 'motion/react';

const BEATS = [
  { q: 'Design', hint: 'Where most agencies start' },
  { q: 'Business', hint: 'Where we start instead' },
  { q: 'Problem', hint: 'What are we actually solving?' },
  { q: 'System', hint: 'Connected growth, not isolated projects' },
];

/** About-only visual aligned with "How We Think" narrative */
export default function AboutStoryVisual() {
  return (
    <div className="relative w-full">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-green/10 via-transparent to-brand-yellow/10 blur-2xl pointer-events-none"
        aria-hidden
      />
      <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
        {BEATS.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className={`rounded-2xl border p-4 sm:p-6 min-h-[140px] sm:min-h-[168px] flex flex-col justify-between ${
              i === 2
                ? 'bg-brand-navy border-brand-navy text-white'
                : i === 3
                  ? 'bg-brand-green border-brand-green text-brand-navy'
                  : 'bg-bg-elevated border-line text-fg'
            }`}
          >
            <span
              className={`font-display font-extrabold text-4xl sm:text-5xl leading-none ${
                i === 2
                  ? 'text-brand-green'
                  : i === 3
                    ? 'text-brand-navy/25'
                    : 'text-fg/10'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-display font-bold text-lg sm:text-xl">{item.q}</p>
              <p
                className={`mt-1 font-sans text-xs sm:text-sm leading-snug ${
                  i === 2 ? 'text-white/65' : i === 3 ? 'text-brand-navy/70' : 'text-fg/55'
                }`}
              >
                {item.hint}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
