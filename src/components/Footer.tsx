import { ArrowUp, Github, Linkedin, Instagram, Dribbble, MessageSquare } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-dark border-t border-gray-950 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left - Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer"
          id="footer-logo-btn"
        >
          <div className="relative w-8 h-8 rounded-full border border-brand-green flex items-center justify-center overflow-hidden">
            <div className="w-5 h-5 rounded-full bg-brand-green opacity-80 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            JESSY
          </span>
        </button>

        {/* Center - Copyright Info */}
        <div className="text-gray-500 font-sans text-xs text-center">
          © {currentYear} Freelancer - Phlox Elementor WordPress Theme. All rights reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#181B22] border border-gray-800 text-brand-yellow hover:text-white hover:bg-[#2A313E] transition-all duration-200"
            aria-label="Dribbble"
          >
            <Dribbble className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#181B22] border border-gray-800 text-brand-yellow hover:text-white hover:bg-[#2A313E] transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#181B22] border border-gray-800 text-brand-yellow hover:text-white hover:bg-[#2A313E] transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#181B22] border border-gray-800 text-brand-yellow hover:text-white hover:bg-[#2A313E] transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Floating Action Buttons Container (Scroll to Top & Fast Message) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button
          onClick={onContactClick}
          className="p-4 rounded-full bg-brand-green text-black hover:bg-brand-green-hover shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer flex items-center justify-center border border-brand-green/20"
          aria-label="Message Jessy"
          id="floating-msg-btn"
        >
          <MessageSquare className="w-5 h-5 fill-black/10" />
        </button>

        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-[#181B22] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 shadow-2xl transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
          id="floating-scroll-btn"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      </div>
    </footer>
  );
}
