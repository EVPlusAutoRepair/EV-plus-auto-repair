import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Door Handle Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla door handle repair in Sun Valley, LA. Handle won't present, press, or open? We diagnose and fix Tesla door handles. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why won't my Tesla door handle present or open?",
    a: "It depends on the handle design. A flush handle you press can stick or fail to release, while a handle that presents itself can stop extending. The mechanism, the wiring, or the latch can each be at fault—we diagnose first, then fix the right part.",
  },
  {
    q: "Can I still get into my Tesla if a door handle fails?",
    a: "Usually, yes—try another door, or your phone key or key card. If no door will open, call us and we'll talk through the next step before you force anything.",
  },
  {
    q: "Is it the handle, or something else?",
    a: "It can be either. The handle mechanism is the most common culprit, but wiring, the latch, or a control fault can cause the same symptom. That's why we test the handle, the latch, and the signal to it before replacing parts.",
  },
  {
    q: "How long does a door handle repair take?",
    a: "It depends on the fault and part availability. Diagnosis is quick; if a handle assembly needs ordering, we'll give you a realistic timeframe and price before we start. Ask for pricing for your specific year and model.",
  },
  {
    q: "Do all four handles need replacing at once?",
    a: "No—we replace only the handle that's failing, and test the others while we're there. If another one is starting to go, we'll tell you so you can decide.",
  },
];

export default function DoorHandleRepair() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Door Handle Repair" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Door Handle Repair</h1>
          <p className="lede">Handle won&rsquo;t present, won&rsquo;t press in, or won&rsquo;t open the door at all? We diagnose the handle, the latch, and the wiring—then fix the part that&rsquo;s actually failing.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;The handle just stopped working.&rdquo;</h2>
          <p className="lede">A door handle that won&rsquo;t open is more than an annoyance—it&rsquo;s how you get into your car. Sometimes the handle sticks or jams, sometimes it moves but the door doesn&rsquo;t release, and sometimes it simply stops responding. The fix depends on which part failed, so we start with a diagnosis, not a parts order.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Diagnose first, replace what failed.</h2>
            <p className="lede">We test the handle mechanism, the latch, and the signal reaching the handle, then replace only the faulty part and verify the door opens, closes, and locks properly from inside and out. If your car needs to stay with us, a rental is available as an option, based on availability.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Not all Tesla handles work the same way.</h2>
            <p className="lede">Across the Tesla lineup there are different handle designs—flush handles you press and handles that present themselves—and each fails in its own way. We diagnose by your car&rsquo;s actual setup rather than guessing from the model name, and we fit the correct handle assembly for your car.</p>
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
            <h2>Door handle not working? Book a diagnosis and we&rsquo;ll find the fault.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book door handle repair</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
