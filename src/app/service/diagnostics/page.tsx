import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Diagnostics in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla diagnostics in Sun Valley, LA—free 1-hour inspection for suspension, 12V, radiator and collision concerns; a paid 48-hour diagnostic appointment for AC, Toolbox and complex problems. Call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "What does the free inspection include?",
    a: "A 1-hour mechanical and visual inspection—suspension, 12V battery, radiator and cooling, and collision concerns. You get a clear explanation and an honest quote—no obligation.",
  },
  {
    q: "What is the 48-hour diagnostic appointment?",
    a: "For air conditioning, software and Toolbox work, and complex problems: a Diagnostic & Error Code Testing appointment. It has a separate fee—ask for pricing when you book—and we may need to keep your Tesla for up to 48 hours depending on the concern.",
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
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Diagnostics" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Diagnostics</h1>
          <p className="lede">Warning on your screen and you don&rsquo;t know what it means? Something feels off but you can&rsquo;t describe it? We read Tesla systems every day—smaller things start with a free 1-hour inspection, and the complex stuff gets a diagnostic appointment.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;There&rsquo;s a warning on my screen and I don&rsquo;t know what it means.&rdquo;</h2>
          <p className="lede">Tesla warning messages range from trivial to serious, and the car doesn&rsquo;t always tell you which. What you need is someone who reads Tesla systems every day, tells you what&rsquo;s actually wrong, and gives you an honest number—before you approve anything.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Two ways in: a free inspection, or a diagnostic appointment.</h2>
            <p className="lede">Smaller things—suspension, 12V battery, radiator, collision—start with a free 1-hour inspection. We look at the car, find the cause, and quote the fix. For air conditioning, software and Toolbox work, and complex problems, there&rsquo;s a Diagnostic &amp; Error Code Testing appointment instead: a separate fee (ask for pricing when you book), and we may need the car for up to 48 hours. Either way, you approve the work before we touch anything beyond the inspection or diagnostic.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Not generic OBD-II guesswork.</h2>
            <p className="lede">Tesla diagnostics aren&rsquo;t generic OBD-II guesswork. The car&rsquo;s systems—battery management, drive units, thermal, autopilot—speak Tesla&rsquo;s language, and interpreting them correctly takes Tesla experience. We&rsquo;ve diagnosed everything from phantom 12V failures masquerading as HV battery errors to suspension noises owners were told were &ldquo;normal.&rdquo; The free inspection is free because we&rsquo;d rather earn your trust than charge you to look.</p>
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
              <a href="/service" style={{ color: "var(--acc)" }}>Tesla Service</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/service/hv-battery-service" style={{ color: "var(--acc)" }}>HV Battery Replacement</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Warning light? Strange noise? Something just feels off? Get a free inspection—or a diagnostic appointment—from people who read Teslas all day.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=diagnostics">Book an inspection or diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
