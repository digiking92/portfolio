import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
];

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const onHome = location.pathname === '/';
  const hasNavyHero = ['/', '/about', '/services', '/work', '/contact'].includes(
    location.pathname
  );
  const overDarkHero = hasNavyHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) => {
    if (overDarkHero) {
      return `relative transition-colors duration-200 cursor-pointer py-1 ${
        isActive ? 'text-white font-semibold' : 'text-white/65 hover:text-white'
      }`;
    }
    return `relative transition-colors duration-200 hover:text-fg cursor-pointer py-1 ${
      isActive ? 'text-fg font-semibold' : 'text-muted'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md py-4 border-b border-line shadow-sm'
          : 'bg-transparent py-6'
      }`}
      style={isScrolled ? { backgroundColor: 'var(--header-bg)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 rounded-full border border-brand-green flex items-center justify-center overflow-hidden">
            <div className="w-5 h-5 rounded-full bg-brand-green opacity-80 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent" />
          </div>
          <span
            className={`font-display font-bold text-xl tracking-wider transition-colors ${
              overDarkHero ? 'text-white' : 'text-fg'
            }`}
          >
            CTOP
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-sans font-medium">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
              overDarkHero
                ? 'bg-white/10 border-white/20 text-white hover:border-brand-green/50'
                : 'bg-surface border-line text-fg hover:border-line-strong'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={onContactClick}
            className="px-6 py-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-brand-yellow/10 cursor-pointer"
          >
            Book a Strategy Call
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border cursor-pointer ${
              overDarkHero
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-surface border-line text-fg'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`p-2 rounded-lg border cursor-pointer ${
              overDarkHero
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-surface border-line text-fg'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b border-line px-6 py-6 space-y-4"
          style={{ backgroundColor: 'var(--header-bg)' }}
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block text-left text-lg font-medium py-2 ${
                  isActive
                    ? 'text-brand-green border-l-2 border-brand-green pl-3'
                    : 'text-muted pl-3'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={onContactClick}
            className="w-full py-3.5 bg-brand-yellow text-brand-navy font-sans font-bold text-center rounded-xl cursor-pointer"
          >
            Book a Strategy Call
          </button>
        </div>
      )}
    </header>
  );
}
