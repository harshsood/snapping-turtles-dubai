import { ClientOnly, createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { Marquee } from "@/components/site/Marquee";
import { SplitText } from "@/components/site/SplitText";
import {
  CTABand,
  MagneticLink,
  ProjectCard,
  SectionHeading,
  StatGrid,
  Testimonials,
} from "@/components/site/ui";
import { useParallax, useTilt } from "@/hooks/use-anim";
import { CLIENTS, PROCESS, PROJECTS, SERVICES } from "@/lib/content";

const BottleExperience = lazy(() =>
  import("@/components/site/BottleExperience").then((module) => ({
    default: module.BottleExperience,
  })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snapping Turtles — Global Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Snapping Turtles is a global digital marketing agency delivering strategy, performance media, creative production and web engineering for ambitious brands.",
      },
      {
        property: "og:title",
        content: "Snapping Turtles — Global Digital Marketing Agency",
      },
      {
        property: "og:description",
        content:
          "Strategy, performance media, film and engineering under one roof. 241+ projects delivered across four studios.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://snappingturtles.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://snappingturtles.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Snapping Turtles",
          url: "https://snappingturtles.com/",
          description:
            "Global digital marketing agency delivering strategy, performance media, creative production and web engineering.",
        }),
      },
    ],
  }),
  component: Home,
});

function ServiceRow({
  index,
  slug,
  title,
  short,
}: {
  index: number;
  slug: string;
  title: string;
  short: string;
}) {
  const accentImages = [
    "linear-gradient(135deg, rgba(132,255,203,0.32), rgba(17,24,39,0.72))",
    "linear-gradient(135deg, rgba(245,158,11,0.32), rgba(17,24,39,0.72))",
    "linear-gradient(135deg, rgba(168,85,247,0.28), rgba(17,24,39,0.72))",
    "linear-gradient(135deg, rgba(59,130,246,0.28), rgba(17,24,39,0.72))",
  ];

  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      data-reveal
      className="reveal sweep-card glass-panel group flex h-full flex-col rounded-[1.8rem] p-6"
      style={{ transitionDelay: `${(index % 4) * 0.06}s` }}
    >
      <div
        className="relative overflow-hidden rounded-[1.3rem] border border-border/80"
        style={{
          background: accentImages[index % accentImages.length],
          minHeight: "152px",
        }}
      >
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative flex h-full items-end justify-between p-5">
          <span className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[0.55rem] tracking-[0.18em] uppercase text-white/80">
            Strategy
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="font-display text-3xl transition-transform duration-500 group-hover:-translate-y-1 sm:text-[2rem]">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
        <p className="mt-6 border-t border-border pt-5 font-mono text-[0.58rem] tracking-[0.22em] uppercase text-muted-foreground transition-colors group-hover:text-primary">
          Explore →
        </p>
      </div>
    </Link>
  );
}

function Home() {
  const orbRef = useParallax<HTMLDivElement>(120);
  const showreelRef = useTilt<HTMLDivElement>(5);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-36 pb-16 sm:px-8">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div
          ref={orbRef}
          className="pointer-events-none absolute -top-20 right-[-10%] size-[42rem] rounded-full bg-primary/12 blur-[120px]"
        />
        <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] size-[30rem] rounded-full bg-accent/12 blur-[110px] float-slow" />

        <ClientOnly>
          <Suspense fallback={null}>
            <BottleExperience />
          </Suspense>
        </ClientOnly>

        <div className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="pulse-ring absolute inset-0 rounded-full bg-primary" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            Now taking briefs for Q4 · New York · London · Dubai · Noida
          </p>

          <h1 className="mt-8 font-display text-[16vw] leading-[0.86] tracking-tight uppercase sm:text-[12vw] lg:text-[9.5vw]">
            <SplitText text="Marketing" className="block" delay={0.15} />
            <SplitText
              text="That Compounds"
              className="block"
              charClassName="signal-text"
              delay={0.45}
            />
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <p
              data-reveal
              className="reveal max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              We're a global digital marketing studio building brands that travel —
              strategy, performance media, film and engineering, run by one senior
              team across four cities.
            </p>
            <div data-reveal className="reveal pointer-events-auto flex flex-wrap gap-4 lg:justify-end">
              <MagneticLink to="/services">Discover our services</MagneticLink>
              <MagneticLink to="/our-work" variant="ghost">
                View case studies
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT RIBBON */}
      <div className="relative">
        <p className="eyebrow px-4 pb-5 text-center sm:px-8">
          Trusted by the world's biggest brands
        </p>
        <Marquee items={CLIENTS} />
        <Marquee items={[...CLIENTS].reverse()} reverse separator="—" />
      </div>

      {/* STATS */}
      <section className="px-0 py-24">
        <StatGrid />
      </section>

      {/* CREATIVE FEATURE STRIP */}
      <section className="relative px-4 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_1.2fr] lg:items-center">
          <div data-reveal className="reveal glass-panel rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Built for ambitious brands</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Strategy, media and production that <span className="signal-text">move together</span>.
            </h2>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">
              We turn fragmented marketing into a single operating system — so creative,
              media and product all compound instead of fighting for attention.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "4 cities", label: "Global delivery" },
                { value: "241+", label: "Projects" },
                { value: "12 mo", label: "Average runway" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-background/40 p-4">
                  <p className="font-display text-2xl text-primary">{item.value}</p>
                  <p className="mt-2 font-mono text-[0.58rem] tracking-[0.18em] uppercase text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Growth systems",
                caption: "Creative + media + analytics in one loop",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Brand films",
                caption: "In-house artistry at production speed",
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Web experiences",
                caption: "High-converting experiences built to ship",
                image:
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Performance culture",
                caption: "Testing, learning and scaling every week",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item) => (
              <div
                key={item.title}
                data-reveal
                className="reveal group relative overflow-hidden rounded-[1.8rem] border border-border bg-background/40 p-3"
                style={{ transitionDelay: "0.08s" }}
              >
                <div
                  className="relative h-64 overflow-hidden rounded-[1.3rem] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10,16,22,0.18), rgba(10,16,22,0.72)), url("${item.image}")`,
                  }}
                />
                <div className="relative z-10 mt-4 px-2 pb-2">
                  <p className="font-display text-2xl">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Nine capabilities,"
            accent="one accountable team"
            copy="No handoffs between agencies. Strategy, creative, media and engineering sit in the same room and share the same KPI."
          />
          <div className="mt-16">
            {SERVICES.map((service, i) => (
              <ServiceRow key={service.slug} index={i} {...service} />
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="relative px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            ref={showreelRef}
            data-reveal
            className="clip-reveal glass-panel relative overflow-hidden rounded-3xl"
          >
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative aspect-[16/8] w-full">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.84_0.19_145/18%),transparent_70%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
                <p className="eyebrow">Showreel 2026</p>
                <p className="font-display text-4xl leading-tight sm:text-6xl">
                  70+ films.
                  <br />
                  <span className="outline-text">Made in-house.</span>
                </p>
                <MagneticLink to="/portfolio" variant="ghost">
                  Watch the reel
                </MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Our work"
              title="Real outcomes for"
              accent="real businesses"
            />
            <div data-reveal className="reveal">
              <MagneticLink to="/our-work" variant="ghost">
                All case studies
              </MagneticLink>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="Five phases,"
            accent="zero guesswork"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((phase, i) => (
              <div
                key={phase.step}
                data-reveal
                className="reveal sweep-card glass-panel rounded-2xl p-6"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <p className="font-mono text-xs text-primary">{phase.step}</p>
                <h3 className="relative z-10 mt-4 font-display text-2xl">
                  {phase.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm text-muted-foreground">
                  {phase.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-16">
        <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-8">
          <SectionHeading
            eyebrow="Voices"
            title="What partners"
            accent="say about us"
          />
        </div>
        <Testimonials />
      </section>

      <CTABand />
    </div>
  );
}
