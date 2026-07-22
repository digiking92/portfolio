import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_LIST } from '../data/portfolioData';

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (value - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-12 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Floating background decorative yellow crescent */}
        <div className="absolute -bottom-6 left-10 w-16 h-16 rounded-full border-[10px] border-brand-yellow/30 pointer-events-none hidden sm:block animate-pulse" />
        <div className="absolute -top-6 right-20 w-12 h-12 rounded-full border-8 border-brand-yellow/30 pointer-events-none hidden sm:block animate-bounce" style={{ animationDuration: '4s' }} />

        {/* Stats Card Container */}
        <div className="bg-[#181B22] border border-gray-900/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
            {STATS_LIST.map((stat, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white flex items-center justify-center">
                  <span className="text-white">
                    <Counter value={stat.value} />
                  </span>
                  {stat.suffix && <span className="text-brand-green ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-gray-400 font-sans text-xs md:text-sm tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
