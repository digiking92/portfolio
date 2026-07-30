import { motion } from 'motion/react';
import { PROCESS_STEPS, PROCESS_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import FadeUp from '../motion/FadeUp';

interface ProcessProps {
  onContactClick?: (intent?: 'book' | 'message') => void;
}

/** Horizontal process — type-led, no icon wells or mid CTA */
export default function Process(_props: ProcessProps) {
  return (
    <section id="process" className="py-24 sm:py-32 bg-bg border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="max-w-2xl mb-14 sm:mb-20 space-y-4">
          <SectionLabel>{PROCESS_SECTION.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight tracking-tight">
            {PROCESS_SECTION.headline}
          </h2>
          <p className="text-fg/60 font-sans text-base sm:text-lg leading-relaxed">
            {PROCESS_SECTION.description}
          </p>
        </FadeUp>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-line"
            aria-hidden
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="relative border-t border-line lg:border-t-0 pt-6 lg:pt-10"
              >
                <span className="font-mono text-xs text-brand-green tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display font-extrabold text-fg text-xl sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-fg/55 font-sans text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
