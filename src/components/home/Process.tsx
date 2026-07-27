import { motion } from 'motion/react';
import { Search, Map, Hammer, Rocket, LineChart } from 'lucide-react';
import { PROCESS_STEPS, PROCESS_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import AmbientScene from '../AmbientScene';
import FadeUp from '../motion/FadeUp';
import IconWell from '../visual/IconWell';

const ICONS = [Search, Map, Hammer, Rocket, LineChart];

export default function Process() {
  return (
    <section id="process" className="section-navy py-24 sm:py-28 relative overflow-hidden">
      <AmbientScene variant="green" intensity="medium" />
      <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />
      <div className="absolute inset-0 bg-rings opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <SectionLabel>{PROCESS_SECTION.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
            {PROCESS_SECTION.headline}
          </h2>
          <p className="text-muted font-sans text-base leading-relaxed">
            {PROCESS_SECTION.description}
          </p>
        </FadeUp>

        {/* Desktop cinematic rail */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[52px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
          <motion.div
            className="absolute top-[52px] left-8 h-px bg-gradient-to-r from-brand-green to-brand-yellow"
            initial={{ width: '0%' }}
            whileInView={{ width: 'calc(100% - 4rem)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="grid grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICONS[index] || Search;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.1, duration: 0.55 }}
                  className="relative pt-2 group"
                >
                  <div className="relative z-10 flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-brand-navy border-2 border-brand-green shadow-[0_0_24px_rgba(74,222,128,0.5)] group-hover:scale-110 transition-transform" />
                      <motion.span
                        className="absolute inset-0 rounded-full border border-brand-green/50"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>
                  </div>

                  <div className="relative rounded-2xl bg-surface border border-line p-5 min-h-[220px] overflow-hidden group-hover:border-brand-green/45 group-hover:-translate-y-1 transition-all duration-300 shine-border">
                    <div className="absolute -right-4 -top-4 text-[4.5rem] font-display font-extrabold text-fg/5 leading-none select-none pointer-events-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <IconWell tone="green" size="md" className="mb-4">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </IconWell>
                    <span className="brand-label text-brand-green">
                      Step {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-lg font-display font-bold text-fg">{step.title}</h3>
                    <p className="mt-2 text-muted font-sans text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICONS[index] || Search;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-green shrink-0 shadow-[0_0_12px_rgba(74,222,128,0.6)]" />
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-brand-green/60 to-line mt-2" />
                  )}
                </div>
                <div className="pb-6 flex-1 rounded-2xl border border-line bg-surface/80 p-5 -mt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <IconWell tone="green" size="md">
                      <Icon className="w-5 h-5" />
                    </IconWell>
                    <span className="brand-label text-brand-green">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-fg">{step.title}</h3>
                  <p className="mt-1 text-muted font-sans text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
