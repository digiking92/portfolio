import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NODES = [
  { id: 'website', label: 'Website', x: 50, y: 8 },
  { id: 'ads', label: 'Ads', x: 10, y: 36 },
  { id: 'brand', label: 'Brand', x: 90, y: 36 },
  { id: 'funnel', label: 'Funnel', x: 50, y: 64 },
  { id: 'email', label: 'Email', x: 20, y: 90 },
  { id: 'analytics', label: 'Analytics', x: 80, y: 90 },
] as const;

type NodeId = (typeof NODES)[number]['id'] | 'core';

const COPY: Record<NodeId, string> = {
  core: 'Everything connects through one growth system.',
  website: 'Your digital front door. Built to convert, not just look good.',
  ads: 'Paid demand that feeds the system with the right traffic.',
  brand: 'Positioning and identity that make every touchpoint coherent.',
  funnel: 'The path from interest to action, designed end to end.',
  email: 'Nurture and retention that keep relationships moving.',
  analytics: 'Measurement that tells you what to improve next.',
};

const LINES: { x1: number; y1: number; x2: number; y2: number; node: NodeId }[] = [
  { x1: 50, y1: 50, x2: 50, y2: 8, node: 'website' },
  { x1: 50, y1: 50, x2: 10, y2: 36, node: 'ads' },
  { x1: 50, y1: 50, x2: 90, y2: 36, node: 'brand' },
  { x1: 50, y1: 50, x2: 50, y2: 64, node: 'funnel' },
  { x1: 50, y1: 64, x2: 20, y2: 90, node: 'email' },
  { x1: 50, y1: 64, x2: 80, y2: 90, node: 'analytics' },
];

export default function GrowthSystemDiagram() {
  const [active, setActive] = useState<NodeId>('core');
  const allOn = active === 'core';
  const isLit = (id: NodeId) => allOn || active === id;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
      <div
        className="lg:col-span-7 relative w-full max-w-[520px] mx-auto aspect-square"
        onMouseLeave={() => setActive('core')}
      >
        <div className="absolute inset-[8%] rounded-full border-2 border-line" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-line-strong/40" />
        <div className="absolute inset-[30%] rounded-full bg-brand-green/10 blur-xl pointer-events-none" />

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden>
          {LINES.map((line) => {
            const lit = isLit(line.node);
            return (
              <motion.line
                key={line.node}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={lit ? '#4ADE80' : '#94A3B8'}
                strokeOpacity={lit ? 1 : 0.35}
                strokeWidth={lit ? 1 : 0.45}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            );
          })}
        </svg>

        <button
          type="button"
          onMouseEnter={() => setActive('core')}
          onFocus={() => setActive('core')}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[32%] aspect-square rounded-full border-[3px] flex flex-col items-center justify-center text-center px-2 cursor-pointer transition-all duration-300 ${
            allOn
              ? 'bg-brand-green border-brand-green text-brand-navy shadow-[0_0_48px_rgba(74,222,128,0.5)] scale-105'
              : 'bg-bg-elevated border-brand-green text-fg'
          }`}
        >
          <span className="font-display font-extrabold text-xs sm:text-sm leading-tight">
            Growth
            <br />
            System
          </span>
        </button>

        {NODES.map((node) => {
          const lit = isLit(node.id);
          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 px-3.5 py-2 rounded-full border-2 text-xs sm:text-sm font-sans font-bold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                lit
                  ? 'bg-brand-green text-brand-navy border-brand-green shadow-lg scale-105'
                  : 'bg-bg text-fg border-line shadow-sm hover:border-brand-green/60'
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {node.label}
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-5 space-y-4">
        <p className="brand-label text-brand-green">Active node</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-line bg-bg-elevated p-6 sm:p-8 min-h-[160px]"
          >
            <h3 className="font-display font-extrabold text-fg text-2xl sm:text-3xl capitalize">
              {active === 'core' ? 'Growth System' : active}
            </h3>
            <p className="mt-3 text-fg/70 font-sans text-base leading-relaxed">{COPY[active]}</p>
          </motion.div>
        </AnimatePresence>
        <p className="text-fg/40 font-sans text-sm">Hover a node to explore the system.</p>
      </div>
    </div>
  );
}
