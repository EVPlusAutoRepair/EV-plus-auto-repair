import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Won't Open, Start or Drive? LA Fix | EV+ Auto Repair",
  description:
    "Tesla door won't open, key not detected, or car won't go into drive? Sun Valley, LA diagnostics find the fault fast. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "My Tesla door won't open or close. What should I do?",
    a: "Don't force it—forcing a stuck door or handle can turn a small fix into a bigger one. A door that won't open or close can come from the handle, the latch, the window regulator, or the low-voltage system. Book a diagnostic and we'll find which one it is.",
  },
  {
    q: "My Tesla says key not detected / my phone key isn't working.",
    a: "Key and phone-key problems can come from the key itself, the phone's Bluetooth settings, or the car. Before you book, try your key card—if the key card works, the problem is likely with the phone key, not the car. If nothing works, we can diagnose it at the shop.",
  },
  {
    q: "My Tesla won't go into drive or won't shift. Is that serious?",
    a: "A Tesla that won't shift into drive needs a proper diagnostic—there are several possible causes, from the low-voltage battery to a shifter or drivetrain fault. Don't keep trying to force it. Book a diagnostic and we'll find the cause before quoting any repair.",
  },
  {
    q: "My Tesla window won't go up or down. Can you fix it?",
    a: "Yes—window problems are usually the regulator, the motor, or the switch, and we diagnose which one before replacing anything. A window stuck down is worth booking quickly, for your car's security if nothing else.",
  },
  {
    q: "Could the 12V battery be causing this?",
    a: "Possibly. A weak 12V battery can cause doors, locks, and electronics to behave strangely—and it can mimic much bigger problems. That's why our diagnostic checks the low-voltage system early. If the 12V is the culprit, see our 12V battery service for testing and replacement.",
  },
];

export default function TeslaWontOpenStartDrive() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Won't Open, Start or Drive" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Won&rsquo;t Open, Start or Drive</h1>
          <p className="lede">Door won&rsquo;t open, key not detected, window stuck down, car won&rsquo;t go into drive—when your Tesla won&rsquo;t cooperate, we find out why before we quote the fix.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;It was fine yesterday. Now it won&rsquo;t do anything.&rdquo;</h2>
          <p className="lede">A Tesla that won&rsquo;t unlock, won&rsquo;t open a door, won&rsquo;t roll a window up, or won&rsquo;t shift into drive is stressful—and the cause could be small or serious. The handles, latches, locks, keys, shifter, and low-voltage system all have to work together, and when one of them doesn&rsquo;t, the car can feel completely dead even when the main battery is fine.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we diagnose it</div>
            <h2>We find it first. Then we quote it.</h2>
            <p className="lede">Book a free inspection and we test the car in person—locks and handles, key and phone-key function, window operation, shifter function, and the low-voltage system. If it&rsquo;s something complex—an electrical fault, a module, or a drivetrain issue that needs Toolbox—we&rsquo;ll book a Diagnostic &amp; Error Code Testing appointment instead, with its own fee and up to 48 hours. Either way, you get a clear answer on what&rsquo;s actually wrong, what it will take to fix it, and what it costs—before any repair work starts.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Doors, windows &amp; keys</div>
            <h2>One stuck door can lock you out of the whole car.</h2>
            <p className="lede">Doors that won&rsquo;t open or close, windows that won&rsquo;t go up or down, and keys the car won&rsquo;t recognize are usually tied to the handle, latch, regulator, or the car&rsquo;s low-voltage electronics. We diagnose the specific part before replacing anything—no guessing, no replacing parts until we&rsquo;ve confirmed the fault.</p>
            <p className="lede" style={{ marginTop: 16 }}>Backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Won&rsquo;t go into drive</div>
            <h2>Don&rsquo;t force it—get it checked.</h2>
            <p className="lede">A Tesla that won&rsquo;t shift into drive or won&rsquo;t start can have several possible causes, and some of them are simple—including a weak <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>12V battery</a>, which can mimic serious faults. A diagnostic sorts the simple from the serious before you spend anything on repairs. Ask about a rental while your Tesla is with us—optional, based on availability.</p>
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
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>Tesla 12V Battery</a>
              {" · "}
              <a href="/service/maintenance-inspections" style={{ color: "var(--acc)" }}>Maintenance &amp; Inspections</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Tesla won&rsquo;t open, start, or shift? Book a diagnostic and find out what it is.</h2>
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
