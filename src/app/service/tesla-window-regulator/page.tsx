import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Window Regulator Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla window regulator repair in Sun Valley, LA. Window stuck, slow, or noisy? We diagnose regulator and motor faults. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why won't my Tesla window go up or down?",
    a: "Usually the regulator mechanism or the motor that drives it has failed. It can also be a switch or wiring fault—we test each one so we replace the part that's actually broken.",
  },
  {
    q: "What's the difference between a window regulator and a window motor?",
    a: "The regulator is the mechanism that guides and moves the window up and down; the motor is what powers it. Either one can fail, and they fail differently—so we diagnose before ordering parts.",
  },
  {
    q: "Why is my window slow, noisy, or jerky?",
    a: "That's usually a regulator on its way out—worn guides or a tired mechanism make the window struggle. Get it checked before it stops altogether, especially if the window is stuck down.",
  },
  {
    q: "Can I still drive with a stuck window?",
    a: "If it's stuck up, usually yes for a short trip. If it's stuck down, bring it in promptly—rain, dust, and security are all working against you, and we can often secure it the same day.",
  },
  {
    q: "How long does a window regulator repair take?",
    a: "It depends on the fault and part availability. Diagnosis is quick; if a regulator or motor needs ordering, we'll give you a realistic timeframe and price before we start. Ask for pricing for your specific year and model.",
  },
];

export default function WindowRegulator() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Window Regulator" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Window Regulator Repair</h1>
          <p className="lede">Window won&rsquo;t go up or down, moving slow, or grinding on the way? We diagnose whether it&rsquo;s the regulator, the motor, or the switch—then fix the right one.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My window is stuck—and it&rsquo;s stuck down.&rdquo;</h2>
          <p className="lede">A window that won&rsquo;t move is urgent when it&rsquo;s down and annoying when it&rsquo;s up. Slow, noisy, or jerky movement is the early warning: the mechanism is wearing out, and it usually stops altogether soon after. Bring it in at the first sign and the fix is simpler.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Regulator or motor? We test before we replace.</h2>
            <p className="lede">We test the switch, the motor, and the regulator mechanism to find the real fault, then replace only the failed part and check the window&rsquo;s full travel—up, down, and auto-up—before the car leaves. If your car needs to stay with us, a rental is available as an option, based on availability.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Windows that do more than go up and down.</h2>
            <p className="lede">Tesla windows work with the doors, the seals, and the car&rsquo;s electronics, so a window fault can show up as a door that won&rsquo;t seal right or a warning on the screen. We check the whole system, not just the window itself, so the repair actually sticks.</p>
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
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Window stuck, slow, or noisy? Book a diagnosis before it stops altogether.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book window regulator repair</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
