import { motion } from 'motion/react';
import { AlertTriangle, Megaphone, EyeOff, Unplug } from 'lucide-react';
import { PROBLEM } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import ProblemVisual from '../visual/ProblemVisual';
import FadeUp from '../motion/FadeUp';

const ICONS = [AlertTriangle, Megaphone, EyeOff, Unplug];

const CARD_ACCENTS = [
  { well: 'bg-amber-100 border-amber-400 text-amber-700', glow: 'bg-amber-200/40' },
  { well: 'bg-orange-100 border-orange-400 text-orange-700', glow: 'bg-orange-200/40' },
  { well: 'bg-amber-100 border-amber-400 text-amber-700', glow: 'bg-amber-200/40' },
  { well: 'bg-orange-100 border-orange-400 text-orange-700', glow: 'bg-orange-200/40' },
] as const;

export default function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.55]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(13, 27, 42, 0.09) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 85% 15%, rgba(74, 222, 128, 0.07), transparent 55%), radial-gradient(ellipse 50% 45% at 10% 90%, rgba(251, 191, 36, 0.06), transparent 50%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <SectionLabel>{PROBLEM.eyebrow}</SectionLabel>
            <FadeUp>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy leading-tight max-w-xl">
                {PROBLEM.headline}
              </h2>
            </FadeUp>
            <p className="text-brand-orange font-sans text-lg font-semibold">{PROBLEM.subhead}</p>
            <p className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed max-w-md">
              {PROBLEM.intro}
            </p>
          </div>

          <FadeUp className="lg:col-span-6" delay={0.1}>
            <ProblemVisual />
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {PROBLEM.points.map((point, index) => {
            const Icon = ICONS[index] || AlertTriangle;
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            return (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative group rounded-2xl border border-slate-300 bg-white p-6 sm:p-7 overflow-hidden shadow-sm hover:shadow-md hover:border-brand-orange/50 transition-shadow"
              >
                <div
                  className={`absolute -top-12 -right-10 w-36 h-36 rounded-full blur-2xl transition-colors duration-500 ${accent.glow}`}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className={`icon-well w-14 h-14 shrink-0 border-2 shadow-sm ${accent.well}`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <div>
                    <span className="brand-label !text-[11px] text-slate-700 tracking-[0.08em]">
                      Issue 0{index + 1}
                    </span>
                    <p className="mt-1.5 text-brand-navy font-sans text-sm sm:text-base leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial bridge into Solution */}
        <FadeUp>
          <div className="relative max-w-2xl mx-auto pt-10 sm:pt-14 pb-4">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-px bg-brand-navy/20" />

            <div className="text-center space-y-5 sm:space-y-6">
              <div className="space-y-3">
                <p className="font-sans text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                  {PROBLEM.bridgeLead}
                </p>
                <p className="font-display font-extrabold text-brand-navy text-[1.75rem] sm:text-4xl md:text-[2.75rem] leading-[1.15] tracking-tight">
                  It&apos;s{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">{PROBLEM.bridgeHighlight}</span>
                    <span
                      className="absolute inset-x-0 bottom-1 h-2 sm:h-2.5 bg-brand-yellow/45 -z-0"
                      aria-hidden
                    />
                  </span>{' '}
                  digital.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <span className="w-8 h-px bg-brand-navy/15" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span className="w-8 h-px bg-brand-navy/15" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
