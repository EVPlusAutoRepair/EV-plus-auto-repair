import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Los Angeles Tesla Collision Repair | EV+ Auto Repair",
  description:
    "Tesla & EV collision repair in Los Angeles — structural repair, ADAS calibration, insurance claims handled. Family-owned, Sun Valley. (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Collision Repair in Los Angeles",
  kicker: "In Sun Valley, Los Angeles",
  h1: "Collision Repair in Los Angeles",
  lede: "Our shop is in Sun Valley — Los Angeles itself. When your Tesla is hit anywhere in the city, from the Valley to Downtown to the Westside, you don't have to wait weeks for a Tesla service center appointment or trust a general shop that rarely sees EVs. If your car isn't drivable, our tow truck picks it up. We repair Teslas and other EVs properly — structure, panels, paint, and camera calibration — handle the entire insurance claim for you, and keep you in an on-site Tesla rental while yours is repaired (optional, based on availability).",
  sections: [
    {
      kicker: "Full collision center",
      heading: "Structure, panels, paint, and the electronics after.",
      paragraphs: [
        "Modern EV collision repair is two jobs: the body work you can see, and the sensor and camera work you can't. We do both under one roof. Bent suspension pickup points, aluminum panels on Model S and X, steel and aluminum construction on Model 3 and Y — repaired, refinished, and then calibrated so your cameras and driver-assistance features read the road correctly again.",
        "Our collision center also repairs other EVs and gas vehicles. Service and maintenance at our shop is Tesla-only — collision is where every make is welcome.",
      ],
      ticks: [
        "Tow truck pickup across Los Angeles — if it isn't drivable, we come get it",
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
      kicker: "From anywhere in LA",
      heading: "Off the 5, the 170, or the 405.",
      paragraphs: [
        "Find us at 9755 Glenoaks Blvd in Sun Valley, right off the 5 and the 170. Most Los Angeles drivers reach us in 20 to 40 minutes depending on traffic. If the car isn't drivable, ask about a tow — our truck picks up across Southern California.",
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
    { href: "/collision", label: "Collision Repair" },
    { href: "/collision/adas-calibration", label: "ADAS calibration" },
    { href: "/collision/insurance-claims", label: "Insurance claims" },
    { href: "/collision-repair-glendale", label: "Collision Repair in Glendale" },
  ],
  ctaHeading: "In an accident? Send photos and we'll start your estimate today.",
  bookHref: "/book?lane=accident",
  bookLabel: "Get a photo estimate",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
