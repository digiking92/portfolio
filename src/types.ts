export interface Outcome {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export type EngagementCategory =
  | 'Digital Products'
  | 'Brand & Corporate Platforms'
  | 'Growth Systems'
  | 'AI & Business Tools';

export interface CaseStudy {
  id: string;
  /** Client / brand name */
  client: string;
  /** Outcome-led subtitle */
  subtitle: string;
  category: EngagementCategory;
  /** Premium capability labels (not "Website Design") */
  labels: string[];
  challenge: string;
  approach: string;
  delivered: string[];
  impact: string;
  /** Optional — leave empty until assets are ready */
  image?: string;
  accentColor?: 'brand-green' | 'brand-yellow' | 'brand-orange' | 'brand-purple';
}

export interface Reason {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Stat {
  value?: number;
  label: string;
  suffix?: string;
  /** Non-numeric trust bar display (e.g. "Global") */
  display?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}
