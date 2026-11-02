import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.evplusautorepair.com" }],
        destination: "https://evplusautorepair.com/:path*",
        permanent: true,
      },
      // Legacy Wix URLs (site moved off Wix Oct 13, 2026). Old Wix links
      // are still circulating (Linktree history, shares, bookmarks) and
      // were landing on 404s — GA4 showed ~26 404 views in the first
      // 9 days, 10 of them on one old Wix blog post URL.
      { source: "/homepage", destination: "/", permanent: true },
      { source: "/post/:slug*", destination: "/blog", permanent: true },
      {
        source: "/product-page/128gb-oem-tesla-usb-flash-drive",
        destination: "/shop/tesla-usb-drive-128gb",
        permanent: true,
      },
      { source: "/product-page/:slug*", destination: "/shop", permanent: true },
      { source: "/category/:slug*", destination: "/shop", permanent: true },
      { source: "/body-repair", destination: "/collision", permanent: true },
      { source: "/checkout", destination: "/shop", permanent: true },
      // Nov 2, 2026: Sherman Oaks suspension page replaced by the broader
      // Los Angeles suspension page — client-geography data showed zero
      // suspension jobs from Sherman Oaks; suspension work comes from
      // across LA and the Valley. The old file stays in the repo; this
      // redirect wins at request time.
      {
        source: "/tesla-suspension-repair-sherman-oaks",
        destination: "/tesla-suspension-repair-los-angeles",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
