import { createFileRoute } from "@tanstack/react-router";

import { PortfolioExperience } from "@/components/site/PortfolioExperience";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Snapping Turtles Creative Studio" },
      {
        name: "description",
        content:
          "Explore fragrance films, perfume branding, e-commerce visuals and launch experiences from Snapping Turtles Creative Studio.",
      },
      {
        property: "og:title",
        content: "Fragrance Portfolio — Films, Branding & Launches",
      },
      {
        property: "og:description",
        content:
          "Fragrance films, perfume branding, e-commerce visuals and launch experiences from our creative studio.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://glb-fragrance-magic.lovable.app/portfolio",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://glb-fragrance-magic.lovable.app/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div>
      <PortfolioExperience />
    </div>
  );
}
