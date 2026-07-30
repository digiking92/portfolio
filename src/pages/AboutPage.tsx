import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Compass, Layers, RefreshCw, Route, Target } from 'lucide-react';
import { ABOUT, VALUES } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';
import FadeUp from '../components/motion/FadeUp';
import MagneticButton from '../components/motion/MagneticButton';
import CountUp from '../components/motion/CountUp';
import IconWell from '../components/visual/IconWell';
import AboutStoryVisual from '../components/about/AboutStoryVisual';
import GrowthSystemDiagram from '../components/about/GrowthSystemDiagram';
import ValueColorPanel, { type ValueTone } from '../components/about/ValueColorPanel';
import AboutTestimonialSlider from '../components/about/AboutTestimonialSlider';

interface AboutPageProps {
  onContactClick: (intent?: 'book' | 'message') => void;
}

const VALUE_TONES: ValueTone[] = [
  'green',
  'navy',
  'purple',
  'yellow',
  'green',
  'navy',
  'purple',
];

const DIFFERENCE_ICONS = [Route, Layers, RefreshCw];

export default function AboutPage({ onContactClick }: AboutPageProps) {
  const featuredValues = ABOUT.featuredValues
    .map((id) => VALUES.find((v) => v.id === id))
    .filter(Boolean) as typeof VALUES;

  const manifestoRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ['start end', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);

  return (
    <div className="pb-0">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-brand-navy pt-28 pb-16 sm:pb-24">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.2 }}
          className="absolute top-[18%] left-0 right-0 text-center font-display font-extrabold text-[22vw] leading-none text-white select-none pointer-events-none tracking-tighter"
          aria-hidden
        >
          CTOP
        </motion.p>
        <div
          className="absolute top-1/3 right-[-10%] w-[50vw] max-w-xl aspect-square rounded-full bg-brand-green/20 blur-[120px] pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto space-y-7 text-center"
          >
            <p className="brand-label text-brand-green">{ABOUT.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.08] tracking-tight max-w-5xl mx-auto">
              {ABOUT.headlineLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-white/60 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {ABOUT.body[0]}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <MagneticButton
                onClick={() => onContactClick('message')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
              >
                {ABOUT.primaryCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-sans font-bold text-sm uppercase tracking-widest rounded-md hover:border-brand-green/50 transition-colors"
              >
                {ABOUT.secondaryCta}
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* How We Think — narrative + visual aligned */}
      <section id="story" className="py-20 sm:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <FadeUp className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-brand-green text-sm">01</span>
                <SectionLabel>{ABOUT.storyEyebrow}</SectionLabel>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-fg leading-[1.12]">
                {ABOUT.storyHeadline}
              </h2>
              <div className="space-y-1.5 border-l-2 border-brand-green pl-4 sm:pl-5">
                <p className="text-fg/40 font-sans text-sm sm:text-base">
                  {ABOUT.storyContrast.before}
                </p>
                <p className="font-display font-extrabold text-fg text-xl sm:text-2xl leading-snug">
                  {ABOUT.storyContrast.after}
                </p>
              </div>
              <p className="text-fg/70 font-sans text-base leading-relaxed">
                {ABOUT.storyBody}
              </p>
              <p className="font-display font-bold text-fg text-xl sm:text-2xl leading-snug">
                &ldquo;{ABOUT.storyQuote}&rdquo;
              </p>
              <p className="font-display font-semibold text-fg/85 text-base sm:text-lg leading-snug">
                {ABOUT.storyPunch}
              </p>
            </FadeUp>

            <FadeUp className="lg:col-span-7 lg:sticky lg:top-28" delay={0.08}>
              <AboutStoryVisual />
            </FadeUp>
          </div>

          <FadeUp className="mt-12 sm:mt-16 max-w-3xl space-y-5 border-t border-line pt-10">
            {ABOUT.storyClose.map((paragraph) => (
              <p
                key={paragraph}
                className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Belief / manifesto */}
      <section
        ref={manifestoRef}
        id="belief"
        className="relative overflow-hidden bg-brand-navy py-32 sm:py-44"
      >
        <motion.div
          style={{ y: glowY, scale: glowScale }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-2xl aspect-square rounded-full bg-brand-green/25 blur-[100px] pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <FadeUp>
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-brand-green text-sm">02</span>
              <SectionLabel>{ABOUT.beliefEyebrow}</SectionLabel>
            </div>
          </FadeUp>
          <FadeUp delay={0.04}>
            <p className="text-white/55 font-sans text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {ABOUT.beliefHeadline}
            </p>
          </FadeUp>
          <FadeUp delay={0.08} className="space-y-4">
            {ABOUT.manifestoLines.map((line) => (
              <p
                key={line}
                className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight"
              >
                {line}
              </p>
            ))}
          </FadeUp>
          <FadeUp delay={0.14} className="max-w-lg mx-auto space-y-3">
            <p className="text-brand-green font-sans font-semibold text-sm sm:text-base">
              {ABOUT.beliefSupportIntro}
            </p>
            <p className="text-white/50 font-sans text-base sm:text-lg leading-relaxed">
              {ABOUT.beliefSupport}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* System diagram */}
      <section id="system" className="py-20 sm:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp className="max-w-2xl mb-12 sm:mb-16 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-brand-green text-sm">03</span>
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

      {/* Why Ctop */}
      <section id="why" className="py-20 sm:py-28 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp className="max-w-xl mb-10 sm:mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-brand-green text-sm">04</span>
              <SectionLabel>{ABOUT.differenceEyebrow}</SectionLabel>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.differenceHeadline}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ABOUT.differences.map((item, index) => {
              const Icon = DIFFERENCE_ICONS[index] || Layers;
              return (
                <FadeUp key={item.id} delay={index * 0.07}>
                  <article className="group h-full rounded-2xl border border-line bg-bg-elevated p-6 sm:p-8 hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-300">
                    <IconWell
                      tone={index === 1 ? 'yellow' : 'green'}
                      size="md"
                      className="mb-5 border"
                    >
                      <Icon className="w-4 h-4" strokeWidth={2.25} />
                    </IconWell>
                    <h3 className="font-display font-bold text-fg text-xl">{item.title}</h3>
                    <p className="mt-3 text-fg/65 font-sans text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="py-16 sm:py-24 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <FadeUp>
              <div className="h-full rounded-2xl border border-line bg-bg-elevated p-7 sm:p-10">
                <IconWell tone="green" size="lg" className="mb-6 border">
                  <Compass className="w-5 h-5" strokeWidth={2.25} />
                </IconWell>
                <SectionLabel>{ABOUT.visionEyebrow}</SectionLabel>
                <h3 className="mt-4 font-display font-bold text-fg text-xl sm:text-2xl">
                  {ABOUT.visionTitle}
                </h3>
                <p className="mt-4 text-fg/70 font-sans text-base leading-relaxed">{ABOUT.vision}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-bg-elevated p-7 sm:p-10">
                <IconWell tone="yellow" size="lg" className="mb-6 border">
                  <Target className="w-5 h-5" strokeWidth={2.25} />
                </IconWell>
                <SectionLabel>{ABOUT.missionEyebrow}</SectionLabel>
                <h3 className="mt-4 font-display font-bold text-fg text-xl sm:text-2xl">
                  {ABOUT.missionTitle}
                </h3>
                <p className="mt-4 text-fg/70 font-sans text-base leading-relaxed">{ABOUT.mission}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values — focused four */}
      <section id="values" className="py-20 sm:py-28 bg-bg border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp className="max-w-xl mb-12 sm:mb-16 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-brand-green text-sm">05</span>
              <SectionLabel>{ABOUT.valuesEyebrow}</SectionLabel>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.valuesHeadline}
            </h2>
            <p className="text-fg/65 font-sans text-base leading-relaxed">
              {ABOUT.valuesDescription}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {featuredValues.map((value, i) => (
              <div key={value.id}>
                <ValueColorPanel
                  index={i}
                  title={value.title}
                  description={value.description}
                  tone={VALUE_TONES[i % VALUE_TONES.length]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact + auto slider */}
      <section className="bg-brand-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-5 space-y-8">
              <SectionLabel>{ABOUT.proofEyebrow}</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                {ABOUT.proofHeadline}
              </h2>
              <div className="space-y-6">
                {ABOUT.proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
                  >
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="brand-label !text-[10px] text-white/40 text-right">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp className="lg:col-span-7" delay={0.1}>
              <AboutTestimonialSlider />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA — full copy */}
      <section className="py-28 sm:py-36 bg-bg">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <FadeUp className="space-y-5">
            <p className="brand-label text-brand-green">{ABOUT.ctaEyebrow}</p>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-fg leading-tight">
              {ABOUT.ctaHeadlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="space-y-3 max-w-xl mx-auto">
              {ABOUT.ctaBody.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-fg/60 font-sans text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.08} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton
              onClick={() => onContactClick('book')}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-widest rounded-md cursor-pointer"
            >
              {ABOUT.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-line text-fg font-sans font-bold text-sm uppercase tracking-widest rounded-md hover:border-brand-green/50 transition-colors"
            >
              {ABOUT.ctaSecondary}
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
