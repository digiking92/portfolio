import {
  Capability,
  ProcessStep,
  CaseStudy,
  Reason,
  Testimonial,
  FAQItem,
  ServicePillar,
  Stat,
  ValueItem,
} from '../types';

export const BRAND = {
  name: 'Ctop Digital',
  fullName: 'Ctop Digital Solution',
  tagline: 'Digital Growth & Transformation Partner',
  positioning:
    'Helping ambitious businesses grow through strategy, technology and digital transformation.',
  mantra: "We don't sell websites. We build digital growth systems.",
  email: 'hello@ctopdigital.com',
  phone: '+234 800 000 0000',
  location: 'Lagos, Nigeria · Global',
};

export const HERO = {
  eyebrow: 'Digital Growth & Transformation Company',
  headline: 'Build a Business That Grows by Design.',
  description:
    'Strategy, branding, websites, AI and performance marketing, connected into one growth system that helps ambitious businesses scale with confidence.',
  primaryCta: 'Book a Strategy Call',
  secondaryCta: 'Explore Our Work',
  trustLine: 'Trusted by startups, SMEs and growing organizations.',
};

export const HERO_SLIDES = [
  {
    id: 'growth',
    indexLabel: '01',
    rail: 'Growth',
    headline: 'Build a Business That Grows by Design.',
    headlineLines: ['Build a Business That', 'Grows by Design.'],
    description:
      'Strategy, branding, websites, AI and performance marketing, connected into one growth system that helps ambitious businesses scale with confidence.',
    primaryCta: 'Book a Strategy Call',
    secondaryCta: 'Explore Work',
    secondaryTo: '/work',
    visual: 'growth' as const,
  },
  {
    id: 'systems',
    indexLabel: '02',
    rail: 'Systems',
    headline: "Growth Isn't an Accident. It's Engineered.",
    headlineLines: ["Growth Isn't an Accident.", "It's Engineered."],
    description:
      'We build digital systems that turn visibility into revenue and customers into loyal advocates.',
    primaryCta: 'Book a Strategy Call',
    secondaryCta: 'Our Services',
    secondaryTo: '/services',
    visual: 'systems' as const,
  },
  {
    id: 'performance',
    indexLabel: '03',
    rail: 'Performance',
    headline: 'Your Next Stage of Growth Starts Here.',
    headlineLines: ['Your Next Stage of Growth', 'Starts Here.'],
    description:
      'From strategy to execution, we help businesses build the digital foundations required for sustainable growth.',
    primaryCta: 'Book a Strategy Call',
    secondaryCta: 'See Results',
    secondaryTo: '/work',
    visual: 'performance' as const,
  },
  {
    id: 'ai',
    indexLabel: '04',
    rail: 'AI Ops',
    headline: "Build What's Next. We'll Engineer the Growth.",
    headlineLines: ["Build What's Next.", "We'll Engineer the Growth."],
    description:
      'Intelligent workflows and smarter journeys layered into your stack, so your team compounds results, not tasks.',
    primaryCta: 'Book a Strategy Call',
    secondaryCta: 'How We Work',
    secondaryTo: '/about',
    visual: 'ai' as const,
  },
];

export type HeroSlideVisual = (typeof HERO_SLIDES)[number]['visual'];


export const TRUST_SECTION = {
  eyebrow: 'Who we work with',
  headline: 'Trusted by ambitious teams across stages and industries.',
};

export const TRUST_AUDIENCES = [
  { id: 'startups', label: 'Startups' },
  { id: 'smes', label: 'SMEs' },
  { id: 'corporate', label: 'Corporate Organisations' },
  { id: 'agencies', label: 'Agencies' },
  { id: 'freelancers', label: 'Freelancers' },
];

export const TRUST_INDUSTRIES = [
  'Fintech',
  'Hospitality',
  'B2B Services',
  'E-commerce',
  'Professional Services',
  'Education',
];

/** Lightweight proof stats (optional secondary line) */
export const TRUST_BAR: Stat[] = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Projects Delivered' },
];

export const PROBLEM = {
  eyebrow: 'The Reality',
  headline: "Most Businesses Don't Need Another Website.",
  subhead: 'They need a better way to grow.',
  intro:
    'Too many organizations invest in websites, advertising, branding, and marketing without a clear strategy.',
  resultLabel: 'The result?',
  points: [
    'Beautiful websites that generate few leads.',
    'Marketing campaigns with no measurable return.',
    'Brands that fail to stand out.',
    'Disconnected systems that waste time and money.',
  ],
  bridgeLead: "The problem isn't digital investment.",
  bridgeHighlight: 'disconnected',
};

export const SOLUTION = {
  eyebrow: 'The Solution',
  headline: 'Stop Building Projects. Start Building Growth Systems.',
  headlineLines: ['Stop Building Projects.', 'Start Building Growth Systems.'],
  manifesto: [
    'We design digital systems that work together, not as separate projects competing for attention and budget. Website, brand, funnel, marketing, automation, and analytics become one connected ecosystem, built to turn attention into measurable growth.',
  ],
  mantraLead: "We don't sell websites.",
  mantraAccent: 'We build connected digital growth systems.',
};

export const CAPABILITIES_SECTION = {
  eyebrow: 'What We Do',
  headline: 'How We Help Businesses Grow',
  description:
    'Every capability is part of one system, designed to turn attention into measurable growth.',
};

export const CAPABILITIES: Capability[] = [
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Digital strategy that aligns technology with business goals.',
    iconName: 'Compass',
  },
  {
    id: 'brand',
    title: 'Brand',
    description: 'Build a brand people remember and trust.',
    iconName: 'Palette',
  },
  {
    id: 'websites',
    title: 'Websites',
    description: 'High-performing websites designed for conversion, speed, and user experience.',
    iconName: 'Layout',
  },
  {
    id: 'funnels',
    title: 'Sales Funnels',
    description:
      'Guide prospects from first click to loyal customer with intentional customer journeys.',
    iconName: 'Filter',
  },
  {
    id: 'ads',
    title: 'Performance Marketing',
    description:
      'Reach the right audience through data-driven advertising across Google, Meta, LinkedIn, and more.',
    iconName: 'Megaphone',
  },
  {
    id: 'email',
    title: 'Email Marketing & Automation',
    description:
      'Turn leads into customers, and customers into loyal advocates, with automated email journeys and CRM workflows.',
    iconName: 'Mail',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description:
      'Save time, improve efficiency, and streamline operations with intelligent automation and AI-powered solutions.',
    iconName: 'Bot',
  },
  {
    id: 'analytics',
    title: 'Analytics & Optimization',
    description:
      'Measure what matters, uncover opportunities, and continuously improve performance through actionable insights.',
    iconName: 'BarChart3',
  },
];

export const PROCESS_SECTION = {
  eyebrow: 'Our Process',
  headline: 'Strategy Before Execution.',
  description:
    'Every successful project begins with understanding your business, not just your brief.',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'We learn about your goals, audience, and challenges.',
  },
  {
    id: 'strategize',
    title: 'Strategize',
    description: 'We create a roadmap aligned with measurable outcomes.',
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    description: 'We bring your vision to life with thoughtful design and robust technology.',
  },
  {
    id: 'launch',
    title: 'Launch',
    description: 'We deploy with precision and confidence.',
  },
  {
    id: 'optimize',
    title: 'Optimize',
    description: 'We measure, test, and refine to improve results over time.',
  },
];

export const CASE_STUDIES_SECTION = {
  eyebrow: 'Selected Engagements',
  headline: 'Real Businesses. Meaningful Transformation.',
  description:
    'Every engagement begins with understanding the business—not simply delivering another website. We partner with organizations to solve real growth challenges through strategy, technology, and digital systems.',
  cta: 'View All Engagements',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'learnwithchris',
    client: 'LearnWithChris',
    subtitle: 'Building a Scalable Digital Learning Platform',
    category: 'Digital Products',
    labels: ['Growth Strategy', 'Website Platform', 'Sales Funnel', 'Business Automation'],
    challenge:
      'An emerging education brand needed more than a beautiful website. It required a platform capable of delivering courses, building trust, capturing leads, and supporting long-term growth.',
    approach:
      'We designed a complete digital learning ecosystem—from brand positioning and user experience to course delivery, lead generation, and scalable architecture.',
    delivered: [
      'Brand Strategy',
      'UI/UX Design',
      'Website Development',
      'Learning Platform',
      'Sales Funnel',
      'Email Automation',
    ],
    impact:
      'A scalable platform designed to support audience growth, course delivery, and future digital products.',
    accentColor: 'brand-green',
  },
  {
    id: 'voltsolar',
    client: 'VoltSolar',
    subtitle: 'Simplifying Solar System Design Through Intelligent Software',
    category: 'Digital Products',
    labels: ['Product Design', 'Digital Transformation', 'AI Integration', 'Analytics'],
    challenge:
      'Solar professionals often rely on spreadsheets and manual calculations, slowing down project delivery and increasing the risk of costly sizing errors.',
    approach:
      'We designed an intelligent web application that streamlines solar system design—from load calculation and battery sizing to inverter selection and proposal generation.',
    delivered: [
      'Product Strategy',
      'UX Research',
      'UI Design',
      'SaaS Platform',
      'Calculation Engine',
      'Dashboard Design',
    ],
    impact:
      'A faster, more accurate workflow that helps solar professionals deliver reliable system designs with greater confidence.',
    accentColor: 'brand-yellow',
  },
  {
    id: 'krossbell-global',
    client: 'Krossbell Global',
    subtitle: 'Designing a Website Built for Business Growth',
    category: 'Brand & Corporate Platforms',
    labels: ['Growth Strategy', 'Conversion Optimization', 'Website Platform', 'Marketing Systems'],
    challenge:
      'An outdated online presence no longer reflected the quality of the business or supported lead generation.',
    approach:
      'Rather than redesigning pages, we redesigned the customer journey. Every page was built around clarity, trust, and conversion.',
    delivered: [
      'Website Strategy',
      'UI/UX',
      'Web Development',
      'Copywriting',
      'Performance Optimization',
    ],
    impact:
      'A modern digital platform positioned to support marketing, lead generation, and long-term business growth.',
    accentColor: 'brand-orange',
  },
  {
    id: 'devsoses',
    client: 'DevSoses',
    subtitle: 'Repositioning an Engineering Company for the Digital Era',
    category: 'Brand & Corporate Platforms',
    labels: ['Brand Positioning', 'Website Platform', 'Conversion Optimization', 'Growth Strategy'],
    challenge:
      'The engineering firm needed a stronger online presence that reflected its expertise and credibility while generating new business opportunities.',
    approach:
      "We built DevSoses' digital presence around clarity, trust, and conversion—designed to communicate technical capability and open new opportunities.",
    delivered: [
      'Brand Messaging',
      'Website Design',
      'Copywriting',
      'SEO Foundation',
      'Lead Generation',
    ],
    impact:
      "A professional digital presence aligned with the firm's engineering capabilities and future growth ambitions.",
    accentColor: 'brand-green',
  },
];

export const WHY_SECTION = {
  eyebrow: 'Why Ctop',
  headline: 'Why Businesses Choose Ctop Digital',
  description: 'A growth partner built around your outcomes, not our deliverables.',
};

export const WHY_CTOP: Reason[] = [
  {
    id: 'business-first',
    title: 'Business-first thinking',
    description: 'We start with your goals, not a menu of services.',
  },
  {
    id: 'purpose',
    title: 'Technology with purpose',
    description: 'Every tool and build exists to move growth forward.',
  },
  {
    id: 'transparent',
    title: 'Transparent communication',
    description: 'Clear updates, honest timelines, and no black boxes.',
  },
  {
    id: 'partnership',
    title: 'Long-term partnership',
    description: 'We stay invested after launch, because growth is continuous.',
  },
  {
    id: 'execution',
    title: 'Growth-focused execution',
    description: 'Strategy and craft, measured by business results.',
  },
  {
    id: 'standards',
    title: 'Global design standards',
    description: 'World-class quality with clarity, restraint, and precision.',
  },
];

export const TESTIMONIALS_SECTION = {
  eyebrow: 'Testimonials',
  headline: "Don't just take our word for it.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Ctop didn’t just redesign our website. They rebuilt how we think about digital growth. The clarity, strategy, and execution changed our trajectory.',
    author: 'Amara Okonkwo',
    role: 'CEO, Northline Ventures',
  },
  {
    quote:
      'What stood out was the business-first approach. Every recommendation was tied to outcomes, not trends. That made them a true partner.',
    author: 'Daniel Mensah',
    role: 'Founder, Atlas Commerce',
  },
];

export const FAQ_SECTION = {
  eyebrow: 'FAQ',
  headline: 'Questions businesses ask before working with us.',
};

export const FAQS: FAQItem[] = [
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'It depends on scope. A focused website engagement may take a few weeks; a full growth system (strategy, brand, build, and launch) often runs longer. We define timelines clearly after discovery.',
  },
  {
    id: 'international',
    question: 'Do you work internationally?',
    answer:
      'Yes. We partner with organizations across industries and geographies, bringing global best practices to every engagement.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign our existing website?',
    answer:
      'Absolutely. Many clients come to us with a site that looks fine but doesn’t convert. We rebuild with strategy, conversion, and growth systems in mind.',
  },
  {
    id: 'ads',
    question: 'Do you manage advertising campaigns?',
    answer:
      'Yes. We plan and run data-driven campaigns across Google, Meta, LinkedIn, and more, always tied to your funnel and business goals.',
  },
  {
    id: 'after-launch',
    question: 'Can you help after launch?',
    answer:
      'Yes. Launch is the starting line. We offer ongoing optimization, analytics, automation, and growth support so performance keeps improving.',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Clarity before execution. Roadmaps that make growth intentional.',
    items: [
      'Digital Strategy',
      'Growth Consulting',
      'Business Consulting',
      'Brand Strategy',
      'Market Positioning',
    ],
  },
  {
    id: 'build',
    title: 'Build',
    description: 'Crafted digital experiences and products that earn trust and convert.',
    items: ['Brand Identity', 'Web Design', 'Web Applications', 'UI/UX', 'eCommerce'],
  },
  {
    id: 'grow',
    title: 'Grow',
    description: 'Channels and systems that attract, nurture, and convert demand.',
    items: [
      'SEO',
      'Content Marketing',
      'Google Ads',
      'Meta Ads',
      'Email Marketing',
      'Sales Funnels',
      'CRO',
      'Marketing Automation',
    ],
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'Intelligent systems that compound performance over time.',
    items: [
      'AI',
      'Business Automation',
      'Analytics',
      'CRM',
      'Performance Optimization',
      'Digital Transformation',
    ],
  },
];

export const ABOUT = {
  headline: 'Building Businesses Through Better Digital Systems.',
  story: [
    'Most agencies begin with design. We began with solving problems.',
    'Over the years we’ve worked with startups, growing businesses and organizations looking to modernize how they engage customers, streamline operations and create sustainable growth.',
    'Today we combine strategy, technology and marketing to build solutions that create measurable business value.',
  ],
  philosophy:
    'Technology is only valuable when it solves meaningful business problems.',
  vision:
    "To become Africa's most respected digital growth company, building world-class digital experiences, intelligent systems, and growth strategies for organizations across the globe.",
  mission:
    'Helping businesses transform ideas into scalable digital systems that generate growth, improve customer experience and create lasting competitive advantage.',
  promise:
    'When you work with Ctop Digital, you don’t simply receive a website or marketing campaign. You receive a strategic growth partner committed to helping your organization succeed.',
};

export const VALUES: ValueItem[] = [
  { id: 'clarity', title: 'Clarity', description: 'We make complexity understandable and decisions sharper.' },
  { id: 'excellence', title: 'Excellence', description: 'Craft and standards that hold up under scrutiny.' },
  { id: 'innovation', title: 'Innovation', description: 'New tools and methods in service of real outcomes.' },
  { id: 'integrity', title: 'Integrity', description: 'Honest counsel, even when it’s the harder path.' },
  { id: 'growth', title: 'Growth', description: 'Everything we build should move the business forward.' },
  { id: 'partnership', title: 'Partnership', description: 'We succeed when our clients succeed.' },
  { id: 'execution', title: 'Execution', description: 'Strategy means little without disciplined delivery.' },
];

export const CONTACT = {
  headline: "Let's Build Your Next Growth System.",
  body: "Whether you're launching a startup, scaling an established business or transforming an organization, we'd love to hear about your vision. Let's explore how strategy, technology and marketing can help you move forward with confidence.",
};

export const CTA = {
  headline: 'Your Next Stage of Growth Starts Here.',
  body: "Whether you're launching a new business, modernizing an established organization, or scaling your digital presence, we're ready to help you build systems that create lasting value.",
  button: 'Book Your Discovery Call',
};

/** @deprecated use TRUST_BAR */
export const STATS = TRUST_BAR;
