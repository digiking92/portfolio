import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'portfolio', 'services', 'contact-trigger'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (section === 'contact-trigger') {
              setActiveSection('contact');
            } else if (section === 'services') {
              setActiveSection('home'); // Services counts as home page or general skills
            } else {
              setActiveSection(section);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-dark/80 backdrop-blur-md py-4 border-b border-gray-900/50 shadow-lg'
          : 'bg-transparent py-6'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group cursor-pointer"
          id="header-logo-btn"
        >
          <div className="relative w-8 h-8 rounded-full border border-brand-green flex items-center justify-center overflow-hidden">
            <div className="w-5 h-5 rounded-full bg-brand-green opacity-80 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            JESSY
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium text-gray-400">
          <button
            onClick={() => scrollToSection('home')}
            className={`transition-colors duration-200 hover:text-white cursor-pointer relative py-1 ${
              activeSection === 'home' ? 'text-white font-semibold' : ''
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className={`transition-colors duration-200 hover:text-white cursor-pointer relative py-1 ${
              activeSection === 'portfolio' ? 'text-white font-semibold' : ''
            }`}
          >
            Portfolio
            {activeSection === 'portfolio' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full" />
            )}
          </button>
          <button
            onClick={onContactClick}
            className={`transition-colors duration-200 hover:text-white cursor-pointer relative py-1 ${
              activeSection === 'contact' ? 'text-white font-semibold' : ''
            }`}
          >
            Contact
            {activeSection === 'contact' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full" />
            )}
          </button>
        </nav>

        {/* Right CTA / Options */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="p-2.5 rounded-full bg-[#181B22] border border-gray-800 text-brand-yellow hover:text-brand-yellow-hover hover:border-gray-700 transition-colors duration-200"
            aria-label="Language / Region"
            id="lang-selector"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            onClick={onContactClick}
            className="px-6 py-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold text-sm rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-brand-yellow/10 cursor-pointer"
            id="header-contact-btn"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className="p-2 rounded-lg bg-[#181B22] border border-gray-800 text-brand-yellow"
            aria-label="Language / Region"
            id="mobile-lang-selector"
          >
            <Globe className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white rounded-lg bg-[#181B22] border border-gray-800"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-dark border-b border-gray-900/80 px-6 py-8 flex flex-col gap-6 md:hidden z-30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-left text-lg font-medium py-2 ${
              activeSection === 'home' ? 'text-brand-green border-l-2 border-brand-green pl-3' : 'text-gray-400 pl-3'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className={`text-left text-lg font-medium py-2 ${
              activeSection === 'portfolio' ? 'text-brand-green border-l-2 border-brand-green pl-3' : 'text-gray-400 pl-3'
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="text-left text-lg font-medium py-2 text-gray-400 pl-3"
          >
            Contact
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full py-3.5 bg-brand-yellow text-black font-sans font-bold text-center rounded-xl cursor-pointer"
            id="mobile-contact-btn"
          >
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
}
