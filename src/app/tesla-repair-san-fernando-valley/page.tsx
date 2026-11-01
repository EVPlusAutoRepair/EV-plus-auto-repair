import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Repair in San Fernando Valley | EV+ Auto Repair",
  description:
    "Tesla service & EV collision repair for the San Fernando Valley. Family-owned shop in Sun Valley — maintenance, batteries, accident repair, free inspections. Call (818) 281-7757.",
};

const areas = [
  "Burbank",
  "Glendale",
  "North Hollywood",
  "Van Nuys",
  "Sherman Oaks",
  "Studio City",
  "Encino",
  "Reseda",
  "Northridge",
  "Panorama City",
  "Pacoima",
  "Sunland",
  "Tujunga",
  "La Crescenta",
  "Mission Hills",
  "San Fernando",
];

const faqs = [
  {
    q: "Where in the San Fernando Valley do you serve?",
    a: "Our shop is in Sun Valley, and Tesla owners come to us from across the Valley — Burbank, Glendale, North Hollywood, Van Nuys, Sherman Oaks, Northridge, and everywhere in between. If you're in the SFV, you're in our backyard.",
  },
  {
    q: "Do you only work on Teslas?",
    a: "Our service center is Tesla-only — maintenance, diagnostics, batteries, suspension, and repairs. That's what makes us good at it. Our collision center also handles body repair for other EVs and gas vehicles.",
  },
  {
    q: "Do I need an appointment, or can I just come by?",
    a: "Book a free 1-hour inspection online and pick your time, or call us at (818) 281-7757. Walk-ins are welcome when the schedule allows, but booking ahead guarantees your slot.",
  },
  {
    q: "What if my Tesla needs to stay for a few days?",
    a: "We have Teslas available to rent on-site (subject to availability), so you can drop yours off and drive off in another Tesla. Ask us when you book.",
  },
  {
    q: "Do you work with insurance for collision repair?",
    a: "Yes. We handle insurance claims directly — documentation, adjuster coordination, and supplements. In California, you choose the shop, not the insurance company.",
  },
];

export default function SanFernandoValley() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Tesla Repair San Fernando Valley" }]} /></div>
        <div className="wrap">
          <div className="kicker">Serving the Valley since 2016</div>
          <h1>Tesla Repair in the San Fernando Valley</h1>
          <p className="lede">Family-owned Tesla service center and EV collision shop in Sun Valley — ten minutes from Burbank, twenty from Sherman Oaks. Tesla-only service, honest answers, free inspections.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The shop</div>
          <h2>A Tesla shop that&rsquo;s actually in your neighborhood.</h2>
          <p className="lede">Most Tesla owners in the Valley face the same choice: wait weeks for a Tesla service center appointment, or trust a general shop that rarely sees Teslas. We&rsquo;re the third option — a family-run shop in Sun Valley that works on Teslas all day, every day, since 2016. Maintenance, diagnostics, batteries, suspension, drive units, collision repair — if it&rsquo;s a Tesla, we know it.</p>
          <p className="lede" style={{ marginTop: 16 }}>Our service center is Tesla-only. Our collision center handles all EVs plus gas vehicles. Every job backs a <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>, and every visit starts with straight answers — if your car&rsquo;s fine, we&rsquo;ll tell you it&rsquo;s fine.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Areas we serve</div>
            <h2>Across the San Fernando Valley.</h2>
            <p className="lede">Tesla owners drive to us from all over the Valley:</p>
            <p className="lede" style={{ marginTop: 16 }}>{areas.join(" · ")}</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Find us</div>
            <h2>9755 Glenoaks Blvd, Sun Valley, CA 91352</h2>
            <div style={{ marginTop: 24, borderRadius: 12, overflow: "hidden" }}>
              <iframe
                title="EV+ Auto Repair on the map"
                src="https://www.google.com/maps?q=9755+Glenoaks+Blvd,+Sun+Valley,+CA+91352&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">What we do</div>
            <h2>Tesla service, EV collision, on-site rentals.</h2>
            <p className="lede">
              <a href="/service" style={{ color: "var(--acc)" }}>Tesla Service</a>
              {" · "}
              <a href="/collision" style={{ color: "var(--acc)" }}>Collision Repair</a>
              {" · "}
              <a href="/rentals" style={{ color: "var(--acc)" }}>Tesla Rentals</a>
              {" · "}
              <a href="/book" style={{ color: "var(--acc)" }}>Book a free inspection</a>
            </p>
          </div>

          <div className="faq" style={{ marginTop: 56 }}>
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <p className="lede">Ready when you are — <a href="/book" style={{ color: "var(--acc)" }}>book your free inspection</a> or call <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a>.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
