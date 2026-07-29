import { ArrowRight } from 'lucide-react';
import { CTA } from '../../data/ctopData';
import AmbientScene from '../AmbientScene';
import FadeUp from '../motion/FadeUp';
import MagneticButton from '../motion/MagneticButton';

interface ContactCTAProps {
  onContactClick: (intent?: 'book' | 'message') => void;
}

export default function ContactCTA({ onContactClick }: ContactCTAProps) {
  return (
    <section id="contact-trigger" className="section-navy py-20 sm:py-28 relative overflow-hidden">
      <AmbientScene variant="aurora" intensity="high" />
      <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />
      <div className="absolute inset-0 bg-rings opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp>
          <div className="relative rounded-[2rem] border border-white/10 bg-surface overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-diagonal opacity-40" />
            <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-brand-green/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -right-16 w-80 h-80 rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-brand-green/15 pointer-events-none" />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 md:px-20 text-center max-w-3xl mx-auto space-y-7">
              <span className="inline-flex brand-label text-brand-green text-[10px] px-3 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10">
                Next step
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
                {CTA.headline}
              </h2>
              <p className="text-muted font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                {CTA.body}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticButton
                  onClick={() => onContactClick('book')}
                  strength={0.4}
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md shadow-lg shadow-brand-yellow/25 cursor-pointer"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <button
                  type="button"
                  onClick={() => onContactClick('message')}
                  className="group inline-flex items-center gap-2 px-8 py-4 border border-white/25 bg-white/5 text-white font-sans font-bold text-sm uppercase tracking-widest rounded-md hover:border-brand-green/50 hover:bg-brand-green/10 transition-colors cursor-pointer"
                >
                  Contact us
                  <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
