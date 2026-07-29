import { ArrowRight } from 'lucide-react';
import MagneticButton from '../motion/MagneticButton';
import type { ContactIntent } from '../ContactModal';

interface SectionCtaProps {
  onClick: (intent?: ContactIntent) => void;
  label?: string;
  intent?: ContactIntent;
  /** yellow = primary brand CTA; ghost = outline for navy sections; link = text style */
  variant?: 'yellow' | 'ghost' | 'link';
  className?: string;
}

export default function SectionCta({
  onClick,
  label,
  intent = 'book',
  variant = 'yellow',
  className = '',
}: SectionCtaProps) {
  const resolvedLabel =
    label ?? (intent === 'message' ? 'Contact us' : 'Book a Strategy Call');

  const handleClick = () => onClick(intent);

  if (variant === 'link') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-fg hover:text-brand-green transition-colors cursor-pointer ${className}`}
      >
        {resolvedLabel}
        <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/25 bg-white/5 text-white font-sans font-bold text-sm uppercase tracking-wider hover:border-brand-green/50 hover:bg-brand-green/10 transition-colors cursor-pointer ${className}`}
      >
        {resolvedLabel}
        <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
      </button>
    );
  }

  return (
    <MagneticButton
      onClick={handleClick}
      strength={0.35}
      className={`group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-wider rounded-md cursor-pointer ${className}`}
    >
      {resolvedLabel}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </MagneticButton>
  );
}
