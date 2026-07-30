import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../../data/ctopData';

const INTERVAL_MS = 5500;

/** Auto-advancing testimonial slider for About impact section */
export default function AboutTestimonialSlider() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;
  const item = TESTIMONIALS[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-12 min-h-[320px] sm:min-h-[360px] flex flex-col">
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.author}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            <p className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-auto pt-8 border-t border-white/10">
              <cite className="not-italic font-display font-bold text-brand-green">
                {item.author}
              </cite>
              <p className="mt-1 text-white/45 font-sans text-sm">{item.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-center gap-2 mt-8 pt-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.author}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.author}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index ? 'w-8 bg-brand-green' : 'w-1.5 bg-white/25 hover:bg-white/45'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
