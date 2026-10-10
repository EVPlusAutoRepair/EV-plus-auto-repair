import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Tire Rotation in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla tire rotation in Sun Valley, LA. EVs eat tires unevenly—rotation every 6,250 miles keeps them wearing even. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "How often should I rotate my Tesla's tires?",
    a: "Tesla recommends every 6,250 miles. Because Teslas are heavy and torque-heavy, the driven wheels wear noticeably faster—skip rotations and you'll replace tires in pairs instead of sets.",
  },
  {
    q: "Why do Teslas wear tires unevenly?",
    a: "Weight plus instant torque. The rear tires on most Teslas do the hard work, so they wear faster than the fronts. Regular rotation evens that out and gets you the full life out of a set.",
  },
  {
    q: "Do you check anything else during a rotation?",
    a: "Yes—tread depth on all four, tire pressures (including the spare-less reality check), visible suspension wear, and TPMS status. If we spot uneven wear that rotation won't fix, we'll tell you.",
  },
  {
    q: "Can you do this while I'm in for other service?",
    a: "Absolutely—tire rotation pairs perfectly with a maintenance visit or inspection. Mention it when you book and we'll fold it in.",
  },
];

export default function TireRotation() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tire Rotation" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Tire Rotation</h1>
          <p className="lede">The cheapest maintenance your Tesla needs—and the most skipped. Rotation every 6,250 miles keeps all four wearing evenly instead of burning through rears.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My rear tires are shot and the fronts look new.&rdquo;</h2>
          <p className="lede">That&rsquo;s the classic unrotated Tesla. Heavy car, instant torque, rear-biased wear—the rears do the work and the fronts coast. Without rotation you end up buying tires in pairs, twice as often. A rotation costs a fraction of a tire.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we do it</div>
            <h2>Rotation plus a real inspection.</h2>
            <p className="lede">We rotate to the correct pattern for your model and drivetrain, torque every lug to spec, set pressures to Tesla&rsquo;s spec (not the door-jamb guess), and check tread depth, TPMS, and visible suspension wear while the wheels are off. In and out—easy to pair with any other service.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Torque matters more than you think.</h2>
            <p className="lede">Tesla wheels need proper torque sequence and spec—over-torqued lugs warp rotors and make the next removal miserable. We do it by the book, every time.</p>
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
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Due for a rotation? It&rsquo;s quick—book it with your next visit.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=tire-rotation">Book tire rotation</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
