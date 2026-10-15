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
  ];
  for (const s of serviceSlugs)
    pages.push({ url: `${URL}/service/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const s of collisionSlugs)
    pages.push({ url: `${URL}/collision/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  for (const p of POSTS.filter(isPublished))
    pages.push({ url: `${URL}/blog/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  return pages;
}
