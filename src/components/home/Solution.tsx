import { SOLUTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import AmbientScene from '../AmbientScene';
import SolutionVisual from '../visual/SolutionVisual';
import FadeUp from '../motion/FadeUp';
import SectionCta from './SectionCta';

interface SolutionProps {
  onContactClick: () => void;
}

export default function Solution({ onContactClick }: SolutionProps) {
  return (
    <section id="solution" className="section-navy py-24 sm:py-28 relative overflow-hidden">
      <AmbientScene variant="green" intensity="medium" />
      <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 space-y-8">
          <SectionLabel>{SOLUTION.eyebrow}</SectionLabel>

          <FadeUp>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              {SOLUTION.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="max-w-xl space-y-6">
              <p className="text-white/85 font-sans text-base sm:text-lg md:text-xl leading-relaxed">
                {SOLUTION.manifesto[0]}
              </p>

              <div className="pt-1">
                <div className="w-12 h-px bg-brand-green/60 mb-5" />
                <p className="font-display font-bold text-white/70 text-lg sm:text-xl leading-snug">
                  {SOLUTION.mantraLead}
                </p>
                <p className="mt-2 font-display font-extrabold text-white text-xl sm:text-2xl leading-snug">
                  {SOLUTION.mantraAccent}
                </p>
              </div>

              <div className="pt-2">
                <SectionCta onClick={onContactClick} />
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="lg:col-span-6" delay={0.12}>
          <SolutionVisual />
        </FadeUp>
      </div>
    </section>
  );
}
