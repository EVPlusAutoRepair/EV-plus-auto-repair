import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Charge Port Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla charge port and charge port door repair in Sun Valley, LA. Door won't open or close? Charging issues at the port? Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "My Tesla's charge port door won't open. What's wrong?",
    a: "Usually the door actuator, the latch, or the release mechanism—sometimes ice, dirt, or a bent door is the culprit. We inspect the door and the port itself before quoting anything, so you're not paying for parts you don't need.",
  },
  {
    q: "My Tesla won't charge, or charging keeps stopping. Is it the charge port?",
    a: "It could be. A damaged or worn charge port, bent pins, or a faulty port latch can interrupt charging. But the cable, the charger, or the car itself can cause the same symptoms—so we test the port first instead of guessing.",
  },
  {
    q: "The charge port door won't close or it sticks out. Can I still drive?",
    a: "In most cases yes, but don't force it—forcing a stuck door can bend it or damage the actuator and turn a small fix into a bigger one. Bring it in and we'll check it before it gets worse.",
  },
  {
    q: "Do you replace the whole charge port, or can it be repaired?",
    a: "It depends on what's failed. Some port problems are a door, actuator, or latch fix; others need the port assembly replaced. We diagnose first and show you what's actually wrong before we quote.",
  },
];

export default function TeslaChargePort() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Charge Port" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Charge Port Repair</h1>
          <p className="lede">A charge port door that won&rsquo;t open, a port that won&rsquo;t latch, or charging that keeps cutting out. Small parts, big headache—we sort out whether it&rsquo;s the port, the door, or something else entirely.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;The charge port door won&rsquo;t open—and I need to charge.&rdquo;</h2>
          <p className="lede">The charge port is the one part of your Tesla you touch every single day, so when the door sticks, the latch fails, or the car won&rsquo;t start charging, it stops your whole routine. And the symptoms overlap: a bad port, a bad cable, and a bad charger can all look the same from the driver&rsquo;s seat.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Diagnose first. Then fix what&rsquo;s actually broken.</h2>
            <p className="lede">We inspect the charge port door, actuator, latch, and the port itself, and test charging to confirm the fault before we quote. If it&rsquo;s a door or latch fix, we do that. If the port assembly needs replacing, we&rsquo;ll tell you exactly why—and what it costs—before any work starts. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Don&rsquo;t force a stuck charge port door.</h2>
            <p className="lede">It&rsquo;s tempting to pry a stuck door open, but that&rsquo;s how a small actuator fix becomes a bent door and a bigger bill. The door, latch, and port work as a set—we check all three so the fix actually lasts.</p>
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
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>12V Battery Service</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Charge port door stuck or charging acting up? Book a diagnostic.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book charge port service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
