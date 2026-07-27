import { motion } from 'motion/react';

type Accent = 'brand-green' | 'brand-yellow' | 'brand-orange' | 'brand-purple';

interface CaseStudyVisualProps {
  title: string;
  category: string;
  accent?: Accent;
  image?: string;
  index?: number;
}

const GRADIENTS = [
  'from-brand-green/40 via-brand-navy/80 to-brand-navy',
  'from-brand-yellow/35 via-brand-navy/80 to-brand-navy',
  'from-brand-orange/35 via-brand-navy/80 to-brand-navy',
  'from-brand-purple/30 via-brand-navy/80 to-brand-navy',
];

const ACCENT_DOT: Record<Accent, string> = {
  'brand-green': 'bg-brand-green',
  'brand-yellow': 'bg-brand-yellow',
  'brand-orange': 'bg-brand-orange',
  'brand-purple': 'bg-brand-purple',
};

const ACCENT_BAR: Record<Accent, string> = {
  'brand-green': 'bg-brand-green',
  'brand-yellow': 'bg-brand-yellow',
  'brand-orange': 'bg-brand-orange',
  'brand-purple': 'bg-brand-purple',
};

export default function CaseStudyVisual({
  title,
  category,
  accent = 'brand-green',
  image,
  index = 0,
}: CaseStudyVisualProps) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-brand-navy group shadow-lg">
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.04] transition-transform duration-[1.1s] ease-out"
          loading="lazy"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-transparent" />
      <div className="absolute inset-0 bg-grid-fade opacity-30" />

      <div className="absolute inset-6 sm:inset-8 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-3">
          <span className="brand-label !text-[10px] text-white/90 bg-brand-navy/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 tracking-[0.12em]">
            {category}
          </span>
          <span className={`w-2.5 h-2.5 rounded-full ${ACCENT_DOT[accent]} animate-pulse shrink-0`} />
        </div>

        <div className="space-y-3">
          <div className="flex gap-1.5 items-end h-12 opacity-90">
            {[35, 50, 42, 68, 55, 80, 72, 90].map((h, i) => (
              <motion.div
                key={i}
                className={`flex-1 rounded-sm ${ACCENT_BAR[accent]}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.5 }}
              />
            ))}
          </div>
          <p className="font-display font-bold text-white text-lg sm:text-xl drop-shadow-lg">
            {title}
          </p>
          {!image && (
            <p className="text-white/45 font-sans text-xs tracking-wide">Image coming soon</p>
          )}
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-[14px] border-white/10 pointer-events-none" />
    </div>
  );
}
