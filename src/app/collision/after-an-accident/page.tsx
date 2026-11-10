import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "After an Accident: Tesla Collision Help | EV+ Auto Repair",
  description:
    "Hit in your Tesla? EV+ Auto Repair in Sun Valley, LA explains what to do after an accident — estimates, insurance, frame, airbags, rentals. (818) 281-7757.",
};

const faqs = [
  {
    q: "My airbag deployed. Is my Tesla totaled?",
    a: "Not automatically. A deployed airbag does not by itself mean a total loss — your insurer decides that, not the shop. Deployed airbags and the related components have to be replaced and the car inspected before it is safe to drive again. Do not drive it until it has been checked.",
  },
  {
    q: "Who decides if my Tesla is a total loss?",
    a: "Your insurance company does. The insurer compares the cost of repair to the car's value under your policy and makes the total-loss call. We give the insurer a thorough estimate and document the damage; we do not make the totaled decision for them. If they do total it, we will walk you through what happens next with the car and the claim.",
  },
  {
    q: "What is a supplement, and why does my estimate change?",
    a: "A supplement is an addition to the original estimate when hidden damage is found once panels come off — very common on Teslas, where damage hides behind a bumper cover or under a panel. We document what we find, send it to your insurer for approval, and keep you updated. The repair does not move forward on hidden damage until the insurer approves it.",
  },
  {
    q: "I was rear-ended / hit and run — what do I need to do?",
    a: "First, make sure everyone is safe and call the police if anyone is hurt or the car is not drivable. Take photos of all the damage, the other car and plates if there is one, and the scene. Exchange information if the other driver is there. Then send us photos for an estimate — and if it was a hit and run, file a police report and tell your insurer, since that is what your claim will rest on.",
  },
  {
    q: "Can hail damage on my Tesla be repaired?",
    a: "Yes, in most cases. Hail usually leaves small dents across the hood, roof, trunk, and other flat panels, sometimes with paint damage. We assess each dent, repair what can be repaired, and refinish panels where the paint is broken. Send photos and we will tell you what the repair looks like for your car.",
  },
  {
    q: "Do you repair windshields or roof glass?",
    a: "No. We do not do glass work of any kind — no windshield replacement, no windshield crack or chip repair, and no roof glass. If your damage involves glass, see a glass specialist for that part of the repair, and we can handle the body and paint work around it.",
  },
  {
    q: "My bumper, mirror, headlight, or taillight is damaged — is that a big repair?",
    a: "It depends on what is behind the visible damage. A bumper cover, side mirror, headlight, or taillight can often be replaced on its own, but on a Tesla the parts behind them — sensors, cameras, brackets, and wiring — can be damaged too, and cameras and sensors may need calibration after the repair. That is why we inspect before we quote a final scope.",
  },
  {
    q: "Can I get a rental car while mine is repaired?",
    a: "Yes, optionally — on-site Tesla rentals through EV+ Auto Rentals LLC, a separate rental company at the same address, are available based on availability. Drop off your car, pick up the rental, same trip, when one is available. Ask for pricing for your specific rental when you book.",
  },
];

export default function AfterAnAccident() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Repair", href: "/collision" }, { label: "After an Accident" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Repair</div>
          <h1>After an Accident</h1>
          <p className="lede">Your Tesla was hit. Here is what to do next, what the repair actually involves, and how we handle the insurance side — so you are not figuring it out alone.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">First steps</div>
          <h2>&ldquo;Someone hit my Tesla. Now what?&rdquo;</h2>
          <p className="lede">First, make sure everyone is safe. Call the police if anyone is hurt or the car is not drivable. Then take photos of everything — every damaged panel, the other car and its plates if there is one, and the scene around you. Exchange information with the other driver if they are there. If it was a hit and run and the other driver left, file a police report and tell your insurer right away.</p>
          <p className="lede" style={{ marginTop: 16 }}>If your Tesla is not safe to drive — airbags deployed, a wheel or suspension problem, fluid leaking, a headlight or taillight out, or the car warning you not to drive — do not drive it. Call us at <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a> and we will talk through getting it to the shop.</p>
          <p className="lede" style={{ marginTop: 16 }}>Then send us photos for a free photo estimate. That is the fastest way to find out what the repair looks like and what happens next.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">What we fix</div>
            <h2>From a fender bender to frame damage.</h2>
            <p className="lede">A fender bender, a side swipe, being rear-ended — the visible damage is rarely the whole story on a Tesla. A dented door, hood, or trunk, a damaged quarter panel or rocker panel, a cracked bumper cover, a broken side mirror, a damaged headlight or taillight, a paint chip or paint damage from the impact — we repair and refinish all of it to factory specification, with panel fitment and paint match checked before the car goes back to you.</p>
            <p className="lede" style={{ marginTop: 16 }}>Some damage goes deeper. Frame damage — damage to the structural frame or body structure underneath the panels — needs to be measured and repaired to factory specification, not guessed at. A deployed airbag means the airbag and related components have to be replaced and the car inspected before it is driven again. Hail damage usually means many small dents across the hood, roof, and trunk, sometimes with paint damage that needs refinishing. Whatever the cause, we disassemble, assess every panel, and tell you the real scope before we start.</p>
            <p className="lede" style={{ marginTop: 16 }}>One thing we do not do: glass work. No windshield replacement, no windshield crack or chip repair, and no roof glass. If your accident damaged glass, see a glass specialist for that part — we handle the body and paint work around it.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How the repair works</div>
            <h2>Photo estimate. Insurance handled. Photo updates throughout.</h2>
            <p className="lede">It starts with a photo estimate: send us photos of the damage and we give you a real read on the repair. Then we handle your insurance claim — the estimate, the adjuster, and the paperwork — so that part is not yours to chase. See our <a href="/collision/insurance-claims" style={{ color: "var(--acc)" }}>insurance claims</a> page for how that works.</p>
            <p className="lede" style={{ marginTop: 16 }}>Once the car is in the shop, we disassemble and inspect. Hidden damage is common — which is why supplements exist. A supplement is an addition to the original estimate when damage is found behind a panel or bumper cover; we document it, send it to your insurer for approval, and keep you updated before that work moves forward. You get <b style={{ color: "var(--txt)" }}>photo updates throughout the repair</b>, so you always know where your car stands.</p>
            <p className="lede" style={{ marginTop: 16 }}>While your Tesla is with us, an on-site Tesla rental from EV+ Auto Rentals LLC is available optionally, based on availability — drop off your car, pick up the rental, same trip, when one is available. Ask for pricing for your specific rental when you book.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Total loss</div>
            <h2>What &ldquo;totaled&rdquo; actually means.</h2>
            <p className="lede">Being told your Tesla might be a total loss is stressful, and the word gets used loosely. A total loss is your insurer&rsquo;s decision, not the shop&rsquo;s: the insurer compares the cost of repair to the car&rsquo;s value under your policy and decides. A deployed airbag, frame damage, or a big repair bill does not automatically mean the car is totaled — and a car that looks repairable to you can still be totaled if the repair cost is high enough under the policy.</p>
            <p className="lede" style={{ marginTop: 16 }}>Our part is to give the insurer a thorough, documented estimate so the decision is made on real numbers. If the insurer does total your Tesla, we will walk you through what happens next with the car and the claim. Every repair we do complete is backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Repair</a>
              {" · "}
              <a href="/collision/insurance-claims" style={{ color: "var(--acc)" }}>Insurance Claims</a>
              {" · "}
              <a href="/collision/paint-refinishing" style={{ color: "var(--acc)" }}>Paint &amp; Refinishing</a>
              {" · "}
              <a href="/collision/adas-calibration" style={{ color: "var(--acc)" }}>ADAS Calibration</a>
              {" · "}
              <a href="/collision/before-after-gallery" style={{ color: "var(--acc)" }}>Before &amp; After Gallery</a>
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
