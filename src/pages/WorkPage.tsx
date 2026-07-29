import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { CASE_STUDIES, CASE_STUDIES_SECTION } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';
import CaseStudyVisual from '../components/CaseStudyVisual';
import AmbientScene from '../components/AmbientScene';
import FadeUp from '../components/motion/FadeUp';
import MagneticButton from '../components/motion/MagneticButton';
import type { CaseStudy } from '../types';

interface WorkPageProps {
  onContactClick: () => void;
}

export default function WorkPage({ onContactClick }: WorkPageProps) {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <div className="pb-0">
      <section className="section-navy relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <div className="flex justify-center">
              <SectionLabel>{CASE_STUDIES_SECTION.eyebrow}</SectionLabel>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-fg leading-[1.12] tracking-tight">
              {CASE_STUDIES_SECTION.headlineLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              {CASE_STUDIES_SECTION.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative">
            <div
              className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-line hidden sm:block"
              aria-hidden
            />

            {CASE_STUDIES.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                className="relative border-t border-line py-12 sm:py-16 sm:pl-16"
              >
                <div
                  className="absolute left-0 sm:left-4 top-12 sm:top-16 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-bg hidden sm:block"
                  aria-hidden
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="brand-label !text-[11px] text-fg/45 tracking-[0.14em]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-fg/25">·</span>
                        <span className="brand-label !text-[11px] text-brand-green">
                          {study.kind === 'internal' ? 'Internal Venture' : study.category}
                        </span>
                        {study.kind === 'internal' && (
                          <>
                            <span className="text-fg/25">·</span>
                            <span className="brand-label !text-[11px] text-fg/45">
                              {study.category}
                            </span>
                          </>
                        )}
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
                        <p className="text-fg/75 font-sans text-sm sm:text-[15px] leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="brand-label !text-[10px] text-fg/50 mb-1.5">Impact</h3>
                        <p className="text-fg/75 font-sans text-sm sm:text-[15px] leading-relaxed">
                          {study.impact}
                        </p>
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

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setActive(study)}
                        className="inline-flex items-center gap-2 group text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors cursor-pointer"
                      >
                        {study.kind === 'internal' ? 'View venture' : 'View engagement'}
                        <ArrowUpRight className="w-4 h-4 text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                      {study.url && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-fg/60 hover:text-brand-green transition-colors"
                        >
                          Live site
                          <ArrowUpRight className="w-4 h-4 text-brand-green" />
                        </a>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(study)}
                    className="lg:col-span-5 text-left cursor-pointer group"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-br from-brand-green/25 via-transparent to-brand-yellow/15 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                      <div className="relative group-hover:scale-[1.015] transition-transform duration-700 ease-out">
                        <CaseStudyVisual
                          title={study.client}
                          category={
                            study.kind === 'internal' ? 'Internal Venture' : study.category
                          }
                          image={study.image}
                          accent={study.accentColor}
                          index={index}
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-line" aria-hidden />
          </div>
        </div>
      </section>

      <section className="section-navy py-20 sm:py-28 relative overflow-hidden border-t border-white/5">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeUp>
            <div className="relative rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-surface overflow-hidden text-center">
              <div className="absolute inset-0 bg-diagonal opacity-30" />
              <div className="absolute -top-20 -left-16 w-64 h-64 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-12 w-72 h-72 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 px-6 py-14 sm:px-14 sm:py-20 max-w-2xl mx-auto space-y-7">
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-fg">
                  Ready to write the next engagement?
                </h2>
                <div className="flex justify-center">
                  <MagneticButton
                    onClick={onContactClick}
                    strength={0.4}
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
                  >
                    Let&apos;s Talk
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-line p-8 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-fg/10 text-fg/60 hover:text-fg cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 rounded-2xl overflow-hidden">
                <CaseStudyVisual
                  title={active.client}
                  category={active.kind === 'internal' ? 'Internal Venture' : active.category}
                  image={active.image}
                  accent={active.accentColor}
                />
              </div>

              <span className="brand-label text-brand-green">
                {active.kind === 'internal' ? 'Internal Venture' : active.category}
              </span>
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
                {active.url && (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors"
                  >
                    Visit live site
                    <ArrowUpRight className="w-4 h-4 text-brand-green" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
