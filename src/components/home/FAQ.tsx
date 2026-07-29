import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS, FAQ_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import AmbientScene from '../AmbientScene';
import FadeUp from '../motion/FadeUp';
import IconWell from '../visual/IconWell';
import SectionCta from './SectionCta';

export default function FAQ({ onContactClick }: { onContactClick: () => void }) {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section id="faq" className="py-24 sm:py-28 bg-bg border-t border-line relative overflow-hidden">
      <AmbientScene variant="mixed" intensity="low" showGrain={false} />
      <div className="absolute inset-0 bg-mesh-green pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <FadeUp className="lg:col-span-4 space-y-6">
            <SectionLabel>{FAQ_SECTION.eyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
              {FAQ_SECTION.headline}
            </h2>

            <div className="relative hidden lg:block rounded-3xl border border-line bg-surface overflow-hidden p-8 min-h-[280px]">
              <div className="absolute inset-0 bg-diagonal" />
              <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-brand-green/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-8 w-36 h-36 rounded-full bg-brand-yellow/15 blur-3xl" />
              <div className="relative z-10 space-y-6">
                <IconWell tone="green" size="xl">
                  <HelpCircle className="w-7 h-7" strokeWidth={2} />
                </IconWell>
                <p className="font-display font-bold text-xl text-fg leading-snug">
                  Still have questions?
                </p>
                <p className="text-muted font-sans text-sm leading-relaxed">
                  We keep answers clear and practical. No jargon, no fluff.
                </p>
                <SectionCta onClick={onContactClick} intent="message" label="Talk to us" />
              </div>
            </div>
          </FadeUp>

          <div className="lg:col-span-8 space-y-3">
            {FAQS.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <FadeUp key={item.id} delay={index * 0.04}>
                  <div
                    className={`bg-surface border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-green/50 shadow-md shadow-brand-green/5'
                        : 'border-line hover:border-line-strong'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="font-display font-bold text-fg text-base sm:text-lg pr-2">
                        {item.question}
                      </span>
                      <span
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-brand-green/15 border-brand-green/40 text-brand-green'
                            : 'bg-bg-elevated border-line text-subtle'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-muted font-sans text-sm sm:text-base leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp className="lg:hidden mt-8 flex justify-center">
            <SectionCta onClick={onContactClick} intent="message" label="Talk to us" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
