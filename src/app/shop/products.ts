import { usbDrive } from "../img/shop-sign";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceLabel: string;
  image: string;
  imageAlt: string;
  description: string[];
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "tesla-usb-drive-128gb",
    name: "Tesla 128GB USB Drive",
    tagline: "Dashcam & Sentry Mode — your Tesla is always watching. Make sure it's actually recording.",
    price: 29.99,
    priceLabel: "$29.99",
    image: usbDrive,
    imageAlt: "Tesla 128GB USB flash drive for Dashcam and Sentry Mode",
    description: [
      "Dashcam and Sentry Mode are only as good as the drive they're writing to. A cheap gas-station USB stick overheats, corrupts, and dies — usually the week you actually need the footage.",
      "This is Tesla's OEM 128GB drive: high-endurance flash engineered for constant rewriting, heat-resistant for a glovebox in a Valley summer.",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites. Plug it into the glovebox USB port and it just works — no formatting headaches.",
    ],
    bullets: [
      "Genuine Tesla OEM 128GB USB drive",
      "High-endurance flash, built for 24/7 Dashcam + Sentry Mode writes",
      "Heat-resistant — made for a glovebox in summer",
      "Plug-and-play in the glovebox USB port",
      "Free pickup in Sun Valley, or we ship it to you",
    ],
    faqs: [
      {
        q: "Will it work with my Tesla?",
        a: "Yes — any Model 3, Y, S, or X with a glovebox USB port.",
      },
      {
        q: "Why not just use any USB stick?",
        a: "Consumer sticks aren't rated for constant video rewriting. They corrupt and fail — usually silently, and usually when it matters. This one's engineered for exactly this job.",
      },
      {
        q: "Pickup or delivery?",
        a: "Both. Free pickup at 9755 Glenoaks Blvd, Sun Valley — or we ship anywhere in the US.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
