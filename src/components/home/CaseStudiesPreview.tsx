import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, CASE_STUDIES_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import CaseStudyVisual from '../CaseStudyVisual';
import AmbientScene from '../AmbientScene';
import FadeUp from '../motion/FadeUp';
import type { CaseStudy } from '../../types';

function EngagementModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-line p-8 sm:p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-fg/10 text-fg/60 hover:text-fg cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 rounded-2xl overflow-hidden">
          <CaseStudyVisual
            title={study.client}
            category={study.kind === 'internal' ? 'Internal Venture' : study.category}
            image={study.image}
            accent={study.accentColor}
          />
        </div>

        <span className="brand-label text-brand-green">
          {study.kind === 'internal' ? 'Internal Venture' : study.category}
        </span>
        <h3 className="mt-3 text-3xl font-display font-bold text-fg">{study.client}</h3>
        <p className="mt-2 text-fg/70 font-sans text-base leading-relaxed">{study.subtitle}</p>

        <div className="mt-8 space-y-6">
          {[
            { label: 'The Challenge', text: study.challenge },
            { label: 'Our Approach', text: study.approach },
            { label: 'Impact', text: study.impact },
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
              {study.delivered.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-md border border-line bg-bg-elevated text-xs font-sans font-medium text-fg/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {study.url && (
            <a
              href={study.url}
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
  );
}

export default function CaseStudiesPreview(_props?: {
  onContactClick?: (intent?: 'book' | 'message') => void;
}) {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const featured = CASE_STUDIES.filter((study) => study.featured !== false);

  return (
    <section id="work" className="py-24 sm:py-28 bg-bg relative overflow-hidden border-t border-line">
      <AmbientScene variant="mixed" intensity="low" showGrain={false} />
      <div className="absolute inset-0 bg-mesh-green pointer-events-none opacity-35" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp className="max-w-2xl space-y-4 mb-16 sm:mb-20">
          <SectionLabel>{CASE_STUDIES_SECTION.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fg leading-tight">
            {CASE_STUDIES_SECTION.headlineLines.map((line) => (
              <span key={line} className="block md:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed">
            {CASE_STUDIES_SECTION.description}
          </p>
        </FadeUp>

        {/* Editorial timeline */}
        <div className="relative">
          <div
            className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-line hidden sm:block"
            aria-hidden
          />

          <div className="space-y-0">
            {featured.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative border-t border-line py-12 sm:py-16 sm:pl-16"
              >
                <div
                  className="absolute left-0 sm:left-4 top-12 sm:top-16 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-bg shadow-sm hidden sm:block"
                  aria-hidden
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="brand-label !text-[11px] text-fg/45 tracking-[0.14em]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-fg/25">·</span>
                        <span className="brand-label !text-[11px] text-brand-green tracking-[0.1em]">
                          {study.kind === 'internal' ? 'Internal Venture' : study.category}
                        </span>
                        {study.kind === 'internal' && (
                          <>
                            <span className="text-fg/25">·</span>
                            <span className="brand-label !text-[11px] text-fg/45 tracking-[0.1em]">
                              {study.category}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-fg tracking-tight">
                        {study.client}
                      </h3>
                      <p className="text-lg sm:text-xl font-display font-semibold text-fg/80 leading-snug max-w-xl">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="space-y-5 max-w-xl">
                      {[
                        { label: 'Challenge', text: study.challenge },
                        { label: 'Approach', text: study.approach },
                        { label: 'Impact', text: study.impact },
                      ].map((block) => (
                        <div key={block.label}>
                          <h4 className="brand-label !text-[10px] text-fg/50 tracking-[0.14em] mb-1.5">
                            {block.label}
                          </h4>
                          <p className="text-fg/75 font-sans text-sm sm:text-[15px] leading-relaxed">
                            {block.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {study.labels.map((label) => (
                        <span
                          key={label}
                          className="px-2.5 py-1 rounded-md border border-line bg-bg-elevated text-[11px] font-sans font-medium text-fg/70"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
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
                    onClick={() => setActive(study)}
                    className="lg:col-span-5 text-left cursor-pointer group"
                    aria-label={`View ${study.client}${study.kind === 'internal' ? ' venture' : ' engagement'}`}
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
          </div>

          <div className="border-t border-line" aria-hidden />
        </div>

        <FadeUp className="mt-14 sm:mt-16 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-wider rounded-md transition-colors"
          >
            {CASE_STUDIES_SECTION.cta}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </FadeUp>
      </div>

      <AnimatePresence>
        {active && <EngagementModal study={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
