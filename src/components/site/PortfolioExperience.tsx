import { ArrowUpRight, ImagePlus } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

import eventArtboard1 from "@/assets/Artboard-1.png";
import eventArtboard2 from "@/assets/Artboard-2.png";
import eventArtboard3 from "@/assets/Artboard-3.png";
import eventArtboard4 from "@/assets/Artboard-4.png";
import eventArtboard5 from "@/assets/Artboard-5.png";
import eventArtboard6 from "@/assets/Artboard-6.png";
import artboardOne from "@/assets/Artboard-One.png";
import artboardTwo from "@/assets/Artboard-two.png";
import artboardThree from "@/assets/Artboard-three.png";
import artboardFour from "@/assets/Artboard-four.png";
import artboardFive from "@/assets/Artboard-five.png";
import artboardSix from "@/assets/Artboard-six.png";
import boothDesign01 from "@/assets/BOOTHDESIGN01.jpg";
import boothDesign02 from "@/assets/BOOTH-DESIGNING-02.jpg";
import blackSnake from "@/assets/Black-Snake -Perfume-in-Golden-Sand.png";
import blackSnake01 from "@/assets/Black-Snake -Perfume-in-Golden-Sand-01.png";
import blackSnake02Video from "@/assets/Black-Snake -Perfume-in-Golden-Sand-02.mp4";
import blankSignature from "@/assets/Blank-Signature-by-Oud-Al-Salam.jpeg";
import enchantedMiel from "@/assets/Enchanted-Miel-Obscura-Perfume-Terrarium.png";
import foogAugustFinal from "@/assets/FoogAugustFinal.mp4";
import honeybeesVideo from "@/assets/Honeybees_landing_on_perfume_bottle_20261015150624.mp4";
import intenseAmber from "@/assets/Intense Amber.mp4";
import mielGoldenHive from "@/assets/Miel-Obscura-Golden-Hive-in-the-Rain.png";
import mashaaer from "@/assets/Mashaaer.mp4";
import musamam from "@/assets/MUSAMAM-Black-Intense-at-Sunset.png";
import orienticaMonarch from "@/assets/Orientica-Royal-Collection-Monarch.jpeg";
import opacityAnimation from "@/assets/Opacity-Animation-001.mp4";
import sandalLegacy from "@/assets/Sandal-Legacy-in-Black-Silk.png";
import videoOne from "@/assets/video1.mp4";
import videoTwo from "@/assets/video2.mp4";

import { MagneticLink, SectionHeading } from "@/components/site/ui";

const FEATURE_STORIES = [
  {
    id: "blank-signature",
    number: "01",
    eyebrow: "Oud Al Salam — signature fragrance story",
    title: "Blank",
    accent: "Signature.",
    description:
      "A refined visual story for Blank Signature by Oud Al Salam. Deep tones, considered composition and close-up detail put the bottle and its distinctive identity at the centre.",
    notes: ["Oud Al Salam", "Signature identity", "Premium fragrance"],
    image: blankSignature,
    imageAlt: "Blank Signature by Oud Al Salam fragrance",
    tone: "from-stone-500/20 via-neutral-950/30 to-background",
    reverse: false,
  },
  {
    id: "orientica-monarch",
    number: "02",
    eyebrow: "Orientica Royal Collection — product campaign",
    title: "Royal",
    accent: "Monarch.",
    description:
      "A regal product presentation for Orientica Royal Collection Monarch, pairing confident styling and polished detail to create a distinctive luxury fragrance campaign.",
    notes: ["Orientica", "Royal Collection", "Monarch"],
    image: orienticaMonarch,
    imageAlt: "Orientica Royal Collection Monarch fragrance",
    tone: "from-amber-500/20 via-yellow-950/25 to-background",
    reverse: true,
  },
  {
    id: "sandal-legacy",
    number: "03",
    eyebrow: "Mad Sadal Legacy — fragrance campaign",
    title: "Mad Sadal",
    accent: "Legacy.",
    description:
      "A poised campaign direction for Sandal Legacy in Black Silk. Dark, tactile styling and focused product framing give this fragrance a memorable visual presence.",
    notes: ["Black Silk", "Sandal Legacy", "Product storytelling"],
    image: sandalLegacy,
    imageAlt: "Sandal Legacy in Black Silk fragrance",
    tone: "from-neutral-500/20 via-zinc-950/30 to-background",
    reverse: false,
  },
  {
    id: "enchanted-miel",
    number: "04",
    eyebrow: "Paris Corner — product world",
    title: "Paris",
    accent: "Corner.",
    description:
      "An atmospheric product world for Enchanted Miel Obscura. Botanical surroundings, warm honeyed colour and intricate details make the fragrance feel immersive and distinctive.",
    notes: ["Botanical world", "Warm amber tones", "Immersive storytelling"],
    image: mielGoldenHive,
    imageAlt: "Miel Obscura Golden Hive in the Rain",
    tone: "from-emerald-500/20 via-amber-950/25 to-background",
    reverse: true,
  },
];

const EXPERTISE = [
  {
    title: "AI realistic product videos",
    promise: "Bringing products to life through AI.",
    copy: "We create high-quality, photorealistic product videos that transform ordinary presentations into captivating visual experiences. From luxury perfume commercials to cinematic reveals, we combine AI technology, visual storytelling and creative direction.",
    deliverables: [
      "AI-generated product commercials",
      "Hyperrealistic product animations",
      "Cinematic brand films",
      "AI product launch teasers",
      "Creative product visualizations",
      "Social media video campaigns",
    ],
  },
  {
    title: "Brand launch consultation & strategy",
    promise: "Every great launch begins with a powerful strategy.",
    copy: "We turn ideas into structured, impactful market launches through audience understanding, creative campaign development and clear market positioning.",
    deliverables: [
      "Brand positioning & market research",
      "Competitor analysis",
      "Product launch planning",
      "Creative campaign strategy",
      "Audience & market identification",
      "Pre-launch and post-launch marketing",
    ],
  },
  {
    title: "International product launch",
    promise: "Your product. A world of opportunities.",
    copy: "Creative marketing solutions for brands introducing products to international audiences, from localized communication to premium brand presentations.",
    deliverables: [
      "International launch campaign concepts",
      "Market-specific creative strategy",
      "Global brand communication",
      "Product launch videos",
      "Digital promotional campaigns",
      "Cross-market visual adaptations",
    ],
  },
  {
    title: "Branding & designing",
    promise: "Creating identities that leave a lasting impression.",
    copy: "Powerful branding is more than a logo: it is the personality and visual language of a business. We create memorable identities with purpose.",
    deliverables: [
      "Brand identity & logo design",
      "Packaging & label design",
      "Marketing & advertising creatives",
      "Brand guidelines",
      "Product presentation design",
      "Social media visual identity",
    ],
  },
  {
    title: "Website product listing & designing",
    promise: "Transforming digital storefronts into brand experiences.",
    copy: "We create attractive, organized, conversion-focused digital product presentations, e-commerce listings and beautifully designed product pages.",
    deliverables: [
      "Website design & visual layout",
      "E-commerce product listings",
      "Product page design",
      "Product descriptions & visual content",
      "Website banners & promotional graphics",
      "Mobile-responsive shopping experiences",
    ],
  },
  {
    title: "Event booth designing",
    promise: "Turning physical spaces into brand statements.",
    copy: "Visually striking exhibition booth concepts for perfume showcases, international trade shows and product launch events.",
    deliverables: [
      "Exhibition booth concept design",
      "3D booth visualizations",
      "Product display & showcase concepts",
      "Branded event graphics",
      "Launch event visual identity",
      "Experiential brand design",
    ],
  },
];

type PortfolioMedia = {
  kind: "image" | "video";
  aspect?: string;
  preserveAspect?: boolean;
  alt: string;
  src?: string;
  poster?: string;
};

type PortfolioCategory = {
  title: string;
  description: string;
  tone: string;
  media: PortfolioMedia[];
};

const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    title: "AI product films",
    description: "Realistic product animations, cinematic commercials and creative video concepts.",
    tone: "from-sky-500/20 via-cyan-950/20 to-background",
    media: [
      {
        kind: "video",
        aspect: "aspect-video",
        preserveAspect: true,
        alt: "Mashaaer product film",
        src: mashaaer,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        preserveAspect: true,
        alt: "Foog product film",
        src: foogAugustFinal,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        preserveAspect: true,
        alt: "Intense Amber product film",
        src: intenseAmber,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        preserveAspect: true,
        alt: "Product film video 1",
        src: videoOne,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        preserveAspect: true,
        alt: "Product film video 2",
        src: videoTwo,
      },
    ],
  },
  {
    title: "Brand launch campaigns",
    description: "Launch strategies, teaser concepts, creative campaigns and promotional assets.",
    tone: "from-fuchsia-500/20 via-violet-950/20 to-background",
    media: [
      { kind: "video", aspect: "aspect-[9/16]", alt: "Brand launch teaser video" },
      { kind: "image", aspect: "aspect-[4/3]", alt: "Brand launch campaign visual" },
      { kind: "image", aspect: "aspect-[3/4]", alt: "Brand launch artwork" },
      { kind: "video", aspect: "aspect-[16/9]", alt: "Brand launch film" },
    ],
  },
  {
    title: "International campaigns",
    description: "Brand presentations and creative marketing for international audiences.",
    tone: "from-amber-500/20 via-orange-950/20 to-background",
    media: [
      { kind: "image", aspect: "aspect-square", alt: "International brand campaign image" },
      { kind: "video", aspect: "aspect-[16/9]", alt: "International campaign film" },
      { kind: "video", aspect: "aspect-[9/16]", alt: "Vertical international campaign video" },
      { kind: "image", aspect: "aspect-[4/5]", alt: "International campaign creative" },
    ],
  },
  {
    title: "Brand identity & design",
    description: "Logos, packaging, advertising creatives and visual systems.",
    tone: "from-rose-500/20 via-red-950/20 to-background",
    media: [
      { kind: "image", aspect: "aspect-[3/4]", alt: "Artboard one", src: artboardOne },
      { kind: "image", aspect: "aspect-[3/4]", alt: "Artboard two", src: artboardTwo },
      { kind: "image", aspect: "aspect-[3/4]", alt: "Artboard three", src: artboardThree },
      { kind: "image", aspect: "aspect-[3/4]", alt: "Artboard four", src: artboardFour },
      { kind: "image", aspect: "aspect-[3/4]", alt: "Artboard five", src: artboardFive },
      { kind: "image", aspect: "aspect-[3/4]", alt: "Artboard six", src: artboardSix },
    ],
  },
  {
    title: "Website & e-commerce",
    description: "Product listing visuals, digital storefronts, banners and product pages.",
    tone: "from-emerald-500/20 via-teal-950/20 to-background",
    media: [
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Black Snake perfume in golden sand",
        src: blackSnake,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Black Snake perfume campaign image one",
        src: blackSnake01,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "MUSAMAM Black Intense at sunset",
        src: musamam,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Enchanted Miel Obscura perfume terrarium",
        src: enchantedMiel,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        alt: "Black Snake perfume in golden sand video",
        src: blackSnake02Video,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        alt: "Honeybees landing on a perfume bottle",
        src: honeybeesVideo,
      },
    ],
  },
  {
    title: "Event & exhibition design",
    description: "Booth concepts, 3D visualizations and premium brand displays.",
    tone: "from-violet-500/20 via-indigo-950/20 to-background",
    media: [
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Event design Artboard 1",
        src: eventArtboard1,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Event design Artboard 2",
        src: eventArtboard2,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Event design Artboard 3",
        src: eventArtboard3,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Event design Artboard 4",
        src: eventArtboard4,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Event design Artboard 5",
        src: eventArtboard5,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Event design Artboard 6",
        src: eventArtboard6,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Booth design concept 1",
        src: boothDesign01,
      },
      {
        kind: "image",
        aspect: "aspect-[4/5]",
        alt: "Booth design concept 2",
        src: boothDesign02,
      },
      {
        kind: "video",
        aspect: "aspect-video",
        alt: "Event design opacity animation",
        src: opacityAnimation,
      },
    ],
  },
];

const INDUSTRIES = [
  "Fragrance",
  "Beauty",
  "Personal care",
  "Luxury",
  "Wellness",
  "Lifestyle",
  "Retail",
  "E-commerce",
  "FMCG",
];

const PROCESS = [
  ["Discover", "We understand your product, audience, opportunities and objectives."],
  ["Strategize", "We define the creative direction, positioning and project roadmap."],
  [
    "Design & create",
    "We build AI films, branding, digital assets, product visuals and spatial design.",
  ],
  ["Launch & present", "We prepare brand experiences for campaigns, e-commerce and live events."],
  ["Optimize & evolve", "We review performance, gather feedback and refine future communication."],
];

const REASONS = [
  ["AI-powered creativity", "Advanced technology with human creative direction."],
  ["End-to-end brand solutions", "Strategy, content, design, websites and events."],
  ["International perspective", "Adaptable campaigns for audiences across markets."],
  ["Premium visual storytelling", "Product features transformed into compelling narratives."],
  ["One unified brand experience", "Consistency across digital and physical touchpoints."],
];

function MediaPlaceholder({
  label,
  hint,
  tone,
  className = "",
}: {
  label: string;
  hint: string;
  tone: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label}. ${hint} placeholder.`}
      className={`group/media relative isolate flex min-h-52 overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${tone} ${className}`}
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-10 -top-12 size-48 rounded-full bg-primary/10 blur-3xl transition-colors duration-700 group-hover/media:bg-primary/20" />
      <div className="relative z-10 flex w-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-border bg-background/40 px-3 py-1.5 font-mono text-[0.55rem] tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
            Image / video to add
          </span>
          <ImagePlus aria-hidden="true" className="size-4 text-primary/80" />
        </div>
        <div className="mt-12">
          <p className="font-display text-xl sm:text-2xl">{label}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{hint}</p>
        </div>
      </div>
    </div>
  );
}

function CategoryMedia({
  kind,
  src,
  poster,
  alt,
  title,
  hint,
  tone,
  aspect,
  preserveAspect,
}: {
  kind: "image" | "video";
  src: string | undefined;
  poster?: string;
  alt: string;
  title: string;
  hint: string;
  tone: string;
  aspect?: string;
  preserveAspect?: boolean;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl border border-border bg-gradient-to-br ${tone} ${
        !src || preserveAspect ? aspect : ""
      }`}
    >
      {src ? (
        kind === "image" ? (
          <img src={src} alt={alt} className="block h-auto w-full object-contain" loading="lazy" />
        ) : (
          <video
            src={src}
            poster={poster}
            aria-label={alt}
            className={
              preserveAspect ? "size-full object-contain" : "block h-auto w-full object-contain"
            }
            controls
            playsInline
            muted
            loop
          />
        )
      ) : (
        <>
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative flex size-full min-h-full flex-col justify-between p-3 sm:p-4">
            {kind === "video" ? (
              <span className="flex size-8 items-center justify-center rounded-full border border-primary/40 bg-background/50 text-xs text-primary backdrop-blur">
                ▶
              </span>
            ) : (
              <ImagePlus aria-hidden="true" className="size-4 text-primary" />
            )}
            <div>
              <span className="font-mono text-[0.5rem] tracking-[0.16em] uppercase text-primary">
                {kind} to add
              </span>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{hint}</p>
            </div>
          </div>
        </>
      )}
      {src && (
        <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-background/70 px-2 py-1 font-mono text-[0.48rem] tracking-[0.14em] uppercase text-foreground backdrop-blur">
          {title}
        </span>
      )}
    </div>
  );
}

function handleCategoryTabKeyDown(
  event: KeyboardEvent<HTMLButtonElement>,
  activeIndex: number,
  onSelect: (index: number) => void,
) {
  let nextIndex: number | undefined;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = (activeIndex + 1) % PORTFOLIO_CATEGORIES.length;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = (activeIndex - 1 + PORTFOLIO_CATEGORIES.length) % PORTFOLIO_CATEGORIES.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = PORTFOLIO_CATEGORIES.length - 1;
  }

  if (nextIndex === undefined) return;

  event.preventDefault();
  onSelect(nextIndex);
  document.getElementById(`portfolio-category-tab-${nextIndex}`)?.focus();
}

function FeatureStory({ story }: { story: (typeof FEATURE_STORIES)[number] }) {
  return (
    <section id={story.id} className="scroll-mt-24 px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          story.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div data-reveal className="reveal">
          <div
            className={`relative isolate flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br p-3 sm:p-5 ${story.tone}`}
          >
            <img
              src={story.image}
              alt={story.imageAlt}
              className="size-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div data-reveal className="reveal py-4 lg:py-10">
          <p className="eyebrow">
            {story.number} / {story.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            {story.title}
            <span className="signal-text block">{story.accent}</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {story.description}
          </p>
          <div className="mt-9 border-t border-border pt-6">
            <p className="eyebrow">Creative direction</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {story.notes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-border bg-white/[0.03] px-4 py-2 font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioExperience() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = PORTFOLIO_CATEGORIES[activeCategoryIndex]!;

  return (
    <>
      <section className="relative isolate flex min-h-[52svh] items-end overflow-hidden px-4 pb-8 pt-32 sm:px-8 sm:pb-10 lg:min-h-[58svh]">
        <video
          src={honeybeesVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl">
          <h1 className="whitespace-nowrap font-display text-[clamp(2.5rem,9vw,7rem)] leading-[0.95]">
            <span className="reveal inline" data-reveal>
              Our{" "}
            </span>
            <span
              className="reveal signal-text inline"
              data-reveal
              style={{ transitionDelay: "0.12s" }}
            >
              Portfolio.
            </span>
          </h1>
          <div className="hairline mt-7 w-full max-w-md" />
          <p
            data-reveal
            className="reveal mt-5 max-w-xl text-muted-foreground lg:max-w-none lg:whitespace-nowrap"
            style={{ transitionDelay: "0.18s" }}
          >
            AI product films, perfume branding, e-commerce visuals and launch experiences — made to
            bring a fragrance&apos;s character to life.
          </p>
        </div>
      </section>

      <section
        id="portfolio-categories"
        className="scroll-mt-24 px-4 pb-12 pt-4 sm:px-8 sm:pb-16 sm:pt-6"
      >
        <div className="mx-auto max-w-7xl">
          <div
            role="tablist"
            aria-label="Portfolio categories"
            className="no-scrollbar mt-0 grid w-full grid-flow-col auto-cols-[minmax(10.5rem,1fr)] snap-x gap-2 overflow-x-auto pb-3 lg:grid-flow-row lg:grid-cols-6 lg:auto-cols-auto lg:overflow-visible lg:pb-0"
          >
            {PORTFOLIO_CATEGORIES.map((category, index) => {
              const isActive = activeCategoryIndex === index;
              return (
                <button
                  key={category.title}
                  id={`portfolio-category-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="portfolio-category-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategoryIndex(index)}
                  onKeyDown={(event) =>
                    handleCategoryTabKeyDown(event, index, setActiveCategoryIndex)
                  }
                  className={`h-full min-w-0 snap-start rounded-full border px-3 py-3 text-left transition-colors sm:px-4 ${
                    isActive
                      ? "border-primary/50 bg-primary/10 text-foreground"
                      : "border-border bg-white/[0.02] text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <span className="block font-mono text-[0.55rem] tracking-[0.18em] text-primary">
                    {String(index + 1).padStart(2, "0")} / 06
                  </span>
                  <span className="mt-1 block whitespace-nowrap font-display text-sm sm:text-base lg:whitespace-normal">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="portfolio-category-panel"
            role="tabpanel"
            aria-labelledby={`portfolio-category-tab-${activeCategoryIndex}`}
            tabIndex={0}
            className="glass-panel mt-5 rounded-3xl p-4 sm:mt-7 sm:p-6 lg:p-8"
          >
            <div className="mb-6 flex flex-col justify-between gap-3 border-b border-border pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">
                  Selected work / {String(activeCategoryIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl">{activeCategory.title}</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {activeCategory.description}
              </p>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {activeCategory.media.map((media, index) => (
                <div
                  key={`${activeCategory.title}-${media.kind}-${index}`}
                  className="mb-4 break-inside-avoid"
                >
                  <CategoryMedia
                    kind={media.kind}
                    src={media.src}
                    poster={media.poster}
                    alt={media.alt}
                    title={`${activeCategory.title} / ${media.kind}`}
                    hint={`${media.kind} asset · ${String(index + 1).padStart(2, "0")}`}
                    tone={activeCategory.tone}
                    aspect={media.aspect}
                    preserveAspect={media.preserveAspect}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {FEATURE_STORIES.map((story) => (
        <FeatureStory key={story.id} story={story} />
      ))}

      <section
        id="expertise"
        className="scroll-mt-24 border-y border-border bg-white/[0.025] px-4 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our expertise"
            title="Six specializations."
            accent="One creative vision."
            copy="From a first concept to the moment a brand meets the world — one connected creative partner."
          />
          <div className="mt-14 border-t border-border">
            {EXPERTISE.map((service, index) => (
              <article
                key={service.title}
                data-reveal
                className="reveal grid gap-5 border-b border-border py-8 sm:py-10 lg:grid-cols-[4.5rem_1fr_1.1fr]"
              >
                <span className="font-display text-3xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="eyebrow">{service.title}</p>
                  <h3 className="mt-3 max-w-xl font-display text-2xl leading-tight sm:text-3xl">
                    {service.promise}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
                  <ul className="mt-5 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span aria-hidden="true" className="text-primary">
                          ↗
                        </span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mt-24 grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Industries we focus on</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] sm:text-6xl">
                Created to <span className="signal-text">stand out.</span>
              </h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-border px-4 py-2 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Every product category deserves its own visual language, marketing approach and
                memorable brand experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-24 border-y border-border bg-white/[0.025] px-4 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our creative process"
            title="From idea"
            accent="to impact."
            copy="An intentional process that translates possibility into launch-ready brand experiences."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map(([title, description], index) => (
              <article key={title} data-reveal className="reveal border-t border-primary/40 pt-5">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Snapping Turtles?"
            title="Creative thinking."
            accent="Connected solutions."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {REASONS.map(([title, description], index) => (
              <article key={title} data-reveal className="reveal glass-panel rounded-2xl p-6">
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-8 font-display text-xl leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-4 pb-20 pt-10 sm:px-8 sm:pb-28">
        <div className="glass-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl p-8 sm:p-14 lg:p-20">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Your next big brand moment starts here</p>
              <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.98] sm:text-6xl lg:text-7xl">
                Have a product?
                <span className="signal-text block">Let’s make it unforgettable.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                From cinematic AI advertisements to international brand launches, we help bring
                ambitious ideas into the spotlight.
              </p>
              <p className="eyebrow mt-8">Let’s create your next big brand moment.</p>
            </div>
            <MagneticLink to="/contact">Let’s collaborate</MagneticLink>
          </div>
        </div>
      </section>
    </>
  );
}
