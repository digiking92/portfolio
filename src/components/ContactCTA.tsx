import { motion } from 'motion/react';

interface ContactCTAProps {
  onContactClick: () => void;
}

export default function ContactCTA({ onContactClick }: ContactCTAProps) {
  return (
    <section id="contact-trigger" className="py-20 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Bento Card Outer Layout */}
        <div className="relative bg-[#181B22] border border-gray-900/80 rounded-3xl p-10 sm:p-16 md:p-20 shadow-2xl overflow-hidden text-center">
          
          {/* Top-left Green Blob */}
          <div className="absolute top-[-40px] left-[-40px] w-32 h-32 rounded-full bg-gradient-to-br from-brand-green to-brand-green/10 opacity-60 blur-md pointer-events-none" />
          
          {/* Bottom-right Green Ring / Arc */}
          <div className="absolute bottom-[-60px] right-[-60px] w-40 h-40 rounded-full border-[18px] border-brand-green/20 pointer-events-none hidden sm:block" />

          {/* Central content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              Lets Work Together
            </h2>
            
            <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
              The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn.
            </p>

            <div className="pt-6">
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold text-sm uppercase tracking-widest rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-yellow/15 cursor-pointer"
                id="cta-contact-btn"
              >
                Contact Me
              </button>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
