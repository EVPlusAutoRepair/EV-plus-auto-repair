import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { PRODUCTS } from "./products";

export const metadata: Metadata = {
  title: "Shop Tesla Accessories | EV+ Auto Repair",
  description:
    "Genuine Tesla accessories from EV+ Auto Repair in Sun Valley, LA. 128GB USB drive for Dashcam & Sentry Mode. Shipped anywhere in the US. (818) 281-7757.",
};

export default function Shop() {
  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">EV+ Shop</div>
          <h1>Tesla accessories, from your Tesla shop.</h1>
          <p className="lede">The same parts we trust in our own work — shipped to your door anywhere in the US.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {PRODUCTS.map((p) => (
              <a key={p.slug} href={`/shop/${p.slug}`} className="card" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    aspectRatio: "1",
                    background: "#fff",
                    borderRadius: 12,
                    overflow: "hidden",
                    marginBottom: 16,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="kicker" style={{ marginBottom: 6 }}>{p.priceLabel}</div>
                <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
                <p className="lede" style={{ fontSize: 14 }}>{p.tagline}</p>
                <span className="btn" style={{ marginTop: 12, display: "inline-block" }}>View product</span>
              </a>
            ))}
          </div>

          <div className="cta-band" style={{ marginTop: 48 }}>
            <h2>Looking for something else?</h2>
            <p className="lede" style={{ margin: "0 auto" }}>We stock more Tesla accessories in-store — call or text and we&rsquo;ll set it aside for you.</p>
            <div className="hero-ctas">
              <a className="btn" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
