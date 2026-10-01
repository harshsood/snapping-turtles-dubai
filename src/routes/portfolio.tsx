import { createFileRoute } from "@tanstack/react-router";

import { Marquee } from "@/components/site/Marquee";
import { CTABand, MagneticLink, PageHero, SectionHeading } from "@/components/site/ui";
import { useTilt } from "@/hooks/use-anim";
import { CLIENTS, PROJECTS } from "@/lib/content";
import growthImg from "@/assets/growth-system.png";
import filmImg from "@/assets/brand-films.png";
import webImg from "@/assets/web-expriences.png";

const PORTFOLIO_VIDEO_SOURCES = import.meta.glob<string>("/src/assets/*.mp4", {
  eager: true,
  import: "default",
  query: "?url",
});
const PORTFOLIO_VIDEO = PORTFOLIO_VIDEO_SOURCES["/src/assets/FoogAugustFinal.mp4"];
const PORTFOLIO_REELS = [
  {
    poster: growthImg,
    video: PORTFOLIO_VIDEO,
  },
  {
    poster: filmImg,
    video: PORTFOLIO_VIDEO_SOURCES["/src/assets/video1.mp4"],
  },
  {
    poster: webImg,
    video: PORTFOLIO_VIDEO_SOURCES["/src/assets/video2.mp4"],
  },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Films, Campaigns & Digital Builds" },
      {
        name: "description",
        content:
          "A visual portfolio of films, campaigns, brand systems and websites produced by the Snapping Turtles studio team.",
      },
      { property: "og:title", content: "Portfolio — Films, Campaigns & Digital Builds" },
      {
        property: "og:description",
        content:
          "Films, campaigns, brand systems and websites from our in-house production studio.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://glb-fragrance-magic.lovable.app/portfolio",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://glb-fragrance-magic.lovable.app/portfolio" },
    ],
  }),
  component: Portfolio,
});

const SPANS = [
  "lg:col-span-7 aspect-[16/10]",
  "lg:col-span-5 aspect-[4/5]",
  "lg:col-span-5 aspect-[4/5]",
  "lg:col-span-7 aspect-[16/10]",
  "lg:col-span-4 aspect-square",
  "lg:col-span-4 aspect-square",
  "lg:col-span-4 aspect-square",
  "lg:col-span-6 aspect-[16/10]",
  "lg:col-span-6 aspect-[16/10]",
];

function Tile({
  index,
  client,
  category,
  result,
  span,
}: {
  index: number;
  client: string;
  category: string;
  result: string;
  span: string;
}) {
  const ref = useTilt<HTMLDivElement>(4);
  const hues = [145, 32, 200, 280, 95, 12];
  const hue = hues[index % hues.length];

  return (
    <div
      ref={ref}
      data-reveal
      className={`reveal clip-reveal group glass-panel relative col-span-1 overflow-hidden rounded-2xl ${span}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div
        className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-110"
        style={{
          background: `radial-gradient(70% 70% at 40% 30%, oklch(0.7 0.16 ${hue} / 30%), transparent 72%)`,
        }}
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative flex h-full flex-col justify-end p-7">
        <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-primary">
          {category}
        </p>
        <h3 className="mt-3 font-display text-3xl transition-transform duration-500 group-hover:-translate-y-1">
          {client}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{result}</p>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="A studio reel"
        accent="worth scrolling"
        copy="Films, campaign systems, brand identities and product sites — all produced in-house by the same team that plans the media behind them."
        className="pb-8"
      />

      <section className="relative overflow-hidden px-4 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {PORTFOLIO_REELS.map((reel, index) => (
              <article
                key={reel.poster}
                data-reveal
                className="reveal group relative isolate aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  poster={reel.poster}
                  src={reel.video}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
          {PROJECTS.slice(0, 9).map((project, i) => (
            <Tile
              key={project.slug}
              index={i}
              client={project.client}
              category={project.category}
              result={project.result}
              span={SPANS[i % SPANS.length] ?? SPANS[0]!}
            />
          ))}
        </div>
      </section>

      <div className="py-20">
        <Marquee items={CLIENTS} />
      </div>

      <section className="px-4 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="In-house production"
            title="Concept, shoot,"
            accent="edit, ship"
            copy="Two studio floors, a full crew, motion and 3D — so campaign creative never waits on an external vendor."
          />
          <div data-reveal className="reveal mt-10">
            <MagneticLink to="/contact">Brief our production team</MagneticLink>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
