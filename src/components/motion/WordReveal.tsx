import { motion } from 'motion/react';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
  accentWords?: string[];
  accentClassName?: string;
}

export default function WordReveal({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h1',
  accentWords = [],
  accentClassName = '',
}: WordRevealProps) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, i) => {
        const clean = word.replace(/[—–-]/g, '');
        const isAccent = accentWords.some((a) => clean.toLowerCase().includes(a.toLowerCase()));
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0">
            <motion.span
              className={`inline-block ${isAccent && accentClassName ? accentClassName : ''}`}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.55,
                delay: delay + i * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
