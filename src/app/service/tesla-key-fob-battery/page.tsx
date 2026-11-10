import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Key Fob Battery Service in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla key fob battery replacement in Sun Valley, LA. Fob not detected or range fading? Quick battery swap and key checks. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "How do I know my Tesla key fob battery is dying?",
    a: "The range shrinks—you have to be closer for the car to respond—or detection gets intermittent: sometimes it works, sometimes the car says no key is detected.",
  },
  {
    q: "What should I do if my Tesla says the key is not detected?",
    a: "Try your backup first—your phone key or key card can usually unlock and start the car. Then bring the fob in: a dead coin-cell battery is the most common cause, and it's a quick fix.",
  },
  {
    q: "My phone key stopped working too. Is it the fob?",
    a: "Not necessarily. Phone key trouble is usually the phone side—Bluetooth, the app, or the phone's settings. We check the car, the fob, and your other keys to find which one is actually at fault.",
  },
  {
    q: "How long does a key fob battery replacement take?",
    a: "Minutes. We swap the coin-cell battery, test lock, unlock, and start, and confirm the car detects the fob reliably before you leave.",
  },
  {
    q: "What if my key fob is lost or damaged, not just low on battery?",
    a: "Bring the car and any key you still have. We'll check what's needed for a replacement fob and talk through the options and pricing before ordering anything.",
  },
];

export default function KeyFobBattery() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Key Fob Battery" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Key Fob Battery</h1>
          <p className="lede">Car not detecting your key fob, or the range fading fast? Usually it&rsquo;s just the little coin-cell battery inside the fob—quick to replace, quick to test.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla doesn&rsquo;t see my key fob anymore.&rdquo;</h2>
          <p className="lede">A key fob battery fades slowly, then all at once: first you have to stand closer, then the car misses the fob entirely and tells you no key is detected. It feels like a car problem. Almost every time, it&rsquo;s the battery in the fob.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>New battery, tested properly.</h2>
            <p className="lede">We replace the fob&rsquo;s coin-cell battery, then test the fob the way you actually use it—lock, unlock, and start—at a normal distance, so you leave knowing it works. If a fresh battery doesn&rsquo;t fix it, we check the fob itself and the car&rsquo;s key detection before suggesting anything else. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Your Tesla has more than one key.</h2>
            <p className="lede">Most Teslas can use a key fob, a phone key, and a key card—and when one stops working, the others usually still do. That&rsquo;s your backup to get moving, and it&rsquo;s also how we narrow down the fault: if the phone key works and the fob doesn&rsquo;t, the problem is the fob, not the car.</p>
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
            <h2>Key fob not detected? It&rsquo;s usually a quick battery swap—book it in.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book key fob battery service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
