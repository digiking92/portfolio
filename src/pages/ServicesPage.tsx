import { motion } from 'motion/react';
import { ArrowRight, Compass, Hammer, Megaphone, Rocket } from 'lucide-react';
import { SERVICE_PILLARS, SERVICES_PAGE, SITESCOPE } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';
import AmbientScene from '../components/AmbientScene';
import FadeUp from '../components/motion/FadeUp';
import MagneticButton from '../components/motion/MagneticButton';
import IconWell from '../components/visual/IconWell';

interface ServicesPageProps {
  onContactClick: () => void;
}

const PILLAR_ICONS = [Compass, Hammer, Megaphone, Rocket];
const PILLAR_TONES = ['green', 'yellow', 'orange', 'purple'] as const;

export default function ServicesPage({ onContactClick }: ServicesPageProps) {
  return (
    <div className="pb-0">
      <section className="section-navy relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <div className="flex justify-center">
              <SectionLabel>{SERVICES_PAGE.eyebrow}</SectionLabel>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-fg leading-[1.12] tracking-tight">
              {SERVICES_PAGE.headlineLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              {SERVICES_PAGE.lead}
            </p>
            <div className="pt-2 flex justify-center">
              <MagneticButton
                onClick={onContactClick}
                strength={0.35}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
              >
                {SERVICES_PAGE.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-bg border-t border-line relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 90% 10%, rgba(74,222,128,0.08), transparent 55%)',
          }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {SERVICE_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index] || Compass;
            const tone = PILLAR_TONES[index % PILLAR_TONES.length];
            return (
              <FadeUp key={pillar.id} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-line bg-bg-elevated p-7 sm:p-9 hover:border-brand-green/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <IconWell tone={tone} size="lg" className="border">
                      <Icon className="w-5 h-5" strokeWidth={2.25} />
                    </IconWell>
                    <span className="brand-label !text-[11px] text-fg/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-fg">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-fg/70 font-sans text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="px-2.5 py-1.5 rounded-md border border-line bg-bg text-[11px] font-sans font-medium text-fg/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="rounded-2xl border border-brand-green/25 bg-bg-elevated p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-display font-bold text-fg">
                  {SITESCOPE.processTitle}
                </h3>
                <p className="text-fg/70 font-sans text-sm sm:text-base leading-relaxed max-w-3xl">
                  {SITESCOPE.processBody}
                </p>
              </div>
              <button
                type="button"
                onClick={onContactClick}
                className="shrink-0 inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors cursor-pointer"
              >
                {SITESCOPE.cta}
                <ArrowRight className="w-4 h-4 text-brand-green" />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-navy py-20 sm:py-28 relative overflow-hidden border-t border-white/5">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeUp>
            <div className="relative rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-surface overflow-hidden">
              <div className="absolute inset-0 bg-diagonal opacity-30" />
              <div className="absolute -top-20 -left-16 w-64 h-64 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-12 w-72 h-72 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 px-6 py-14 sm:px-14 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
                <div className="max-w-xl space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-fg">
                    {SERVICES_PAGE.ctaHeadline}
                  </h2>
                  <p className="text-fg/70 font-sans text-sm sm:text-base leading-relaxed">
                    {SERVICES_PAGE.ctaBody}
                  </p>
                </div>
                <MagneticButton
                  onClick={onContactClick}
                  strength={0.4}
                  className="group shrink-0 inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
                >
                  {SERVICES_PAGE.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
