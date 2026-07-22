import { motion } from 'motion/react';
import { JESSY_INFO, SKILL_BADGES } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-dark"
    >
      {/* Ambient background light glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-center text-left order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brand-green"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-green font-semibold">
              {JESSY_INFO.subtitle}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
            Hello<br />
            I'm <span className="text-white relative inline-block">Jessy</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Walter</span>
          </h1>

          <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed max-w-xl">
            {JESSY_INFO.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold text-sm uppercase tracking-wider rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-yellow/15 cursor-pointer"
              id="hero-contact-btn"
            >
              Contact Me
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border border-gray-800 hover:border-gray-600 text-white font-sans font-medium text-sm uppercase tracking-wider rounded-md transition-all duration-300 cursor-pointer"
              id="hero-portfolio-btn"
            >
              View Work
            </button>
          </div>
        </div>

        {/* Right Column - Beautiful Circle & Badges */}
        <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            
            {/* Outer dotted/dashed interactive rotating circle */}
            <div className="absolute inset-0 border border-gray-800/80 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-gray-700/40 rounded-full pointer-events-none" />

            {/* Main Circle background decoration */}
            <div className="absolute inset-10 bg-gradient-to-tr from-brand-green/20 via-brand-green/5 to-transparent rounded-full" />
            
            {/* The circular green frame background for the portrait */}
            <div className="absolute inset-12 md:inset-14 rounded-full border-4 border-brand-green/30 bg-[#16181D] overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              {/* Dynamic decorative backdrop shape */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-4/5 rounded-full bg-brand-green/15 blur-lg" />
              
              <img
                src={JESSY_INFO.portraitUrl}
                alt={JESSY_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_20%] relative z-10 scale-[1.6] hover:scale-[1.7] origin-[50%_20%] transition-transform duration-500"
              />
            </div>

            {/* Skill Badges Orbiting the Headshot */}
            {SKILL_BADGES.map((badge, idx) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.12, y: -4 }}
                className={`absolute ${badge.positionClass} flex items-center justify-center group z-20 cursor-help`}
                title={badge.label}
              >
                {/* Glow Ring behind the badges */}
                <div className="absolute -inset-1 rounded-full bg-current opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" style={{ color: badge.colorClass.includes('text-[#') ? badge.colorClass.split('text-[')[1].split(']')[0] : 'var(--color-brand-green)' }} />
                
                {/* The Badge Circle */}
                <div
                  className={`w-12 h-12 md:w-[60px] md:h-[60px] rounded-full border border-gray-800/80 shadow-lg flex items-center justify-center font-display font-bold text-base md:text-lg transition-all duration-300 hover:border-transparent ${badge.colorClass}`}
                >
                  {badge.name}
                </div>

                {/* Hover label tooltips */}
                <span className="absolute bottom-full mb-2 bg-[#1C1F26] border border-gray-800 text-gray-300 text-[10px] md:text-xs font-mono py-1 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                  {badge.label}
                </span>
              </motion.div>
            ))}

            {/* Glowing orb decorations inside hero circles */}
            <div className="absolute top-12 left-16 w-3 h-3 bg-brand-green rounded-full blur-[2px] animate-pulse" />
            <div className="absolute bottom-24 right-20 w-2.5 h-2.5 bg-brand-yellow rounded-full blur-[1px] animate-pulse" />
          </div>
        </div>

      </div>

      {/* Hero Bottom Slide indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll Down</span>
        <div className="w-[18px] h-[30px] rounded-full border border-gray-700 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-brand-green rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
