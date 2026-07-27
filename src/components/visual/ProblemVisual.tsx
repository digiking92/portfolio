import { motion } from 'motion/react';

/** Broken / fragmented growth system illustration */
export default function ProblemVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto">
      <div className="absolute inset-0 bg-rings opacity-60 rounded-full" />
      <div className="absolute inset-[12%] rounded-[2rem] bg-surface border border-line overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-diagonal" />
        <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-brand-orange/15 blur-3xl" />

        {/* Fragmented panels */}
        {[
          { top: '12%', left: '10%', w: '42%', h: '28%', rotate: -6, delay: 0 },
          { top: '18%', left: '48%', w: '40%', h: '22%', rotate: 4, delay: 0.1 },
          { top: '48%', left: '8%', w: '38%', h: '30%', rotate: 3, delay: 0.15 },
          { top: '46%', left: '50%', w: '42%', h: '34%', rotate: -4, delay: 0.2 },
        ].map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: panel.delay, duration: 0.5 }}
            className="absolute rounded-xl border border-line bg-bg-elevated/90 backdrop-blur-sm p-3 shadow-lg"
            style={{
              top: panel.top,
              left: panel.left,
              width: panel.w,
              height: panel.h,
              rotate: `${panel.rotate}deg`,
            }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span className="h-1 flex-1 rounded bg-line" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-4/5 rounded bg-line" />
              <div className="h-1.5 w-3/5 rounded bg-line" />
              <div className="h-1.5 w-2/3 rounded bg-line" />
            </div>
          </motion.div>
        ))}

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 brand-label text-[10px] text-brand-yellow px-3 py-1.5 rounded-full border border-brand-yellow/40 bg-brand-navy/80"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          Systems disconnected
        </motion.div>
      </div>
    </div>
  );
}
