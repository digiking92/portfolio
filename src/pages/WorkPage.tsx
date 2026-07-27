import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { CASE_STUDIES, CASE_STUDIES_SECTION } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';
import CaseStudyVisual from '../components/CaseStudyVisual';
import type { CaseStudy } from '../types';

interface WorkPageProps {
  onContactClick: () => void;
}

export default function WorkPage({ onContactClick }: WorkPageProps) {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>{CASE_STUDIES_SECTION.eyebrow}</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl sm:text-6xl font-display font-extrabold text-fg leading-tight max-w-4xl"
        >
          {CASE_STUDIES_SECTION.headline}
        </motion.h1>
        <p className="mt-6 text-fg/70 font-sans text-lg max-w-2xl leading-relaxed">
          {CASE_STUDIES_SECTION.description}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="relative">
          <div
            className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-line hidden sm:block"
            aria-hidden
          />

          {CASE_STUDIES.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative border-t border-line py-12 sm:py-14 sm:pl-16"
            >
              <div
                className="absolute left-0 sm:left-4 top-12 sm:top-14 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-bg hidden sm:block"
                aria-hidden
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="brand-label !text-[11px] text-fg/45 tracking-[0.14em]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-fg/25">·</span>
                      <span className="brand-label !text-[11px] text-brand-green">
                        {study.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-fg">
                      {study.client}
                    </h2>
                    <p className="text-lg font-display font-semibold text-fg/80 leading-snug">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4 max-w-xl">
                    <div>
                      <h3 className="brand-label !text-[10px] text-fg/50 mb-1.5">Challenge</h3>
                      <p className="text-fg/75 font-sans text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="brand-label !text-[10px] text-fg/50 mb-1.5">Impact</h3>
                      <p className="text-fg/75 font-sans text-sm leading-relaxed">{study.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.labels.map((label) => (
                      <span
                        key={label}
                        className="px-2.5 py-1 rounded-md border border-line bg-bg-elevated text-[11px] font-sans font-medium text-fg/70"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActive(study)}
                    className="inline-flex items-center gap-2 group text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors cursor-pointer"
                  >
                    View engagement
                    <ArrowUpRight className="w-4 h-4 text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <button
                  onClick={() => setActive(study)}
                  className="lg:col-span-5 text-left cursor-pointer group"
                >
                  <CaseStudyVisual
                    title={study.client}
                    category={study.category}
                    image={study.image}
                    accent={study.accentColor}
                    index={index}
                  />
                </button>
              </div>
            </motion.article>
          ))}

          <div className="border-t border-line" aria-hidden />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-6 py-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg">
            Ready to write the next engagement?
          </h2>
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-wider rounded-md cursor-pointer"
          >
            Let&apos;s Talk
          </button>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-line p-8 sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-fg/10 text-fg/60 hover:text-fg cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 rounded-2xl overflow-hidden">
                <CaseStudyVisual
                  title={active.client}
                  category={active.category}
                  image={active.image}
                  accent={active.accentColor}
                />
              </div>

              <span className="brand-label text-brand-green">{active.category}</span>
              <h3 className="mt-3 text-3xl font-display font-bold text-fg">{active.client}</h3>
              <p className="mt-2 text-fg/70 font-sans">{active.subtitle}</p>

              <div className="mt-8 space-y-6">
                {[
                  { label: 'The Challenge', text: active.challenge },
                  { label: 'Our Approach', text: active.approach },
                  { label: 'Impact', text: active.impact },
                ].map((block) => (
                  <div key={block.label}>
                    <h4 className="text-sm font-display font-bold text-fg uppercase tracking-wider mb-2">
                      {block.label}
                    </h4>
                    <p className="text-fg/75 font-sans text-sm leading-relaxed">{block.text}</p>
                  </div>
                ))}
                <div>
                  <h4 className="text-sm font-display font-bold text-fg uppercase tracking-wider mb-3">
                    What We Delivered
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {active.delivered.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1.5 rounded-md border border-line bg-bg-elevated text-xs font-sans font-medium text-fg/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
