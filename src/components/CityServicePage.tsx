import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export type CityPageSection = {
  kicker: string;
  heading: string;
  paragraphs: string[];
  ticks?: string[];
};

export type CityPageData = {
  crumbLabel: string;
  kicker: string;
  h1: string;
  lede: string;
  sections: CityPageSection[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  ctaHeading: string;
  bookHref: string;
  bookLabel: string;
};

export default function CityServicePage({ data }: { data: CityPageData }) {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={data.faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <Breadcrumbs trail={[{ label: data.crumbLabel }]} />
        </div>
        <div className="wrap">
          <div className="kicker">{data.kicker}</div>
          <h1>{data.h1}</h1>
          <p className="lede">{data.lede}</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          {data.sections.map((s, i) => (
            <div key={s.heading} style={{ marginTop: i === 0 ? 0 : 56 }}>
              <div className="kicker">{s.kicker}</div>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="lede" style={{ marginTop: j === 0 ? 0 : 16 }}>
                  {p}
                </p>
              ))}
              {s.ticks && (
                <ul className="ticks" style={{ marginTop: 20, maxWidth: 640 }}>
                  {s.ticks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

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
            <div className="kicker">Keep exploring</div>
            <h2>More from EV+.</h2>
            <p className="lede">
              {data.related.map((r, i) => (
                <span key={r.href}>
                  {i > 0 && " · "}
                  <a href={r.href} style={{ color: "var(--acc)" }}>
                    {r.label}
                  </a>
                </span>
              ))}
            </p>
          </div>

          <div className="faq" style={{ marginTop: 56 }}>
            {data.faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="cta-band" style={{ marginTop: 48 }}>
            <h2>{data.ctaHeading}</h2>
            <div className="hero-ctas">
              <a className="btn" href={data.bookHref}>
                {data.bookLabel}
              </a>
              <a className="btn btn-ghost" href="tel:+18182817757">
                Call/text (818) 281-7757
              </a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
