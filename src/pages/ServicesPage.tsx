import { motion } from 'motion/react';
import { SERVICE_PILLARS } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';

interface ServicesPageProps {
  onContactClick: () => void;
}

export default function ServicesPage({ onContactClick }: ServicesPageProps) {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Services</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl sm:text-6xl font-display font-extrabold text-fg leading-tight max-w-4xl"
        >
          Four pillars. One growth system.
        </motion.h1>
        <p className="mt-6 text-muted font-sans text-lg max-w-2xl leading-relaxed">
          We organize our work into Strategy, Build, Grow, and Scale, so every capability serves a clear business purpose.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICE_PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-surface border border-line/80 rounded-3xl p-8 sm:p-10"
          >
            <span className="brand-label text-brand-green">
              0{index + 1}
            </span>
            <h2 className="mt-4 text-3xl font-display font-extrabold text-fg">{pillar.title}</h2>
            <p className="mt-3 text-muted font-sans text-sm leading-relaxed">{pillar.description}</p>
            <ul className="mt-8 space-y-3">
              {pillar.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-line bg-surface p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-fg">
              Not sure where to start?
            </h2>
            <p className="mt-2 text-muted font-sans text-sm max-w-md">
              We&apos;ll help you define the right combination of strategy, build, growth, and scale for your stage.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-wider rounded-md cursor-pointer shrink-0"
          >
            Let&apos;s Talk
          </button>
        </div>
      </section>
    </div>
  );
}
