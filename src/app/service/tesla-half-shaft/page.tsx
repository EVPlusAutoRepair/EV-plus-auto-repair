import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Half Shaft & CV Axle Repair in LA | EV+ Auto Repair",
  description:
    "Clicking when turning your Tesla in Sun Valley, LA? Worn half shafts / CV axles are a common cause—we diagnose first. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "What does a worn half shaft sound like?",
    a: "The classic sign is a clicking or clunking noise when turning, especially at low speed. It can also show up as a vibration or a clunk when accelerating. If the noise changes with steering angle, the half shaft is a prime suspect.",
  },
  {
    q: "What is a half shaft, and what does it do?",
    a: "The half shaft—also called a CV axle—connects the drive unit to the wheel and transfers power while letting the wheel steer and move with the suspension. It flexes constantly, so its joints wear over time.",
  },
  {
    q: "Can I keep driving with a clicking half shaft?",
    a: "Get it checked soon. A worn half shaft usually gets worse gradually, but a joint that's badly worn can fail—and if it does, the car can lose drive to that wheel. A diagnostic now is cheaper than a failure later.",
  },
  {
    q: "Is the clicking always the half shaft?",
    a: "Not always—suspension parts, wheel bearings, and other components can make similar noises. That's why we diagnose first: we confirm the half shaft is the cause before quoting a replacement.",
  },
];

export default function TeslaHalfShaft() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Half Shaft" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Half Shaft &amp; CV Axle Repair</h1>
          <p className="lede">Clicking when you turn, a clunk on acceleration, or a vibration that wasn&rsquo;t there before. Half shafts wear with use—and on a torque-heavy Tesla, they work hard. We diagnose first, then replace what&rsquo;s worn.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla clicks when I turn the wheel.&rdquo;</h2>
          <p className="lede">That rhythmic clicking on turns is the textbook sign of a worn half shaft joint. The half shaft flexes every time you steer and every time the suspension moves, all while carrying the car&rsquo;s full torque—so its joints are a wear item, and the clicking is how they tell you.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Confirm it&rsquo;s the half shaft. Then replace it.</h2>
            <p className="lede">We road-test the car, listen for the noise under turning and acceleration, and inspect the half shafts and joints before quoting anything—because suspension and bearing issues can sound similar. If the half shaft is the cause, we replace it and verify the noise is gone before the car leaves. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Instant torque means hard-working half shafts.</h2>
            <p className="lede">A Tesla puts full torque to the wheels from a standstill, and the half shafts carry all of it while flexing with every turn. That&rsquo;s a tough life for a joint—and it&rsquo;s why clicking on turns is a complaint we hear often. We check the half shafts as part of any noise diagnostic, not as an afterthought.</p>
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
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
              {" · "}
              <a href="/service/control-arm-replacement" style={{ color: "var(--acc)" }}>Control Arm Replacement</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Clicking when you turn? Book a diagnostic and we&rsquo;ll find it.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=diagnostics">Book half shaft diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
