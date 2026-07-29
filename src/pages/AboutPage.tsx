import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Route,
  RefreshCw,
} from 'lucide-react';
import { ABOUT, VALUES, TESTIMONIALS, CASE_STUDIES } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';
import AmbientScene from '../components/AmbientScene';
import FadeUp from '../components/motion/FadeUp';
import MagneticButton from '../components/motion/MagneticButton';
import CountUp from '../components/motion/CountUp';
import TiltCard from '../components/motion/TiltCard';
import IconWell from '../components/visual/IconWell';
import ProblemVisual from '../components/visual/ProblemVisual';
import HeroVisual from '../components/HeroVisual';
import CaseStudyVisual from '../components/CaseStudyVisual';
import GrowthSystemDiagram from '../components/about/GrowthSystemDiagram';
import ValueVisualPanel, {
  type ValuePanelId,
} from '../components/about/ValueVisualPanel';

interface AboutPageProps {
  onContactClick: (intent?: 'book' | 'message') => void;
}

const DIFFERENCE_ICONS = [Route, Layers, RefreshCw];

export default function AboutPage({ onContactClick }: AboutPageProps) {
  const featuredWork = CASE_STUDIES.filter((s) => s.featured !== false).slice(0, 3);
  const featuredValues = ABOUT.featuredValues
    .map((id) => VALUES.find((v) => v.id === id))
    .filter(Boolean) as typeof VALUES;

  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ['start 70%', 'end 40%'],
  });
  const processLine = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const bridgeRef = useRef<HTMLElement>(null);
  const { scrollYProgress: bridgeProgress } = useScroll({
    target: bridgeRef,
    offset: ['start end', 'end start'],
  });
  const bridgeGlowY = useTransform(bridgeProgress, [0, 1], [40, -40]);

  return (
    <div className="pb-0">
      {/* Scene 1 — Hero */}
      <section className="section-navy relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start">
                <SectionLabel>{ABOUT.eyebrow}</SectionLabel>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-extrabold text-fg leading-[1.08] tracking-tight">
                {ABOUT.headlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <div className="space-y-3 max-w-md mx-auto lg:mx-0">
                {ABOUT.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-fg/65 font-sans text-base sm:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="pt-1 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <MagneticButton
                  onClick={() => onContactClick('message')}
                  strength={0.35}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
                >
                  {ABOUT.primaryCta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 bg-white/5 text-white font-sans font-bold text-sm uppercase tracking-widest rounded-md hover:border-brand-green/50 hover:bg-brand-green/10 transition-colors"
                >
                  {ABOUT.secondaryCta}
                </Link>
              </div>
            </motion.div>

            <FadeUp className="lg:col-span-6" delay={0.12}>
              <TiltCard className="max-w-md mx-auto lg:max-w-none">
                <HeroVisual variant="growth" />
              </TiltCard>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Scene 2 — Story + visual */}
      <section className="py-20 sm:py-28 bg-bg border-t border-line relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 45% 40% at 85% 20%, rgba(74,222,128,0.1), transparent 55%)',
          }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-5 space-y-6">
              <SectionLabel>{ABOUT.storyEyebrow}</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
                {ABOUT.storyHeadline}
              </h2>
              <div className="space-y-2">
                <p className="text-fg/45 font-sans text-base">{ABOUT.storyContrast.before}</p>
                <p className="font-display font-extrabold text-fg text-2xl sm:text-3xl leading-snug">
                  {ABOUT.storyContrast.after}
                </p>
              </div>
              <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed">
                {ABOUT.storyBody}
              </p>
              <ul className="space-y-2.5 pt-1">
                {ABOUT.storyQuestions.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-2.5 text-fg/85 font-display font-semibold text-sm sm:text-base"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="font-display font-bold text-fg text-lg sm:text-xl leading-snug pt-2">
                {ABOUT.storyPunch}
              </p>
            </FadeUp>

            <FadeUp className="lg:col-span-7" delay={0.1}>
              <ProblemVisual />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Scene 3 — Bridge manifesto */}
      <section
        ref={bridgeRef}
        className="section-navy relative overflow-hidden py-28 sm:py-36"
      >
        <AmbientScene variant="green" intensity="low" showGrain={false} />
        <motion.div
          style={{ y: bridgeGlowY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-3xl aspect-square rounded-full bg-brand-green/15 blur-[100px] pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
          <FadeUp>
            <SectionLabel>{ABOUT.beliefEyebrow}</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.06} className="space-y-3 sm:space-y-4">
            {ABOUT.manifestoLines.map((line) => (
              <p
                key={line}
                className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-fg leading-[1.12] tracking-tight"
              >
                {line}
              </p>
            ))}
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="text-fg/55 font-sans text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              {ABOUT.beliefSupport}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Scene 4 — Interactive system diagram */}
      <section className="py-20 sm:py-28 bg-bg border-t border-line relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeUp className="max-w-xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <div className="flex justify-center">
              <SectionLabel>{ABOUT.diagramEyebrow}</SectionLabel>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.diagramHeadline}
            </h2>
            <p className="text-fg/65 font-sans text-base sm:text-lg leading-relaxed">
              {ABOUT.diagramBody}
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <GrowthSystemDiagram />
          </FadeUp>
        </div>
      </section>

      {/* Scene 5 — Differences (compact) */}
      <section className="py-16 sm:py-24 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp className="max-w-xl mb-10 sm:mb-14 space-y-3">
            <SectionLabel>{ABOUT.differenceEyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.differenceHeadline}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ABOUT.differences.map((item, index) => {
              const Icon = DIFFERENCE_ICONS[index] || Layers;
              return (
                <FadeUp key={item.id} delay={index * 0.07}>
                  <article className="group h-full rounded-2xl border border-line bg-bg-elevated p-6 sm:p-7 hover:border-brand-green/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <IconWell
                      tone={index === 1 ? 'yellow' : 'green'}
                      size="md"
                      className="mb-5 border group-hover:rotate-6 transition-transform"
                    >
                      <Icon className="w-4 h-4" strokeWidth={2.25} />
                    </IconWell>
                    <h3 className="font-display font-bold text-fg text-lg sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-fg/65 font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scene 6 — Process timeline */}
      <section className="py-20 sm:py-28 section-navy relative overflow-hidden border-t border-white/5">
        <AmbientScene variant="aurora" intensity="low" showGrain={false} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeUp className="max-w-xl mb-12 sm:mb-16 space-y-3">
            <SectionLabel>{ABOUT.approachEyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.approachHeadline}
            </h2>
          </FadeUp>

          <div ref={processRef} className="relative">
            <div
              className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-white/10"
              aria-hidden
            />
            <motion.div
              style={{ height: processLine }}
              className="absolute left-4 sm:left-5 top-2 w-px bg-brand-green origin-top"
              aria-hidden
            />

            <ol className="space-y-0">
              {ABOUT.approachSteps.map((step, index) => (
                <FadeUp key={step.id} delay={index * 0.05}>
                  <li className="relative pl-14 sm:pl-16 py-6 sm:py-8 border-b border-white/8 last:border-0">
                    <span className="absolute left-0 sm:left-1 top-7 sm:top-9 w-8 h-8 rounded-full border border-brand-green/50 bg-brand-navy text-brand-green font-display font-bold text-xs flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="font-display font-extrabold text-fg text-2xl sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="text-fg/55 font-sans text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Scene 7 — Selected work mockups */}
      <section className="py-20 sm:py-28 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
            <FadeUp className="max-w-xl space-y-3">
              <SectionLabel>{ABOUT.workEyebrow}</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
                {ABOUT.workHeadline}
              </h2>
              <p className="text-fg/65 font-sans text-base leading-relaxed">{ABOUT.workBody}</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors"
              >
                {ABOUT.workCta}
                <ArrowUpRight className="w-4 h-4 text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {featuredWork.map((study, index) => (
              <FadeUp key={study.id} delay={index * 0.08}>
                <Link to="/work" className="block group">
                  <TiltCard maxTilt={5} className="rounded-2xl overflow-hidden">
                    <CaseStudyVisual
                      title={study.client}
                      category={
                        study.kind === 'internal' ? 'Internal Venture' : study.category
                      }
                      image={study.image}
                      accent={study.accentColor}
                      index={index}
                    />
                  </TiltCard>
                  <div className="mt-4 space-y-1">
                    <h3 className="font-display font-bold text-fg text-lg group-hover:text-brand-green transition-colors">
                      {study.client}
                    </h3>
                    <p className="text-fg/55 font-sans text-sm line-clamp-2">{study.subtitle}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Scene 8 — Metrics */}
      <section className="py-20 sm:py-24 bg-bg border-t border-line relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 40% 50% at 50% 100%, rgba(251,191,36,0.08), transparent 55%)',
          }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeUp className="text-center space-y-3 mb-12 sm:mb-16">
            <div className="flex justify-center">
              <SectionLabel>{ABOUT.proofEyebrow}</SectionLabel>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg">
              {ABOUT.proofHeadline}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {ABOUT.proofStats.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 0.08}>
                <div className="text-center space-y-2 py-4">
                  <p className="text-5xl sm:text-6xl font-display font-extrabold text-fg tracking-tight">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="brand-label !text-[11px] text-fg/45">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Scene 9 — Sticky testimonial */}
      <section className="section-navy py-24 sm:py-32 relative overflow-hidden border-t border-white/5">
        <AmbientScene variant="green" intensity="low" showGrain={false} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <FadeUp className="space-y-8">
            <span className="text-brand-green text-5xl font-display leading-none">&ldquo;</span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-fg leading-snug tracking-tight">
              {TESTIMONIALS[0].quote}
            </blockquote>
            <footer className="pt-2">
              <cite className="not-italic font-display font-bold text-fg text-base">
                {TESTIMONIALS[0].author}
              </cite>
              <p className="mt-1 text-fg/50 font-sans text-sm">{TESTIMONIALS[0].role}</p>
            </footer>
          </FadeUp>
        </div>
      </section>

      {/* Scene 10 — Values editorial alternating */}
      <section className="py-20 sm:py-28 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp className="max-w-xl mb-14 sm:mb-20 space-y-3">
            <SectionLabel>{ABOUT.valuesEyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.valuesHeadline}
            </h2>
            <p className="text-fg/65 font-sans text-base leading-relaxed">
              {ABOUT.valuesDescription}
            </p>
          </FadeUp>

          <div className="space-y-16 sm:space-y-24">
            {featuredValues.map((value, index) => {
              const visualLeft = index % 2 === 1;
              const panelId = value.id as ValuePanelId;
              return (
                <div
                  key={value.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    visualLeft ? '' : ''
                  }`}
                >
                  <FadeUp
                    className={`lg:col-span-5 space-y-4 ${
                      visualLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <span className="brand-label !text-[11px] text-fg/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-fg tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed max-w-md">
                      {value.description}
                    </p>
                  </FadeUp>
                  <FadeUp
                    delay={0.08}
                    className={`lg:col-span-7 ${visualLeft ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <ValueVisualPanel id={panelId} />
                  </FadeUp>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scene 11 — Minimal CTA */}
      <section className="section-navy py-28 sm:py-36 relative overflow-hidden border-t border-white/5">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <FadeUp className="space-y-5">
            <SectionLabel>{ABOUT.ctaEyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.ctaHeadline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.08} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton
              onClick={() => onContactClick('book')}
              strength={0.4}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
            >
              {ABOUT.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white font-sans font-bold text-sm uppercase tracking-widest rounded-md hover:border-brand-green/50 transition-colors"
            >
              {ABOUT.ctaSecondary}
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
