import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Radiator & Condenser Cleaning in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla radiator & condenser cleaning in Sun Valley, LA — $150, once a year. Tesla charges $330-$350 for the same job. Better cooling, better AC. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why does my Tesla's radiator get so dirty?",
    a: "The front intake sits low and collects leaves, dirt, and road debris — especially with street parking. It packs in over time and restricts airflow to the radiator and condenser. We've pulled shocking amounts of material out of radiators on video.",
  },
  {
    q: "How often should a Tesla radiator be cleaned?",
    a: "Once a year. LA dust, leaves, and wildfire smoke seasons clog the intake faster than most owners expect. If your AC feels weak or the cooling system is working overtime in summer, it's overdue.",
  },
  {
    q: "How much does Tesla charge for radiator cleaning?",
    a: "Tesla charges $330-$350 for a radiator cleaning. We do the same job for $150 — a proper wash-down of the radiator and condenser area, clearing the leaves, dirt, and debris from the front intake.",
  },
  {
    q: "Does a dirty radiator actually matter?",
    a: "Yes. It reduces cooling efficiency for both the cabin AC and the battery thermal system. In LA summers, that's the difference between cold air and a struggling system — and a cooling system working overtime wears faster.",
  },
  {
    q: "Is this something I can do myself?",
    a: "The wash-down involves removing panels and doing it without damaging fins or electronics — most owners prefer we handle it. It's a quick, affordable maintenance visit.",
  },
];

export default function RadiatorCondenserCleaning() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Radiator & Condenser Cleaning" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Radiator &amp; Condenser Cleaning</h1>
          <p className="lede">Weak AC? A cooling system working overtime? Your Tesla&rsquo;s front intake collects leaves, dirt, and debris all year — and a packed radiator chokes the cooling your battery and AC depend on. We clean it properly for $150. Tesla charges $330-$350 for the same job.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My AC isn&rsquo;t as cold as it used to be.&rdquo;</h2>
          <p className="lede">Tesla&rsquo;s front intake sits low and collects everything the road throws at it — leaves, dirt, dust, and debris. Over a year it packs in tight, restricting airflow to the radiator and condenser. The AC struggles, the battery thermal system works harder, and most owners never think to look behind the intake.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>A proper wash-down, once a year.</h2>
            <p className="lede">We remove the panels and do a proper wash-down of the radiator and condenser area — clearing the leaves, dirt, and debris that accumulate in the front intake without damaging fins or electronics. Better airflow, better cooling, and an AC system that doesn&rsquo;t have to fight to do its job. $150, once a year — Tesla charges $330-$350 for the same cleaning.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>It&rsquo;s tied to battery thermal management.</h2>
            <p className="lede">The cooling system doesn&rsquo;t just cool the cabin; it&rsquo;s tied to battery thermal management. A choked radiator makes everything work harder — the AC, the battery cooling, all of it. This is a maintenance item most owners (and most general shops) never think about, which is exactly why we check it on every inspection.</p>
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
              <a href="/service/cabin-filters-radiator-cleaning" style={{ color: "var(--acc)" }}>Cabin Filters &amp; Radiator Cleaning</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/blog/tesla-radiator-condenser-cleaning" style={{ color: "var(--acc)" }}>Tesla Radiator &amp; Condenser Cleaning</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Weak AC, or never cleaned your radiator? A $150 yearly cleaning beats a struggling cooling system.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=radiator-cleaning">Book radiator cleaning</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
