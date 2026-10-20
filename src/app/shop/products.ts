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
  /** Optional "How to set it up" section: heading + ordered steps. */
  setup?: { title: string; steps: string[] };
  /** Stripe Payment Link URL (https://buy.stripe.com/...). Empty until Tracey creates it — button stays hidden. */
  stripeLink?: string;
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
    // Tracey is creating the Stripe Payment Link; paste it here when she sends it.
    stripeLink: "",
    description: [
      "Dashcam and Sentry Mode are only as good as the drive they're writing to. A cheap gas-station USB stick overheats, corrupts, and dies — usually the week you actually need the footage.",
      "This is a pre-owned, genuine Tesla OEM 128GB drive — the same drive Tesla makes for Dashcam and Sentry Mode recording. It meets every Tesla spec: 128GB (Tesla's minimum is 64GB), USB 2.0 compatible, and fast enough for the car's sustained 4 MB/s write speed.",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites. Setup takes about two minutes in the car — full instructions below.",
    ],
    setup: {
      title: "How to set it up (Tesla's official steps)",
      steps: [
        "Use the glovebox USB port. Tesla recommends it for Sentry Mode and Dashcam because it uses less power and keeps the drive secure. Don't use a rear port — those only charge devices.",
        "Let the car format the drive: on the touchscreen, tap Controls > Safety > Format USB Drive. The car formats it as exFAT and creates the required TeslaCam folder automatically. Heads up: formatting erases anything on the drive.",
        "Wait a few seconds for the car to recognize the drive. When the Dashcam and Sentry Mode icons appear under Controls, it's ready to record.",
        "Turn Sentry Mode on: Controls > Sentry. (Dashcam records while you drive; Sentry watches while you're parked — you want both.)",
        "Test it: while parked, tap the Dashcam icon to open the Viewer and confirm a saved clip plays. Then lock the car, walk around it, and check that a Sentry clip was captured. On a computer, footage lives in the TeslaCam folder (Saved Clips and Sentry Clips).",
        "Keep it healthy: footage records in a loop and overwrites the oldest clips, and a full drive can't save new footage. Every few weeks, move clips you want to keep to a computer and clear space (Controls > Safety > Delete Dashcam Clips).",
      ],
    },
    bullets: [
      "Genuine Tesla OEM 128GB USB drive — pre-owned",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites",
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
        a: "Consumer sticks aren't made for constant video rewriting — they can corrupt and fail, usually silently, and usually when it matters. This is Tesla's own drive, made for exactly this job.",
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
