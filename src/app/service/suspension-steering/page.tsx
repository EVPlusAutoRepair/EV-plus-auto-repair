import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Suspension in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla suspension & steering repair in Sun Valley, LA—creaks, vibrations, control arms, bushings. Tesla-only shop. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why does my Tesla creak over bumps?",
    a: "Almost always worn control arm bushings or end links. It's one of the most common Tesla complaints we see, and it's very fixable.",
  },
  {
    q: "Do you replace the whole control arm or just the bushing?",
    a: "We replace the full control arm—that's the proper repair. We'll show you the worn part on the lift so you can see exactly what failed.",
  },
  {
    q: "Will I need an alignment after suspension work?",
    a: "Yes, and we include the alignment check. Skipping it after suspension replacement is how you end up buying tires early.",
  },
  {
    q: "Is a vibration on acceleration a suspension problem?",
    a: "It can be—the “kick” or shudder under acceleration in some Model 3s is a known issue with specific causes. Bring it in for a free inspection and we'll pin it down.",
  },
];

export default function SuspensionSteering() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla Suspension" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Suspension &amp; Steering Repair</h1>
          <p className="lede">Creaking over bumps. A kick when you accelerate. Uneven tire wear. Teslas are heavy and torquey—that combination eats suspension components faster than most owners expect. We diagnose the actual worn part instead of throwing parts at it.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;There&rsquo;s a creaking noise over bumps.&rdquo;</h2>
          <p className="lede">Teslas are heavy and torquey, and that combination eats suspension components—control arms, bushings, links—faster than most owners expect. The symptoms start subtle: a creak here, a vibration there. Then your tires wear unevenly and you&rsquo;re buying tires AND suspension parts.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Diagnose the part, not the guess.</h2>
            <p className="lede">We diagnose the actual worn component instead of throwing parts at it. Control arms, bushings, end links, ball joints—we replace what&rsquo;s worn with quality parts. When a control arm&rsquo;s bushings are shot, we replace the full arm—the right repair, done once. Every suspension job gets a proper alignment check afterward, because new parts with bad alignment just wear out again.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>We know the failure points by model.</h2>
            <p className="lede">Tesla suspension isn&rsquo;t complicated, but it is specific: torque specs, ride-height calibration, and the fact that EVs wear components differently than gas cars. We know the common failure points by model—Model 3/Y front upper control arms, for example, are a known wear item—so diagnosis is fast and accurate. If your job takes more than a day, you&rsquo;ll be in an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b>, not a shuttle queue.</p>
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
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Hearing creaks, feeling kicks, seeing uneven tire wear? Get it checked before it costs you tires too.</h2>
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
