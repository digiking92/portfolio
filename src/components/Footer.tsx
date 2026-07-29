import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Linkedin, Instagram, Mail, MessageSquare } from 'lucide-react';
import { BRAND, SERVICE_PILLARS } from '../data/ctopData';

interface FooterProps {
  onContactClick: (intent?: 'book' | 'message') => void;
}

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
];

const SOCIAL = [
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
  { href: `mailto:${BRAND.email}`, label: 'Email', Icon: Mail },
];

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="section-navy relative overflow-hidden border-t border-white/5 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-60" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.16) 1px, transparent 0)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 10%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14 border-b border-white/10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-5 space-y-5">
              <Link to="/" className="flex items-center gap-2.5 group cursor-pointer w-fit">
                <div className="relative w-9 h-9 rounded-full border border-brand-green/60 flex items-center justify-center overflow-hidden">
                  <div className="w-5 h-5 rounded-full bg-brand-green opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  CTOP
                </span>
              </Link>
              <p className="text-white/65 font-sans text-sm sm:text-[15px] leading-relaxed max-w-sm">
                {BRAND.positioning}
              </p>
              <p className="text-brand-green font-sans font-semibold text-sm">
                {BRAND.mantra}
              </p>
              <button
                type="button"
                onClick={onContactClick}
                className="group inline-flex items-center gap-2 mt-1 px-5 py-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-xs uppercase tracking-wider rounded-md cursor-pointer transition-colors"
              >
                Book a Strategy Call
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Navigate */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="brand-label text-brand-green">Navigate</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/65 hover:text-white font-sans text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="brand-label text-brand-green">Pillars</h4>
              <ul className="space-y-2.5">
                {SERVICE_PILLARS.map((pillar) => (
                  <li key={pillar.id}>
                    <Link
                      to="/services"
                      className="text-white/65 hover:text-white font-sans text-sm transition-colors"
                    >
                      {pillar.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="brand-label text-brand-green">Connect</h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="block text-white/80 hover:text-brand-green font-sans text-sm transition-colors"
                >
                  {BRAND.email}
                </a>
                <p className="text-white/50 font-sans text-sm">{BRAND.location}</p>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                {SOCIAL.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2.5 rounded-full border border-white/15 bg-white/5 text-brand-yellow hover:text-white hover:border-brand-green/50 hover:bg-brand-green/10 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 font-sans text-xs text-center sm:text-left">
              © {currentYear} {BRAND.fullName}. All rights reserved.
            </p>
            <p className="brand-label !text-[10px] text-white/35 tracking-[0.12em]">
              {BRAND.tagline}
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => onContactClick('message')}
          className="p-3.5 sm:p-4 rounded-full bg-brand-green text-brand-navy hover:bg-brand-green-hover shadow-xl shadow-brand-green/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center border border-brand-green/30"
          aria-label="Contact Ctop"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 sm:p-3.5 rounded-full bg-brand-navy/90 border border-white/15 text-white/70 hover:text-white hover:border-brand-green/40 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
