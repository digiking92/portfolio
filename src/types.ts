export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  accentColor?: string;
  floatingAccent?: 'green-ring' | 'yellow-crescent' | 'none';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface SkillBadge {
  name: string;
  label: string;
  positionClass: string; // Tailwind positions on the circle
  colorClass: string;
}
