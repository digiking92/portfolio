import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_INFO, SERVICES_LIST } from '../data/portfolioData';
import { ArrowDownToLine, Check, Boxes, PenTool, Layout, Palette } from 'lucide-react';

export default function Services() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Map icon strings to Lucide components
  const iconMap: { [key: string]: any } = {
    Boxes: Boxes,
    PenTool: PenTool,
    Layout: Layout,
    Palette: Palette,
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1800);
  };

  return (
    <section id="services" className="py-24 bg-[#121418] border-t border-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side - 2x2 Services Cards Grid */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES_LIST.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Boxes;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-[#181B22] border border-gray-900/80 rounded-2xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/5"
                >
                  {/* Glowing icon circle */}
                  <div className="w-14 h-14 rounded-full border border-brand-green/30 text-brand-green bg-brand-green/5 flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-black group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 font-sans text-xs leading-relaxed max-w-[200px]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Why Hire Me Text Content */}
        <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 text-left">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brand-green"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-green font-semibold">
              {SERVICES_INFO.subtitle}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            {SERVICES_INFO.title}
          </h2>

          <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            {SERVICES_INFO.description}
          </p>

          <div className="pt-4">
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className={`flex items-center gap-2.5 px-7 py-3.5 ${
                downloadSuccess ? 'bg-brand-green text-black' : 'bg-brand-yellow text-black hover:bg-brand-yellow-hover'
              } font-sans font-bold text-sm uppercase tracking-wider rounded-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-85`}
              id="download-cv-btn"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Preparing PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-4.5 h-4.5" />
                  <span>CV Downloaded!</span>
                </>
              ) : (
                <>
                  <ArrowDownToLine className="w-4.5 h-4.5" />
                  <span>Download CV</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
