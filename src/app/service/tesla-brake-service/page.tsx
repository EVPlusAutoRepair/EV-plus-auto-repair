import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Brake Service & Pads in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla brake pads, rotors, squeal or grinding in Sun Valley, LA. EV brakes last longer—but they still need service. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why do Tesla brakes last longer than brakes on a gas car?",
    a: "Regenerative braking does most of the slowing down, so the friction brakes get used far less. Pads and rotors can last much longer—but 'longer' isn't 'forever,' and light use brings its own problems, like corrosion and sticking parts.",
  },
  {
    q: "My Tesla brakes squeal. Is that serious?",
    a: "Sometimes it's just surface rust or dust from light use, and it clears up. But persistent squeal can mean worn pads or a stuck caliper, so it's worth a look—especially if the noise is new or getting worse.",
  },
  {
    q: "My Tesla brakes are grinding. What should I do?",
    a: "Book it in soon and go easy on the brakes until then. Grinding usually means the pads are worn down to metal, and driving on it can damage the rotors and cost you more. We'll inspect the pads and rotors and show you what's worn.",
  },
  {
    q: "Do Teslas still need brake service if the pads last so long?",
    a: "Yes. Brake fluid ages, calipers can stick from lack of use, and rotors can corrode—especially on a car that barely uses its friction brakes. A brake inspection catches those problems before they become a safety issue.",
  },
];

export default function TeslaBrakeService() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Brake Service" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Brake Service</h1>
          <p className="lede">EV brakes last longer—but they still wear, squeal, grind, and corrode. Pads, rotors, calipers, and fluid: we inspect the whole system and fix what&rsquo;s actually worn.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My brakes squeal—or grind—and I barely use them.&rdquo;</h2>
          <p className="lede">That&rsquo;s the Tesla brake paradox. Regenerative braking means your friction brakes do very little work, so pads last a long time. But brakes that sit idle corrode, calipers stick, and pads can wear unevenly—so when they do speak up, it&rsquo;s usually squeal, grinding, or a pedal that doesn&rsquo;t feel right.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we do it</div>
            <h2>Inspect the whole system, not just the pads.</h2>
            <p className="lede">We check pad thickness, rotor condition, caliper movement, and brake fluid, then replace what&rsquo;s worn—pads, rotors, or both—and verify the brakes feel right before the car leaves. Brake service is already on our booking form, so you can select it directly when you book. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Light use is its own kind of wear.</h2>
            <p className="lede">On a gas car, brakes wear out from use. On a Tesla, they can fail from lack of it—corrosion on rotors that rarely get cleaned by braking, calipers that stick after long periods of light duty. A shop that only knows gas cars can miss that completely. We check for it because we see Teslas every day.</p>
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
              <a href="/service/tire-rotation" style={{ color: "var(--acc)" }}>Tire Rotation</a>
              {" · "}
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Brakes squealing or grinding? Book brake service—it&rsquo;s on the form.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=brakes">Book brake service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
