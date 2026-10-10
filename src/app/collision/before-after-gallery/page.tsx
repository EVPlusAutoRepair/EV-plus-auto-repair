import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Before & After in Los Angeles | EV+ Auto Repair",
  description:
    "Before & after Tesla collision repairs at EV+ Auto Repair, Sun Valley, LA. Real repairs, factory results. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Are these real repairs from your shop?",
    a: "That's the plan — this gallery will show only real Teslas repaired at EV+ Auto Repair in Sun Valley. No stock photos, no exceptions. While we build it, see our latest work on Instagram @evplusautorepair.",
  },
  {
    q: "My damage looks bad. Can you still fix it?",
    a: "Probably. Send us photos through our free photo estimate and we'll give you an honest answer—including when a car is genuinely beyond repair.",
  },
  {
    q: "What standard do you repair to?",
    a: "Factory fitment, factory paint match, full calibration—it's what we do on every car.",
  },
];

const placeholders = [
  "Model Y—front-end collision",
  "Model 3—rear quarter panel",
  "Model S—bumper & paint match",
  "Model X—side panel repair",
  "Model 3—paint refinishing",
  "Model Y—full collision repair",
];

export default function BeforeAfterGallery() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Center", href: "/collision" }, { label: "Before & After Gallery" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>Before &amp; After Gallery</h1>
          <p className="lede">Anyone can promise a flawless repair. We&rsquo;d rather show you. Real Teslas that came in wrecked and left looking factory-fresh—bodywork, paint matching, panel fitment, the whole standard.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {placeholders.map((label) => (
              <div className="svc" key={label}>
                <h3>{label}</h3>
                <p>Real repair photos coming soon—see our latest work on Instagram <a href="https://www.instagram.com/evplusautorepair/" target="_blank" rel="noopener noreferrer">@evplusautorepair</a>.</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 72 }}>
            <div className="kicker">Why we show our work</div>
            <h2>A body shop&rsquo;s gallery is its resume.</h2>
            <p className="lede">Ours shows what Tesla collision repair looks like when it&rsquo;s done by people who specialize in Teslas: factory panel gaps, invisible paint blends, calibrated systems. If your car looks like one of the &ldquo;before&rdquo; photos, we already know exactly how to fix it.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every repair shown here is backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>—and every customer got photo updates throughout, just like you will.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Center</a>
              {" · "}
              <a href="/collision/collision-repair" style={{ color: "var(--acc)" }}>Collision Repair</a>
              {" · "}
              <a href="/collision/paint-refinishing" style={{ color: "var(--acc)" }}>Paint &amp; Refinishing</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>See your car&rsquo;s future. Send photos for a free estimate.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=accident">Get a photo estimate</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
