import { usbDriveRotated } from "../img/shop-original-rotated";
import { flatUsbDrive } from "../img/shop-flat";

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
    name: "Tesla 128GB USB Drive (Pre‑Owned)",
    tagline: "Dashcam & Sentry Mode — your Tesla is always watching. Make sure it's actually recording.",
    price: 29.99,
    priceLabel: "$29.99",
    image: usbDriveRotated,
    imageAlt: "Tesla 128GB USB flash drive for Dashcam and Sentry Mode",
    // Live Stripe Payment Link (verified Oct 22, 2026): collects shipping address + phone;
    // USPS Ground Advantage $5.95 (4-7 business days). Shipping only — no local pickup (Tracey, Oct 22).
    stripeLink: "https://buy.stripe.com/fZubITeN28sm1GN1LE2Fa01",
    description: [
      "Dashcam and Sentry Mode are only as good as the drive they're writing to. A cheap gas-station USB stick overheats, corrupts, and dies — usually the week you actually need the footage.",
      "This is a pre-owned, genuine Tesla OEM 128GB drive — the same drive Tesla makes for Dashcam and Sentry Mode recording. It meets every Tesla spec: 128GB (Tesla's minimum is 64GB), USB 2.0 compatible, and meets Tesla's minimum sustained write speed of 4 MB/s.",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites. Setup takes about two minutes in the car — full instructions below.",
    ],
    setup: {
      title: "How to set it up (Tesla's official steps)",
      steps: [
        "Use the glovebox USB port if your car has one; otherwise use a front USB port in the center console. Don't use a rear port, since those only charge devices.",
        "Let the car format the drive: on the touchscreen, tap Controls > Safety > Format USB Drive. The car formats it as exFAT and creates the required TeslaCam folder automatically. Heads up: formatting erases anything on the drive.",
        "Wait a few seconds for the car to recognize the drive. When the Dashcam and Sentry Mode icons appear under Controls, it's ready to record.",
        "Turn Sentry Mode on: Controls > Sentry. (Dashcam records while you drive; Sentry watches while you're parked — you want both.)",
        "Test it: while parked, tap the Dashcam icon to open the Viewer and confirm a saved clip plays. Then lock the car, walk around it, and check that a Sentry clip was captured. On a computer, footage lives in the TeslaCam folder (SavedClips and SentryClips).",
        "Keep it healthy: footage records in a loop and overwrites the oldest clips, and a full drive can't save new footage. Every few weeks, move clips you want to keep to a computer and clear space (Controls > Safety > Delete Dashcam Clips).",
      ],
    },
    bullets: [
      "Genuine Tesla OEM 128GB USB drive — pre-owned",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites",
      "Plug-and-play in the glovebox USB port",
      "Ships anywhere in the US via USPS — $5.95",
    ],
    faqs: [
      {
        q: "How is this different from buying direct from Tesla?",
        a: "It's a genuine Tesla OEM 128GB drive — the same capacity and spec Tesla sells. Ours is $29.99 plus $5.95 USPS shipping.",
      },
      {
        q: "Will it work with my Tesla?",
        a: "It works with any Model 3, Model Y, Model S or Model X that supports Dashcam and Sentry Mode. Some older cars, depending on build date and configuration, can't record to USB. Plug it into the glovebox USB port if your car has one. Otherwise, use a front USB port in the center console. Rear USB ports only charge devices. To set it up, go to Controls > Safety > Format USB Drive. On 2015-2020 Model S and X, Sentry is under Controls > Safety > Sentry Mode.",
      },
      {
        q: "Why not just use any USB stick?",
        a: "Consumer sticks aren't made for constant video rewriting — they can corrupt and fail, usually silently, and usually when it matters. This is Tesla's own drive, made for exactly this job.",
      },
      {
        q: "How does shipping work?",
        a: "We ship anywhere in the US via USPS for $5.95 (4–7 business days).",
      },
    ],
  },
  {
    slug: "tesla-usb-drive-128gb-flat",
    name: "Tesla 128GB USB Drive — Flat Design (Pre‑Owned)",
    tagline: "Dashcam & Sentry Mode — the newer, flatter Tesla drive. Same 128GB recording, in a slimmer design that sits flatter in the glovebox port.",
    price: 34.99,
    priceLabel: "$34.99",
    image: flatUsbDrive,
    imageAlt: "Flat silver Tesla 128GB USB flash drive for Dashcam and Sentry Mode",
    // Live Stripe Payment Link (verified Oct 27, 2026, read-only checkout check):
    // $34.99 + USPS Ground Advantage $5.95 = $40.94, live mode, US-only, phone required.
    // Do NOT reuse the $29.99 link. Stock (owner-confirmed Oct 27, 2026): 20 units.
    stripeLink: "https://buy.stripe.com/3cIfZ9dIYeQK2KRdum2Fa03",
    description: [
      "Dashcam and Sentry Mode are only as good as the drive they're writing to. A cheap gas-station USB stick overheats, corrupts, and dies — usually the week you actually need the footage.",
      "This is a pre-owned, genuine Tesla OEM 128GB drive in the newer, flatter design — the same design Tesla includes with new deliveries, but this unit itself is pre-owned, not new. It works the same as new. It meets every Tesla spec: 128GB (Tesla's minimum is 64GB), USB 2.0 compatible, and meets Tesla's minimum sustained write speed of 4 MB/s.",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites. Setup takes about two minutes in the car — full instructions below.",
    ],
    setup: {
      title: "How to set it up (Tesla's official steps)",
      steps: [
        "Use the glovebox USB port if your car has one; otherwise use a front USB port in the center console. Don't use a rear port, since those only charge devices.",
        "Let the car format the drive: on the touchscreen, tap Controls > Safety > Format USB Drive. The car formats it as exFAT and creates the required TeslaCam folder automatically. Heads up: formatting erases anything on the drive.",
        "Wait a few seconds for the car to recognize the drive. When the Dashcam and Sentry Mode icons appear under Controls, it's ready to record.",
        "Turn Sentry Mode on: Controls > Sentry. (Dashcam records while you drive; Sentry watches while you're parked — you want both.)",
        "Test it: while parked, tap the Dashcam icon to open the Viewer and confirm a saved clip plays. Then lock the car, walk around it, and check that a Sentry clip was captured. On a computer, footage lives in the TeslaCam folder (SavedClips and SentryClips).",
        "Keep it healthy: footage records in a loop and overwrites the oldest clips, and a full drive can't save new footage. Every few weeks, move clips you want to keep to a computer and clear space (Controls > Safety > Delete Dashcam Clips).",
      ],
    },
    bullets: [
      "Pre-owned, genuine Tesla OEM 128GB USB drive — newer, flatter design; works the same as new",
      "128GB holds hours of Sentry clips plus Dashcam footage before anything overwrites",
      "Plug-and-play in the glovebox USB port",
      "Ships anywhere in the US via USPS — $5.95",
    ],
    faqs: [
      {
        q: "How is this different from the $29.99 Tesla USB drive?",
        a: "It's the newer, flatter design — same 128GB capacity and same Tesla spec, in a slimmer drive that sits flatter in the glovebox port. It is not a faster-recording drive; the difference is the fit and the newer design. The older wedge-style drive stays listed at $29.99.",
      },
      {
        q: "How is this different from buying direct from Tesla?",
        a: "It's a pre-owned, genuine Tesla OEM 128GB drive — the same capacity and spec Tesla sells, and it works the same as new. Ours is $34.99 plus $5.95 USPS shipping.",
      },
      {
        q: "Will it work with my Tesla?",
        a: "It works with any Model 3, Model Y, Model S or Model X that supports Dashcam and Sentry Mode. Some older cars, depending on build date and configuration, can't record to USB. Plug it into the glovebox USB port if your car has one. Otherwise, use a front USB port in the center console. Rear USB ports only charge devices. To set it up, go to Controls > Safety > Format USB Drive. On 2015-2020 Model S and X, Sentry is under Controls > Safety > Sentry Mode.",
      },
      {
        q: "Why not just use any USB stick?",
        a: "Consumer sticks aren't made for constant video rewriting — they can corrupt and fail, usually silently, and usually when it matters. This is Tesla's own drive, made for exactly this job.",
      },
      {
        q: "How does shipping work?",
        a: "We ship anywhere in the US via USPS for $5.95 (4–7 business days).",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
