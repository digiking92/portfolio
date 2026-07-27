import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '../../data/ctopData';
import SectionLabel from '../SectionLabel';
import AmbientScene from '../AmbientScene';
import FadeUp from '../motion/FadeUp';

function Avatar({ name, tone }: { name: string; tone: 'green' | 'yellow' }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);
  const bg = tone === 'green' ? 'bg-brand-green/20 text-brand-green border-brand-green/40' : 'bg-brand-yellow/20 text-brand-yellow border-brand-yellow/40';

  return (
    <div
      className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-display font-bold text-lg ${bg}`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const primary = TESTIMONIALS[0];
  const secondary = TESTIMONIALS[1];

  return (
    <section className="section-navy py-24 sm:py-28 relative overflow-hidden">
      <AmbientScene variant="green" intensity="medium" />
      <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp className="mb-12 space-y-4 max-w-2xl">
          <SectionLabel>{TESTIMONIALS_SECTION.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg leading-tight">
            {TESTIMONIALS_SECTION.headline}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Featured quote card */}
          <FadeUp className="lg:col-span-7">
            <div className="relative h-full rounded-3xl border border-line bg-surface p-8 sm:p-10 overflow-hidden shine-border group">
              <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-brand-green/15 blur-3xl group-hover:bg-brand-green/25 transition-colors" />
              <div className="absolute inset-0 bg-diagonal opacity-40 pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="text-brand-green">
                    <Quote className="w-12 h-12 md:w-14 md:h-14 stroke-[1.5] scale-x-[-1]" />
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                </div>

                <p className="text-fg font-sans text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                  &ldquo;{primary.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <Avatar name={primary.author} tone="green" />
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-green tracking-wide">
                      {primary.author}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-muted font-semibold tracking-wider uppercase">
                      {primary.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Side stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-3xl border border-line bg-surface/90 p-7 overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-fade opacity-40" />
                <div className="relative space-y-5">
                  {secondary && (
                    <>
                      <p className="text-muted font-sans text-base leading-relaxed">
                        &ldquo;{secondary.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar name={secondary.author} tone="yellow" />
                        <div>
                          <p className="font-display font-bold text-brand-green text-sm">
                            {secondary.author}
                          </p>
                          <p className="text-subtle font-sans text-xs uppercase tracking-wider">
                            {secondary.role}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="relative rounded-3xl border border-brand-green/30 bg-brand-green/10 p-7 overflow-hidden min-h-[160px] flex flex-col justify-between">
                <div className="absolute -bottom-10 -right-8 w-32 h-32 rounded-full border-[14px] border-brand-green/20" />
                <p className="brand-label text-brand-green text-[10px]">Client outcomes</p>
                <div className="relative grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-display font-extrabold text-3xl text-fg">+142%</p>
                    <p className="text-muted text-xs font-sans mt-1">Avg. pipeline lift</p>
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-3xl text-fg">4.9</p>
                    <p className="text-muted text-xs font-sans mt-1">Partner rating</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
