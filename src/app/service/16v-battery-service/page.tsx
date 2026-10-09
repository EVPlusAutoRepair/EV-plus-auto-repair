import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla 16V Lithium Battery Service in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla 16V lithium low-voltage battery service in Sun Valley, LA. Newer Teslas use 16V lithium, not 12V lead-acid—we service the right one. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Does my Tesla have a 12V or 16V battery?",
    a: "Model S and X built from late 2021, and Model 3 and Y from 2022, switched to a 16V lithium low-voltage battery. Older cars use 12V lead-acid. Not sure? Give us your VIN and we'll tell you in seconds.",
  },
  {
    q: "Does the 16V lithium battery still go bad?",
    a: "Less often than lead-acid 12Vs, but yes—it can fail, and when it does the symptoms look the same: dead car, dark screens, strange errors. We test it properly instead of guessing.",
  },
  {
    q: "Can any shop replace the 16V battery?",
    a: "It needs the correct lithium unit and proper procedure—it's not a drop-in lead-acid swap. We stock the right battery for your model and year.",
  },
  {
    q: "My Tesla shows a high-voltage battery error. Is it the 16V?",
    a: "Possibly—a failing low-voltage battery causes false HV errors regularly, 12V or 16V. That's why we test before we quote. A proper diagnostic saves you from a five-figure scare over a low-cost battery.",
  },
];

export default function SixteenVBattery() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla 16V Battery" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla 16V Lithium Battery Service</h1>
          <p className="lede">Newer Teslas don&rsquo;t have a 12V battery—they have a 16V lithium one. Same job (wake the car, run the computers), different battery, different procedure. We service the right one for your car.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The difference</div>
          <h2>12V lead-acid vs. 16V lithium—know which you have.</h2>
          <p className="lede">Tesla switched the low-voltage battery from 12V lead-acid to 16V lithium-ion starting with the late-2021 Model S/X refresh, then Model 3/Y in 2022. The lithium unit lasts longer and weighs less—but it still fails, and it needs the correct replacement, not a generic 12V off the shelf. If your Tesla was built in the switchover years, don&rsquo;t guess—we&rsquo;ll check by VIN.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Test first. Then replace with the right unit.</h2>
            <p className="lede">We test the 16V battery, confirm it&rsquo;s the culprit (and not something deeper), and replace it with the correct lithium battery for your model and year. Then we verify the car wakes, charges, and clears errors properly before it leaves.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>The symptoms mimic serious problems.</h2>
            <p className="lede">A dying low-voltage battery—12V or 16V—mimics serious problems: HV battery errors, charging faults, computers that won&rsquo;t boot. A general shop can chase those ghosts for hours. We check the low-voltage battery first because we&rsquo;ve seen this movie hundreds of times.</p>
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
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>12V Battery Service</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Tesla dead or throwing strange errors? Check the low-voltage battery first.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=16v">Book battery check</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
