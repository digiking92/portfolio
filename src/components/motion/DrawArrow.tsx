import { motion } from 'motion/react';

interface DrawArrowProps {
  className?: string;
  delay?: number;
}

/** Accent underline / arrow with SVG stroke draw */
export default function DrawLine({ className = '', delay = 0 }: DrawArrowProps) {
  return (
    <svg
      className={className}
      width="48"
      height="12"
      viewBox="0 0 48 12"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M1 6H40M40 6L34 1.5M40 6L34 10.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function DrawRule({ className = '', delay = 0 }: DrawArrowProps) {
  return (
    <svg
      className={className}
      width="48"
      height="2"
      viewBox="0 0 48 2"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M0 1H48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      />
    </svg>
  );
}
