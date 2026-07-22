import { motion } from 'motion/react';
import { TESTIMONIAL_INFO } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side - Geometric Tilted Slab Decorative Shape */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-[260px] h-[340px] bg-[#181B22] border border-gray-800 rounded-3xl relative overflow-hidden shadow-2xl"
          >
            {/* Ambient gradients within the block */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 via-transparent to-transparent" />
            
            {/* Minimalist modern graphic line details */}
            <div className="absolute top-8 left-8 w-12 h-1 bg-brand-green rounded" />
            <div className="absolute top-14 left-8 w-24 h-0.5 bg-gray-800 rounded" />
            <div className="absolute bottom-12 left-8 right-8 space-y-3">
              <div className="w-full h-2 bg-gray-800 rounded-full" />
              <div className="w-5/6 h-2 bg-gray-800 rounded-full" />
              <div className="w-4/5 h-2 bg-gray-800 rounded-full" />
              <div className="w-1/2 h-2 bg-gray-800 rounded-full" />
            </div>

            {/* Glowing dot */}
            <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-brand-yellow blur-[1px] animate-pulse" />
          </motion.div>
        </div>

        {/* Right Side - Quote and Author Details */}
        <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2 flex flex-col justify-center">
          
          {/* Green Quote Mark Icon */}
          <div className="text-brand-green">
            <Quote className="w-12 h-12 md:w-16 md:h-16 stroke-[1.5] scale-x-[-1]" />
          </div>

          {/* Testimonial Quote text */}
          <p className="text-white font-sans text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
            "{TESTIMONIAL_INFO.quote}"
          </p>

          {/* Author Details */}
          <div className="space-y-1">
            <h4 className="font-display font-bold text-lg sm:text-xl text-brand-green tracking-wide">
              {TESTIMONIAL_INFO.author}
            </h4>
            
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
              <p className="font-sans text-xs sm:text-sm text-gray-400 font-semibold tracking-wider uppercase">
                {TESTIMONIAL_INFO.role}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
