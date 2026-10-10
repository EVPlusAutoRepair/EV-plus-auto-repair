import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Paint Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla paint repair & refinishing in Sun Valley, LA. Factory paint matching & blending, done right. Free estimates: call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "Can you match Tesla's paint exactly?",
    a: "Yes—we use factory paint codes and blend into surrounding panels. Multi-coat colors get extra care because they demand it.",
  },
  {
    q: "What about Pearl White or Red Multi-Coat?",
    a: "These are the hardest Tesla colors to match, and the most common ones we do. Proper blending makes them invisible—improper work makes them obvious. We do it properly.",
  },
  {
    q: "How long does paint work take?",
    a: "A bumper or panel is typically a few days including prep, paint, and cure time. We'll give you an exact timeline at estimate.",
  },
  {
    q: "Do I need a rental during paint work?",
    a: "For multi-day jobs, ask about an on-site Tesla rental—subject to availability, we'll keep you driving.",
  },
];

export default function PaintRefinishing() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Center", href: "/collision" }, { label: "Tesla Paint Repair" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>Tesla Paint &amp; Refinishing</h1>
          <p className="lede">Bad paint work is immediately visible—and on a Tesla, &ldquo;close enough&rdquo; isn&rsquo;t close enough. Factory paint codes, professional blending, invisible repairs.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My bumper was repainted somewhere else and it doesn&rsquo;t match.&rdquo;</h2>
          <p className="lede">Bad paint work is immediately visible—and on a Tesla, with colors like Pearl White and Red Multi-Coat, &ldquo;close enough&rdquo; isn&rsquo;t close enough. A mismatched panel ruins the whole car.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Prep, paint, blend—done right.</h2>
            <p className="lede">Proper refinishing: surface prep done right, factory paint codes, professional blending into adjacent panels so the repair disappears. Whether it&rsquo;s a scratched bumper, a keyed door, or full-panel refinishing after collision repair, the goal is always the same—you can&rsquo;t tell where the repair was.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Multi-coat colors shift with the light.</h2>
            <p className="lede">Tesla&rsquo;s multi-coat colors (especially red and pearl white) are notoriously hard to match—they shift with light angle, so blending technique matters as much as the paint code. We&rsquo;ve matched them across hundreds of repairs. Our before-and-after gallery shows the standard we hold.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Center</a>
              {" · "}
              <a href="/collision/collision-repair" style={{ color: "var(--acc)" }}>Collision Repair</a>
              {" · "}
              <a href="/collision/before-after-gallery" style={{ color: "var(--acc)" }}>Before &amp; After Gallery</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Scratches, mismatched panels, or post-collision refinishing—get a free estimate with photos.</h2>
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
