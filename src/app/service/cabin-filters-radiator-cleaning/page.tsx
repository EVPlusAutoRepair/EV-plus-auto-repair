import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Cooling Service in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla cabin filter replacement & radiator cleaning in Sun Valley, LA. Better airflow, cooling & AC. Tesla-only. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "How often should Tesla cabin filters be replaced?",
    a: "Tesla recommends roughly every 2 years, but LA dust, wildfire smoke seasons, and heavy AC use can clog them sooner. If airflow feels weak or there's a musty smell, they're due.",
  },
  {
    q: "Why does my Tesla's radiator get so dirty?",
    a: "The front intake sits low and collects leaves, dirt, and road debris—especially with street parking. It packs in over time and restricts airflow to the radiator and condenser.",
  },
  {
    q: "Does a dirty radiator actually matter?",
    a: "Yes. It reduces cooling efficiency for both the cabin AC and the battery thermal system. In LA summers, that's the difference between cold air and a struggling system.",
  },
  {
    q: "Is this something I can do myself?",
    a: "Cabin filters are DIY-able if you're handy. The radiator wash-down involves removing panels and doing it without damaging fins or electronics—most owners prefer we handle it.",
  },
];

export default function CabinFiltersRadiator() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service Center", href: "/service" }, { label: "Tesla Cooling Service" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service Center</div>
          <h1>Tesla Cabin Filters &amp; Radiator Cleaning</h1>
          <p className="lede">Musty AC? Weak airflow? Two of the most neglected maintenance items on a Tesla—and both affect your daily comfort. Quick, affordable, and most owners never think about them.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My AC smells musty.&rdquo;</h2>
          <p className="lede">Two of the most neglected maintenance items on a Tesla, and both affect your daily comfort: clogged cabin filters (weak airflow, musty smells, dusty cabin) and a debris-packed radiator/condenser (the front intake collects leaves and dirt, choking the cooling system your battery and AC depend on).</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Filters out, debris out.</h2>
            <p className="lede">We replace your cabin air filters with quality filters and do a proper wash-down of the radiator and condenser area—clearing the leaves, dirt, and debris that accumulate in the front intake. Better airflow inside, better cooling outside, and an AC system that doesn&rsquo;t have to fight to do its job.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>It&rsquo;s tied to battery thermal management.</h2>
            <p className="lede">Tesla&rsquo;s front intake design collects debris aggressively—we&rsquo;ve pulled shocking amounts of material out of radiators on video. And the cooling system doesn&rsquo;t just cool the cabin; it&rsquo;s tied to battery thermal management. A choked radiator makes everything work harder. This is a maintenance item most owners (and most general shops) never think about, which is exactly why we check it.</p>
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
            <h2>Weak airflow, musty AC, or never cleaned your radiator? Quick, affordable maintenance.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=cabin-filter">Book filter &amp; cooling service</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
