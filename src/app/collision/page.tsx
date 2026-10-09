import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Tesla Collision Center in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla accident repair in Los Angeles: collision repair, paint matching, ADAS calibration. We handle your insurance claim + Tesla rental on-site. (818) 281-7757.",
};

const services = [
  { t: "Collision repair", d: "Bumpers, panels, frames, glass. Tesla structural repair done right.", href: "/collision/collision-repair" },
  { t: "Paint & refinishing", d: "Factory paint matching, blending, refinishing.", href: "/collision/paint-refinishing" },
  { t: "ADAS / camera calibration", d: "Cameras, sensors, and autopilot systems recalibrated after repair.", href: "/collision/adas-calibration" },
  { t: "Insurance claims—we handle it", d: "We work directly with your insurer and adjuster, supplements included.", href: "/collision/insurance-claims" },
  { t: "Before & after gallery", d: "Real Tesla repairs, real results.", href: "/collision/before-after-gallery" },
  { t: "Gas vehicle collision repair", d: "We also do body/collision repair on gas vehicles. (Service & maintenance: Tesla only.)", href: "/collision/gas-vehicle-collision" },
];

const steps = [
  { n: "01", t: "Call or send photos", d: "Call/text (818) 281-7757—or send a photo estimate online." },
  { n: "02", t: "Free estimate", d: "Free estimate at the shop." },
  { n: "03", t: "We handle insurance", d: "We handle the insurance claim and approvals." },
  { n: "04", t: "Drive a Tesla rental", d: "Ask about an on-site Tesla rental while we repair (subject to availability)." },
  { n: "05", t: "Pickup", d: "Photo updates throughout; pickup backed by our 12-month labor warranty." },
];

const faqs = [
  { q: "Will my Tesla look the same after repair?", a: "Yes—factory paint matching and proper panel fitment. That's the whole job." },
  { q: "Do you work with my insurance?", a: "Yes—we handle the claim, the adjuster, and supplements directly." },
  { q: "How long will the repair take?", a: "Depends on parts and damage; we give you a real timeline at estimate and photo updates throughout." },
  { q: "Do you repair gas vehicles?", a: "For collision/body repair, yes. For service and maintenance, we're Tesla-only." },
];

export default function CollisionCenter() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>Tesla Collision Center—Los Angeles</h1>
          <p className="lede">An accident is stressful enough. Our collision center brings your Tesla back to factory condition—bodywork, paint, calibration—while we handle the insurance claim and keep you driving with an on-site Tesla rental (subject to availability). We also perform body repair on other EVs and gas vehicles—service and maintenance stays Tesla-only.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s) => (
              <a className="svc" href={s.href} key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="more">Learn more →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 72 }}>
            <div className="kicker">The EV+ accident process</div>
            <h2>From crash to keys in 5 steps.</h2>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="faq">
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="cta-band">
            <h2>Had an accident? Send photos, get an estimate—no appointment needed to start.</h2>
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
