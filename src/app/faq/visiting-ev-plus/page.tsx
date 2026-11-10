import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Visiting EV+ Auto Repair | Tesla Service in Sun Valley, Los Angeles",
  description:
    "Visiting EV+ Auto Repair in Sun Valley, LA? Tesla service hours, location, walk-ins, same-day jobs, and what to expect. 9755 Glenoaks Blvd. Call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "Where is EV+ Auto Repair, and what are your hours?",
    a: "We're at 9755 Glenoaks Blvd, Sun Valley, CA 91352. Hours are Mon–Fri 9:00 AM–5:00 PM and Sat 10:00 AM–3:00 PM; we're closed Sundays. Call or text (818) 281-7757.",
  },
  {
    q: "Do you offer mobile service?",
    a: "No—we're a physical shop, and service happens at the shop in Sun Valley, where we have the lifts, tools, and parts on hand. If getting the car to us is the problem, call or text (818) 281-7757 and ask—we'll talk through your options, including a tow.",
  },
  {
    q: "Can I get same-day service?",
    a: "Some jobs are same-day—inspections, diagnostics, and smaller maintenance jobs often are. It depends on the job and the day's schedule, so we never guarantee same-day. Book ahead or call (818) 281-7757 and we'll give you an honest answer for your car.",
  },
  {
    q: "Can I walk in, or do I need an appointment?",
    a: "Walk-ins are welcome for free inspections when the schedule allows, but booking ahead guarantees your slot. If you're coming in for a specific repair, booking ahead is the safer bet—call or text (818) 281-7757.",
  },
  {
    q: "How long will my visit take?",
    a: "It depends on the job. A free inspection and a diagnostic visit are usually the quickest; repairs take longer depending on the work and parts availability. We'll give you a real timeline before any work starts—never a promised time we can't keep.",
  },
  {
    q: "Do you do pre-purchase inspections?",
    a: "No, we don't do pre-purchase inspections. If you already own the Tesla, book a free inspection instead—we'll go over the car and tell you honestly what it needs and what can wait.",
  },
  {
    q: "Do you do warranty inspections?",
    a: "No, we don't do warranty inspections. If you already own the Tesla, book a free inspection instead—we'll go over the car and tell you honestly what it needs and what can wait.",
  },
  {
    q: "What's included in the free inspection?",
    a: "A full walkaround and systems check: tires and brakes, suspension, 12V battery health, cabin filters, cooling system condition, and a scan for stored warnings. You get a straight answer on what needs attention—and if it's fine, we'll tell you it's fine.",
  },
  {
    q: "What should I bring when I visit?",
    a: "Just the car and anything that helps us understand the issue—when the noise or warning started, and photos if you have them. If it's an insurance repair, bring your claim number if you have one. We'll take it from there.",
  },
];

export default function VisitingEvPlus() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "FAQ" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Visiting EV+ Auto Repair</h1>
          <p className="lede">A family-owned Tesla service &amp; collision shop in Sun Valley, Los Angeles—9755 Glenoaks Blvd, Sun Valley, CA 91352. Here&rsquo;s what to expect when you come by.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;I just want to know what happens when I show up.&rdquo;</h2>
          <p className="lede">Fair enough. You bring your Tesla to the shop, we look it over, we tell you honestly what it needs and what it will take—and nothing starts until you&rsquo;ve seen the estimate. No upsell, no scare tactics.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How a visit works</div>
            <h2>Drop off, inspect, decide.</h2>
            <p className="lede">Start with a free inspection if you&rsquo;re not sure what&rsquo;s wrong. We go over your Tesla—tires, brakes, suspension, 12V health, filters, cooling system, warning lights—and give you a straight answer. If it needs work, you get an exact estimate before anything starts.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The practical part</div>
            <h2>We&rsquo;re a physical shop in Sun Valley.</h2>
            <p className="lede">Service happens at 9755 Glenoaks Blvd, Sun Valley, CA 91352—Mon–Fri 9:00 AM–5:00 PM, Sat 10:00 AM–3:00 PM, closed Sundays. If your car needs to stay, ask about an on-site Tesla rental—optional and based on availability. Call or text (818) 281-7757 with any question before you come.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every job is backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
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
