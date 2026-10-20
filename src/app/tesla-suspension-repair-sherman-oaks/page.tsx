import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Tesla Suspension Repair in Sherman Oaks | EV+ Auto Repair",
  description:
    "Tesla control arm & suspension repair near Sherman Oaks — creaking, clunking, uneven tire wear. Full arm replacement, never bushing-only. Free inspection: (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Tesla Suspension Repair in Sherman Oaks",
  kicker: "About 20 minutes from Sherman Oaks",
  h1: "Tesla Suspension Repair in Sherman Oaks",
  lede: "Creaking over the speed bumps on Ventura Blvd? Clunking when you turn into a driveway? On Model 3 and Model Y, that's the classic sound of worn control arms — the single most common suspension repair we do. We're a Tesla-only service center in Sun Valley, about 20 minutes from Sherman Oaks, and suspension is our specialty.",
  sections: [
    {
      kicker: "The symptoms",
      heading: "What worn control arms sound and feel like.",
      paragraphs: [
        "It usually starts as a creak or squeak from the front end over bumps and driveways. Then comes clunking on turns, a vague feeling in the steering, and — the expensive one — front tires wearing unevenly on the inside edge. Ignore it long enough and you're buying tires early on top of the suspension work.",
        "A free 1-hour inspection tells you exactly where you stand. We put the car on the lift, check every arm and bushing, and show you what's worn and what isn't. If it's fine, we tell you it's fine.",
      ],
    },
    {
      kicker: "Our rule",
      heading: "Full control arms. Never just the bushing.",
      paragraphs: [
        "Some shops will press a new bushing into a worn arm and call it fixed. We don't — a bushing-only swap is a short-term patch on a part that wears as an assembly, and it's how the noise comes back in a few months. We replace the complete control arm, so the repair lasts and the warranty behind it means something.",
      ],
      ticks: [
        "Free 1-hour inspection with the car on the lift",
        "Complete control arm replacement — no bushing-only patches",
        "Front-end check included: tie rods, links, and wear items",
        "Most suspension service completed within 48 hours",
        "6-12 months labor warranty",
        "Tesla-only service center — this is what we do all day",
      ],
    },
    {
      kicker: "From Sherman Oaks",
      heading: "Worth the 20 minutes.",
      paragraphs: [
        "Sherman Oaks drivers find us at 9755 Glenoaks Blvd in Sun Valley, about 20 minutes via the 405 and 118 or up the 170. Most suspension jobs are done within 48 hours, and if yours needs to stay longer, ask about an on-site Tesla rental (subject to availability).",
      ],
    },
  ],
  faqs: [
    {
      q: "Why won't you just replace the bushing?",
      a: "Because it doesn't last. The control arm wears as an assembly — ball joint, bushings, and arm together. Pressing in a new bushing leaves the rest of the wear in place, and the creaking returns. Replacing the full arm fixes the problem once, which is why we can warranty it.",
    },
    {
      q: "Is it safe to drive with a creaking control arm?",
      a: "A creak is a warning, not an emergency — but it's not something to ignore for months. Worn arms accelerate tire wear and get worse. Book the free inspection and we'll tell you honestly how urgent yours is.",
    },
    {
      q: "How long does control arm replacement take?",
      a: "Most suspension service at our shop is completed within 48 hours. We'll confirm the timeline after the inspection, once we know exactly which arms your car needs.",
    },
    {
      q: "What does it cost?",
      a: "It depends on the model and how many arms are worn — which is exactly what the free inspection answers. You get a written estimate before any work starts, and there's no pressure to book it with us.",
    },
    {
      q: "Which models does this affect?",
      a: "Model 3 and Model Y are the most common, especially as they pass 50,000 miles, but we inspect and repair suspension on Model S and X as well.",
    },
  ],
  related: [
    { href: "/service/suspension-steering", label: "Suspension & steering" },
    { href: "/service", label: "Tesla Service Center" },
    { href: "/tesla-12v-battery-replacement-burbank", label: "12V Battery Replacement in Burbank" },
    { href: "/blog", label: "From the blog" },
  ],
  ctaHeading: "Hearing the creak? Book a free inspection and know for sure.",
  bookHref: "/book?lane=service&service=inspection",
  bookLabel: "Book free inspection",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
