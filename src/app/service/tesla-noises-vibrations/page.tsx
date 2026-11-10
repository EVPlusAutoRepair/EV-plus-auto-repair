import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqSchema from "@/components/FaqSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tesla Noises & Vibrations Fixed in LA | EV+ Auto Repair",
  description:
    "Tesla clicking, rattling, humming or shaking in Sun Valley, LA? We diagnose noises, vibrations & pulling to one side. Free estimates: (818) 281-7757.",
};

const faqs = [
  {
    q: "My Tesla makes a clicking noise when I turn. What could it be?",
    a: "A click or clunk on turns can come from several places—suspension parts, steering components, or the drivetrain. The only way to know is to have it inspected on a lift. We diagnose the noise before quoting any repair, so you don't pay for parts you don't need.",
  },
  {
    q: "Why does my Tesla vibrate or shake while driving?",
    a: "Vibration while driving is commonly tied to tires, wheels, or suspension, but it can also come from the drivetrain. A diagnostic checks each possibility in turn—wheel balance, tire condition, and suspension wear—before we recommend anything.",
  },
  {
    q: "My Tesla pulls to one side. Is that an alignment problem?",
    a: "Pulling to one side is often alignment-related, but uneven tire wear, tire pressure differences, or worn suspension parts can cause it too. We inspect the tires and suspension first, then align if that's what the car actually needs.",
  },
  {
    q: "My Tesla makes a humming or grinding noise. Is it safe to drive?",
    a: "A new humming or grinding noise is worth checking promptly—some causes are minor, others get worse (and more expensive) the longer they're driven on. If the noise is loud, getting worse, or paired with a warning on the screen, book a diagnostic and let us look before your next long drive.",
  },
  {
    q: "How much does a noise inspection cost?",
    a: "The inspection is free—we look at the car, find what's causing the noise, and tell you what it will take to fix it before any repair work starts. No work happens without your approval.",
  },
];

export default function TeslaNoisesVibrations() {
  return (
    <>
      <SiteNav />
      <FaqSchema faqs={faqs} />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "Service", href: "/service" }, { label: "Tesla Noises & Vibrations" }]} /></div>
        <div className="wrap">
          <div className="kicker">Tesla Service</div>
          <h1>Tesla Noises &amp; Vibrations</h1>
          <p className="lede">Clicking, rattling, humming, grinding, shaking, pulling to one side—your Tesla is telling you something. We find the source before we quote the fix.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">The problem</div>
          <h2>&ldquo;It never made that noise before.&rdquo;</h2>
          <p className="lede">Teslas are quiet cars, so a new noise stands out fast. A click over bumps, a rattle at low speed, a hum that grows with speed, a grind when braking, a shake in the steering wheel, or a car that drifts left or right—each one is a symptom, not a diagnosis. The same sound can come from the suspension, the tires, the brakes, or the drivetrain, and guessing wrong means paying for the wrong repair.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">How we diagnose it</div>
            <h2>We find it first. Then we quote it.</h2>
            <p className="lede">Book a free inspection and we put your Tesla on the lift, road-test it, and check the likely sources in turn—suspension components, tires and wheels, brakes, and drivetrain. You get a clear answer on what&rsquo;s actually causing the noise or vibration, what it will take to fix it, and what it costs—before any repair work starts.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">What we commonly find</div>
            <h2>General causes, confirmed on your car.</h2>
            <p className="lede">In general terms, noises and vibrations on a Tesla often trace back to worn suspension parts (when a control arm is worn, we replace the full control arm—never just the bushing), uneven tire wear or a damaged tire, brake wear, or a drivetrain issue. Which one it is on your car is something we confirm by inspection, not by guessing from a description.</p>
            <p className="lede" style={{ marginTop: 16 }}>Backed by our <b style={{ color: "var(--txt)" }}>6-12 months labor warranty</b>.</p>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Don&rsquo;t wait it out</div>
            <h2>A small noise now can be a big repair later.</h2>
            <p className="lede">Some noises are harmless. Others—especially grinding, loud clunking, or shaking that&rsquo;s getting worse—mean something is wearing out and taking neighboring parts with it. If the noise is new, loud, or changing, get it checked. A diagnostic is cheaper than the repair it prevents.</p>
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
              <a href="/service/suspension-steering" style={{ color: "var(--acc)" }}>Suspension &amp; Steering</a>
              {" · "}
              <a href="/service/tire-rotation" style={{ color: "var(--acc)" }}>Tire Rotation</a>
            </p>
          </div>

          <div className="cta-band">
            <h2>Hearing something new from your Tesla? Book a diagnostic and find out what it is.</h2>
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
