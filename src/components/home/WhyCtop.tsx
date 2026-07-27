import { motion } from 'motion/react';
import { Target, Cpu, MessageSquare, Handshake, ChartNoAxesCombined } from 'lucide-react';
import { WHY_CTOP, WHY_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import AmbientScene from '../AmbientScene';
import TiltCard from '../motion/TiltCard';
import FadeUp from '../motion/FadeUp';
import IconWell from '../visual/IconWell';

const ICONS = [Target, Cpu, MessageSquare, Handshake, ChartNoAxesCombined];
const TONES = ['green', 'yellow', 'orange', 'purple', 'green'] as const;

/** Bento-style reasons grid */
export default function WhyCtop() {
  return (
    <section id="why" className="py-24 sm:py-28 bg-bg border-t border-line relative overflow-hidden">
      <AmbientScene variant="yellow" intensity="low" showGrain={false} />
      <div className="absolute inset-0 bg-mesh-green pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp className="max-w-2xl mb-14 space-y-4">
          <SectionLabel>{WHY_SECTION.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
            {WHY_SECTION.headline}
          </h2>
          <p className="text-muted font-sans text-base leading-relaxed">{WHY_SECTION.description}</p>
        </FadeUp>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5"
          style={{ perspective: 1000 }}
        >
          {WHY_CTOP.map((reason, index) => {
            const Icon = ICONS[index] || Target;
            const tone = TONES[index % TONES.length];
            const featured = index === 0;
            const span = featured
              ? 'lg:col-span-3 sm:col-span-2'
              : index === 1
                ? 'lg:col-span-3'
                : 'lg:col-span-2';

            return (
              <div key={reason.id} className={span}>
                <TiltCard className="h-full" maxTilt={featured ? 5 : 8}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className={`relative h-full rounded-2xl border border-line bg-surface shadow-sm p-7 overflow-hidden group hover:border-brand-green/40 hover:shadow-xl transition-all duration-400 shine-border ${
                      featured ? 'min-h-[220px]' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-diagonal opacity-50 pointer-events-none" />
                    <div className="absolute -bottom-16 -right-10 w-40 h-40 rounded-full bg-brand-green/10 blur-3xl group-hover:bg-brand-green/20 transition-colors" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <IconWell tone={tone} size={featured ? 'xl' : 'lg'}>
                          <Icon className={featured ? 'w-7 h-7' : 'w-6 h-6'} strokeWidth={2} />
                        </IconWell>
                        <span className="brand-label text-[10px] text-subtle">0{index + 1}</span>
                      </div>
                      <h3
                        className={`font-display font-bold text-fg mb-2 group-hover:text-brand-green transition-colors ${
                          featured ? 'text-2xl' : 'text-lg'
                        }`}
                      >
                        {reason.title}
                      </h3>
                      <p className="text-muted font-sans text-sm leading-relaxed mt-auto">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
