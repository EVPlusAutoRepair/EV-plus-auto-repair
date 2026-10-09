import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Maintenance in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla maintenance & free inspections in Sun Valley, LA. Cabin filters, 12V battery, suspension checks—Tesla-only. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Does my Tesla really need maintenance?",
    a: "Yes—just not the same maintenance as a gas car. Cabin filters, 12V battery, suspension components, cooling system cleaning, and drive-unit fluid all have real service intervals.",
  },
  {
    q: "What's included in the free inspection?",
    a: "A full walkaround and systems check: tires and brakes, suspension, 12V battery health, cabin filters, cooling system condition, and a scan for stored warnings. You get a straight answer on what needs attention.",
  },
  {
    q: "How often should I bring my Tesla in?",
    a: "It depends on mileage, model, and how you drive. As a rule of thumb: a checkup once a year or every 12,000–15,000 miles. Book a free inspection and we'll give you an honest schedule for your car.",
  },
  {
    q: "Do you service gas vehicles?",
    a: "No. Our service center is Tesla-only—that's what makes us good at it. (We do collision and body repair on gas vehicles—see our Collision Center.)",
  },
];

export default function MaintenanceInspections() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla Maintenance" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Maintenance &amp; Inspections</h1>
          <p className="lede">Tesla says your car doesn&rsquo;t need maintenance. They&rsquo;re right that there&rsquo;s no oil change every 3,000 miles—but &ldquo;low maintenance&rdquo; isn&rsquo;t &ldquo;no maintenance.&rdquo; We keep Teslas healthy for the long run.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;Tesla says my car doesn&rsquo;t need maintenance. So why does something feel off?&rdquo;</h2>
          <p className="lede">Tesla&rsquo;s right about one thing: there&rsquo;s no oil change every 3,000 miles, no spark plugs, no transmission flush. But your Tesla still has a 12V battery that dies, cabin filters that clog, suspension that wears, cooling systems that collect debris, and drive-unit fluid that gets dirty. Ignore all of it long enough and small things become expensive things.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Start with a free inspection.</h2>
            <p className="lede">We go over your Tesla—tires, brakes, suspension, 12V health, filters, cooling system, warning lights—and tell you honestly what it needs and what can wait. No upsell, no scare tactics. If it&rsquo;s fine, we&rsquo;ll tell you it&rsquo;s fine.</p>
            <p className="lede" style={{ marginTop: 16 }}>For scheduled maintenance, we handle everything Tesla&rsquo;s service schedule calls for and the things experience taught us to watch: cabin air filters, radiator/condenser cleaning, 12V replacement, wiper blades, tire rotations, brake service (yes, Teslas still have brakes).</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Pattern recognition is the whole job.</h2>
            <p className="lede">A general shop sees a car. We see a Model 3 with 80,000 miles and know exactly what&rsquo;s likely worn—because we&rsquo;ve seen hundreds of them. We know which model years eat 12V batteries, which ones creak from control arm bushings, and what &ldquo;normal&rdquo; looks like for every Tesla system.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every maintenance visit includes photo updates if we find anything, and our <b style={{ color: "var(--txt)" }}>12-month labor warranty</b> backs the work.</p>
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
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>12V Battery Replacement</a>
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
