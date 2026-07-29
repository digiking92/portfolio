import { motion } from 'motion/react';

interface AmbientSceneProps {
  variant?: 'green' | 'yellow' | 'mixed' | 'aurora';
  showGrid?: boolean;
  showGrain?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

/** Soft aurora orbs, navy depth + lime glow (brand colors only) */
export default function AmbientScene({
  variant = 'mixed',
  showGrid = true,
  showGrain = true,
  intensity = 'medium',
}: AmbientSceneProps) {
  const opacity =
    intensity === 'low' ? 'opacity-50' : intensity === 'high' ? 'opacity-95' : 'opacity-75';

  const showGreen = variant === 'green' || variant === 'mixed' || variant === 'aurora';
  const showYellow = variant === 'yellow' || variant === 'mixed' || variant === 'aurora';
  const isAurora = variant === 'aurora' || variant === 'mixed';

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${opacity}`} aria-hidden>
      {showGrid && <div className="absolute inset-0 bg-grid-fade" />}

      {isAurora && (
        <motion.div
          className="absolute top-[-20%] left-[10%] w-[520px] h-[520px] rounded-full bg-brand-navy/15 blur-[120px]"
          animate={{ x: [0, 50, -20, 0], y: [0, 30, -25, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {showGreen && (
        <>
          <motion.div
            className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-green/25 blur-[100px] animate-blob"
            animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[40%] right-[5%] w-[280px] h-[280px] rounded-full bg-brand-green/15 blur-[90px]"
            animate={{ x: [0, -30, 15, 0], y: [0, 40, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute top-1/3 right-[-10%] w-[280px] h-[280px] rounded-full border-[28px] border-brand-green/10 animate-float-slow" />
        </>
      )}

      {showYellow && (
        <>
          <motion.div
            className="absolute -bottom-32 right-[-80px] w-[480px] h-[480px] rounded-full bg-brand-yellow/15 blur-[110px] animate-blob-delayed"
            animate={{ x: [0, -30, 20, 0], y: [0, -40, 15, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute bottom-[15%] left-[-5%] w-[200px] h-[200px] rounded-full border-[20px] border-brand-yellow/15 animate-float-medium" />
        </>
      )}

      <motion.div
        className="absolute top-[20%] left-[45%] w-2.5 h-2.5 rounded-full bg-brand-green blur-[1px]"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-brand-yellow blur-[1px]"
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, delay: 0.5 }}
      />

      {showGrain && <div className="absolute inset-0 bg-noise mix-blend-overlay" />}
    </div>
  );
}
