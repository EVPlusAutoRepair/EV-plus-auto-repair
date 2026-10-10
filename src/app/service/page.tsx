import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Tesla Service Center in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla maintenance & repair in Los Angeles: inspections, drive-unit oil, suspension, 12V & HV battery replacement, diagnostics. Free estimates—(818) 281-7757.",
};

const services = [
  { t: "Maintenance & inspections", d: "Free inspections, scheduled maintenance, the stuff Tesla doesn't tell you about.", href: "/service/maintenance-inspections" },
  { t: "Suspension & steering", d: "Creaks, clunks, vibrations, control arms, bushings.", href: "/service/suspension-steering" },
  { t: "Cabin filters & radiator cleaning", d: "Airflow, cooling efficiency, the dirty jobs.", href: "/service/cabin-filters-radiator-cleaning" },
  { t: "Drive-unit / gearbox oil service", d: "Yes, your Tesla has oil. We service it.", href: "/service/drive-unit-oil-service" },
  { t: "Tire rotation", d: "Every 6,250 miles—EVs eat tires unevenly.", href: "/service/tire-rotation" },
  { t: "12V battery service", d: "Testing & replacement—the little battery that causes big problems.", href: "/service/12v-battery-replacement" },
  { t: "16V lithium battery service", d: "For newer Teslas with the 16V low-voltage battery.", href: "/service/16v-battery-service" },
  { t: "Diagnostics", d: 'Warning lights, error messages, "something feels off."', href: "/service/diagnostics" },
  { t: "HV battery replacement", d: "Failed pack? We replace it with a low-mileage used battery.", href: "/service/hv-battery-service" },
];

const faqs = [
  { q: "Do Teslas need maintenance?", a: "Yes—just not the same maintenance as gas cars. Cabin filters, 12V battery, drive-unit oil, suspension wear, cooling system cleaning." },
  { q: "How often should I service my Tesla?", a: "Depends on mileage and model; book a free inspection and we'll tell you honestly." },
  { q: "Do you work on gas vehicles?", a: "Our service center is Tesla-only. (We do collision/body repair on gas vehicles—see our Collision Center.)" },
];

export default function ServiceCenter() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Service Center—Los Angeles</h1>
          <p className="lede">Your Tesla doesn&rsquo;t need a general mechanic&mdash;it needs people who work on Teslas all day, every day. Our service center handles everything your Tesla needs: maintenance, repairs, batteries, and diagnostics. Tesla vehicles only. If you need help with body work or collision, <a href="/collision" style={{ color: "var(--acc)" }}>click here</a>!</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s) => (
              <a className="svc" href={s.href} key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="more">Learn more →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 72 }}>
            <div className="kicker">Why service with us</div>
            <h2>Done right, the first time.</h2>
            <ul className="ticks" style={{ maxWidth: 560 }}>
              <li><b>Tesla specialists</b>—not a general shop</li>
              <li><b>Free inspections</b> &amp; estimates</li>
              <li><b>6-12 months labor warranty</b></li>
              <li><b>Photo updates</b> during every repair</li>
              <li><b>On-site Tesla rentals</b> if the job takes days</li>
            </ul>
          </div>

          <div className="faq">
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
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
