import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Bumper Repair in Burbank | EV+ Auto Repair",
  description:
    "Tesla bumper repair near Burbank — sensor checks, paint matching, insurance handled. Family-owned shop in Sun Valley, about 10 minutes away. Free estimates: (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Bumper Repair in Burbank",
  kicker: "About 10 minutes from Burbank",
  h1: "Bumper Repair in Burbank",
  lede: "Backed into a pole in a studio lot? Rear-ended on Olive Ave? A Tesla bumper is not just a piece of plastic — it carries parking sensors and sits in front of hardware your car depends on. We repair and refinish Tesla bumpers in Sun Valley, a short drive down the 5 from Burbank, and we check every sensor before the car goes home.",
  sections: [
    {
      kicker: "More than a scuff",
      heading: "What's actually inside a Tesla bumper.",
      paragraphs: [
        "On a gas car, a cracked bumper cover is mostly cosmetic. On a Tesla, the front and rear bumpers house ultrasonic parking sensors, and the front end works closely with the car's camera and radar systems. A tap that looks like a $200 scuff can bend a sensor bracket, throw off parking-distance readings, or crack mounting tabs you can't see until the cover comes off.",
        "That's why our bumper repairs start with a teardown inspection, not just a look at the paint. If there's hidden damage, we document it with photos — for you and for your insurance company.",
      ],
    },
    {
      kicker: "Repair or replace",
      heading: "We tell you which one your bumper actually needs.",
      paragraphs: [
        "Some bumper covers can be repaired and refinished to a factory look. Others — torn mounting points, deep cracks in sensor areas — are cheaper and safer to replace. We'll show you the damage, explain both options, and give you a written estimate before any work starts. No obligation, and the estimate is free.",
      ],
      ticks: [
        "Free photo estimate to start — send pictures, get real numbers",
        "Parking sensor function checked after every bumper job",
        "Factory paint matching and blending",
        "Insurance supplements handled if hidden damage shows up",
        "On-site Tesla rentals, subject to availability",
        "6-12 months labor warranty",
      ],
    },
    {
      kicker: "From Burbank",
      heading: "Ten minutes up the 5.",
      paragraphs: [
        "Our shop is at 9755 Glenoaks Blvd in Sun Valley — roughly ten minutes from most of Burbank via I-5 North. Drop the car off, and if it needs to stay, ask about a rental Tesla from our on-site fleet so your Burbank commute doesn't skip a beat.",
      ],
    },
  ],
  faqs: [
    {
      q: "How long does Tesla bumper repair take?",
      a: "It depends on whether the cover is repaired or replaced and whether parts need to be ordered. Minor bumper work is on the faster end of collision repair, but paint and parts set the real timeline — we'll give you an honest one with your estimate, and we send photo updates while the car is with us.",
    },
    {
      q: "Will my parking sensors work right after a bumper repair?",
      a: "That's exactly what we verify. Sensors are inspected when the bumper comes off and function-checked before delivery. If a sensor or bracket is damaged, we'll flag it in the estimate — and in the insurance supplement if you're going through a claim.",
    },
    {
      q: "Do you work with my insurance company?",
      a: "Yes. We handle claims directly — documentation, adjuster coordination, and supplements when teardown reveals more damage. In California, you choose the repair shop, not your insurer.",
    },
    {
      q: "Can I get a rental while my Tesla is in the shop?",
      a: "We have Teslas available to rent on-site through EV+ Auto Rentals (subject to availability). Mention it when you book and we'll line it up with your repair dates.",
    },
    {
      q: "Is the estimate really free?",
      a: "Yes — send us photos for a photo estimate, or book a free inspection at the shop. Either way you get real numbers before you commit to anything.",
    },
  ],
  related: [
    { href: "/collision", label: "Collision Center" },
    { href: "/collision/paint-refinishing", label: "Paint & refinishing" },
    { href: "/paint-refinish-van-nuys", label: "Paint & Refinish in Van Nuys" },
    { href: "/collision-repair-glendale", label: "Collision Repair in Glendale" },
  ],
  ctaHeading: "Got a bumper that needs attention? Send photos, get a free estimate.",
  bookHref: "/book?lane=accident",
  bookLabel: "Get a photo estimate",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
