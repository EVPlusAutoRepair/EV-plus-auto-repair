import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Is EV+ Tesla Certified? Independent Tesla Shop in Los Angeles | EV+ Auto Repair",
  description:
    "EV+ Auto Repair is not Tesla-certified, but we are approved to order genuine Tesla parts through Tesla's EPC catalog. Independent Tesla shop in Sun Valley, LA.",
};

const faqs = [
  {
    q: "Is EV+ Auto Repair Tesla-certified?",
    a: "No. We are not Tesla-certified, and we don't claim to be. We're an independent Tesla service and collision shop—not affiliated with or endorsed by Tesla. But we are approved to order genuine Tesla parts through Tesla's EPC (Electronic Parts Catalog).",
  },
  {
    q: "Is EV+ Auto Repair Tesla-approved?",
    a: "Not as an endorsement—there is no Tesla certification or endorsement behind our work. But we are approved to order genuine Tesla parts through Tesla's EPC (Electronic Parts Catalog), so the parts we fit are genuine Tesla parts.",
  },
  {
    q: "What does it mean that you're not Tesla-certified?",
    a: "It means Tesla, Inc. hasn't certified us, and we don't use Tesla's name as an endorsement. It doesn't mean aftermarket parts: we are approved to order genuine Tesla parts through Tesla's EPC (Electronic Parts Catalog). In practice, our service work is Tesla-only, we see the same models day after day, and we know the common failures and the right repair procedures from hands-on experience—including full control arm replacement, never just the bushing.",
  },
  {
    q: "Do you use OEM parts?",
    a: "Yes. We use original equipment (OEM) parts—ordered as genuine Tesla parts through Tesla's EPC (Electronic Parts Catalog), so the parts we fit are genuine Tesla parts. OE parts protect your car's value and keep you in the best position if a warranty question ever comes up.",
  },
  {
    q: "Why do Tesla owners choose an independent shop?",
    a: "Usually three reasons: you talk to the people actually working on your car, you get a straight answer on what it needs and what it can wait on, and the experience is personal—family-owned, not a service-center queue. Start with a free inspection and judge for yourself.",
  },
  {
    q: "Can an independent shop handle my Tesla insurance claim?",
    a: "Yes. California law says the repair shop is your choice—not your insurer's. We handle the whole claim: estimate, adjuster communication, supplements, and approvals. Approval, timing, and payout are the insurer's call, but the paperwork and the arguing are ours.",
  },
  {
    q: "Will going to an independent shop affect my Tesla warranty?",
    a: "We can't give you a legal answer on warranty—only Tesla can speak for its own warranty terms. What we can say is that we use OEM parts and document our work, and if a warranty question ever comes up, that documentation is on your side.",
  },
];

export default function IsEvPlusTeslaCertified() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "FAQ" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service &amp; Collision</div>
          <h1>Is EV+ Tesla Certified?</h1>
          <p className="lede">Short answer: no—and we&rsquo;d rather tell you that plainly than let the question hang. We&rsquo;re not Tesla-certified, and we&rsquo;re not affiliated with or endorsed by Tesla. But we are approved to order genuine Tesla parts through Tesla&rsquo;s EPC (Electronic Parts Catalog) — so the parts we fit are genuine Tesla parts.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;Do I have to go to Tesla to get my Tesla fixed right?&rdquo;</h2>
          <p className="lede">No. What your Tesla needs is a shop that works on Teslas every day, uses the right parts, and documents the work properly—not a logo on the door. We&rsquo;re a family-owned shop in Sun Valley, and Teslas are all we service.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we work</div>
            <h2>Independent, Tesla-only, and upfront about it.</h2>
            <p className="lede">Our service work is Tesla-only. We use original equipment (OEM) parts—genuine Tesla parts ordered through Tesla&rsquo;s EPC (Electronic Parts Catalog)—we replace full control arms—never just the bushing—and every job is backed by our 6-12 months labor warranty. If we don&rsquo;t know something, we&rsquo;ll say so. If your car is fine, we&rsquo;ll tell you it&rsquo;s fine.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Genuine parts</div>
            <h2>Approved to order genuine Tesla parts through the EPC.</h2>
            <p className="lede">Tesla&rsquo;s EPC—the Electronic Parts Catalog—is how genuine Tesla parts are looked up and ordered for your car. We&rsquo;re approved to order through it, so the parts we fit are genuine Tesla parts, matched to your car. That&rsquo;s the part customers actually care about: not a badge on the door, but the right part on the car.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The honest part</div>
            <h2>What independence costs us—and what it gets you.</h2>
            <p className="lede">Being independent means no Tesla certification badge and no Tesla endorsement. What it doesn&rsquo;t mean is aftermarket parts—we&rsquo;re approved to order genuine Tesla parts through the EPC. What it gets you is a shop where you talk to the people doing the work, where the estimate is explained before anything starts, and where insurance claims are handled for you instead of handed to you.</p>
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
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/collision/insurance-claims" style={{ color: "var(--acc)" }}>Tesla Claims Help</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Not sure what your Tesla needs? Start with a free inspection.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=inspection">Book free inspection</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
