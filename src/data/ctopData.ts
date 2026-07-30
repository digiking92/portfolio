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
  /** Replace with your real Calendly event URL */
  calendlyUrl: 'https://calendly.com/ctopdigital/strategy-call',
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
    'Every successful engagement begins with diagnosis: understanding your business and your current digital reality before we plan or build.',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'diagnose',
    title: 'Diagnose',
    description:
      'We clarify goals and run a SiteScopeAI audit covering stack, security surface, and speed, so we never guess what to fix.',
  },
  {
    id: 'strategize',
    title: 'Strategize',
    description: 'We turn findings into a prioritized roadmap tied to measurable outcomes.',
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    description: 'We bring the plan to life with thoughtful design and robust technology.',
  },
  {
    id: 'launch',
    title: 'Launch',
    description: 'We deploy with precision and confidence.',
  },
  {
    id: 'optimize',
    title: 'Optimize',
    description: 'We measure, re-scan, and refine so results compound over time.',
  },
];

/** Homepage strip + Process callout, SiteScopeAI as internal diagnostic engine */
export const SITESCOPE = {
  eyebrow: 'Website Intelligence',
  headline: 'Before we build, we diagnose.',
  body: 'We use SiteScopeAI, our in-house website intelligence system, to fingerprint your tech stack, map security risks, and score performance. You get a clear report and a prioritized fix list, not a jargon dump.',
  points: [
    'What your site is built with',
    'Passive security surface (headers, SSL, exposures)',
    'Speed signals that affect conversion',
    'Plain-English fixes your team can act on',
  ],
  note: 'Passive, permission-based, and non-destructive. We analyze the public surface. We don’t attack your systems.',
  cta: 'Request an audit',
  processTitle: 'Powered by SiteScopeAI',
  processBody:
    'Every kickoff includes a SiteScopeAI report so strategy starts from evidence: stack, security posture, and performance, explained in plain English.',
};

export const CASE_STUDIES_SECTION = {
  eyebrow: 'Selected Engagements',
  headlineLines: ['Real Businesses.', 'Meaningful Transformation.'],
  description:
    'Every engagement begins with understanding the business, not simply delivering another website. We partner with organizations to solve real growth challenges through strategy, technology, and digital systems.',
  cta: 'View All Engagements',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bridge-africa-academia',
    client: 'The Bridge Africa Academia',
    subtitle: 'Building a Global Online School Rooted in African Identity',
    category: 'Digital Products',
    kind: 'client',
    featured: false,
    labels: ['Website Platform', 'Brand Positioning', 'Growth Strategy', 'Conversion Optimization'],
    challenge:
      'An online British curriculum school serving African families in the UAE and diaspora needed a digital presence that communicated heritage, trust, and enrollment clarity across continents.',
    approach:
      'We designed and built a conversion-focused education platform around identity, curriculum clarity, and enrollment journeys, so parents could understand the offering and take the next step with confidence.',
    delivered: [
      'Website Strategy',
      'UI/UX Design',
      'Web Development',
      'Enrollment Funnel',
      'Content Structure',
      'Performance Optimization',
    ],
    impact:
      'A live digital school platform that positions Bridge Africa Academia for global enrollment while celebrating African heritage and academic excellence.',
    url: 'https://thebridgeafricaacademia.com/',
    accentColor: 'brand-green',
  },
  {
    id: 'voltsolar',
    client: 'VoltSolar',
    subtitle: 'Simplifying Solar System Design Through Intelligent Software',
    category: 'Digital Products',
    kind: 'client',
    featured: true,
    labels: ['Product Design', 'Digital Transformation', 'AI Integration', 'Analytics'],
    challenge:
      'Solar professionals often rely on spreadsheets and manual calculations, slowing down project delivery and increasing the risk of costly sizing errors.',
    approach:
      'We designed an intelligent web application that streamlines solar system design, from load calculation and battery sizing to inverter selection and proposal generation.',
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
    url: 'https://voltsolar.learnwithchris.app',
    accentColor: 'brand-yellow',
  },
  {
    id: 'krossbell-global',
    client: 'Krossbell Global',
    subtitle: 'Designing a Website Built for Business Growth',
    category: 'Brand & Corporate Platforms',
    kind: 'client',
    featured: true,
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
    kind: 'client',
    featured: true,
    labels: ['Brand Positioning', 'Website Platform', 'Conversion Optimization', 'Growth Strategy'],
    challenge:
      'The engineering firm needed a stronger online presence that reflected its expertise and credibility while generating new business opportunities.',
    approach:
      "We built DevSoses' digital presence around clarity, trust, and conversion, including their website and Google Business Profile, designed to communicate technical capability and open new opportunities.",
    delivered: [
      'Brand Messaging',
      'Website Design',
      'Copywriting',
      'SEO Foundation',
      'Google Business Profile',
      'Lead Generation',
    ],
    impact:
      "A professional digital presence aligned with the firm's engineering capabilities and future growth ambitions.",
    url: 'https://www.devsosesinternational.com/',
    accentColor: 'brand-green',
  },
  {
    id: 'learnwithchris',
    client: 'LearnWithChris',
    subtitle: 'Our Internal Digital Learning Venture',
    category: 'Digital Products',
    kind: 'internal',
    featured: true,
    labels: ['Growth Strategy', 'Website Platform', 'Sales Funnel', 'Business Automation'],
    challenge:
      'We needed more than a brochure site for our own education brand. LearnWithChris required a platform that could deliver courses, build trust, capture leads, and support long-term product growth.',
    approach:
      'We built LearnWithChris as an internal Ctop venture: brand positioning, user experience, course delivery, lead generation, and a scalable architecture we could iterate on ourselves.',
    delivered: [
      'Brand Strategy',
      'UI/UX Design',
      'Website Development',
      'Learning Platform',
      'Sales Funnel',
      'Email Automation',
    ],
    impact:
      'A living internal platform we use to teach, grow an audience, and prove the same growth-system approach we bring to client engagements.',
    url: 'https://learnwithchris.app',
    accentColor: 'brand-purple',
  },
  {
    id: 'testify-ai',
    client: 'TestifyAI',
    subtitle: 'AI-Powered Testimonial Collection for Client Proof',
    category: 'AI & Business Tools',
    kind: 'internal',
    featured: false,
    labels: ['AI Integration', 'Marketing Systems', 'Product Design', 'Conversion Optimization'],
    challenge:
      'Collecting usable testimonials is slow, awkward, and inconsistent, which leaves marketing and case pages short on real social proof.',
    approach:
      'We built TestifyAI as an internal Ctop tool so clients can submit feedback and AI helps shape polished testimonials ready for websites, ads, and engagement stories.',
    delivered: [
      'Product Strategy',
      'AI Workflow',
      'Collection Experience',
      'Testimonial Formatting',
      'Internal Ops Tooling',
    ],
    impact:
      'Faster, cleaner social proof we can deploy across client work and our own growth systems.',
    accentColor: 'brand-yellow',
  },
  {
    id: 'signal',
    client: 'Signal',
    subtitle: "Ctop's Internal Growth Analytics Platform",
    category: 'Growth Systems',
    kind: 'internal',
    featured: false,
    labels: ['Analytics', 'Marketing Systems', 'Growth Strategy', 'Business Automation'],
    challenge:
      'Campaign links, attribution, and reporting were scattered across tools, making it harder to see what actually drives growth for the agency and our clients.',
    approach:
      'We built Signal as an internal platform for analytics, link building and tracking, and link shortening, so Ctop can measure campaigns and share cleaner attribution in one place.',
    delivered: [
      'Analytics Dashboard',
      'Link Tracking',
      'Link Shortener',
      'Attribution Views',
      'Internal Reporting',
    ],
    impact:
      'Clearer campaign attribution, cleaner tracking links, and faster reporting for internal ops and client performance work.',
    accentColor: 'brand-orange',
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
  {
    quote:
      'They connected our brand, website, and marketing into one system. For the first time, every channel felt intentional and measurable.',
    author: 'Chioma Adeyemi',
    role: 'Marketing Lead, Bridge Africa Academia',
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

export const SERVICES_PAGE = {
  eyebrow: 'Services',
  headlineLines: ['Four pillars.', 'One growth system.'],
  lead: 'We organize our work into Strategy, Build, Grow, and Scale, so every capability serves a clear business purpose.',
  ctaHeadline: 'Not sure where to start?',
  ctaBody:
    "We'll help you define the right combination of strategy, build, growth, and scale for your stage.",
  cta: "Let's Talk",
};

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
  eyebrow: 'About Ctop',
  headlineLines: ['We Help Ambitious Businesses', "Build What's Next."],
  body: [
    'We help ambitious businesses grow by connecting strategy, technology, and marketing into digital systems that deliver measurable results.',
  ],
  primaryCta: 'Start a Conversation',
  secondaryCta: 'View Our Work',

  storyEyebrow: 'How We Think',
  storyHeadline: 'We Started With Problems, Not Pixels.',
  storyContrast: {
    before: 'Most digital agencies begin with design.',
    after: 'We begin with understanding the business.',
  },
  storyBody:
    'Before we recommend a website, launch a campaign, redesign a brand, or implement new technology, we first ask a simple question:',
  storyQuote: 'What problem are we actually solving?',
  storyPunch:
    'Because a beautifully designed solution to the wrong problem is still the wrong solution.',
  storyClose: [
    "That belief has shaped every engagement we've taken on, from growing startups to established organizations looking to modernize, scale, and compete in a digital-first world.",
    "Today, Ctop helps ambitious businesses connect strategy, technology, marketing, and execution into one integrated growth system, because sustainable growth is never the result of isolated projects. It's the result of connected thinking.",
  ],

  beliefEyebrow: 'Our Belief',
  beliefHeadline: 'Technology Only Creates Value When It Solves Real Business Problems.',
  manifestoLines: [
    "We don't sell websites.",
    'We build connected digital growth systems.',
  ],
  beliefSupportIntro:
    'Every website. Every campaign. Every brand. Every automation. Every decision.',
  beliefSupport:
    'Should move your business forward. If it does not create measurable business value, it does not belong.',

  diagramEyebrow: 'How Growth Connects',
  diagramHeadline: 'One System. Many Moving Parts.',
  diagramBody: 'Hover each node. Strategy, brand, product, and marketing only work when they talk to each other.',

  differenceEyebrow: 'Why Ctop',
  differenceHeadline: 'Different Thinking. Better Outcomes.',
  differences: [
    {
      id: 'strategy',
      title: 'Strategy Before Execution',
      description:
        'Technology without strategy creates activity, not growth. Every engagement begins by understanding your business, your market, and your objectives before we recommend solutions.',
    },
    {
      id: 'systems',
      title: 'Systems Thinking',
      description:
        'Most agencies deliver isolated projects. We build connected ecosystems where strategy, branding, websites, marketing, AI, automation, and analytics work together. Because businesses grow through systems, not silos.',
    },
    {
      id: 'partnership',
      title: 'Long-Term Partnership',
      description:
        "Our work doesn't end at launch. We stay focused on continuous improvement, optimization, and helping your business evolve as markets change.",
    },
  ],

  visionEyebrow: 'Vision',
  visionTitle: 'Building the Future of Digital Growth.',
  vision:
    'To become the trusted partner organizations turn to when growth demands more than marketing. It demands strategy, technology, and connected systems working together.',
  missionEyebrow: 'Mission',
  missionTitle: 'Helping Businesses Build Smarter.',
  mission:
    'To help ambitious organizations design connected digital ecosystems that generate measurable growth, create remarkable customer experiences, and build lasting competitive advantage.',

  valuesEyebrow: 'Our Values',
  valuesHeadline: 'Principles That Guide Every Decision.',
  valuesDescription:
    "These aren't words on a wall. They're standards that shape every strategy, every recommendation, and every project we deliver.",
  featuredValues: ['clarity', 'excellence', 'innovation', 'partnership'] as const,

  proofEyebrow: 'Impact',
  proofHeadline: 'Real Partnerships. Real Impact.',
  proofStats: [
    { value: 20, suffix: '+', label: 'Projects Delivered' },
    { value: 5, suffix: '+', label: 'Industries Served' },
    { value: 100, suffix: '%', label: 'Tailored Solutions' },
  ],

  approachEyebrow: 'How We Work',
  approachHeadline: 'Every Engagement Follows the Same Proven Process.',
  approachSteps: [
    { id: 'discover', title: 'Discover', description: 'Understand the business.' },
    { id: 'strategize', title: 'Strategize', description: 'Design the roadmap.' },
    { id: 'build', title: 'Build', description: 'Create digital systems.' },
    { id: 'launch', title: 'Launch', description: 'Deploy with confidence.' },
    { id: 'optimize', title: 'Optimize', description: 'Measure, refine, and improve continuously.' },
  ],

  ctaEyebrow: "Let's Build What's Next",
  ctaHeadlineLines: [
    "The Right Digital Partner Doesn't Just Deliver Projects.",
    'They Help Build Momentum.',
  ],
  ctaBody: [
    "If you're looking for a team that combines strategy, technology, design, marketing, and execution into one connected growth system, we'd love to start the conversation.",
    "Let's build something that creates lasting business value.",
  ],
  ctaPrimary: 'Book a Strategy Call',
  ctaSecondary: 'View Our Work',
};

export const VALUES: ValueItem[] = [
  {
    id: 'clarity',
    title: 'Clarity',
    description:
      'Complexity rarely creates value. Clarity does. We simplify ideas, systems, and customer experiences so businesses can move faster with confidence.',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description:
      "Good enough doesn't build remarkable companies. We pursue craftsmanship because details create trust.",
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      "Innovation isn't following trends. It's discovering better ways to solve meaningful business problems.",
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description:
      'We choose honesty over convenience. Long-term partnerships are built through transparency and trust.',
  },
  {
    id: 'growth',
    title: 'Growth',
    description:
      "Every recommendation should move the business forward. If it doesn't create measurable value, we challenge it.",
  },
  {
    id: 'partnership',
    title: 'Partnership',
    description:
      "We don't see ourselves as vendors. We become an extension of your team, invested in your success.",
  },
  {
    id: 'execution',
    title: 'Execution',
    description:
      'Ideas are only valuable when they are implemented with discipline and consistency.',
  },
];

export const CONTACT = {
  eyebrow: 'Contact',
  headline: "Let's Build Your Next Growth System.",
  headlineLines: ["Let's Build Your Next", 'Growth System.'],
  lead: "Whether you're launching a startup, scaling an established business or transforming an organization, we'd love to hear about your vision.",
  body: "Whether you're launching a startup, scaling an established business or transforming an organization, we'd love to hear about your vision. Let's explore how strategy, technology and marketing can help you move forward with confidence.",
};

export const CTA = {
  headline: 'Your Next Stage of Growth Starts Here.',
  body: "Whether you're launching a new business, modernizing an established organization, or scaling your digital presence, we're ready to help you build systems that create lasting value.",
  button: 'Book Your Discovery Call',
};

/** @deprecated use TRUST_BAR */
export const STATS = TRUST_BAR;
