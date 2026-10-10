import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Diagnostics in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla diagnostics in Sun Valley, LA—warning lights, error messages, strange noises. Free diagnostic, Tesla-only experts. Call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "What does the free diagnostic include?",
    a: "A full systems scan, fault-code reading, and investigation of your specific symptom or warning. You get a clear explanation and an honest quote—no obligation.",
  },
  {
    q: "My Tesla shows a specific error message—can you read it?",
    a: "Yes. Bring it in (or call us with the exact message) and we'll tell you what it means and what it takes to fix.",
  },
  {
    q: "Do I need an appointment for a diagnostic?",
    a: "Walk-ins are welcome when we're not slammed, but booking ahead guarantees you won't wait. Call or text (818) 281-7757.",
  },
  {
    q: "Will you try to upsell me during the diagnostic?",
    a: "No. We'll tell you what's wrong, what it costs, and what can wait. If the car is fine, we'll tell you that too.",
  },
];

export default function Diagnostics() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla Diagnostics" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Diagnostics</h1>
          <p className="lede">Warning on your screen and you don&rsquo;t know what it means? Something feels off but you can&rsquo;t describe it? We read Tesla systems every day—and the diagnostic starts free.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;There&rsquo;s a warning on my screen and I don&rsquo;t know what it means.&rdquo;</h2>
          <p className="lede">Tesla warning messages range from trivial to serious, and the car doesn&rsquo;t always tell you which. What you need is someone who reads Tesla systems every day, tells you what&rsquo;s actually wrong, and gives you an honest number—before you approve anything.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Our diagnostic starts free.</h2>
            <p className="lede">We scan your Tesla&rsquo;s systems, read the fault codes, and investigate the symptoms—warning lights, error messages, noises, vibrations, charging issues, anything that &ldquo;feels off.&rdquo; Then we show you what&rsquo;s wrong, what it costs to fix, and what can wait. You approve the work before we touch anything beyond the diagnostic.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Not generic OBD-II guesswork.</h2>
            <p className="lede">Tesla diagnostics aren&rsquo;t generic OBD-II guesswork. The car&rsquo;s systems—battery management, drive units, thermal, autopilot—speak Tesla&rsquo;s language, and interpreting them correctly takes Tesla experience. We&rsquo;ve diagnosed everything from phantom 12V failures masquerading as HV battery errors to suspension noises owners were told were &ldquo;normal.&rdquo; The diagnostic is free because we&rsquo;d rather earn your trust than charge you to look.</p>
            <p className="lede" style={{ marginTop: 16 }}>If the repair takes more than a day, you&rsquo;ll be in an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b>—and every repair is backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
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
              <a href="/service/hv-battery-service" style={{ color: "var(--acc)" }}>HV Battery Replacement</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Warning light? Strange noise? Something just feels off? Get a free diagnostic from people who read Teslas all day.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=diagnostics">Book free diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
