import { Project, Service, Stat, Testimonial, SkillBadge } from '../types';

export const JESSY_INFO = {
  name: 'Jessy Walter',
  subtitle: 'Introducing',
  headline: 'Hello\nI\'m Jessy\nWalter',
  description: "Since beginning my journey as a freelance designer nearby 7 years ago, I've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.",
  portraitUrl: '/src/assets/images/user_portrait_1782594060584.jpg',
  cvUrl: '#',
};

export const SERVICES_INFO = {
  subtitle: 'My Skills',
  title: 'Why Hire Me For Next Project?',
  description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
};

export const SERVICES_LIST: Service[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'The technological revolution is changing aspect',
    iconName: 'Boxes',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'The technological revolution is changing aspect',
    iconName: 'PenTool',
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    description: 'The technological revolution is changing aspect',
    iconName: 'Layout',
  },
  {
    id: 'icon-design',
    title: 'Icon Design',
    description: 'The technological revolution is changing aspect',
    iconName: 'Palette',
  },
];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'branding-nice-studio',
    category: 'Project 1',
    title: 'Branding Nice Studio',
    description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    image: '/src/assets/images/branding_stationery_mockup_1782591371117.jpg',
    link: '#',
    accentColor: 'brand-green',
  },
  {
    id: 'mobile-card-app',
    category: 'Project 2',
    title: 'Mobile Card App',
    description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    image: '/src/assets/images/mobile_card_app_mockup_1782591384735.jpg',
    link: '#',
    accentColor: 'brand-yellow',
    floatingAccent: 'green-ring',
  },
  {
    id: 'restaurant-landing-page',
    category: 'Project 3',
    title: 'Resturant Landing Page',
    description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    image: '/src/assets/images/restaurant_landing_page_mockup_1782591394992.jpg',
    link: '#',
    accentColor: 'brand-green',
    floatingAccent: 'yellow-crescent',
  },
];

export const STATS_LIST: Stat[] = [
  {
    value: 56,
    label: 'Happy Clients',
  },
  {
    value: 87,
    label: 'Projects Done',
  },
  {
    value: 16,
    label: 'Awards Winning',
  },
  {
    value: 7,
    label: 'Years Experience',
  },
];

export const TESTIMONIAL_INFO: Testimonial = {
  quote: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!",
  author: 'Amman Payne',
  role: 'CEO of Figma',
};

export const SKILL_BADGES: SkillBadge[] = [
  {
    name: 'Id',
    label: 'Adobe InDesign',
    positionClass: 'top-2 left-6 md:top-6 md:left-12',
    colorClass: 'bg-[#181B22] text-[#E0115F] border-[#E0115F]',
  },
  {
    name: 'Ps',
    label: 'Adobe Photoshop',
    positionClass: 'top-4 right-6 md:top-10 md:right-16',
    colorClass: 'bg-[#181B22] text-[#31A8FF] border-[#31A8FF]',
  },
  {
    name: 'Xd',
    label: 'Adobe XD',
    positionClass: 'bottom-16 right-0 md:bottom-28 md:right-4',
    colorClass: 'bg-[#181B22] text-[#FF61F6] border-[#FF61F6]',
  },
  {
    name: 'Ai',
    label: 'Adobe Illustrator',
    positionClass: 'bottom-20 left-0 md:bottom-32 md:left-2',
    colorClass: 'bg-[#181B22] text-[#FF9A00] border-[#FF9A00]',
  },
];
