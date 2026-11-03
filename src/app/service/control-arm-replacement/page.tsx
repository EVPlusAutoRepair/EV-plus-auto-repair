import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Control Arm Replacement in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla control arm replacement in Sun Valley, LA — full arms, creaks, clunks & uneven tire wear fixed right. Alignment check included. Tesla-only. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "What are the signs my Tesla needs a control arm?",
    a: "Creaking or clunking over bumps, a knock when turning, vibration at speed, or tires wearing unevenly on the inside edge. Model 3 and Model Y front upper control arms are a known wear item — if your Tesla creaks over speed bumps, that's usually the first suspect.",
  },
  {
    q: "Do you replace the whole control arm or just the bushing?",
    a: "We replace the full control arm — that's the proper repair. The bushings are pressed into the arm, and a bushing-only swap doesn't last. We'll show you the worn arm on the lift so you can see exactly what failed.",
  },
  {
    q: "How much does a Tesla control arm replacement cost?",
    a: "It depends on which arm and your model — bring it in for a free inspection and we'll give you an exact estimate before any work starts.",
  },
  {
    q: "Will I need an alignment after a control arm replacement?",
    a: "Yes, and we include the alignment check. New suspension parts with bad alignment wear out fast — and wear your tires unevenly. Skipping it is how you end up buying tires early.",
  },
  {
    q: "How long does a control arm replacement take?",
    a: "Usually same-day. If the job runs longer than a day, you'll be in an on-site Tesla rental (optional, based on availability), not a shuttle queue.",
  },
];

export default function ControlArmReplacement() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Control Arm Replacement" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Control Arm Replacement</h1>
          <p className="lede">Creaking over bumps. A clunk when you turn. Tires wearing on the inside edge. Teslas are heavy and torquey — that combination wears control arms faster than most owners expect. We replace the full arm, the right way.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla creaks over every bump.&rdquo;</h2>
          <p className="lede">Control arms connect your wheels to the chassis, and their bushings take the full weight of a heavy EV on every bump. When the bushings wear out, you hear it first — a creak, a clunk, a knock on turns — and then you see it in your tires, wearing unevenly. Left alone, a worn arm wears tires and stresses the rest of the suspension.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>The full arm. Done once, done right.</h2>
            <p className="lede">We replace the full control arm — never just the bushing. The bushings are pressed into the arm, and a bushing-only swap is a shortcut that doesn&rsquo;t last. We diagnose the actual worn arm on the lift, show it to you, replace it with a quality part, and finish with an alignment check so the new arm — and your tires — last. Free inspection and exact estimate first.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>We know the failure points by model.</h2>
            <p className="lede">Model 3 and Model Y front upper control arms are a known wear item, and we see them constantly. Torque specs, ride-height calibration, and the fact that EVs wear components differently than gas cars — this is routine work for us, not a learning curve. If your job takes more than a day, you&rsquo;ll be in an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b> (optional, based on availability), not a shuttle queue.</p>
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
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/blog/why-we-replace-the-full-control-arm" style={{ color: "var(--acc)" }}>Why We Replace the Full Control Arm</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Hearing creaks or clunks, or seeing uneven tire wear? Get it checked before it costs you tires too.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=control-arm">Book free inspection</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
