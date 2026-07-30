import { TESTIMONIALS, TESTIMONIALS_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import FadeUp from '../motion/FadeUp';

/** One strong quote — no stars, no fake metrics, no CTA */
export default function Testimonials() {
  const primary = TESTIMONIALS[0];

  return (
    <section className="py-24 sm:py-32 bg-bg border-t border-line">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeUp className="space-y-10 sm:space-y-12">
          <div className="flex justify-center">
            <SectionLabel>{TESTIMONIALS_SECTION.eyebrow}</SectionLabel>
          </div>
          <blockquote>
            <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-fg leading-snug tracking-tight">
              &ldquo;{primary.quote}&rdquo;
            </p>
            <footer className="mt-8 sm:mt-10">
              <cite className="not-italic font-display font-bold text-fg text-base">
                {primary.author}
              </cite>
              <p className="mt-1 text-fg/45 font-sans text-sm">{primary.role}</p>
            </footer>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
