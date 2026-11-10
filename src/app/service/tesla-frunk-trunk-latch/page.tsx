import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Frunk & Trunk Latch Repair in LA | EV+ Auto Repair",
  description:
    "Tesla frunk or trunk won't open, close, or latch in Sun Valley, LA? We fix latch and strut issues on all Tesla models. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "My Tesla frunk won't open. What's wrong?",
    a: "Usually the latch, the release actuator, or the wiring to it. The frunk latch is a safety-critical part, so we test the release and the latch itself before replacing anything.",
  },
  {
    q: "My trunk won't close or won't latch shut. Can I still drive?",
    a: "Don't drive with a trunk that won't latch—it can pop open on the road. In most cases it's a latch, striker, or alignment issue, and we can usually diagnose it quickly. If the trunk won't stay shut, bring it in rather than forcing it.",
  },
  {
    q: "Is it the latch or the struts?",
    a: "Different symptoms. A latch problem means it won't catch, release, or stay shut. A strut problem means the frunk or trunk won't stay up on its own, sags, or slams shut. We check both, because a worn strut can strain the latch over time.",
  },
  {
    q: "The frunk or trunk opens but slams shut. Is that dangerous?",
    a: "It can be—worn struts let the lid drop without warning, and that's how fingers and hands get hurt. Struts wear out with age and use, and replacing them is a straightforward fix.",
  },
];

export default function TeslaFrunkTrunkLatch() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Frunk & Trunk Latch" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Frunk &amp; Trunk Latch Repair</h1>
          <p className="lede">Frunk won&rsquo;t open, trunk won&rsquo;t latch, or a lid that slams shut on its own. Latches and struts are small parts with a big job—we fix them properly so your frunk and trunk work the way they should.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My frunk won&rsquo;t open—or my trunk won&rsquo;t stay shut.&rdquo;</h2>
          <p className="lede">A frunk or trunk that won&rsquo;t open is annoying; one that won&rsquo;t latch is a safety problem. Latches wear, actuators fail, strikers shift out of alignment, and struts lose their hold—often gradually, until one day the lid won&rsquo;t catch or won&rsquo;t stay up at all.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Latch, striker, actuator, or struts—we check them all.</h2>
            <p className="lede">We test the release, inspect the latch and striker for wear and alignment, and check the struts while we&rsquo;re there. Then we fix what&rsquo;s actually failed—whether that&rsquo;s a latch replacement, an adjustment, or new struts—and verify the lid opens, closes, and latches correctly before it leaves. Ask for pricing for your specific year and model.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Don&rsquo;t force a latch that won&rsquo;t catch.</h2>
            <p className="lede">Slamming a trunk that won&rsquo;t latch can bend the striker or damage the latch and turn a simple adjustment into a replacement. If it won&rsquo;t catch with a normal close, bring it in—we&rsquo;ll find out why before it gets worse.</p>
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
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Frunk or trunk giving you trouble? Book a latch check.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book frunk &amp; trunk service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
