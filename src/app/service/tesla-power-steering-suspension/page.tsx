import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Power Steering & Suspension Repair LA | EV+ Auto Repair",
  description:
    "Tesla steering vibration, power steering or suspension issues in Sun Valley, LA? Struts, shocks, sway bars and more. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why does my Tesla steering wheel vibrate?",
    a: "Vibration can come from worn suspension parts, an alignment issue, a tire problem, or a steering component fault—and sometimes a combination. We inspect the steering and suspension together, because the cause is often in how they interact.",
  },
  {
    q: "What are the signs of a power steering problem on a Tesla?",
    a: "Heavy or inconsistent steering effort, strange noises when turning, a warning on the screen, or steering that feels different than it used to. Any of those is worth a diagnostic—steering is not something to guess at.",
  },
  {
    q: "What's the difference between shocks and struts?",
    a: "Both dampen bumps, but struts are also a structural part of the suspension—they hold the wheel in position. Worn struts or shocks cause bouncing, nose-diving when braking, uneven tire wear, and a loose or floaty ride.",
  },
  {
    q: "What about control arms—do you replace the bushing on its own?",
    a: "No. We replace the full control arm, never the bushing on its own. See our <a href=\"/service/control-arm-replacement\" style={{ color: \"var(--acc)\" }}>control arm replacement</a> page for the full story—and note that control arm pricing depends on your year and model, so ask for pricing for your car.",
  },
];

export default function TeslaPowerSteeringSuspension() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Power Steering & Suspension" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Power Steering &amp; Suspension Repair</h1>
          <p className="lede">Steering wheel vibration, heavy steering, clunks over bumps, or a ride that feels loose and floaty. Steering and suspension wear together—we look at the whole system, not just one part.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My steering wheel shakes—and the ride feels loose.&rdquo;</h2>
          <p className="lede">Steering and suspension are one system in practice: struts, shocks, sway bars, and steering components all share the load on every bump and turn. When one part wears, the others compensate—and the symptoms overlap, so a vibration, a clunk, or loose handling can have several possible causes.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Inspect the whole system. Fix what&rsquo;s worn.</h2>
            <p className="lede">We inspect the steering and suspension together—struts, shocks, sway bar links and bushings, steering components, and alignment—so we find the actual cause instead of replacing parts one at a time. Then we replace what&rsquo;s worn and verify the car tracks straight and rides right before it leaves. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Control arms</div>
            <h2>Control arms: full replacement only.</h2>
            <p className="lede">If the inspection points to control arms, we replace the full control arm—we never replace the bushing on its own. Control arm work is covered in detail on our <a href="/service/control-arm-replacement" style={{ color: "var(--acc)" }}>control arm replacement</a> page and our <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>suspension &amp; steering</a> page, and replacement is followed by a 4-wheel alignment so the Tesla tracks straight and tires last.</p>
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
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
              {" · "}
              <a href="/service/control-arm-replacement" style={{ color: "var(--acc)" }}>Control Arm Replacement</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/service/tire-rotation" style={{ color: "var(--acc)" }}>Tire Rotation</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Steering or suspension not feeling right? Book an inspection.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=suspension">Book steering &amp; suspension service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
