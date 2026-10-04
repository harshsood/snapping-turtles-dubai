/** All site copy lives here so pages stay presentational. */
import nestleImg from "@/assets/fogg-logo.jpeg";
import tajHotelsImg from "@/assets/al-basheer-logo.jpeg";
import cinepolisImg from "@/assets/cinepolis.jpeg";
import superplumImg from "@/assets/radisson-logo.jpeg";
import dettolImg from "@/assets/dettol.jpeg";
import nodiniteImg from "@/assets/nodinite.jpeg";

export const AGENCY = {
  name: "Snapping Turtles",
  tagline: "A global digital marketing and brand growth studio",
  email: "himanshu@snappingturtles.in",
  phone: "7045861090",
  studios: ["New York", "London", "Dubai", "Noida"],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
};

export const STATS = [
  { value: 241, suffix: "+", label: "Projects delivered" },
  { value: 199, suffix: "+", label: "Influencer campaigns" },
  { value: 100, suffix: "+", label: "Websites shipped" },
  { value: 70, suffix: "+", label: "Films produced" },
];

export const CLIENTS = [
  "Nestlé",
  "Taj Hotels",
  "Radisson Blu",
  "Dettol",
  "Cinépolis",
  "Avon",
  "Superplum",
  "Wakefit",
  "Milaap",
  "Nodinite",
  "Airia Mall",
  "Findsports",
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  body: string[];
  deliverables: string[];
  metric: string;
};

export const SERVICES: Service[] = [
  {
    slug: "ai-video-production-generative-content",
    title: "AI Video Production and Generative Content",
    short: "AI-assisted film and generative creative, shaped by human direction.",
    intro:
      "We combine generative tools with experienced creative direction to produce distinctive video and campaign content at the pace modern channels demand.",
    body: [
      "Every project starts with the idea, audience and brand rules. We use AI where it adds creative range or production efficiency, with human-led art direction keeping the work coherent and on-brand.",
      "From early concepts and visual development through generation, editing and finishing, our team builds a clear workflow around the brief rather than relying on one-click outputs.",
      "We adapt approved creative for the placements and formats that matter, with review points for visual consistency, factual accuracy and usage rights.",
    ],
    deliverables: [
      "Creative concept and visual direction",
      "AI-assisted video and generative assets",
      "Editing, motion design and finishing",
      "Channel-ready cutdowns and variations",
      "Brand, accuracy and usage-rights review",
    ],
    metric: "Human-directed creative, made for modern content demands",
  },
  {
    slug: "beauty-fragrance-brand-marketing",
    title: "Beauty and Fragrance Brand Marketing",
    short: "Build desire through distinctive product stories and sensory campaigns.",
    intro:
      "We help beauty and fragrance brands translate their product, point of view and rituals into campaigns that feel memorable across discovery, consideration and purchase.",
    body: [
      "We clarify what makes a formula, fragrance or routine worth choosing, then turn those details into a sharp positioning and visual language that can travel across channels.",
      "Campaigns connect editorial storytelling, creator voices and product education without losing the atmosphere and craft that make beauty brands distinctive.",
      "From launch moments to always-on growth, we align content, media and commerce around the customer journey, learning from each drop and seasonal moment.",
    ],
    deliverables: [
      "Category, audience and brand positioning",
      "Beauty and fragrance campaign concepts",
      "Product films, photography and social content",
      "Creator, sampling and advocacy programmes",
      "Paid media and commerce optimisation",
    ],
    metric: "Distinctive stories from first impression to repeat purchase",
  },
  {
    slug: "event-branding-experience-design",
    title: "Event Branding and Experience Design",
    short: "Turn live moments into cohesive, shareable brand experiences.",
    intro:
      "We shape event identities and guest journeys so every detail, from the first invitation to the final interaction, feels unmistakably connected to the brand.",
    body: [
      "We begin with the purpose of the gathering and the people in the room. That strategy informs the event identity, spatial cues and the moments guests should remember.",
      "Our team connects physical and digital touchpoints, creating a consistent experience across invitations, wayfinding, stage environments, content capture and follow-up.",
      "Whether the event is a launch, activation or leadership gathering, we plan for the live experience and its afterlife in social, press and customer communications.",
    ],
    deliverables: [
      "Event concept and creative direction",
      "Visual identity and environmental graphics",
      "Guest journey and touchpoint design",
      "Stage, signage and on-site content direction",
      "Social amplification and post-event assets",
    ],
    metric: "One connected identity across every guest touchpoint",
  },
  {
    slug: "strategic-product-launch-campaigns",
    title: "Strategic Product Launch Campaigns",
    short: "Build demand before launch day and sustain momentum after.",
    intro:
      "We turn a product release into a coordinated campaign, connecting audience insight, a clear value proposition and timed creative across the full launch journey.",
    body: [
      "We define the audience, competitive context and reason to believe before setting the launch narrative. This gives every channel a consistent story to tell.",
      "A phased plan builds anticipation, focuses attention at release and carries the strongest messages into the weeks that follow, with creative tailored to each moment.",
      "We connect brand, performance and commerce teams around shared milestones, then use live results to improve the campaign while it is in market.",
    ],
    deliverables: [
      "Launch strategy and audience insight",
      "Positioning, messaging and campaign platform",
      "Teaser, launch and sustain creative phases",
      "Channel, media and creator activation plan",
      "Launch measurement and optimisation",
    ],
    metric: "A coordinated journey from anticipation to adoption",
  },
  {
    slug: "luxury-brand-marketing",
    title: "Luxury Brand Marketing",
    short: "Protect brand distinction while reaching the right audiences.",
    intro:
      "We help luxury brands express their values with consistency and restraint, building desire through considered storytelling, selective channels and exceptional detail.",
    body: [
      "We translate heritage, craft and point of view into a contemporary brand narrative, identifying where consistency matters and where a market needs a more nuanced expression.",
      "Creative and media are planned around relevance, not volume. Editorial storytelling, cultural partnerships and carefully chosen creators help the brand earn attention on its own terms.",
      "Across launches and ongoing programmes, we align every touchpoint with the experience customers expect, from discovery and consideration through clienteling and loyalty.",
    ],
    deliverables: [
      "Luxury positioning and audience strategy",
      "Editorial campaign concepts and art direction",
      "Premium film, photography and digital content",
      "Selective creator and cultural partnerships",
      "Market, channel and clienteling strategy",
    ],
    metric: "Brand distinction carried through every interaction",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Full-funnel strategy that turns attention into revenue.",
    intro:
      "We build integrated growth systems — search, social, paid media and lifecycle — engineered around one number that matters to your business.",
    body: [
      "Our strategists design campaigns from the buying journey backwards. We map demand, size the opportunity by market, then deploy channel mixes that compound instead of competing with each other.",
      "Every engagement runs on a shared measurement layer: clean tracking, incrementality tests and a live dashboard your leadership team can read without a translator.",
      "From launch markets to mature accounts, we operate as an embedded growth team across time zones — weekly sprints, monthly business reviews, quarterly strategy resets.",
    ],
    deliverables: [
      "Growth strategy & channel plan",
      "Paid media buying (Meta, Google, LinkedIn, TikTok)",
      "Marketing analytics & attribution",
      "Lifecycle email & CRM automation",
      "Quarterly experimentation roadmap",
    ],
    metric: "Avg. 3.4x return on ad spend across retained accounts",
  },
  {
    slug: "seo",
    title: "SEO & Content",
    short: "Own the demand that already exists for your category.",
    intro:
      "Technical SEO, editorial content and digital PR combined into a compounding organic engine for global and local search.",
    body: [
      "We start with a full technical audit — crawl health, Core Web Vitals, internal linking and index bloat — then fix what actually blocks rankings.",
      "Our editorial team builds topical authority with content designed for humans and answer engines alike, including schema, entity coverage and AI-search readiness.",
      "For multi-location brands we run local SEO programmes: profile optimisation, citation hygiene, review velocity and city-level landing architecture.",
    ],
    deliverables: [
      "Technical SEO audit & remediation",
      "Keyword and entity research",
      "Editorial content production",
      "Digital PR & authority link building",
      "Local & multi-market SEO",
    ],
    metric: "Median +182% organic sessions in 9 months",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Always-on brand presence that people actually follow.",
    intro:
      "Platform-native creative, community management and a publishing rhythm that keeps your brand culturally relevant.",
    body: [
      "We build a content system, not a calendar: repeatable formats, a distinct visual language and hooks tested against real retention data.",
      "Community managers respond in your brand voice within hours, turning comment sections into a conversion surface.",
      "Monthly creative reviews compare performance by format, hook and edit style so the next batch is sharper than the last.",
    ],
    deliverables: [
      "Channel strategy & tone of voice",
      "Monthly content production",
      "Short-form editing & motion",
      "Community management",
      "Performance creative testing",
    ],
    metric: "Up to 5.1x lift in engaged reach",
  },
  {
    slug: "influencer-marketing",
    title: "Influencer & UGC",
    short: "Creator-led campaigns with measurable commercial outcomes.",
    intro:
      "From nano creators to celebrity talent, we run end-to-end influencer programmes and high-volume UGC production.",
    body: [
      "We source talent on audience quality, not follower vanity — then negotiate usage rights so winning assets become paid media.",
      "Our UGC studio ships dozens of variations a month, briefed against your top-performing angles.",
      "Every campaign is tracked with promo codes, affiliate links and lift studies so creator spend is defensible.",
    ],
    deliverables: [
      "Creator sourcing & vetting",
      "Contracting and usage rights",
      "UGC production at scale",
      "Whitelisting & paid amplification",
      "Campaign measurement",
    ],
    metric: "199+ creator campaigns activated",
  },
  {
    slug: "video-production",
    title: "Video Production",
    short: "Films, TVCs and 2D/3D animation built for attention.",
    intro:
      "A full in-house production capability: concept, shoot, post, motion design and CGI for brand and performance.",
    body: [
      "We produce brand films for hospitality and retail, product CGI for e-commerce, and performance edits designed for feed-first viewing.",
      "Our animation team builds explainers, logo systems and 3D product visualisations that make complex offers instantly clear.",
      "One team from storyboard to master delivery keeps timelines short and the creative intent intact.",
    ],
    deliverables: [
      "Concept & storyboarding",
      "Production & direction",
      "2D / 3D animation and CGI",
      "TVC and brand films",
      "Performance edit variants",
    ],
    metric: "70+ productions delivered worldwide",
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, accessible, conversion-shaped websites.",
    intro:
      "Design and engineering under one roof — marketing sites, platforms and headless e-commerce built to score and to sell.",
    body: [
      "We design in-browser, so what you approve is what ships: real type, real motion, real performance budgets.",
      "Builds are component-driven and CMS-backed, with analytics and experimentation wired in from day one.",
      "Every site launches with Core Web Vitals in the green and an accessibility pass against WCAG AA.",
    ],
    deliverables: [
      "UX architecture & wireframes",
      "Interface design systems",
      "Front-end engineering",
      "Headless CMS integration",
      "Performance & accessibility QA",
    ],
    metric: "100+ websites shipped, avg. LCP under 1.8s",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Growth",
    short: "Storefronts and retention loops that lift AOV.",
    intro:
      "Shopify and headless commerce builds paired with merchandising, CRO and retention programmes.",
    body: [
      "We rebuild the path to purchase: collection logic, PDP persuasion, bundling and checkout friction removal.",
      "Retention is treated as a channel — flows, segmentation and loyalty mechanics that raise repeat rate.",
      "A continuous CRO backlog keeps compounding conversion gains after launch.",
    ],
    deliverables: [
      "Store design & build",
      "Merchandising strategy",
      "Conversion rate optimisation",
      "Retention & loyalty flows",
      "Marketplace expansion",
    ],
    metric: "Avg. +28% conversion rate post-rebuild",
  },
  {
    slug: "brand-design",
    title: "Brand & Graphic Design",
    short: "Identity systems with the range to travel globally.",
    intro:
      "Logos, packaging, campaign art direction and design systems built to hold up across markets and languages.",
    body: [
      "We define positioning and verbal identity before a single mark is drawn, so the design has something to say.",
      "Deliverables include flexible identity systems, motion behaviour and multi-script typography considerations.",
      "Brand guidelines ship as living documentation your internal teams can actually apply.",
    ],
    deliverables: [
      "Positioning & naming",
      "Logo & identity systems",
      "Packaging and print",
      "Campaign art direction",
      "Brand guidelines",
    ],
    metric: "Identity systems in 6 languages",
  },
  {
    slug: "performance-crm",
    title: "CRM & WhatsApp Marketing",
    short: "Owned-channel revenue on autopilot.",
    intro:
      "Email, SMS and WhatsApp programmes that recover carts, onboard buyers and reactivate lapsed customers.",
    body: [
      "We architect lifecycle journeys mapped to real behavioural triggers rather than generic broadcast blasts.",
      "WhatsApp is treated as a first-class commerce channel with catalogue flows, opt-in growth and conversational support.",
      "Deliverability, consent and regional compliance are built into every deployment.",
    ],
    deliverables: [
      "Lifecycle journey mapping",
      "Email & SMS automation",
      "WhatsApp commerce flows",
      "Segmentation & CDP hygiene",
      "Reporting & incrementality",
    ],
    metric: "Owned channels at 24% of client revenue",
  },
];

export type Project = {
  slug: string;
  client: string;
  category: string;
  summary: string;
  result: string;
  year: string;
  region: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "fogg",
    client: "Fogg",
    category: "Brand Marketing",
    summary: "Selected brand and campaign work for Fogg.",
    result: "Brand storytelling",
    year: "—",
    region: "—",
    image: nestleImg,
  },
  {
    slug: "al-basheer",
    client: "Al Basheer",
    category: "Brand Marketing",
    summary: "Selected brand and digital work for Al Basheer.",
    result: "Integrated campaigns",
    year: "—",
    region: "—",
    image: superplumImg,
  },
  {
    slug: "cinepolis",
    client: "Cinépolis",
    category: "Social Media Marketing",
    summary:
      "Always-on social for a cinema chain across 19 countries, with a repeatable release-week playbook.",
    result: "+41% ticket-page traffic",
    year: "2024",
    region: "Global",
    image: cinepolisImg,
  },
  {
    slug: "radisson",
    client: "Radisson",
    category: "Hospitality Marketing",
    summary: "Selected brand and campaign work for Radisson.",
    result: "Hospitality storytelling",
    year: "—",
    region: "—",
    image: nodiniteImg,
  },
  {
    slug: "dettol",
    client: "Dettol",
    category: "Performance Marketing",
    summary:
      "Full-funnel paid media for a hygiene category leader, with creative testing at volume.",
    result: "3.9x return on ad spend",
    year: "2024",
    region: "EMEA",
    image: dettolImg,
  },
  {
    slug: "taj-hotels",
    client: "Taj",
    category: "Brand Film",
    summary:
      "A hospitality brand film capturing the arrival ritual, cut for cinema, TV and vertical placements.",
    result: "3.2M organic views",
    year: "2025",
    region: "Global",
    image: tajHotelsImg,
  },
  // Add images for the remaining projects too.
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    copy: "Market, category and customer research. We audit what exists and find the wedge.",
  },
  {
    step: "02",
    title: "Define",
    copy: "Positioning, KPI architecture and a channel plan with named owners and budgets.",
  },
  {
    step: "03",
    title: "Design",
    copy: "Creative systems, prototypes and production — built for the platforms you sell on.",
  },
  {
    step: "04",
    title: "Deploy",
    copy: "Launch in sprints, with tracking verified before a single dollar goes live.",
  },
  {
    step: "05",
    title: "Develop",
    copy: "Experiment, cut losers, scale winners. Compounding gains reviewed every quarter.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They operate like an in-house team that happens to be excellent. Our paid and organic finally tell the same story.",
    name: "Amelia Hart",
    role: "VP Growth, hospitality group",
  },
  {
    quote:
      "The production quality is agency-of-record standard, but the turnaround is startup speed.",
    name: "Daniel Okoye",
    role: "Head of Brand, FMCG",
  },
  {
    quote:
      "We went from invisible in search to owning our category terms in three markets.",
    name: "Sofia Marchetti",
    role: "CMO, D2C retail",
  },
  {
    quote:
      "Their creator programme paid for itself in the first six weeks. Rare.",
    name: "Ravi Menon",
    role: "Founder, consumer tech",
  },
];

export const TEAM = [
  { name: "Aarav Sethi", role: "Founder & Strategy Director" },
  { name: "Clara Bennett", role: "Executive Creative Director" },
  { name: "Miguel Santos", role: "Head of Performance" },
  { name: "Nadia Haddad", role: "Head of Production" },
  { name: "Jonas Lind", role: "Engineering Lead" },
  { name: "Priya Raman", role: "Director of SEO" },
];

export const VALUES = [
  {
    title: "Evidence over opinion",
    copy: "Every recommendation is backed by data you can inspect. No black boxes, no vanity dashboards.",
  },
  {
    title: "Craft is commercial",
    copy: "Beautiful work performs better. We refuse the false trade-off between taste and results.",
  },
  {
    title: "One team, many markets",
    copy: "Studios across four cities means your campaigns move while you sleep.",
  },
  {
    title: "Radical clarity",
    copy: "Plain-language reporting, fixed scopes and no surprises on the invoice.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "ai-search-changed-seo",
    title: "AI search changed SEO — here is what still works",
    excerpt:
      "Answer engines summarise before they link. The brands winning are the ones being cited, not just crawled.",
    category: "SEO",
    date: "2026-07-28",
    readTime: "7 min",
    body: [
      "Zero-click results are no longer an edge case; for informational queries they are the default. That does not kill SEO, it moves the goalpost from ranking to being quoted.",
      "Three things move the needle: unambiguous entity signals, content structured as extractable answers, and third-party corroboration that makes your claims safe for a model to repeat.",
      "Practically, that means shipping schema properly, keeping a single canonical source per topic, and investing in the digital PR that makes your brand name co-occur with your category.",
      "Measurement shifts too. Track branded search volume, citation share in AI answers and assisted conversions alongside classic rankings.",
    ],
  },
  {
    slug: "creative-testing-framework",
    title: "A creative testing framework that survives real budgets",
    excerpt:
      "Most creative tests fail because they change five variables at once. Here is the structure we use.",
    category: "Performance",
    date: "2026-07-11",
    readTime: "6 min",
    body: [
      "Separate the hook, the proof and the offer. Test one layer per cycle and hold the other two constant.",
      "Volume beats brilliance early on: ship enough variants to find signal, then invest production budget behind the winning angle.",
      "Set a decision rule before launch — spend threshold, minimum impressions, and the metric you will act on. Without it, every test becomes an argument.",
    ],
  },
  {
    slug: "influencer-usage-rights",
    title: "The clause most brands forget in creator contracts",
    excerpt:
      "Usage rights are the difference between a nice post and a year of paid media assets.",
    category: "Influencer",
    date: "2026-06-24",
    readTime: "5 min",
    body: [
      "If you cannot run a creator asset as paid media, you bought reach once instead of an asset library.",
      "Negotiate paid usage, whitelisting and territory up front — it is dramatically cheaper than retro-licensing a winner.",
      "Document exclusivity windows narrowly. Broad category exclusivity inflates fees without protecting much.",
    ],
  },
  {
    slug: "web-performance-revenue",
    title: "Web performance is a revenue lever, not an engineering vanity metric",
    excerpt: "What a 400ms improvement actually did to conversion across nine builds.",
    category: "Web",
    date: "2026-06-09",
    readTime: "6 min",
    body: [
      "Across our last nine commerce builds, cutting largest contentful paint below two seconds tracked with a measurable lift in add-to-cart rate.",
      "The wins are unglamorous: image discipline, fewer third-party scripts, server-rendered first paint, and fonts that do not block.",
      "Set a performance budget in the design phase. Retrofitting speed after launch costs three times as much.",
    ],
  },
  {
    slug: "brand-for-multiple-markets",
    title: "Designing a brand that travels across markets",
    excerpt:
      "Multi-script typography, colour meaning and the traps of a one-market identity.",
    category: "Brand",
    date: "2026-05-22",
    readTime: "8 min",
    body: [
      "An identity that only works in Latin script will be rebuilt badly by a local team within a year.",
      "Choose type families with genuine multi-script coverage, and design layouts that tolerate 30% text expansion.",
      "Test colour and symbolism per market before you commit to packaging runs.",
    ],
  },
  {
    slug: "whatsapp-commerce-playbook",
    title: "The WhatsApp commerce playbook for global brands",
    excerpt:
      "Opt-in growth, catalogue flows and the compliance details that decide whether it scales.",
    category: "CRM",
    date: "2026-05-05",
    readTime: "6 min",
    body: [
      "Treat WhatsApp like a storefront with a conversation attached, not a broadcast list.",
      "Growth comes from placement: checkout opt-ins, order updates and support entry points beat paid list building.",
      "Consent records and regional messaging rules are the difference between a channel and a shutdown.",
    ],
  },
];

export const FAQS = [
  {
    q: "How do you work with international clients?",
    a: "We run overlapping hours across our New York, London, Dubai and Noida studios, so there is always a team on your brief. Communication runs through a shared workspace with weekly sprint reviews.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most partnerships begin with a four-week discovery and strategy sprint, then move to a monthly retainer covering strategy, creative production and media management.",
  },
  {
    q: "How is performance reported?",
    a: "You get a live dashboard from day one plus a monthly business review that ties channel metrics to revenue, not impressions.",
  },
  {
    q: "Can you work alongside our in-house team?",
    a: "Yes. Roughly half our clients have internal marketers — we plug into the gaps, whether that is production capacity, paid media or engineering.",
  },
  {
    q: "What is the minimum engagement?",
    a: "Project work starts at a defined scope and timeline. Retainers typically run on a three-month initial term so strategy has time to compound.",
  },
];
