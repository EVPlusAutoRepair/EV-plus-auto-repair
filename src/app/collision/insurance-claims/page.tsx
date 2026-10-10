import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Claims Help in Los Angeles | EV+ Auto Repair",
  description:
    "We handle your Tesla insurance claim in Sun Valley, LA—adjusters, supplements, approvals. You just drive. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Do I have to use the shop my insurance recommends?",
    a: "No. California law says the repair shop is your choice—not your insurer's. Choose us and we'll handle the rest.",
  },
  {
    q: "What if the insurance estimate is too low?",
    a: "That's normal—initial estimates frequently miss Tesla-specific procedures. We file supplements with documentation until the estimate covers the real repair.",
  },
  {
    q: "Will you talk to my adjuster directly?",
    a: "Yes. That's the point. You shouldn't have to project-manage your own claim.",
  },
  {
    q: "What about my deductible?",
    a: "Your deductible is between you and your policy—we'll explain exactly how it applies to your repair before work starts, no surprises.",
  },
  {
    q: "What if the other driver's insurance is paying?",
    a: "Same process. We handle third-party claims too—estimate, supplements, approvals, rental coordination.",
  },
];

export default function InsuranceClaims() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Center", href: "/collision" }, { label: "Tesla Claims Help" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>We Handle Your Insurance Claim</h1>
          <p className="lede">The insurance process is a nightmare and you don&rsquo;t have time for it. You&rsquo;re right—it is. So we do the opposite of most shops: we take the whole claim off your plate.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;The insurance process is a nightmare and I don&rsquo;t have time for this.&rdquo;</h2>
          <p className="lede">You&rsquo;re right—it is. Estimates that are too low, adjusters who don&rsquo;t understand Tesla repair procedures, supplements that take weeks, phone tag while your car sits. Most shops hand you the paperwork and wish you luck. We do the opposite.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>You drop off the car. We deal with the insurance company.</h2>
            <p className="lede">We handle the entire claim for you: the initial estimate, direct communication with your adjuster, supplement requests when the first estimate doesn&rsquo;t cover the real repair, and approvals—start to finish. You drop off the car—and ask about an <b style={{ color: "var(--txt)" }}>on-site Tesla rental</b> (subject to availability). That&rsquo;s the deal.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Tesla claims go wrong when adjusters write for generic cars.</h2>
            <p className="lede">Missing Tesla-specific procedures, underestimating calibration, or spec&rsquo;ing aftermarket parts. We know what a proper Tesla repair requires and we document it, so supplements get approved instead of argued. We&rsquo;ve worked with all the major carriers and we speak their language.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every insurance repair is backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>, and you get photo updates throughout.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Center</a>
              {" · "}
              <a href="/collision/collision-repair" style={{ color: "var(--acc)" }}>Collision Repair</a>
              {" · "}
              <a href="/collision/paint-refinishing" style={{ color: "var(--acc)" }}>Paint &amp; Refinishing</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Had an accident? Don&rsquo;t fight the insurance company alone.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=accident">Start my claim</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
