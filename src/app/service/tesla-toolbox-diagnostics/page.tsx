import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Toolbox Diagnostics in Los Angeles | EV+ Auto Repair",
  description:
    "What is Tesla Toolbox? Tesla's own diagnostic software explained — fault codes, tests, calibration — and how Tesla diagnostics work at EV+ in LA.",
};

const faqs = [
  {
    q: "What is Tesla Toolbox?",
    a: "Tesla Toolbox is Tesla's own diagnostic software — the service tool Tesla built for working on its cars. A technician connects to the car through it to read what the car's systems are reporting, rather than guessing from the symptom alone.",
  },
  {
    q: "What can Toolbox diagnostics show a technician?",
    a: "In general terms: fault codes and warning history, live data from the car's systems, and the results of guided tests. It can also be used for calibration and software-related service steps after a repair, where the job calls for them.",
  },
  {
    q: "Does every Tesla problem need a Toolbox diagnostic?",
    a: "No. Some problems are found by inspection, a road test, or a basic scan. Toolbox-level diagnostics matter most when there is a warning light, an error message, an intermittent fault, or a problem that has already been misdiagnosed once.",
  },
  {
    q: "How do diagnostics work at EV+ Auto Repair?",
    a: "There are two different appointments. A free 1-hour inspection covers mechanical or visual concerns — suspension noises, coolant, 12V battery concerns, and certain drive-unit symptoms. A Diagnostic & Error Code Testing appointment is for air conditioning problems, red or orange alerts on your screen, electrical problems, modules, high-voltage battery concerns, and drive-unit faults — issues that require accessing the software side of the car, and may require a more advanced diagnostic using Tesla Toolbox. Diagnostic appointments have a separate fee — ask for pricing — and we may need to keep your Tesla for up to 48 hours depending on the concern. See Tesla Diagnostics for how a visit works.",
  },
  {
    q: "Why diagnose first instead of just replacing the part?",
    a: "Because the same warning can have several causes, and the same part can fail for different reasons. Replacing parts without testing is how owners end up paying twice — once for the wrong part, and again for the real fix. A proper diagnostic narrows it down first.",
  },
];

export default function TeslaToolboxDiagnostics() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Toolbox Diagnostics" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Toolbox Diagnostics</h1>
          <p className="lede">Your Tesla talks to itself constantly — fault codes, sensor readings, warnings you never see. Toolbox is Tesla&rsquo;s own way of listening in. Here&rsquo;s what it is, what it does, and why it matters before anyone replaces a part.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">What it is</div>
          <h2>Tesla&rsquo;s own diagnostic software.</h2>
          <p className="lede">Tesla Toolbox is the diagnostic and service software Tesla built for its own cars. When a technician connects to your Tesla through Toolbox, they can see what the car&rsquo;s systems are reporting — battery management, drive units, thermal, charging, driver assistance, and the rest — in Tesla&rsquo;s own terms, not through a generic scanner&rsquo;s best guess.</p>
          <p className="lede" style={{ marginTop: 16 }}>That matters because a Tesla is not a gas car with a battery bolted on. Its systems are deeply connected, so a warning in one place can be caused by a fault somewhere else entirely. Reading the car in its own language is the starting point for getting the diagnosis right.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">What it does</div>
            <h2>Read, test, then calibrate.</h2>
            <p className="lede">In general terms, Toolbox lets a technician read fault codes and warning history, look at live data while the car is running, and run guided tests on individual systems to confirm — or rule out — a suspected cause. After certain repairs, it can also be used for calibration and software-related service steps, so the car knows the new part is there and works with it correctly.</p>
            <p className="lede" style={{ marginTop: 16 }}>None of that replaces a technician&rsquo;s judgment. The software reports what the car sees; the technician still has to interpret it, test it against the symptom you described, and decide what actually needs fixing.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How diagnostics work here</div>
            <h2>Start with the car&rsquo;s own evidence.</h2>
            <p className="lede">At EV+ Auto Repair in Sun Valley, Los Angeles, diagnostics start with the symptom and the car&rsquo;s own fault data: we listen to what&rsquo;s wrong, scan the car&rsquo;s systems, read the fault codes, and investigate — warning lights, error messages, noises, vibrations, charging issues, or anything that &ldquo;feels off.&rdquo; For software-side concerns, that can mean connecting Tesla Toolbox to your car to read the error codes, as the shop explains in its October 4, 2026 inspection-vs.-diagnostic video. Then we explain what we found and what it takes to fix it, and you approve the work before we go further. See <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Tesla Diagnostics</a> for how a diagnostic visit works.</p>
            <p className="lede" style={{ marginTop: 16 }}>We&rsquo;re an independent, family-owned Tesla service and collision shop — not affiliated with, approved by, endorsed by, or sponsored by Tesla, Inc.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Why it matters</div>
            <h2>Diagnose first. Replace once.</h2>
            <p className="lede">Proper diagnostics matter because guessing is expensive. A warning light can mean a failing part, a bad sensor, a software issue, or a problem upstream of the part that&rsquo;s complaining. Replacing the part the warning names — without testing — is how a simple fix turns into two bills and a car that still isn&rsquo;t right. The diagnostic step is what keeps the repair list honest: fix what&rsquo;s actually wrong, leave what isn&rsquo;t, and tell you what can wait.</p>
            <p className="lede" style={{ marginTop: 16 }}>Every repair is backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
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
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Tesla Diagnostics</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
              {" · "}
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>12V Battery Replacement</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Warning light? Error message? Something just feels off? Start with a diagnostic.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=diagnostics">Book a diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
