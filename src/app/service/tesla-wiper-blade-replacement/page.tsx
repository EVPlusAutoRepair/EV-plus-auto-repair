import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Wiper Blade Replacement in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla wiper blade replacement in Sun Valley, LA. Streaking, skipping, or chattering blades? Fresh blades fitted fast. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "How do I know my Tesla's wiper blades need replacing?",
    a: "Streaks, skipping, chattering, or bands of water the wipers leave behind are the signs. If the rubber looks cracked, torn, or hardened, the blades are done—even if they still move.",
  },
  {
    q: "How long does wiper blade replacement take?",
    a: "Minutes. It's one of the quickest jobs we do, and it's easy to fold into any other service visit or inspection.",
  },
  {
    q: "Do you replace just the blades, or the whole wiper arm?",
    a: "Just the blades, in almost every case. If a wiper arm itself is bent or damaged, we'll show you and talk through that separately before doing anything.",
  },
  {
    q: "Do I need the right blades for my Tesla model?",
    a: "Yes—blade length and fit vary by model, so we fit the correct blades for your car rather than a one-size guess.",
  },
  {
    q: "Can you check my washer spray while you're at it?",
    a: "Yes—we check the washer spray and top up washer fluid as part of the job, so the whole system works together.",
  },
];

export default function WiperBladeReplacement() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Wiper Blades" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Wiper Blade Replacement</h1>
          <p className="lede">Streaking, skipping, chattering wipers in the rain. Fresh blades are a small job with a big payoff—clear vision every time it rains.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My wipers smear more than they clear.&rdquo;</h2>
          <p className="lede">Wiper blades are rubber, and LA sun and dust wear rubber out. Once the edge is cracked, hardened, or torn, the blade skips and streaks instead of wiping clean—and it only gets worse in the first real rain. Worn blades are a maintenance item, not a big repair: they just need replacing.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we do it</div>
            <h2>Right blades, fitted and tested.</h2>
            <p className="lede">We fit the correct blades for your Tesla model, install them properly, and test them with the washers before the car leaves—so you know they wipe clean, not just look new. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Fit matters more than brand.</h2>
            <p className="lede">Blade length and attachment vary by model, and a wrong-size blade leaves unwiped bands right in your line of sight. We match the blades to your car and check the full sweep, not just the middle.</p>
            <p className="lede" style={{ marginTop: 16 }}>Backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
          </div>

          <div className="faq">
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <div className="kicker">Related</div>
            <p className="lede">
              <a href="/service" style={{ color: "var(--acc)" }}>Tesla Service</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/service/tire-rotation" style={{ color: "var(--acc)" }}>Tire Rotation</a>
              {" · "}
              <a href="/service/cabin-filters-radiator-cleaning" style={{ color: "var(--acc)" }}>Cabin Filters &amp; Radiator Cleaning</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Wipers streaking or chattering? Fresh blades are quick—book them with your next visit.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=maintenance">Book wiper blade replacement</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
