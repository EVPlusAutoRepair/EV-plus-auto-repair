import type { MetadataRoute } from "next";

const URL = "https://evplusautorepair.com";

const serviceSlugs = [
  "12v-battery-replacement",
  "16v-battery-service",
  "maintenance-inspections",
  "drive-unit-oil-service",
  "drive-unit-bushing-replacement",
  "suspension-steering",
  "hv-battery-service",
  "cabin-filters-radiator-cleaning",
  "diagnostics",
  "tire-rotation",
];
const collisionSlugs = [
  "collision-repair",
  "paint-refinishing",
  "adas-calibration",
  "insurance-claims",
  "before-after-gallery",
  "gas-vehicle-collision",
];
const blogSlugs = [
  "tesla-hv-battery-replacement-what-it-looks-like",
  "does-your-tesla-need-an-oil-change",
  "tesla-drive-unit-fluid-lifetime-myth",
  "tesla-drive-unit-oil-100k-miles",
  "tesla-model-3-vibration-fix",
  "tesla-battery-replacement-cost",
  "do-teslas-need-maintenance",
  "tesla-front-suspension-creaking",
  "tesla-battery-health-charging-tips",
  "tesla-model-y-battery-warranty",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${URL}/service`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${URL}/collision`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${URL}/rentals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
  for (const s of serviceSlugs)
    pages.push({ url: `${URL}/service/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const s of collisionSlugs)
    pages.push({ url: `${URL}/collision/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const s of blogSlugs)
    pages.push({ url: `${URL}/blog/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  return pages;
}
