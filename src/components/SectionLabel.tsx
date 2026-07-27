import { DrawRule } from './motion/DrawArrow';

interface SectionLabelProps {
  children: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-brand-green">
        <DrawRule className="w-12 h-[2px]" />
      </span>
      <span className="brand-label text-brand-green">{children}</span>
    </div>
  );
}
