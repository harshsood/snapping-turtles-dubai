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
import { useParallax } from "@/hooks/use-anim";
import { CLIENTS, PROCESS, PROJECTS, SERVICES } from "@/lib/content";

// Creative feature strip image imports
import growthImg from "@/assets/growth-system.png";
import filmImg from "@/assets/brand-films.png";
import webImg from "@/assets/web-expriences.png";
import cultureImg from "@/assets/performance-culture.png";

// Service row image imports
import serviceImg1 from "@/assets/digital-marketing.png";
import serviceImg2 from "@/assets/seo-and-content.png";
import serviceImg5 from "@/assets/video-production.jpeg";
import serviceImg6 from "@/assets/web-development.jpeg";

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

// Layout A Component
function ServiceRow({
  index,
  slug,
  title,
  short,
  image,
}: {
  index: number;
  slug: string;
  title: string;
  short: string;
  image: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      data-reveal
      className="reveal sweep-card glass-panel group flex h-full flex-col rounded-[1.8rem] p-6"
      style={{ transitionDelay: `${(index % 4) * 0.06}s` }}
    >
      <div
        className="relative overflow-hidden rounded-[1.3rem] border border-border/80 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,16,22,0.18), rgba(10,16,22,0.72)), url("${image}")`,
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

// Layout B Component (Stacked Full-Width Rows)
function ServiceRow1({
  index,
  slug,
  title,
  short,
  image,
}: {
  index: number;
  slug: string;
  title: string;
  short: string;
  image: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      data-reveal
      className="reveal sweep-card glass-panel group flex flex-col rounded-[1.8rem] p-6"
      style={{ transitionDelay: `${(index % 4) * 0.06}s` }}
    >
      <div
        className="relative overflow-hidden rounded-[1.3rem] border border-border/80 bg-cover bg-center w-full min-h-[200px] sm:min-h-[260px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,16,22,0.18), rgba(10,16,22,0.72)), url("${image}")`,
        }}
      >
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative flex h-full min-h-[200px] sm:min-h-[260px] items-end justify-between p-6">
          <span className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[0.55rem] tracking-[0.18em] uppercase text-white/80">
            Strategy
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <h3 className="font-display text-3xl transition-transform duration-500 group-hover:-translate-y-1 sm:text-[2rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{short}</p>
        <p className="mt-6 border-t border-border pt-4 font-mono text-[0.58rem] tracking-[0.22em] uppercase text-muted-foreground transition-colors group-hover:text-primary">
          Explore →
        </p>
      </div>
    </Link>
  );
}

// Layout C Component (KodeSolution Style Reference)
function ServiceCardKode({
  index,
  slug,
  title,
  short,
  image,
}: {
  index: number;
  slug: string;
  title: string;
  short: string;
  image: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      data-reveal
      className="reveal group relative flex flex-col justify-between overflow-hidden rounded-[1.6rem] border border-border/80 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      {/* Background Image / Thumb Overlay styling */}
      <div>
        <div className="relative h-48 w-full overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,16,22,0.1), rgba(10,16,22,0.65)), url("${image}")`,
          }}
        >
          <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground shadow-md">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-2xl tracking-wide transition-colors group-hover:text-primary sm:text-[1.6rem]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {short}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground">
          Service Item
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
          Read More →
        </span>
      </div>
    </Link>
  );
}

function Home() {
  const orbRef = useParallax<HTMLDivElement>(120);

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
                image: growthImg,
              },
              {
                title: "Brand films",
                caption: "In-house artistry at production speed",
                image: filmImg,
              },
              {
                title: "Web experiences",
                caption: "High-converting experiences built to ship",
                image: webImg,
              },
              {
                title: "Performance culture",
                caption: "Testing, learning and scaling every week",
                image: cultureImg,
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
          
          {/* Layout Option A: 3-Column Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const serviceImages = [serviceImg1, serviceImg2, serviceImg5, serviceImg6];
              return (
                <ServiceRow
                  key={service.slug}
                  index={i}
                  {...service}
                  image={serviceImages[i % serviceImages.length]}
                />
              );
            })}
          </div>

          {/* Layout Option B: 9 Stacked Full-Width Rows */}
          <div className="mt-28">
            <div className="mb-8 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Layout Option B (9 Stacked Full-Width Rows)</p>
            </div>
            <div className="flex flex-col gap-6">
              {SERVICES.map((service, i) => {
                const serviceImages = [serviceImg1, serviceImg2, serviceImg5, serviceImg6];
                return (
                  <ServiceRow1
                    key={`row-${service.slug}`}
                    index={i}
                    {...service}
                    image={serviceImages[i % serviceImages.length]}
                  />
                );
              })}
            </div>
          </div>

          {/* Layout Option C: KodeSolution Style Reference Layout */}
          <div className="mt-28">
            <div className="mb-8 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Layout Option C (KodeSolution Style Reference)</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => {
                const serviceImages = [serviceImg1, serviceImg2, serviceImg5, serviceImg6];
                return (
                  <ServiceCardKode
                    key={`kode-${service.slug}`}
                    index={i}
                    {...service}
                    image={serviceImages[i % serviceImages.length]}
                  />
                );
              })}
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