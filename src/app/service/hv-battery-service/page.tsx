import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla HV Battery Replacement in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla high-voltage battery replacement in Sun Valley, LA. We replace failed packs with low-mileage used batteries. Free estimates: call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "How do I know if my battery is actually failing?",
    a: "Sudden range loss, charging that stops early or won't start, battery-related error messages, or the car limiting power. Any of these deserves a look—don't wait.",
  },
  {
    q: "Do you repair or service high-voltage batteries?",
    a: "No—we don't offer HV battery service or repair. When a pack is done, we replace it with a low-mileage used battery, installed and configured in-house.",
  },
  {
    q: "What does a battery replacement cost?",
    a: "It depends on the year, model, and the replacement pack. That's exactly why we do free estimates—call us with your model and mileage and we'll talk honestly.",
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
          <h1>Tesla High-Voltage Battery Replacement</h1>
          <p className="lede">Range dropped off a cliff? Won&rsquo;t charge past 50%? We don&rsquo;t service or repair high-voltage batteries—when your pack is done, we replace it with a low-mileage used battery, installed and configured right here in our shop.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My range dropped off a cliff.&rdquo;</h2>
          <p className="lede">The high-voltage battery is the most expensive part of your Tesla, and battery problems are the ones that keep owners up at night. When a pack fails, the fix is a replacement—and a low-mileage used pack is the smart-money move versus brand-new pricing.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Replacement, done right.</h2>
            <p className="lede">We source a low-mileage used battery for your model, swap the pack, and handle all configuration and verification in-house. You may have seen our video: a Model Y with its battery out, the whole underside of the car empty—that&rsquo;s the job, and we do it here.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every battery job is done with proper high-voltage safety procedures, by people who do this regularly—not a general shop figuring it out on your car.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>This is where specialization matters most.</h2>
            <p className="lede">The pack is structural and the electronics are unforgiving. We&rsquo;ve built a reputation on this exact work—our battery content has reached millions of Tesla owners because almost nobody shows this work honestly. You&rsquo;ll get photo updates throughout, and if the job takes days, you&rsquo;re in an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b>.</p>
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
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/service/drive-unit-oil-service" style={{ color: "var(--acc)" }}>Drive-Unit Oil Service</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Battery warning? Range loss? Let&rsquo;s talk replacement options.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=hv-battery">Book battery replacement</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
