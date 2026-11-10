import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla AC Not Cold? Repair in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla AC blowing warm or weak in Sun Valley, LA? Cabin filter, clogged radiator/condenser, or refrigerant—we find why. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why is my Tesla AC blowing warm air?",
    a: "The usual suspects are a clogged cabin filter, a radiator or condenser choked with debris, low refrigerant, or a fault in the AC system itself. The fix depends on the cause, so we diagnose before we quote.",
  },
  {
    q: "Could it just be the cabin filter?",
    a: "Often, yes—a clogged cabin filter chokes airflow and makes the AC feel weak even when the system is fine. A cabin filter replacement is $115 and is one of the first things we check.",
  },
  {
    q: "What does a clogged radiator or condenser have to do with my AC?",
    a: "A lot. The condenser needs clean airflow to shed heat, and Teslas collect leaves and road debris in the radiator area. If it's clogged, the AC can't cool properly—and the car can run hot too. A radiator cleaning is $150/yr (Tesla $330–$350).",
  },
  {
    q: "My AC is cold sometimes and warm other times. What does that mean?",
    a: "Intermittent cooling can point to low refrigerant, a failing component, or airflow that changes with speed and conditions. Bring it in while it's acting up if you can—intermittent problems are easiest to catch when they're happening.",
  },
];

export default function TeslaACNotCold() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla AC Not Cold" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla AC Not Cold?</h1>
          <p className="lede">Weak airflow, warm air, or AC that only works sometimes. In LA heat, that&rsquo;s not a minor annoyance—and the cause is usually one of a few common things we can check quickly.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My Tesla AC used to freeze me out. Now it&rsquo;s barely cool.&rdquo;</h2>
          <p className="lede">AC that fades gradually is easy to ignore until the first real heat wave—and then it&rsquo;s miserable. The cause is usually simple: a cabin filter that hasn&rsquo;t been changed, a radiator and condenser packed with leaves and debris, or refrigerant that&rsquo;s low. Sometimes it&rsquo;s a deeper AC fault. Either way, guessing at it wastes money.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Start with the simple causes. Then go deeper.</h2>
            <p className="lede">We check the cabin filter and the radiator/condenser airflow first—those are the most common culprits and the cheapest fixes. If the AC still isn&rsquo;t cold, we test the system for refrigerant level and faults before quoting any repair. You&rsquo;ll know the cause and the cost before we do the work.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Debris in the radiator area is a Tesla pattern.</h2>
            <p className="lede">Teslas pull a surprising amount of leaves and road debris into the radiator area, and a clogged condenser can&rsquo;t shed heat—so the AC blows warm even when the system itself is healthy. See our <a href="/service/cabin-filters-radiator-cleaning" style={{ color: "var(--acc)" }}>cabin filter &amp; radiator cleaning</a> and <a href="/service/radiator-condenser-cleaning" style={{ color: "var(--acc)" }}>radiator &amp; condenser cleaning</a> pages for what that service covers.</p>
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
              <a href="/service/radiator-condenser-cleaning" style={{ color: "var(--acc)" }}>Radiator &amp; Condenser Cleaning</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>AC blowing warm? Book a diagnostic and we&rsquo;ll find the cause.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=other">Book AC diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
