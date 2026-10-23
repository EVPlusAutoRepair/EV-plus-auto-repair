import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { getProduct, PRODUCTS } from "../products";
import OrderForm from "./OrderForm";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.priceLabel} | EV+ Auto Repair`,
    description: `${p.name} for ${p.priceLabel}. ${p.tagline} USPS shipping anywhere in the US. EV+ Auto Repair, (818) 281-7757.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <>
      <SiteNav />
      <div className="page-hero compact">
        <div className="wrap">
          <div className="kicker">
            <a href="/shop" style={{ color: "var(--acc)" }}>Shop</a> / {p.name}
          </div>
          <h1>{p.name}</h1>
          <p className="lede">{p.tagline}</p>
        </div>
      </div>

      <section style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="why-grid">
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                aspectRatio: "1",
              }}
            >
              <img
                src={p.image}
                alt={p.imageAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="kicker">Price</div>
              <p style={{ fontSize: 36, fontWeight: 800, margin: "4px 0 16px" }}>{p.priceLabel}</p>
              {p.description.map((d, i) => (
                <p key={i} className="lede" style={{ fontSize: 15 }}>
                  {d}
                </p>
              ))}
              <ul className="ticks" style={{ marginTop: 20 }}>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div id="order" style={{ marginTop: 40 }}>
            <div className="kicker">Order</div>
            <h2>Get yours</h2>
            {p.stripeLink ? (
              <>
                <div className="hero-ctas" style={{ justifyContent: "flex-start", margin: "20px 0 16px" }}>
                  <a
                    className="btn"
                    href={p.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 18, padding: "16px 36px" }}
                  >
                    Buy now — {p.priceLabel}
                  </a>
                </div>
                <p className="lede" style={{ fontSize: 14 }}>
                  Secure checkout via Stripe — USPS shipping anywhere in the US for $5.95 (4–7 business days). Questions? Call or text{" "}
                  <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a>.
                </p>
              </>
            ) : (
              <>
                <p className="lede">
                  Send us your order and we&rsquo;ll text you to confirm — we ship anywhere in the US.
                </p>
                <OrderForm productName={p.name} priceLabel={p.priceLabel} />
              </>
            )}
          </div>

          {p.setup && (
            <div style={{ marginTop: 40 }}>
              <div className="kicker">Setup</div>
              <h2>{p.setup.title}</h2>
              <ol style={{ marginTop: 16, paddingLeft: 22, display: "grid", gap: 12 }}>
                {p.setup.steps.map((s, i) => (
                  <li key={i} className="lede" style={{ fontSize: 15 }}>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="faq" style={{ marginTop: 40 }}>
            {p.faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="cta-band" style={{ marginTop: 40 }}>
            <h2>Questions about the product?</h2>
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
