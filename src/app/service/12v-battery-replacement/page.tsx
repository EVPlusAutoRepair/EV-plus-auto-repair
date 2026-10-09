import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla 12V Battery in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla 12V battery replacement in Sun Valley, LA. Dead Tesla? The little battery causes big problems. Fast replacement. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "What are the symptoms of a dying Tesla 12V battery?",
    a: "Car won't wake, screens stay dark, doors act strangely, random error messages (including scary-sounding battery errors), or the car was fine yesterday and dead today.",
  },
  {
    q: "How long does a Tesla 12V battery last?",
    a: "Typically 2–4 years depending on climate and use—shorter in LA heat. If yours is in that window and acting strange, it's suspect number one.",
  },
  {
    q: "Can I drive with a failing 12V?",
    a: "You shouldn't count on it. A weak 12V can leave you stranded without warning, and it can mask or trigger other faults. It's a cheap fix—don't gamble on it.",
  },
  {
    q: "My Tesla shows a high-voltage battery error. Is it the 12V?",
    a: "Possibly—a dying 12V causes false HV errors regularly. That's why we test before we quote. A proper diagnostic saves you from a five-figure scare over a low-cost battery.",
  },
];

export default function TwelveVBattery() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla 12V Battery" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla 12V Battery Replacement</h1>
          <p className="lede">Your Tesla is completely dead—and the big battery was fine yesterday. Nine times out of ten, the culprit is the little 12V battery. Quick to test, quick to replace, cheap compared to what it mimics.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla is completely dead—and the big battery was fine yesterday.&rdquo;</h2>
          <p className="lede">Here&rsquo;s the thing most owners don&rsquo;t know: your Tesla has a regular little 12V battery, just like a gas car. And when it dies, it takes the whole car with it—the screens won&rsquo;t wake, the doors won&rsquo;t unlock properly, and the dash throws error messages that look terrifying but mean &ldquo;replace the 12V.&rdquo; It&rsquo;s the most common cause of a &ldquo;dead&rdquo; Tesla that isn&rsquo;t actually dead.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Test first. Then replace.</h2>
            <p className="lede">We test the 12V, confirm it&rsquo;s the culprit (and not something deeper), and replace it with the correct battery for your model and year. It&rsquo;s a quick job—usually same-day—and we verify the car wakes, charges, and clears errors properly before it leaves.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>The symptoms mimic serious problems.</h2>
            <p className="lede">The symptoms of a dying 12V mimic serious problems: HV battery errors, charging faults, computers that won&rsquo;t boot. A general shop can chase those ghosts for hours. We check the 12V first because we&rsquo;ve seen this movie hundreds of times. Newer Teslas use a lithium 16V battery instead of lead-acid 12V—we stock and service the right one for your car, and we know which models made the switch.</p>
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
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Tesla dead or throwing strange errors? Check the 12V first—it&rsquo;s quick and cheap.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=12v">Book 12V check</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
