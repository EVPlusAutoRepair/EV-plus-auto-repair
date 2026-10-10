import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ADAS Calibration in Los Angeles | EV+ Auto Repair",
  description:
    "Tesla ADAS & camera calibration in Sun Valley, LA after collision or windshield repair. Autopilot systems recalibrated. Call/text (818) 281-7757.",
};

const faqs = [
  {
    q: "Why does my Tesla need calibration after a repair?",
    a: "Cameras and sensors are mounted to panels and glass. Move the panel (or replace the windshield) and the camera's view changes—the car needs to relearn its precise alignment.",
  },
  {
    q: "What happens if calibration is skipped?",
    a: "Autopilot errors, disabled safety features, persistent warnings—and systems you rely on not working when you need them.",
  },
  {
    q: "How long does calibration take?",
    a: "It varies by what was repaired. We include it in the repair timeline and confirm completion before pickup.",
  },
  {
    q: "Do you calibrate after windshield replacement?",
    a: "Yes—windshield replacement is one of the most common reasons a Tesla needs camera recalibration.",
  },
];

export default function ADASCalibration() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Collision Center", href: "/collision" }, { label: "ADAS Calibration" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Collision Center</div>
          <h1>Tesla ADAS &amp; Camera Calibration</h1>
          <p className="lede">Your Tesla sees the world through cameras and sensors. After a windshield replacement, bumper repair, or any front-end work, those cameras need recalibration. Some shops skip this step. We don&rsquo;t.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;After the repair, my autopilot acts weird.&rdquo;</h2>
          <p className="lede">Your Tesla sees the world through cameras and sensors. After a windshield replacement, bumper repair, or any front-end work, those cameras need recalibration—otherwise Autopilot, lane assist, and safety systems don&rsquo;t work correctly. Some shops skip this step. We don&rsquo;t.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we fix it</div>
            <h2>Calibrated to factory spec—and verified.</h2>
            <p className="lede">We calibrate your Tesla&rsquo;s cameras and driver-assistance systems to factory specification after collision repair, windshield replacement, or sensor-area bodywork—and we verify the systems actually function before the car leaves. (We&rsquo;ve documented the process on video—calibration isn&rsquo;t a checkbox, it&rsquo;s a procedure.)</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">The Tesla-specific part</div>
            <h2>On a Tesla, calibration is core to how the car drives.</h2>
            <p className="lede">Camera aiming and system verification all have to be right, or the car tells you about it every drive. We calibrate cameras in-house after bodywork, so nothing falls between two shops—ask us about radar and sensor calibration for your specific repair.</p>
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
              <a href="/collision" style={{ color: "var(--acc)" }}>Tesla Collision Center</a>
              {" · "}
              <a href="/collision/collision-repair" style={{ color: "var(--acc)" }}>Collision Repair</a>
              {" · "}
              <a href="/service/diagnostics" style={{ color: "var(--acc)" }}>Diagnostics</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Had bodywork or a windshield replaced? Make sure the calibration was done right.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book?lane=accident">Book calibration check</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
