import type { ReactNode } from 'react';

const tones = {
  green: 'bg-brand-green/15 border-brand-green/35 text-brand-green',
  yellow: 'bg-brand-yellow/15 border-brand-yellow/40 text-brand-yellow',
  orange: 'bg-brand-orange/15 border-brand-orange/35 text-brand-orange',
  purple: 'bg-brand-purple/15 border-brand-purple/35 text-brand-purple',
  navy: 'bg-brand-navy border-white/15 text-brand-green',
} as const;

interface IconWellProps {
  children: ReactNode;
  tone?: keyof typeof tones;
  size?: 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
  xl: 'w-16 h-16',
};

export default function IconWell({
  children,
  tone = 'green',
  size = 'lg',
  className = '',
}: IconWellProps) {
  return (
    <div className={`icon-well ${sizes[size]} ${tones[tone]} ${className}`}>{children}</div>
  );
}
