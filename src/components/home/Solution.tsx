import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SOLUTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import SolutionVisual from '../visual/SolutionVisual';
import FadeUp from '../motion/FadeUp';

interface SolutionProps {
  onContactClick?: (intent?: 'book' | 'message') => void;
}

export default function Solution(_props: SolutionProps) {
  return (
    <section id="solution" className="section-navy py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <SectionLabel>{SOLUTION.eyebrow}</SectionLabel>

          <FadeUp>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-display font-extrabold text-white leading-[1.08] tracking-tight">
              {SOLUTION.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="max-w-xl space-y-6">
              <p className="text-white/70 font-sans text-base sm:text-lg leading-relaxed">
                {SOLUTION.manifesto[0]}
              </p>

              <div className="pt-1">
                <div className="w-12 h-px bg-brand-green/60 mb-5" />
                <p className="font-display font-bold text-white/55 text-lg sm:text-xl leading-snug">
                  {SOLUTION.mantraLead}
                </p>
                <p className="mt-2 font-display font-extrabold text-white text-xl sm:text-2xl leading-snug">
                  {SOLUTION.mantraAccent}
                </p>
              </div>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-white/70 hover:text-brand-green transition-colors"
              >
                Explore capabilities
                <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
              </Link>
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
