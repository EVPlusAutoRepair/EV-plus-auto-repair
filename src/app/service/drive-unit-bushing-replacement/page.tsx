import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Drive Unit Bushing Replacement in Los Angeles | EV+ Auto Repair",
  description:
    "Kick or vibration under acceleration? A torn drive unit bushing is a common cause. EV+ replaces it in Sun Valley, LA. Free inspections: call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "What does a torn drive unit bushing feel like?",
    a: "A kick, clunk, or shudder when you accelerate—sometimes a vibration at certain speeds. It's easy to dismiss as 'just how the car drives,' but a healthy Tesla drives smooth.",
  },
  {
    q: "Can I keep driving with a torn bushing?",
    a: "You can, but it won't get better on its own—and the extra movement stresses surrounding components. Get it checked before a bushing becomes a bigger repair.",
  },
  {
    q: "How do you confirm it's the bushing?",
    a: "We get the car on a lift and inspect the drive unit mounts directly. Our free inspection covers this—no guessing, no unnecessary parts.",
  },
  {
    q: "How long does the replacement take?",
    a: "Usually same-day. If the repair takes longer, you'll be in an on-site Tesla rental (subject to availability).",
  },
];

export default function DriveUnitBushing() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Drive Unit Bushing Replacement" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Drive Unit Bushing Replacement</h1>
          <p className="lede">Feel a kick or vibration when you hit the accelerator? A torn drive unit bushing is one of the most common causes—and it&rsquo;s a straightforward fix when you know what to look for.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla kicks when I accelerate.&rdquo;</h2>
          <p className="lede">The drive unit is held in place by bushings that absorb torque every time you accelerate. Over time they tear—and once they do, the drive unit shifts under load. That&rsquo;s the kick, clunk, or shudder you feel, and it only gets worse.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Find the torn bushing. Replace it.</h2>
            <p className="lede">We put the car on a lift and inspect the drive unit mounts directly—no guessing from the driver&rsquo;s seat. If the bushing is torn, we replace it and verify the kick is gone on a road test before you pick up.</p>
            <p className="lede" style={{ marginTop: 16 }}>This is exactly the kind of issue our free inspection is for. If your Tesla kicks or vibrates under acceleration, don&rsquo;t normalize it.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>EV torque is brutal on mounts.</h2>
            <p className="lede">Instant electric torque hits the mounts harder than a gas engine ever could, which is why this wear shows up on Teslas the way it does. We&rsquo;ve done enough of these to diagnose it fast—and you&rsquo;ll get photo updates throughout, just like every job here.</p>
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
              <a href="/service" style={{ color: "var(--acc)" }}>Tesla Service Center</a>
              {" · "}
              <a href="/service/drive-unit-oil-service" style={{ color: "var(--acc)" }}>Drive-Unit Oil Service</a>
              {" · "}
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Kick or vibration under acceleration? Let&rsquo;s look at the bushings.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=suspension">Book free inspection</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
