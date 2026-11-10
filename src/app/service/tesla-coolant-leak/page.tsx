import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Coolant Leak Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla coolant leak or low coolant warning in Sun Valley, LA? We trace cooling system leaks and fix them right. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "How do I know my Tesla has a coolant leak?",
    a: "The usual signs are a low coolant warning on the screen, visible coolant under the car, a sweet smell, or the car running hotter than normal. Any of those is worth a check—coolant loss doesn't fix itself.",
  },
  {
    q: "Can I top off the coolant and keep driving?",
    a: "Topping off might buy a little time, but a leak is still a leak—and losing coolant can overheat the battery and drive unit, which is far more expensive than the leak itself. Find the leak first.",
  },
  {
    q: "Where do Tesla coolant leaks usually come from?",
    a: "Coolant runs through hoses, connections, and cooling components throughout the car, and a leak can come from any of them. That's why we pressure-test and trace the system instead of guessing at a part.",
  },
  {
    q: "Is a coolant leak urgent?",
    a: "Yes—treat it as urgent. The cooling system protects the battery and drive unit, and running low on coolant puts both at risk. If you see a low coolant warning, book a diagnostic promptly.",
  },
];

export default function TeslaCoolantLeak() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Coolant Leak" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Coolant Leak Repair</h1>
          <p className="lede">Low coolant warning, fluid under the car, or a cooling system that isn&rsquo;t keeping up. Coolant protects your battery and drive unit—so a leak is worth finding fast, not topping off and hoping.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla says low coolant—and I don&rsquo;t know where it went.&rdquo;</h2>
          <p className="lede">Coolant doesn&rsquo;t just disappear. If the level is dropping, it&rsquo;s leaking somewhere—and the cooling system is what keeps the battery and drive unit at safe temperatures. A small leak left alone can turn into overheating and a much bigger repair.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Trace the leak. Then fix it.</h2>
            <p className="lede">We inspect the cooling system, pressure-test it, and trace the leak to its source—whether that&rsquo;s a hose, a connection, or a cooling component—before quoting the repair. Then we fix the leak, refill and bleed the system, and verify the level holds before the car leaves. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Don&rsquo;t just top it off.</h2>
            <p className="lede">On a gas car, a coolant leak risks the engine. On a Tesla, it risks the battery and drive unit—the most expensive parts of the car. Topping off without finding the leak just delays the problem while the risk stays. We find the source so the fix actually holds.</p>
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
              <a href="/service/drive-unit-oil-service" style={{ color: "var(--acc)" }}>Drive Unit Oil Service</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Low coolant warning or fluid under your Tesla? Book a diagnostic.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=diagnostics">Book coolant leak diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
