import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { HERO, HERO_SLIDES } from '../../data/ctopData';
import HeroVisual from '../HeroVisual';
import MagneticButton from '../motion/MagneticButton';

interface HeroProps {
  onContactClick: () => void;
}

const AUTO_MS = 6500;

/**
 * Brand-stage hero - full-bleed navy composition (Stripe / Linear pattern)
 * Motion framework: GSAP cinematic crossfades + editorial index rail
 */
export default function Hero({ onContactClick }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const segmentFillRef = useRef<HTMLDivElement>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);
  const segmentTween = useRef<gsap.core.Tween | null>(null);
  const enterTl = useRef<gsap.core.Timeline | null>(null);

  const count = HERO_SLIDES.length;
  const slide = HERO_SLIDES[index];

  const startProgress = useCallback(() => {
    progressTween.current?.kill();
    segmentTween.current?.kill();

    const desktopBar = progressRef.current;
    if (desktopBar) {
      gsap.set(desktopBar, { scaleX: 0, transformOrigin: 'left center' });
      progressTween.current = gsap.to(desktopBar, {
        scaleX: 1,
        duration: AUTO_MS / 1000,
        ease: 'none',
        paused: false,
      });
    }

    const segmentFill = segmentFillRef.current;
    if (segmentFill) {
      gsap.set(segmentFill, { scaleX: 0, transformOrigin: 'left center' });
      segmentTween.current = gsap.to(segmentFill, {
        scaleX: 1,
        duration: AUTO_MS / 1000,
        ease: 'none',
        paused: false,
      });
    }
  }, []);

  const playEnter = useCallback(() => {
    const copy = copyRef.current;
    const visual = visualRef.current;
    if (!copy || !visual) return;

    enterTl.current?.kill();

    const headline = copy.querySelector('[data-hero="headline"]');
    const desc = copy.querySelector('[data-hero="desc"]');
    const actions = copy.querySelector('[data-hero="actions"]');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    enterTl.current = tl;

    gsap.set([headline, desc, actions], { opacity: 0, y: 28 });
    gsap.set(visual, { opacity: 0, y: 36, scale: 0.96, rotateX: 6 });

    tl.to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0)
      .to(desc, { opacity: 1, y: 0, duration: 0.55 }, 0.1)
      .to(actions, { opacity: 1, y: 0, duration: 0.55 }, 0.18)
      .to(
        visual,
        { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.85, ease: 'power2.out' },
        0.08,
      );

    startProgress();
  }, [startProgress]);

  useEffect(() => {
    playEnter();
  }, [index, playEnter]);

  useEffect(() => {
    const tweens = [progressTween.current, segmentTween.current].filter(Boolean);
    tweens.forEach((tween) => {
      if (!tween) return;
      if (paused) tween.pause();
      else tween.resume();
    });
  }, [paused]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, count, index]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(index + 1);
      if (e.key === 'ArrowLeft') goTo(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, index]);

  const renderHeadline = (lines: string[]) =>
    lines.map((line) => (
      <span key={line} className="block whitespace-nowrap text-white">
        {line}
      </span>
    ));


  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-brand-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Ctop brand highlights"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(74,222,128,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_15%_80%,rgba(251,191,36,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_90%_85%,rgba(249,115,22,0.1),transparent_45%)]" />
        <div className="absolute inset-0 bg-grid-fade opacity-40" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[100svh] flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          <nav
            className="hidden lg:flex lg:col-span-1 flex-col gap-5 items-start pt-4"
            aria-label="Slide index"
          >
            {HERO_SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`group flex items-center gap-3 text-left cursor-pointer transition-all duration-300 ${
                    active ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                  aria-current={active}
                >
                  <span
                    className={`font-mono text-[11px] tracking-widest ${
                      active ? 'text-brand-green' : 'text-white/50'
                    }`}
                  >
                    {s.indexLabel}
                  </span>
                  <span className="relative">
                    <span
                      className={`block text-[11px] uppercase tracking-[0.14em] font-medium ${
                        active ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {s.rail}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-brand-green transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-1/2'
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start w-full min-w-0 text-center lg:text-left">
            <p className="brand-label text-brand-green !text-[8px] sm:!text-[10px] lg:!text-[11px] mb-3 sm:mb-4 lg:mb-5 !tracking-[0.1em] sm:!tracking-[0.12em] lg:!tracking-[0.14em]">
              {HERO.eyebrow}
            </p>

            <div ref={copyRef} className="space-y-5 sm:space-y-6 w-full flex flex-col items-center lg:items-start">
              <h1
                data-hero="headline"
                className="font-display font-extrabold tracking-tight text-white text-[45px] leading-[1.1] lg:text-[clamp(2rem,2.8vw,2.65rem)] lg:leading-[1.12]"
              >
                <span className="lg:hidden">{slide.headline}</span>
                <span className="hidden lg:block">{renderHeadline(slide.headlineLines)}</span>
              </h1>

              <p
                data-hero="desc"
                className="text-white/65 font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-sm sm:max-w-md mx-auto lg:mx-0"
              >
                {slide.description}
              </p>

              <div
                data-hero="actions"
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 sm:pt-2 w-auto max-w-full"
              >
                <MagneticButton
                  onClick={onContactClick}
                  className="w-auto max-w-full px-5 sm:px-7 py-3 sm:py-3.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-lg shadow-brand-yellow/25 cursor-pointer"
                >
                  {slide.primaryCta}
                </MagneticButton>
                <Link
                  to={slide.secondaryTo}
                  className="w-auto max-w-full text-center px-5 sm:px-7 py-3 sm:py-3.5 border border-white/20 hover:border-brand-green/60 text-white font-sans font-medium text-xs sm:text-sm uppercase tracking-wider rounded-md transition-colors backdrop-blur-sm"
                >
                  {slide.secondaryCta}
                </Link>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-6 relative flex items-center justify-center w-full min-w-0"
            style={{ perspective: 1200 }}
          >
            <div
              ref={visualRef}
              className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none relative mx-auto"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-[10%] rounded-full bg-brand-green/20 blur-[80px] pointer-events-none" />
              <HeroVisual variant={slide.visual} />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-6 flex flex-col gap-4 sm:gap-5">
          {/* Mobile-only: segmented progress rail */}
          <div className="lg:hidden space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="brand-label text-brand-green !text-[10px] tracking-[0.14em]">
                {slide.rail}
              </span>
              <span className="font-mono text-[11px] tracking-widest text-white/45 tabular-nums">
                {slide.indexLabel}
                <span className="text-white/25"> / </span>
                {String(count).padStart(2, '0')}
              </span>
            </div>

            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Slide progress"
            >
              {HERO_SLIDES.map((s, i) => {
                const isActive = i === index;
                const isComplete = i < index;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`${s.rail}, slide ${i + 1} of ${count}`}
                    onClick={() => goTo(i)}
                    className="relative flex-1 h-1.5 rounded-full bg-white/15 overflow-hidden cursor-pointer touch-manipulation"
                  >
                    {isComplete && (
                      <span className="absolute inset-0 rounded-full bg-brand-green" />
                    )}
                    {isActive && (
                      <span
                        ref={segmentFillRef}
                        className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-brand-green to-brand-yellow origin-left"
                        style={{ transform: 'scaleX(0)' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop progress (unchanged) */}
          <div className="hidden lg:flex items-center gap-3 sm:gap-4">
            <div className="flex-1 h-px bg-white/10 overflow-hidden rounded-full">
              <div
                ref={progressRef}
                className="h-full w-full bg-gradient-to-r from-brand-green to-brand-yellow origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
            <span className="font-mono text-[11px] tracking-widest text-white/45 tabular-nums shrink-0">
              {slide.indexLabel}
              <span className="text-white/25"> / </span>
              {String(count).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
