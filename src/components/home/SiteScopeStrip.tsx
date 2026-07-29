import { ArrowRight, Radar, Shield, Gauge, Layers } from 'lucide-react';
import { SITESCOPE } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import FadeUp from '../motion/FadeUp';

const POINT_ICONS = [Layers, Shield, Gauge, Radar];

interface SiteScopeStripProps {
  onContactClick: (intent?: 'book' | 'message') => void;
}

export default function SiteScopeStrip({ onContactClick }: SiteScopeStripProps) {
  return (
    <section
      id="sitescope-ai"
      className="py-20 sm:py-24 bg-bg border-t border-line relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 0% 50%, rgba(74,222,128,0.1), transparent 55%), radial-gradient(ellipse 45% 40% at 100% 80%, rgba(251,191,36,0.08), transparent 50%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <FadeUp className="lg:col-span-5 space-y-5">
            <SectionLabel>{SITESCOPE.eyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
              {SITESCOPE.headline}
            </h2>
            <p className="text-fg/75 font-sans text-base leading-relaxed">{SITESCOPE.body}</p>
            <p className="text-fg/50 font-sans text-sm leading-relaxed border-l-2 border-brand-green/40 pl-4">
              {SITESCOPE.note}
            </p>
            <button
              type="button"
              onClick={() => onContactClick('message')}
              className="group inline-flex items-center gap-2 mt-2 text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors cursor-pointer"
            >
              {SITESCOPE.cta}
              <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeUp>

          <FadeUp className="lg:col-span-7" delay={0.08}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {SITESCOPE.points.map((point, index) => {
                const Icon = POINT_ICONS[index] || Radar;
                return (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-bg-elevated p-4 sm:p-5"
                  >
                    <span className="icon-well w-10 h-10 border border-brand-green/30 bg-brand-green/10 text-brand-green shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={2.25} />
                    </span>
                    <p className="text-fg/80 font-sans text-sm leading-relaxed pt-1.5">{point}</p>
                  </li>
                );
              })}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
