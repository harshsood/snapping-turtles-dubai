import { ClientOnly, createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";

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

// Layout C Component (KodeSolution Style Reference)
function ServiceCardKode({
  index,
  slug,
  title,
  short,
  image,
  isActive,
  onSelect,
}: {
  index: number;
  slug: string;
  title: string;
  short: string;
  image: string;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      data-service-card={isActive ? "active" : "inactive"}
      className={`service-card group relative overflow-hidden ${isActive ? "is-active" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="service-card-border" />
      <div className="service-card-panel relative z-10 flex h-full min-w-0 overflow-hidden rounded-[calc(2.5rem-2px)] bg-card/95 backdrop-blur-md">
        <button
          type="button"
          aria-expanded={isActive}
          aria-label={`${isActive ? "Collapse" : "Expand"} ${title}`}
          onClick={onSelect}
          className="service-card-toggle relative h-full min-w-0 flex-1 cursor-pointer text-left"
        >
          <div
            className="service-card-image absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(10,16,22,0.1), rgba(10,16,22,0.82)), url("${image}")`,
            }}
          />
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground shadow-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="self-start rounded-full border border-white/20 bg-black/20 px-3 py-1 font-mono text-[0.55rem] tracking-[0.18em] uppercase text-white/80">
              Strategy
            </span>
          </div>
        </button>

        <div className="service-card-copy flex min-w-0 flex-[1.35] flex-col justify-center p-7 sm:p-9">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-primary">
            Strategy
          </p>
          <h3 className="mt-4 font-display text-3xl leading-tight sm:text-[2.15rem]">{title}</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{short}</p>
          <Link
            to="/services/$slug"
            params={{ slug }}
            className="mt-8 inline-flex items-center gap-2 border-t border-border/60 pt-4 font-mono text-[0.58rem] tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            Explore <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function Home() {
  const orbRef = useParallax<HTMLDivElement>(120);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % SERVICES.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      document
        .querySelector<HTMLElement>('[data-service-card="active"]')
        ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeService]);

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
          {/* Accordion slider */}
          <div className="mt-16">
            <div className="service-slider no-scrollbar overflow-hidden">
              <div className="service-track flex items-stretch gap-3 sm:gap-4">
                {SERVICES.map((service, i) => {
                  const serviceImages = [serviceImg1, serviceImg2, serviceImg5, serviceImg6];
                  return (
                    <ServiceCardKode
                      key={`kode-${service.slug}`}
                      index={i}
                      {...service}
                      image={serviceImages[i % serviceImages.length]}
                      isActive={activeService === i}
                      onSelect={() => setActiveService(i)}
                    />
                  );
                })}
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