import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Collision Repair in North Hollywood | EV+ Auto Repair",
  description:
    "Collision repair near North Hollywood — hit-and-run damage, insurance claims, towing, ADAS calibration. Sun Valley shop, ~10 min away. Free estimates: (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Collision Repair in North Hollywood",
  kicker: "About 10 minutes from North Hollywood",
  h1: "Collision Repair in North Hollywood",
  lede: "Found your Tesla keyed, clipped, or backed into in a NoHo parking lot — with no note? It happens constantly in the Arts District. Our collision center is about 10 minutes from North Hollywood in Sun Valley. We'll document the damage for your claim, handle the insurance back-and-forth, repair it, and calibrate everything before it goes home.",
  sections: [
    {
      kicker: "Hit and run?",
      heading: "What to do when there's no note and no other driver.",
      paragraphs: [
        "Take photos of the damage and the scene before you move the car, and file a police report — for hit-and-run claims it matters. Then check your Tesla's Sentry Mode footage: if Sentry was on, your car may have recorded exactly what happened, and that clip is gold for your claim. Bring or send us everything, and we'll build the estimate around it.",
        "Hit-and-run damage is usually claimed under your own collision or uninsured motorist coverage. We'll help you understand which one applies before you file anything.",
      ],
    },
    {
      kicker: "The repair itself",
      heading: "Body work, paint, and calibration under one roof.",
      paragraphs: [
        "From door dings with creases to full quarter-panel damage, our collision center handles the whole job: teardown and hidden-damage inspection, structural and panel repair, factory-matched paint, and ADAS/camera calibration once the body is straight. Teslas are our specialty, and the collision lane also welcomes other EVs and gas vehicles.",
      ],
      ticks: [
        "Free photo estimate — text us pictures to start",
        "Sentry footage review help for hit-and-run claims",
        "Towing available if the car isn't drivable",
        "Insurance documentation and supplements handled",
        "Camera and sensor calibration after repair",
        "On-site Tesla rentals, subject to availability",
        "6-12 months labor warranty",
      ],
    },
    {
      kicker: "From North Hollywood",
      heading: "Up the 170, you're here.",
      paragraphs: [
        "We're at 9755 Glenoaks Blvd in Sun Valley — SR-170 North puts you about 10 minutes from the shop. If the car can't be driven, our tow truck covers Southern California, from West LA to San Diego.",
      ],
    },
  ],
  faqs: [
    {
      q: "Someone hit my parked car and left. What should I do first?",
      a: "Photograph everything, file a police report, and check your Sentry Mode clips — the car often catches the whole thing. Then send us the photos for a free estimate. We'll help you figure out whether to run it through your collision or uninsured motorist coverage.",
    },
    {
      q: "My car isn't drivable. Can you tow it?",
      a: "Yes. Our tow truck picks up Teslas (and collision jobs of any make) across Southern California. Call or text (818) 281-7757 and we'll roll.",
    },
    {
      q: "How much will collision repair cost me out of pocket?",
      a: "If you go through insurance, typically your deductible — the claim covers the rest of the approved repair. If you'd rather pay out of pocket, we'll give you a written estimate first so you can compare honestly.",
    },
    {
      q: "How long will my car be in the shop?",
      a: "Smaller repairs move in days; larger jobs depend on parts and insurance approvals. After the teardown inspection we'll give you a real timeline, and we send photo updates while your car is with us.",
    },
    {
      q: "Do you only repair Teslas?",
      a: "Collision repair covers Teslas, other EVs, and gas vehicles. Our service and maintenance center is Tesla-only — that's our specialty there.",
    },
  ],
  related: [
    { href: "/collision", label: "Collision Center" },
    { href: "/collision/insurance-claims", label: "Insurance claims" },
    { href: "/collision-repair-glendale", label: "Collision Repair in Glendale" },
    { href: "/paint-refinish-van-nuys", label: "Paint & Refinish in Van Nuys" },
  ],
  ctaHeading: "Dealing with accident damage? Send photos — we'll take it from there.",
  bookHref: "/book?lane=accident",
  bookLabel: "Get a photo estimate",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
