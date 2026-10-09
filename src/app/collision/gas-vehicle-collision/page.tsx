import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Auto Body Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Auto body & collision repair for gas vehicles in Sun Valley, LA. Tesla-first shop, same quality bodywork. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Do you service gas vehicles?",
    a: "No. Our service center—maintenance, diagnostics, batteries, all of it—is Tesla-only. This page covers collision and body repair for gas vehicles.",
  },
  {
    q: "Do you handle insurance claims on gas vehicles?",
    a: "Yes—same process as our Tesla collision work. We handle the estimate, the adjuster, and supplements.",
  },
  {
    q: "Why would I bring my gas car to a Tesla shop?",
    a: "Because the bodywork standard is the same regardless of what's under the hood—and our Tesla work holds us to a high bar on fitment and paint.",
  },
];

export default function GasVehicleCollision() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Center", href: "/collision" }, { label: "Auto Body Repair" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>Gas Vehicle Collision Repair</h1>
          <p className="lede">We&rsquo;re a Tesla-first shop—that&rsquo;s our identity and our expertise. But quality bodywork is quality bodywork, and we also repair collision damage on gas vehicles.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">Straight talk first</div>
          <h2>Collision and body repair—not service.</h2>
          <p className="lede">One clear boundary: <b style={{ color: "var(--txt)" }}>we do collision and body repair on gas vehicles, not service or maintenance.</b> No oil changes, no diagnostics, no mechanical work on gas cars—our service center is Tesla-only.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">What we do</div>
            <h2>Same craftsmen. Same paint booth. Same warranty.</h2>
            <p className="lede">Bumper repair and replacement, fender and panel repair, paint matching and refinishing, dent repair, and full collision repair after an accident—including insurance-claim handling, just like our Tesla work. The same craftsmen, the same paint booth, the same <b style={{ color: "var(--txt)" }}>12-month labor warranty</b>.</p>
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
              <a href="/collision/insurance-claims" style={{ color: "var(--acc)" }}>Insurance Claims</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Gas vehicle with body damage? Same quality repair, same free estimate.</h2>
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
