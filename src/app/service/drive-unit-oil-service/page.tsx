import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Drive Unit Oil in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla drive-unit oil service in Sun Valley, LA. “Lifetime fluid” isn’t—correct fluid & filter per model year. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Does my Tesla really have oil?",
    a: "Yes—the drive unit (gearbox) uses oil for lubrication and cooling. It's not engine oil, but it degrades with heat and mileage just like any fluid.",
  },
  {
    q: "Tesla says it's a lifetime fluid. Is it?",
    a: "In our experience, no. We've lab-tested fluid drained at high mileage and found significant contamination and wear metal — whatever “lifetime” means on paper, the fluid itself tells a different story at 100,000 miles.",
  },
  {
    q: "What happens if I never service it?",
    a: "Accelerated wear inside the drive unit—noise, reduced efficiency, and in the worst case, premature drive-unit failure. That's a far bigger bill than a fluid service.",
  },
  {
    q: "Will servicing it void my warranty?",
    a: "We use the correct-specification fluid for your specific drive unit and follow proper procedure — and we document everything, so your service records support any warranty claim.",
  },
  {
    q: "How often should it be done?",
    a: "There's no official Tesla interval, which is the problem. Based on what we've seen come through the shop, we recommend discussing it at major mileage milestones—book a free inspection and we'll check your situation.",
  },
];

export default function DriveUnitOil() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla Drive Unit Oil" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Drive-Unit Oil Service</h1>
          <p className="lede">Wait—your Tesla has oil? Yes. The drive unit runs in oil, Tesla calls it &ldquo;lifetime fluid,&rdquo; and we&rsquo;ve lab-tested it at 100,000 miles. The fluid doesn&rsquo;t lie.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;Wait—my Tesla has oil?&rdquo;</h2>
          <p className="lede">Yes. Your Tesla&rsquo;s drive unit (the gearbox that connects the motor to the wheels) runs in oil, just like a transmission. Tesla calls it a &ldquo;lifetime fluid.&rdquo; We&rsquo;ve drained that fluid at 100,000 miles and sent it to a lab—it&rsquo;s black, it&rsquo;s full of wear metal, and &ldquo;lifetime&rdquo; is doing a lot of heavy lifting in that sentence. (You&rsquo;ve probably seen our videos. The fluid doesn&rsquo;t lie.)</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>The right fluid for your exact drive unit.</h2>
            <p className="lede">We drain the old gearbox fluid, replace it with the <b style={{ color: "var(--txt)" }}>correct fluid for your specific drive unit and model year</b>—Tesla specifies different approved fluids depending on the unit, and using the wrong one matters—and replace the drive-unit oil filter where applicable. It&rsquo;s a clean, straightforward service, and your drive unit will thank you with quieter operation and a longer life.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>This is where Tesla knowledge is everything.</h2>
            <p className="lede">The fluid spec varies by drive unit and model year. The filter exists on some units and not others. The procedure has to be done right or you get leaks and shifting complaints. We&rsquo;ve done this service across Model 3, Y, S, and X—and we documented the whole thing, including lab-testing used fluid, so you can see exactly why it matters.</p>
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
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Think your Tesla&rsquo;s drive-unit fluid has never been changed? It probably hasn&rsquo;t.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=drive-unit-oil">Book drive-unit oil service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
