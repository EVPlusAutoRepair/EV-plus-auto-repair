import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla HV Battery in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla high-voltage battery service & replacement in Sun Valley, LA. Diagnostics, module work, full replacement. Free estimates: call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "How do I know if my battery is actually failing?",
    a: "Sudden range loss, charging that stops early or won't start, battery-related error messages, or the car limiting power. Any of these deserves a diagnostic—don't wait.",
  },
  {
    q: "Do I need a brand-new battery?",
    a: "Not always. Many battery faults are module-level or component-level and repairable. We'll diagnose first and give you the real options with real numbers.",
  },
  {
    q: "What does a battery replacement cost?",
    a: "It depends on the year, model, and whether you go new or tested used. That's exactly why we do free estimates—call us with your model and mileage and we'll talk honestly.",
  },
  {
    q: "Will my Tesla need programming after a battery replacement?",
    a: "Yes—battery replacements involve configuration and verification. We handle all of it in-house.",
  },
];

export default function HVBattery() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla HV Battery" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla High-Voltage Battery Service &amp; Replacement</h1>
          <p className="lede">Range dropped off a cliff? Won&rsquo;t charge past 50%? The high-voltage battery is the most expensive part of your Tesla—and the good news is that not every battery warning means a full replacement.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My range dropped off a cliff.&rdquo;</h2>
          <p className="lede">The high-voltage battery is the most expensive part of your Tesla, and battery problems are the ones that keep owners up at night. The good news: not every battery warning means a full replacement. Some are module issues, contactor issues, or cooling problems—all fixable for far less than a pack swap.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Real diagnostics. Not guesses.</h2>
            <p className="lede">We read the battery management system, test modules, and find out what&rsquo;s actually wrong. If it&rsquo;s repairable at the module or component level, we repair it. If the pack is done, we replace it—including with quality tested used packs where that makes sense for your budget (you may have seen our video: a Model Y with its battery out, the whole underside of the car empty—that&rsquo;s the job, and we do it here).</p>
            <p className="lede" style={{ marginTop: 16 }}>Every battery job is done with proper high-voltage safety procedures, by people who do this regularly—not a general shop figuring it out on your car.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>This is where specialization matters most.</h2>
            <p className="lede">The pack is structural, the electronics are unforgiving, and the difference between a module repair and a full replacement is tens of thousands of dollars. We&rsquo;ve built a reputation on this exact work—our battery content has reached millions of Tesla owners because almost nobody shows this work honestly. You&rsquo;ll get photo updates throughout, and if the job takes days, you&rsquo;re in an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b>.</p>
            <p className="lede" style={{ marginTop: 16 }}>Backed by our <b style={{ color: "var(--txt)" }}>12-month labor warranty</b>.</p>
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
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/service/drive-unit-oil-service" style={{ color: "var(--acc)" }}>Drive-Unit Oil Service</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Battery warning? Range loss? Don&rsquo;t guess—get a real diagnostic.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=hv-battery">Book battery diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
