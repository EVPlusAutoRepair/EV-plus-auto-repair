import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { POSTS, isPublished } from "./blog/posts";

// Rendered per-request (not prerendered) so posts with a future publishDate
// appear in the sitemap automatically on their publish date.
const URL = "https://evplusautorepair.com";

const serviceSlugs = [
  "12v-battery-replacement",
  "16v-battery-service",
  "maintenance-inspections",
  "drive-unit-oil-service",
  "drive-unit-bushing-replacement",
  "suspension-steering",
  "control-arm-replacement",
  "hv-battery-service",
  "cabin-filters-radiator-cleaning",
  "radiator-condenser-cleaning",
  "diagnostics",
  "tire-rotation",
  // Search-gap pages (Nov 9, 2026) — 19 new service pages
  "tesla-noises-vibrations",
  "tesla-wont-open-start-drive",
  "tesla-touchscreen-autopilot-sentry",
  "tesla-leaks-smells-range",
  "tesla-wiper-blade-replacement",
  "tesla-key-fob-battery",
  "tesla-software-update",
  "tesla-door-handle-repair",
  "tesla-window-regulator",
  "tesla-headlight-taillight",
  "tesla-charge-port",
  "tesla-frunk-trunk-latch",
  "tesla-falcon-wing-door",
  "tesla-brake-service",
  "tesla-ac-not-cold",
  "tesla-coolant-leak",
  "tesla-half-shaft",
  "tesla-power-steering-suspension",
  "tesla-toolbox-diagnostics",
];
const collisionSlugs = [
  "collision-repair",
  "paint-refinishing",
  "adas-calibration",
  "insurance-claims",
  "before-after-gallery",
  "gas-vehicle-collision",
  // Search-gap page (Nov 9, 2026)
  "after-an-accident",
];
const faqSlugs = [
  // Search-gap pages (Nov 9, 2026)
  "is-ev-plus-tesla-certified",
  "visiting-ev-plus",
];
const localSlugs = [
  "bumper-repair-burbank",
  "paint-refinish-van-nuys",
  "collision-repair-glendale",
  "collision-repair-north-hollywood",
  "collision-repair-los-angeles",
  "collision-repair-tujunga",
  "collision-repair-santa-clarita",
  "collision-repair-reseda",
  "tesla-suspension-repair-los-angeles",
  "tesla-12v-battery-replacement-burbank",
];
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${URL}/service`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${URL}/collision`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${URL}/rentals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${URL}/tesla-repair-san-fernando-valley`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
  for (const s of serviceSlugs)
    pages.push({ url: `${URL}/service/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const s of collisionSlugs)
    pages.push({ url: `${URL}/collision/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const s of faqSlugs)
    pages.push({ url: `${URL}/faq/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  for (const s of localSlugs)
    pages.push({ url: `${URL}/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const p of POSTS.filter(isPublished))
    pages.push({ url: `${URL}/blog/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  return pages;
}
