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
  {
    q: "What should I do if my claim is denied or underpaid?",
    a: "Bring us the denial letter or the estimate—we'll review what the insurer covered and what it missed, document the real repair with photos and Tesla procedures, and send a supplement or corrected estimate. We can't promise an approval or a payout amount; that decision is the insurer's, but we'll make the strongest documented case we can.",
  },
  {
    q: "How does the insurance claim process work, step by step?",
    a: "First, call us or book an accident intake and bring your claim number if you have one. We inspect the car and write an estimate, then send it to your insurer. Your adjuster reviews it, we handle supplements if anything is missed, and once the insurer approves the repair, we fix the car, keep you updated with photos, and you pick it up.",
  },
  {
    q: "What is a claim number, and where do I find it?",
    a: "It's the reference number your insurer assigns when you report the accident. You'll find it in the email, text, or letter from your insurer, or in your insurer's app—your adjuster's name is usually listed with it. If you don't have one yet, call us anyway; we can start the estimate while you report the claim.",
  },
  {
    q: "How long does a Tesla insurance claim take?",
    a: "It depends on the insurer, the damage, and parts availability. Simple claims can move in days; supplements and approvals can add time. We give you a real timeline at the estimate and keep you updated—what we can't do is promise the insurer's timing, because approvals are their call.",
  },
  {
    q: "Who decides if my Tesla is a total loss?",
    a: "Your insurer decides—not the shop. If the repair cost approaches the car's value, the insurer may declare it a total loss and offer a settlement based on the car's value. If that happens, we'll explain what we found in our estimate so you can discuss it with your adjuster, but the decision and the payout are the insurer's.",
  },
  {
    q: "What is diminished value?",
    a: "In general terms, diminished value is the idea that a car can be worth less after an accident repair, even when the repair is done well, simply because it now has an accident on its record. Whether you can claim it, and how much, depends on your policy, your state, and who was at fault—it's a question for your insurer or an attorney, not something the shop can promise or calculate.",
  },
  {
    q: "Does my insurance cover a rental car while my Tesla is repaired?",
    a: "Rental coverage depends on your policy—some policies include rental reimbursement, some don't, and limits vary. Check your policy or ask your adjuster what you're covered for. Separately, you can ask us about an on-site Tesla rental—it's optional and based on availability, not guaranteed.",
  },
  {
    q: "What will I pay out of pocket on an insurance repair?",
    a: "Usually just your deductible—the part of the repair your policy says you pay first. The insurer pays the approved repair cost above that. We'll explain exactly what you owe before work starts, and if the insurer approves less than the real repair cost, we'll tell you before anything is done—no surprises.",
  },
  {
    q: "How does a high deductible affect my repair?",
    a: "A high deductible means you pay more of the repair cost yourself before your insurer pays anything—the first portion of the approved repair, up to your deductible amount, is yours. The repair itself doesn't change; only how much comes out of your pocket does. We'll show you the numbers before work starts so you can decide how to proceed.",
  },
  {
    q: "Do you handle AAA insurance claims?",
    a: "Yes. We work with AAA claims the same way we work with any major carrier—estimate, adjuster communication, supplements, and approvals. Bring your claim number and we'll take it from there.",
  },
  {
    q: "Do you handle Mercury Insurance claims?",
    a: "Yes. We work with Mercury Insurance claims the same way we work with any major carrier—estimate, adjuster communication, supplements, and approvals. Bring your claim number and we'll take it from there.",
  },
];

export default function InsuranceClaims() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Repair", href: "/collision" }, { label: "Tesla Claims Help" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Repair</div>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Repair</a>
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
