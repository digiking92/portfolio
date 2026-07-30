import { PROBLEM } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import FadeUp from '../motion/FadeUp';

/** Editorial problem statement — no feature cards */
export default function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-32 bg-bg border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeUp className="lg:col-span-5 space-y-5">
            <SectionLabel>{PROBLEM.eyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-[1.1] tracking-tight">
              {PROBLEM.headline}
            </h2>
            <p className="text-brand-green font-display font-bold text-lg sm:text-xl">
              {PROBLEM.subhead}
            </p>
            <p className="text-fg/65 font-sans text-base sm:text-lg leading-relaxed max-w-md">
              {PROBLEM.intro}
            </p>
          </FadeUp>

          <FadeUp className="lg:col-span-7" delay={0.08}>
            <ol className="border-t border-line">
              {PROBLEM.points.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[auto_1fr] gap-5 sm:gap-8 py-6 sm:py-7 border-b border-line items-baseline"
                >
                  <span className="font-mono text-sm text-brand-green tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-fg font-display font-semibold text-lg sm:text-xl leading-snug">
                    {point}
                  </p>
                </li>
              ))}
            </ol>
          </FadeUp>
        </div>

        <FadeUp className="mt-16 sm:mt-20 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-fg/55 font-sans text-base sm:text-lg leading-relaxed">
            {PROBLEM.bridgeLead}
          </p>
          <p className="font-display font-extrabold text-fg text-2xl sm:text-4xl leading-tight tracking-tight">
            It&apos;s{' '}
            <span className="text-brand-green">{PROBLEM.bridgeHighlight}</span> digital.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
