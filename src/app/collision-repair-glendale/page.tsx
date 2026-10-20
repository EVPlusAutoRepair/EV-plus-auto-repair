import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Collision Repair in Glendale | EV+ Auto Repair",
  description:
    "Tesla & EV collision repair near Glendale — structural repair, ADAS calibration, insurance claims handled start to finish. Sun Valley shop, ~15 min away. (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Collision Repair in Glendale",
  kicker: "About 15 minutes from Glendale",
  h1: "Collision Repair in Glendale",
  lede: "A wreck on the 134 or a parking-structure crunch on Brand Blvd is stressful enough without fighting your insurance company too. Our collision center in Sun Valley — about 15 minutes from Glendale — repairs Teslas and other EVs properly: structure, panels, paint, and camera calibration, with the entire claim handled for you.",
  sections: [
    {
      kicker: "Full collision center",
      heading: "Structure, panels, paint, and the electronics after.",
      paragraphs: [
        "Modern EV collision repair is two jobs: the body work you can see, and the sensor and camera work you can't. We do both under one roof. Bent suspension pickup points, aluminum panels on Model S and X, steel and aluminum construction on Model 3 and Y — repaired, refinished, and then calibrated so your cameras and driver-assistance features read the road correctly again.",
        "Our collision center also repairs other EVs and gas vehicles. Service and maintenance at our shop is Tesla-only — collision is where every make is welcome.",
      ],
      ticks: [
        "Structural and panel repair for Tesla, other EVs, and gas vehicles",
        "ADAS / camera calibration after repair",
        "Factory paint matching and refinishing",
        "We handle the insurance claim start to finish",
        "Photo updates during the whole repair",
        "On-site Tesla rentals, subject to availability",
        "6-12 months labor warranty",
      ],
    },
    {
      kicker: "Your claim, handled",
      heading: "In California, the shop choice is yours — not theirs.",
      paragraphs: [
        "Insurance companies may suggest a 'preferred' shop. California law says the choice is yours. When you choose us, we document the damage, coordinate with the adjuster, and file supplements when teardown finds hidden damage — which it often does. You get photo updates as the work moves, not silence until pickup day.",
      ],
    },
    {
      kicker: "From Glendale",
      heading: "Up the 5 or across the 134.",
      paragraphs: [
        "Find us at 9755 Glenoaks Blvd in Sun Valley. Most Glendale drivers reach us in about 15 minutes. If the car isn't drivable, ask about a tow — our truck picks up across Southern California.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can my insurance company make me use their shop?",
      a: "No. In California, you have the legal right to choose your repair shop. Insurers can recommend, but the decision is yours — tell them you've chosen EV+ Auto Repair and we'll take it from there.",
    },
    {
      q: "How long does collision repair take?",
      a: "Honest answer: it depends on parts availability and insurance approvals more than on the repair itself. Some jobs take days, bigger structural work can take weeks. We give you a realistic timeline after the teardown inspection and update you with photos as it moves.",
    },
    {
      q: "Do you recalibrate cameras and sensors after collision repair?",
      a: "Yes — ADAS and camera calibration is part of doing the job completely. After bumper, panel, or front-end repairs, the systems that depend on those cameras and sensors get calibrated and verified.",
    },
    {
      q: "Do you repair non-Tesla vehicles?",
      a: "In the collision center, yes — other EVs and gas vehicles are welcome. Our service center (maintenance and mechanical) is Tesla-only.",
    },
    {
      q: "Can I rent a car while mine is being repaired?",
      a: "We rent Teslas on-site through EV+ Auto Rentals (subject to availability), so you can drop off your car and drive off in another Tesla. If your claim includes rental coverage, we'll coordinate the paperwork.",
    },
  ],
  related: [
    { href: "/collision", label: "Collision Center" },
    { href: "/collision/adas-calibration", label: "ADAS calibration" },
    { href: "/collision/insurance-claims", label: "Insurance claims" },
    { href: "/bumper-repair-burbank", label: "Bumper Repair in Burbank" },
  ],
  ctaHeading: "In an accident? Send photos and we'll start your estimate today.",
  bookHref: "/book?lane=accident",
  bookLabel: "Get a photo estimate",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
