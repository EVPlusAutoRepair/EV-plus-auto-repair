import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Body Shop in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla collision repair in Sun Valley, LA—factory fitment, OEM parts, paint matching. We handle your insurance + on-site Tesla rental. (818) 281-7757.",
};

const faqs = [
  {
    q: "Will my Tesla look and drive the same after repair?",
    a: "That's the job. Factory panel fitment, factory paint match, full calibration—when we're done, it's right.",
  },
  {
    q: "Do you use OEM / original parts?",
    a: "Yes. We use original equipment parts—your Tesla deserves nothing less. OE parts protect your car's value and keep you in the best position if a warranty question ever comes up.",
  },
  {
    q: "How long will the repair take?",
    a: "It depends on the damage and parts availability. We give you a real timeline at the free estimate and photo updates throughout—no “we'll call you” silence.",
  },
  {
    q: "Can I get a rental car while mine is repaired?",
    a: "Yes—on-site Tesla rentals through our sister company, right at the shop. Drop off your car, pick up the rental, same trip.",
  },
  {
    q: "Do I have to use the shop my insurance recommends?",
    a: "No. By law, the shop choice is yours. We work with all major insurers and handle the claim directly.",
  },
];

export default function CollisionRepair() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Center", href: "/collision" }, { label: "Tesla Body Shop" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>Tesla Collision Repair</h1>
          <p className="lede">Someone hit your Tesla. Now what? Teslas aren&rsquo;t regular cars—aluminum panels, structural battery packs, cameras and sensors everywhere. The wrong shop guesses. We don&rsquo;t.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;Someone hit my Tesla. Now what?&rdquo;</h2>
          <p className="lede">An accident is stressful enough without worrying whether the shop will put your Tesla back together properly. Teslas aren&rsquo;t regular cars—aluminum panels, structural battery packs, cameras and sensors everywhere, paint that has to match exactly. The wrong shop guesses. We don&rsquo;t.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Factory specification. Photo updates. Rental available.</h2>
            <p className="lede">From minor bumper damage to major structural repair: we disassemble, assess every panel, order the right parts, and repair to factory specification—panel gaps, fitment, paint, calibration. You get <b style={{ color: "var(--txt)" }}>photo updates throughout the repair</b>, so you always know where your car stands. And while it&rsquo;s with us, you&rsquo;re driving an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b> from our sister company—no Hertz run, and you won&rsquo;t be stranded.</p>
            <p className="lede" style={{ marginTop: 16 }}>We also <b style={{ color: "var(--txt)" }}>handle your entire insurance claim</b>—the estimate, the adjuster, the supplements—so the paperwork nightmare isn&rsquo;t yours.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Tesla collision repair demands Tesla knowledge.</h2>
            <p className="lede">How the structures are built, which panels are aluminum, how the high-voltage system stays safe during repair, and which calibrations the car needs afterward. We repair Teslas every week—Model 3, Y, S, and X—and our before-and-after work is public.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every repair is backed by our <b style={{ color: "var(--txt)" }}>12-month labor warranty</b>.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Center</a>
              {" · "}
              <a href="/collision/paint-refinishing" style={{ color: "var(--acc)" }}>Paint &amp; Refinishing</a>
              {" · "}
              <a href="/collision/insurance-claims" style={{ color: "var(--acc)" }}>Insurance Claims</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Had an accident? Send photos for a fast estimate—or just call us and we&rsquo;ll take it from there.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=accident">Get a photo estimate</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
