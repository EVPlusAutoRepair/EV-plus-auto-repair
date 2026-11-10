import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Screen & Autopilot Repair in LA | EV+ Auto Repair",
  description:
    "Tesla touchscreen frozen or black, Autopilot unavailable, Sentry Mode not recording? Sun Valley, LA diagnostics. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "My Tesla touchscreen is frozen or black. What should I do?",
    a: "A frozen or black screen can be a software glitch or a hardware fault. Try a screen reset first (hold both scroll wheels until the screen restarts). If the screen stays black, won't respond, or keeps freezing, book a diagnostic—we'll find out whether it's software or the screen itself.",
  },
  {
    q: "Why is Autopilot not working or showing as unavailable?",
    a: "Autopilot can become unavailable for several reasons—camera or sensor issues, calibration after a repair, or a software fault. A diagnostic checks the cameras, sensors, and system status to find the cause before quoting any repair.",
  },
  {
    q: "Why isn't Sentry Mode recording?",
    a: "The most common cause is the USB drive: Sentry Mode and Dashcam need a working, properly formatted USB drive with enough free space. We sell the 128GB Tesla USB drive (from $29.99) at the shop—ask us about it when you book. If a good drive still doesn't record, the fault may be in the car's USB port or software, and a diagnostic will find it.",
  },
  {
    q: "My Dashcam isn't recording. Is it the same problem as Sentry Mode?",
    a: "Usually, yes—Dashcam and Sentry Mode share the same USB drive and recording system, so a drive problem affects both. If a known-good drive doesn't fix it, book a diagnostic and we'll check the car's side of the system.",
  },
  {
    q: "Can you fix a Tesla screen, or does it need to go to Tesla?",
    a: "Many screen problems—software faults, resets, and some hardware issues—we can diagnose and repair at the shop. Book a diagnostic and we'll tell you honestly whether we can fix it or whether it needs a dealer-only part.",
  },
];

export default function TeslaTouchscreenAutopilotSentry() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Touchscreen, Autopilot & Sentry Mode" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Touchscreen, Autopilot &amp; Sentry Mode</h1>
          <p className="lede">Frozen or black screen, Autopilot unavailable, Sentry Mode or Dashcam not recording—when your Tesla&rsquo;s tech stops working, we diagnose the cause before we quote the fix.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;The screen is dead—and everything runs through the screen.&rdquo;</h2>
          <p className="lede">On a Tesla, the touchscreen controls nearly everything: climate, navigation, charging, driving settings. When it freezes, goes black, or stops responding, the car feels broken even if it still drives. Autopilot going unavailable and Sentry Mode or Dashcam not recording are the same kind of problem—something in the car&rsquo;s computer, cameras, or storage isn&rsquo;t doing its job, and the screen may not tell you which part.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we diagnose it</div>
            <h2>We find it first. Then we quote it.</h2>
            <p className="lede">Book a paid diagnostic and we check the car in person—screen function and software state, camera and sensor status, and the USB recording setup. You get a clear answer on what&rsquo;s actually wrong, what it will take to fix it, and what it costs—before any repair work starts.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Sentry Mode &amp; Dashcam</div>
            <h2>Start with the USB drive.</h2>
            <p className="lede">Sentry Mode and Dashcam record to a USB drive, and a worn-out, full, or wrongly formatted drive is the most common reason they stop recording. We sell the <a href="/shop" style={{ color: "var(--acc)" }}>128GB Tesla USB drive (from $29.99)</a> at the shop—ask for one when you book, or pick one up with your visit. If a good drive still doesn&rsquo;t record, the problem is in the car, and a diagnostic will find it.</p>
            <p className="lede" style={{ marginTop: 16 }}>Backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Autopilot unavailable</div>
            <h2>Cameras, sensors, calibration—or software.</h2>
            <p className="lede">Autopilot depends on the car&rsquo;s cameras and sensors working together, and it can drop out after a repair, a camera fault, or a software issue. We check the system in person rather than guessing from the warning message, and we&rsquo;ll tell you honestly if the fix is something we can do at the shop.</p>
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
              <a href="/shop" style={{ color: "var(--acc)" }}>Tesla USB Drives</a>
              {" · "}
              <a href="/service/12v-battery-replacement" style={{ color: "var(--acc)" }}>Tesla 12V Battery</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Screen frozen, Autopilot down, or Sentry not recording? Book a diagnostic.</h2>
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
