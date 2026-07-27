import { motion } from 'motion/react';
import { ABOUT, VALUES, BRAND } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';

interface AboutPageProps {
  onContactClick: () => void;
}

export default function AboutPage({ onContactClick }: AboutPageProps) {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>About</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl sm:text-6xl font-display font-extrabold text-fg leading-tight max-w-4xl"
        >
          {ABOUT.headline}
        </motion.h1>
        <p className="mt-6 text-muted font-sans text-lg max-w-2xl leading-relaxed">
          {BRAND.tagline}. {BRAND.positioning}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionLabel>Our Story</SectionLabel>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {ABOUT.story.map((paragraph) => (
              <p key={paragraph} className="text-muted font-sans text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-line">
        <div className="bg-surface border border-line rounded-3xl p-10 sm:p-14">
          <SectionLabel>Philosophy</SectionLabel>
          <p className="mt-6 text-2xl sm:text-3xl font-display font-bold text-fg leading-snug max-w-3xl">
            {ABOUT.philosophy}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <SectionLabel>Vision</SectionLabel>
          <p className="text-muted font-sans leading-relaxed">{ABOUT.vision}</p>
        </div>
        <div className="space-y-4">
          <SectionLabel>Mission</SectionLabel>
          <p className="text-muted font-sans leading-relaxed">{ABOUT.mission}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-line">
        <div className="mb-10 space-y-4 max-w-2xl">
          <SectionLabel>Core Values</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-fg">
            What guides every engagement
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div key={value.id} className="border-t border-line pt-5">
              <h3 className="font-display font-bold text-fg text-lg mb-2">{value.title}</h3>
              <p className="text-muted font-sans text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-surface border border-line rounded-3xl p-10 sm:p-14 text-center space-y-6">
          <p className="text-xl sm:text-2xl font-display font-bold text-fg max-w-3xl mx-auto leading-snug">
            {ABOUT.promise}
          </p>
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-wider rounded-md cursor-pointer"
          >
            Start a conversation
          </button>
        </div>
      </section>
    </div>
  );
}
