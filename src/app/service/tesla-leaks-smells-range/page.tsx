import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Leak, Smell & Range Loss Diagnosis LA | EV+ Auto Repair",
  description:
    "Tesla fluid leak, burning smell, or range dropped suddenly? Sun Valley, LA diagnostics find the cause fast — book today. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "There's a fluid leak under my Tesla. What could it be?",
    a: "A puddle under a Tesla is usually coolant, drive-unit oil, or washer fluid—water from the air conditioning is normal. Note the color and location of the fluid and whether the car shows any warning, then book a diagnostic. We'll identify the fluid and its source on the lift before quoting any repair.",
  },
  {
    q: "My Tesla has a burning smell. Is it safe to drive?",
    a: "A burning smell is worth checking promptly, especially if it's strong, new, or paired with a warning message. It can come from several sources—brakes, a cooling-system issue, or an electrical fault. If the smell is strong or you see smoke, don't drive it; call us and we'll advise on getting it to the shop.",
  },
  {
    q: "My Tesla's range dropped suddenly. What causes that?",
    a: "Sudden range loss can come from a real battery issue, but it can also come from something simpler—a failing 12V battery, a software change, cold weather, or a cooling-system problem. A diagnostic checks the simple causes first before anyone talks about the high-voltage battery.",
  },
  {
    q: "My Tesla shows an error or warning message. What should I do?",
    a: "Note the exact message and when it appears, then book a diagnostic. Warning messages can mean anything from a low 12V battery to a drivetrain fault—and the same message can have different causes on different cars. We read the car's fault codes in person rather than guessing from the message alone.",
  },
  {
    q: "My Tesla's battery is draining fast while parked. Why?",
    a: "Fast drain while parked can come from features that keep the car awake—Sentry Mode, Cabin Overheat Protection, or frequent app wake-ups—as well as from a fault. If you've ruled out the features and the drain is still unusual, book a diagnostic and we'll check for what's keeping the car awake.",
  },
];

export default function TeslaLeaksSmellsRange() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Leaks, Smells & Range" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Leaks, Smells &amp; Range Loss</h1>
          <p className="lede">Fluid under the car, a burning smell, range that dropped overnight, a warning message you don&rsquo;t recognize—we find the cause before we quote the fix.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;Something&rsquo;s leaking—and I don&rsquo;t know what it is.&rdquo;</h2>
          <p className="lede">A puddle under your Tesla, a smell you can&rsquo;t place, or range that fell off a cliff overnight are all symptoms that could mean several different things. A leak could be coolant, drive-unit oil, or washer fluid. A smell could be brakes, cooling, or electrical. A range drop could be the high-voltage battery—or something far simpler. The only way to know is to look at the car.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we diagnose it</div>
            <h2>We find it first. Then we quote it.</h2>
            <p className="lede">Book a free inspection and we look at the car in person—on the lift for leaks, and the low-voltage and cooling systems checked for range and drain complaints. If it&rsquo;s something complex—air conditioning, a high-voltage battery concern, or a fault that needs Toolbox—we&rsquo;ll book a Diagnostic &amp; Error Code Testing appointment instead, with its own fee and up to 48 hours. Either way, you get a clear answer on what&rsquo;s actually wrong, what it will take to fix it, and what it costs—before any repair work starts.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Range &amp; battery worries</div>
            <h2>Check the simple causes before the scary ones.</h2>
            <p className="lede">A sudden range drop or fast battery drain doesn&rsquo;t automatically mean a high-voltage battery problem. In general terms, the 12V battery can mimic serious faults—including scary-sounding battery errors—so we test it early. Cold weather, features that keep the car awake, and cooling-system issues can all eat range too. If a range concern does point to the high-voltage battery, see our <a href="/service/hv-battery-service" style={{ color: "var(--acc)" }}>high-voltage battery service</a>—but start with a diagnostic, not an assumption.</p>
            <p className="lede" style={{ marginTop: 16 }}>Backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Leaks &amp; smells</div>
            <h2>Note the color, the spot, and the smell—then call us.</h2>
            <p className="lede">If you can, note the color of the fluid, where under the car it appears, and whether any warning shows on the screen—that helps us find it faster. A burning smell that&rsquo;s strong, new, or paired with a warning is worth booking promptly. And if your Tesla has a water leak into the cabin, book a diagnostic so we can trace where the water is getting in.</p>
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
              <a href="/service/drive-unit-oil-service" style={{ color: "var(--acc)" }}>Drive-Unit Oil Service</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Leak, smell, range drop, or warning message? Book a diagnostic and find out what it is.</h2>
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
