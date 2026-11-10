import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Software Update Problems in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla software update help in Sun Valley, LA. Update stuck, failed, or acting odd after one? We diagnose update problems. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "Why hasn't my Tesla received a software update yet?",
    a: "Tesla rolls updates out in stages, so cars get the same update days or weeks apart. A car that hasn't been offered an update yet is usually just waiting its turn, not broken.",
  },
  {
    q: "My software update is stuck. What should I do?",
    a: "Don't force it. If the download or install sits at the same percentage for many hours, or keeps failing, bring it in—we check the Wi-Fi connection, the install state, and the car's fault codes to find where it's hanging.",
  },
  {
    q: "My Tesla is acting strange after a software update. Is the update the cause?",
    a: "Sometimes a new version exposes an existing fault, and sometimes the install itself didn't finish cleanly. We run diagnostics to tell the difference instead of guessing.",
  },
  {
    q: "Can the shop install a newer software version for me?",
    a: "No—and nobody should offer to sell you one. Software updates come from Tesla over Wi-Fi; the shop doesn't sell software. What we do is diagnose why an update won't download, install, or finish, and fix the underlying problem.",
  },
  {
    q: "Could a weak 12V battery cause update problems?",
    a: "Yes—a weak low-voltage battery can interrupt downloads and installs. It's one of the things we check when an update keeps failing. Ask for pricing for your specific year and model.",
  },
];

export default function SoftwareUpdate() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Software Update" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Software Update Help</h1>
          <p className="lede">Update stuck, failed, or your Tesla acting odd after one? Your car normally updates itself over Wi-Fi—when it won&rsquo;t, we diagnose why.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;My update has been stuck for hours.&rdquo;</h2>
          <p className="lede">A software update that won&rsquo;t download, won&rsquo;t install, or fails partway through is stressful—especially when the car starts behaving differently afterwards. The update itself is rarely the whole story: weak Wi-Fi, an interrupted install, or a low-voltage battery on its way out can all stop an update in its tracks.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">What software updates do</div>
            <h2>New features, fixes, and improvements—from Tesla.</h2>
            <p className="lede">Tesla software updates bring new features, bug fixes, and improvements to your car, delivered over Wi-Fi while it&rsquo;s parked. You don&rsquo;t buy them and you don&rsquo;t book them—they arrive when Tesla rolls them out to your car. Our job starts when that normal process breaks down.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we help</div>
            <h2>Diagnose the stall, don&rsquo;t force the update.</h2>
            <p className="lede">We check the car&rsquo;s Wi-Fi connection, the state of the download and install, the fault codes, and the low-voltage battery health—then fix the underlying problem so the update can finish normally. If the car needs a deeper diagnostic, we&rsquo;ll tell you before doing anything else.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>Updates touch everything in the car.</h2>
            <p className="lede">Because one update touches the screens, the driving systems, and the car&rsquo;s computers all at once, a failed install can look like a dozen different faults. A Tesla-focused diagnostic sorts out which ones are real and which are just the update not finishing.</p>
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
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
              {" · "}
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>12V Battery Service</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Software update stuck or failing? Let&rsquo;s find out why—book a diagnostic.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=service&service=diagnostics">Book software update diagnostic</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
