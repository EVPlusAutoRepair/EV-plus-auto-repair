import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Paint & Refinish in Van Nuys | EV+ Auto Repair",
  description:
    "Tesla paint matching and refinishing near Van Nuys — factory colors, proper blending, booth refinishing. Family-owned shop in Sun Valley. Free estimates: (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Paint & Refinish in Van Nuys",
  kicker: "About 15 minutes from Van Nuys",
  h1: "Paint & Refinish in Van Nuys",
  lede: "Valley sun is hard on paint. Between UV fade, clear-coat failure, and the occasional parking-lot incident, Van Nuys Teslas come to us with paint that no longer matches itself. We refinish panels the way the factory did — matched by color code, blended into the neighbors, and cured properly — at our Sun Valley shop, about 15 minutes from Van Nuys.",
  sections: [
    {
      kicker: "Why Tesla paint is tricky",
      heading: "Multi-coat colors don't forgive shortcuts.",
      paragraphs: [
        "Tesla's most popular colors — Pearl White Multi-Coat, Midnight Silver Metallic, Ultra Red — are multi-stage finishes. The final color depends on the base coat, the mid coat, and how the paint is laid down, which is why a cheap single-stage respray looks 'close but wrong' in direct sunlight.",
        "We match from your car's paint code, spray test cards to confirm the match under real light, and blend into adjacent panels so the repair disappears instead of ending at a hard edge.",
      ],
    },
    {
      kicker: "What we refinish",
      heading: "Collision paint and cosmetic refinish.",
      paragraphs: [
        "Most of our paint work follows collision repair — bumpers, fenders, doors, and hoods refinished after body work. We also take on cosmetic refinishing: a sun-faded hood, a bumper that's been repainted badly before, or panels that need to match again after years of Valley heat.",
      ],
      ticks: [
        "Color matched by factory paint code, verified on test cards",
        "Blending into adjacent panels — no hard paint lines",
        "Bumpers, panels, and full refinishing after collision repair",
        "Insurance paint supplements handled on claim work",
        "6-12 months labor warranty",
        "Family-owned since 2016 — Teslas are our specialty",
      ],
    },
    {
      kicker: "From Van Nuys",
      heading: "A straight shot to Sun Valley.",
      paragraphs: [
        "We're at 9755 Glenoaks Blvd in Sun Valley — about 15 minutes from Van Nuys. If your car is staying for paint, ask about an on-site Tesla rental (subject to availability) so you're not arranging rides while it cures.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can you match my Tesla's color exactly?",
      a: "We match using the factory paint code and confirm with spray-out test cards before your panel is painted. Multi-coat colors get the full multi-stage process, and we blend into neighboring panels — the combination is what makes a repair invisible.",
    },
    {
      q: "How long does paint and refinish work take?",
      a: "A single panel is faster than a multi-panel refinish, and curing time is part of doing it right — rushing paint is how jobs come back. We'll give you a realistic timeline with your free estimate and keep you posted with photos.",
    },
    {
      q: "Do you repaint whole cars?",
      a: "Our refinishing focuses on panels and collision-related paint work. If you're considering a full respray, bring the car by for a free inspection and we'll talk honestly about whether it makes sense for the car's value.",
    },
    {
      q: "Is paint covered if I'm going through insurance?",
      a: "When paint is part of an accident claim, yes — it's part of the repair. We document everything, work with your adjuster, and file supplements if teardown shows more damage than the first estimate allowed for.",
    },
    {
      q: "My paint is just faded, no accident. Can you still help?",
      a: "Yes. Sun and heat damage is common in the Valley. We'll inspect the clear coat and tell you whether a panel refinish will fix it or whether the panel needs more — straight answers first, estimate second.",
    },
  ],
  related: [
    { href: "/collision/paint-refinishing", label: "Paint & refinishing" },
    { href: "/collision", label: "Collision Center" },
    { href: "/bumper-repair-burbank", label: "Bumper Repair in Burbank" },
    { href: "/collision-repair-north-hollywood", label: "Collision Repair in North Hollywood" },
  ],
  ctaHeading: "Paint not matching? Bring it by for a free look and a real estimate.",
  bookHref: "/book?lane=accident",
  bookLabel: "Get a free estimate",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
