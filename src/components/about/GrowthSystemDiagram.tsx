import { useState } from 'react';
import { motion } from 'motion/react';

const NODES = [
  { id: 'website', label: 'Website', x: 50, y: 10 },
  { id: 'ads', label: 'Ads', x: 12, y: 38 },
  { id: 'brand', label: 'Brand', x: 88, y: 38 },
  { id: 'funnel', label: 'Sales Funnel', x: 50, y: 62 },
  { id: 'email', label: 'Email', x: 22, y: 86 },
  { id: 'analytics', label: 'Analytics', x: 78, y: 86 },
] as const;

type NodeId = (typeof NODES)[number]['id'] | 'core';

const LINES: { from: { x: number; y: number }; to: { x: number; y: number }; node: NodeId }[] = [
  { from: { x: 50, y: 50 }, to: { x: 50, y: 10 }, node: 'website' },
  { from: { x: 50, y: 50 }, to: { x: 12, y: 38 }, node: 'ads' },
  { from: { x: 50, y: 50 }, to: { x: 88, y: 38 }, node: 'brand' },
  { from: { x: 50, y: 50 }, to: { x: 50, y: 62 }, node: 'funnel' },
  { from: { x: 50, y: 62 }, to: { x: 22, y: 86 }, node: 'email' },
  { from: { x: 50, y: 62 }, to: { x: 78, y: 86 }, node: 'analytics' },
];

export default function GrowthSystemDiagram() {
  const [active, setActive] = useState<NodeId | null>(null);
  const allOn = active === 'core';

  const isLit = (id: NodeId) => allOn || active === id;

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto aspect-square select-none"
      onMouseLeave={() => setActive(null)}
    >
      <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-brand-green/10 via-transparent to-brand-yellow/10 blur-2xl pointer-events-none" />
      <div className="absolute inset-[10%] rounded-full border border-line/80" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-line/50" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden>
        {LINES.map((line) => {
          const lit = isLit(line.node) || allOn;
          return (
            <motion.line
              key={line.node}
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke={lit ? '#4ADE80' : '#94A3B8'}
              strokeOpacity={lit ? 0.9 : 0.28}
              strokeWidth={lit ? 0.7 : 0.4}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 }}
              style={{
                filter: lit ? 'drop-shadow(0 0 4px rgba(74,222,128,0.55))' : undefined,
              }}
            />
          );
        })}
      </svg>

      <button
        type="button"
        onMouseEnter={() => setActive('core')}
        onFocus={() => setActive('core')}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[28%] aspect-square rounded-full border-2 flex flex-col items-center justify-center text-center px-2 cursor-pointer transition-all duration-300 ${
          allOn
            ? 'bg-brand-green border-brand-green text-brand-navy shadow-[0_0_40px_rgba(74,222,128,0.45)] scale-105'
            : 'bg-bg-elevated border-brand-green/50 text-fg hover:border-brand-green'
        }`}
        aria-label="Growth System core"
      >
        <span className="font-display font-extrabold text-[10px] sm:text-xs leading-tight">
          Growth
          <br />
          System
        </span>
      </button>

      {NODES.map((node, i) => {
        const lit = isLit(node.id);
        return (
          <motion.button
            key={node.id}
            type="button"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06 }}
            onMouseEnter={() => setActive(node.id)}
            onFocus={() => setActive(node.id)}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border text-[11px] sm:text-xs font-sans font-bold whitespace-nowrap cursor-pointer transition-all duration-300 ${
              lit
                ? 'bg-brand-green text-brand-navy border-brand-green shadow-[0_0_24px_rgba(74,222,128,0.4)] scale-105'
                : 'bg-bg-elevated text-fg border-line hover:border-brand-green/50'
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </motion.button>
        );
      })}

      <p className="absolute -bottom-2 left-0 right-0 text-center brand-label !text-[10px] text-fg/40">
        Hover a node to see how it connects
      </p>
    </div>
  );
}
