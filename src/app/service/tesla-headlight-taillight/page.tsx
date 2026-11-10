import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Headlight Replacement in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla headlight and taillight replacement in Sun Valley, LA. Dim, dead, foggy, or crash-damaged lights? We replace them. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Can you replace just one Tesla headlight or taillight?",
    a: "Yes—we replace only the light that's failed or damaged, and check the one on the other side while we're there. If the other is dimming too, we'll tell you so you can decide.",
  },
  {
    q: "Is condensation inside a headlight or taillight normal?",
    a: "A light mist can clear on its own. But standing water, large droplets that don't clear, or a light that stops working means the seal has failed—and that light needs replacing.",
  },
  {
    q: "My headlight or taillight was damaged in an accident. Can you help?",
    a: "Yes. Collision-related light damage is handled through our collision repair side, including insurance claims—see our collision repair page for how that works.",
  },
  {
    q: "How long does a headlight or taillight replacement take?",
    a: "It depends on the light and part availability. Some are quick swaps; others need bumper or trim removal to reach. We'll give you a realistic timeframe and price before we start. Ask for pricing for your specific year and model.",
  },
  {
    q: "Will a new headlight need aiming?",
    a: "Yes—a replacement headlight needs to be checked and aimed so it lights the road properly without blinding other drivers. We verify aim as part of the job.",
  },
];

export default function HeadlightTaillight() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Headlight & Taillight" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Headlight &amp; Taillight Replacement</h1>
          <p className="lede">Dim, dead, foggy with condensation, or damaged in a bump? We replace Tesla headlights and taillights—and aim them properly so you can see and be seen.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;One of my lights is out—and the other looks foggy inside.&rdquo;</h2>
          <p className="lede">A dead headlight is a safety problem the same night it happens, and a taillight that&rsquo;s out puts you at risk from behind. Condensation is the slow version of the same story: once moisture gets past the seal, the light fogs, dims, and eventually fails. Either way, the fix is a proper replacement—not a workaround.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Replace, seal-check, and aim.</h2>
            <p className="lede">We fit the correct light assembly for your Tesla model and year, check the seal and the wiring connection, and verify the headlight aim before the car leaves. If your car needs to stay with us, a rental is available as an option, based on availability.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Collision damage</div>
            <h2>Hit something? That&rsquo;s a collision job.</h2>
            <p className="lede">If a headlight or taillight was cracked or broken in an accident, the light is usually only part of the story—there may be bumper, bracket, or alignment damage behind it. We handle that through <a href="/collision" style={{ color: "var(--acc)" }}>collision repair</a>, including working with your insurance claim, so the whole repair is done right, not just the visible part.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Collision Repair</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Headlight or taillight out, foggy, or damaged? Book it in and drive safe tonight.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book headlight / taillight service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
