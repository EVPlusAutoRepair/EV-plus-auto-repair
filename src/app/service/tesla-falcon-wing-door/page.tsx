import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Model X Falcon Wing Door Repair in LA | EV+ Auto Repair",
  description:
    "Model X falcon wing door won't open or close? EV+ Auto Repair in Sun Valley, LA diagnoses sensor and alignment issues. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "My Model X falcon wing door won't open or close. What's wrong?",
    a: "Falcon wing doors rely on sensors, alignment, hinges, and latches working together—if any one of them is off, the door can stop, hesitate, or refuse to move. We run a diagnostic first to find which part of the system is at fault before quoting a fix.",
  },
  {
    q: "The door stops halfway or moves slowly. Is that a sensor issue?",
    a: "It can be. The doors use sensors to judge clearance and position, and a faulty or misaligned sensor can make the door stop or move cautiously. But hinges, latches, and alignment can cause the same behavior, so we diagnose rather than guess.",
  },
  {
    q: "Can you fix a falcon wing door that is out of alignment?",
    a: "In many cases, yes—alignment and adjustment are a common part of falcon wing door work. If a hinge, latch, or sensor has failed, we'll show you what's wrong and quote the repair before any work starts.",
  },
  {
    q: "Is it safe to drive with a falcon wing door issue?",
    a: "If the door won't latch fully shut, don't drive it—bring it in. If it opens and closes but behaves oddly, get it checked soon: a small alignment or sensor issue left alone can wear other parts of the door system.",
  },
];

export default function TeslaFalconWingDoor() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Model X Falcon Wing Door" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service · Model X Only</div>
          <h1>Tesla Model X Falcon Wing Door Repair</h1>
          <p className="lede">Falcon wing doors are Model X only—and they&rsquo;re the most complex doors on any Tesla. When one won&rsquo;t open, won&rsquo;t close, or stops halfway, we diagnose the sensors, alignment, and hardware first, then fix what&rsquo;s actually wrong.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My falcon wing door won&rsquo;t open—or it stops halfway.&rdquo;</h2>
          <p className="lede">A falcon wing door is a whole system: sensors, hinges, latches, and alignment all have to agree before it moves. When one piece is off, the door hesitates, stops, or refuses to move at all—and the cause could be any part of that system. Guessing at it wastes time and money.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Diagnostic first. Always.</h2>
            <p className="lede">Falcon wing doors are not a guess-and-replace job. We diagnose the door system first—checking sensors, alignment, hinges, and latches—so we know which part has failed before we quote. Then we repair or adjust what&rsquo;s needed and verify the door opens, closes, and latches smoothly before it leaves. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Model X only—and it shows.</h2>
            <p className="lede">No other Tesla has falcon wing doors, and no other door on the road works quite like them. That complexity is exactly why diagnosis comes first: a sensor fault, an alignment issue, and a worn hinge can all look identical from the driver&rsquo;s seat, but the fixes are very different.</p>
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
            </p>
          </div>

          <div className="cta-band">
            <h2>Model X falcon wing door acting up? Book a diagnostic first.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book falcon wing door service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
