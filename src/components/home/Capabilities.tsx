import { CAPABILITIES, CAPABILITIES_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import AmbientScene from '../AmbientScene';
import FadeUp from '../motion/FadeUp';
import TiltCard from '../motion/TiltCard';
import SectionCta from './SectionCta';
import {
  Compass,
  Palette,
  Layout,
  Filter,
  Megaphone,
  Mail,
  Bot,
  BarChart3,
} from 'lucide-react';

interface CapabilitiesProps {
  onContactClick: () => void;
}

const iconMap = {
  Compass,
  Palette,
  Layout,
  Filter,
  Megaphone,
  Mail,
  Bot,
  BarChart3,
};

/** Solid icon wells + hover accents, high contrast on light and dark */
const accents = [
  {
    well: 'bg-brand-green text-brand-navy',
    wellHover: 'group-hover:bg-brand-green-hover group-hover:shadow-[0_8px_20px_rgba(74,222,128,0.35)]',
    bar: 'bg-brand-green',
    glow: 'bg-brand-green/25',
    borderHover: 'hover:border-brand-green/60',
    titleHover: 'group-hover:text-brand-green',
  },
  {
    well: 'bg-brand-orange text-white',
    wellHover: 'group-hover:bg-brand-orange-hover group-hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)]',
    bar: 'bg-brand-orange',
    glow: 'bg-brand-orange/20',
    borderHover: 'hover:border-brand-orange/55',
    titleHover: 'group-hover:text-brand-orange',
  },
  {
    well: 'bg-brand-yellow text-brand-navy',
    wellHover: 'group-hover:bg-brand-yellow-hover group-hover:shadow-[0_8px_20px_rgba(251,191,36,0.4)]',
    bar: 'bg-brand-yellow',
    glow: 'bg-brand-yellow/25',
    borderHover: 'hover:border-brand-yellow/55',
    titleHover: 'group-hover:text-brand-yellow',
  },
  {
    well: 'bg-brand-purple text-white',
    wellHover: 'group-hover:bg-brand-purple-hover group-hover:shadow-[0_8px_20px_rgba(167,139,250,0.4)]',
    bar: 'bg-brand-purple',
    glow: 'bg-brand-purple/20',
    borderHover: 'hover:border-brand-purple/55',
    titleHover: 'group-hover:text-brand-purple',
  },
];

export default function Capabilities({ onContactClick }: CapabilitiesProps) {
  return (
    <section id="capabilities" className="py-24 sm:py-28 bg-bg border-t border-line relative overflow-hidden">
      <AmbientScene variant="mixed" intensity="low" showGrain={false} />
      <div className="absolute inset-0 bg-mesh-green pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp className="max-w-2xl mb-14 space-y-4">
          <SectionLabel>{CAPABILITIES_SECTION.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
            {CAPABILITIES_SECTION.headline}
          </h2>
          <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed">
            {CAPABILITIES_SECTION.description}
          </p>
        </FadeUp>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ perspective: 1200 }}
        >
          {CAPABILITIES.map((item, index) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Compass;
            const accent = accents[index % accents.length];
            return (
              <FadeUp key={item.id} delay={index * 0.05}>
                <TiltCard className="h-full" maxTilt={6}>
                  <article
                    className={`relative group h-full rounded-2xl border border-line bg-bg-elevated overflow-hidden shadow-sm hover:shadow-xl ${accent.borderHover} transition-all duration-300 ease-out hover:-translate-y-1.5`}
                  >
                    {/* Soft color wash on hover */}
                    <div
                      className={`pointer-events-none absolute -top-16 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ${accent.glow}`}
                    />

                    {/* Top accent, always a hint, full on hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[3px] ${accent.bar} origin-left scale-x-[0.22] group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                    />

                    <div className="relative z-10 p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div
                          className={`icon-well w-12 h-12 border-0 shadow-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 ${accent.well} ${accent.wellHover}`}
                        >
                          <Icon className="w-[22px] h-[22px]" strokeWidth={2.5} absoluteStrokeWidth />
                        </div>
                        <span className="brand-label !text-[11px] text-fg/45 tracking-[0.1em] transition-colors duration-300 group-hover:text-fg/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3
                        className={`text-lg font-display font-bold text-fg mb-2.5 transition-colors duration-300 ${accent.titleHover}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-fg/75 font-sans text-sm leading-relaxed flex-1">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-1.5 text-brand-green opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="brand-label !text-[10px] tracking-[0.12em]">Explore</span>
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp className="mt-12 sm:mt-14 flex justify-center">
          <SectionCta onClick={onContactClick} />
        </FadeUp>
      </div>
    </section>
  );
}
