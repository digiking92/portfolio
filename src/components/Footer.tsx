import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Instagram, Mail, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/ctopData';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg border-t border-line pt-16 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer w-fit">
            <div className="relative w-8 h-8 rounded-full border border-brand-green flex items-center justify-center overflow-hidden">
              <div className="w-5 h-5 rounded-full bg-brand-green opacity-80 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-fg">CTOP</span>
          </Link>
          <p className="text-subtle font-sans text-sm leading-relaxed max-w-xs">
            {BRAND.positioning}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="brand-label text-brand-green">Navigate</h4>
          <div className="flex flex-col gap-2 text-sm font-sans text-muted">
            <Link to="/about" className="hover:text-fg transition-colors">About</Link>
            <Link to="/services" className="hover:text-fg transition-colors">Services</Link>
            <Link to="/work" className="hover:text-fg transition-colors">Work</Link>
            <Link to="/contact" className="hover:text-fg transition-colors">Contact</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="brand-label text-brand-green">Connect</h4>
          <p className="text-muted font-sans text-sm">{BRAND.email}</p>
          <p className="text-subtle font-sans text-sm">{BRAND.location}</p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-surface border border-line text-brand-yellow hover:text-fg hover:bg-surface-muted transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-surface border border-line text-brand-yellow hover:text-fg hover:bg-surface-muted transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="p-2.5 rounded-full bg-surface border border-line text-brand-yellow hover:text-fg hover:bg-surface-muted transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-8">
        <p className="text-subtle font-sans text-xs text-center">
          © {currentYear} {BRAND.fullName}. All rights reserved.
        </p>
        <p className="text-subtle brand-label text-[10px]">
          {BRAND.tagline}
        </p>
      </div>

      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button
          onClick={onContactClick}
          className="p-4 rounded-full bg-brand-green text-brand-navy hover:bg-brand-green-hover shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer flex items-center justify-center border border-brand-green/20"
          aria-label="Contact Ctop"
        >
          <MessageSquare className="w-5 h-5 fill-black/10" />
        </button>
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-surface border border-line text-muted hover:text-fg hover:border-line-strong shadow-2xl transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      </div>
    </footer>
  );
}
