import type { Metadata } from "next";
import "./globals.css";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://evplusautorepair.com"),
  title: "Tesla Service Center & Collision Center in Los Angeles | EV+ Auto Repair",
  description:
    "Family-owned Tesla service center & collision center in Los Angeles (Sun Valley). Maintenance, battery service, accident repair, insurance claims handled. Free estimates—call/text (818) 281-7757.",
  openGraph: {
    title: "EV+ Auto Repair—Tesla Service & Collision Center, Los Angeles",
    description:
      "Your Tesla, serviced and repaired by people who specialize in Teslas. Free estimates, 12-month labor warranty, on-site Tesla rentals.",
    type: "website",
    images: [{ url: "https://evplusautorepair.com/og.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "EV+ Auto Repair",
    image: "https://evplusautorepair.com/og.jpg",
    url: "https://evplusautorepair.com",
    telephone: "+1-818-281-7757",
    email: "info@evplusautorepair.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9755 Glenoaks Blvd",
      addressLocality: "Sun Valley",
      addressRegion: "CA",
      postalCode: "91352",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 34.24, longitude: -118.29 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "29" },
    sameAs: ["https://www.instagram.com/evplusautorepair/"],
  };
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>{children}<MobileCallBar /></body>
    </html>
  );
}
