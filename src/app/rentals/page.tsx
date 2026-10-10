import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "On-Site Tesla Rentals | EV+ Auto Repair",
  description:
    "Drop off your Tesla, drive off in a Tesla. EV+ Auto Rentals LLC operates on-site at EV+ Auto Repair in Sun Valley—stay in a Tesla while yours is repaired. (818) 281-7757.",
};

export default function Rentals() {
  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">On-site Tesla rentals</div>
          <h1>Drop off your Tesla, drive off in a Tesla.</h1>
          <p className="lede">Our sister company <b style={{ color: "var(--txt)" }}>EV+ Auto Rentals LLC</b> operates right here in the shop. While we repair your car, ask about staying in a Tesla—no Hertz run, no Uber home, no downtime. Rentals are optional and based on availability, so mention it when you book.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="why-grid">
            <div>
              <div className="kicker">How it works</div>
              <h2>One stop. Zero downtime.</h2>
              <p className="lede">Most shops hand you an Uber voucher and wish you luck. Ask about a Tesla rental instead—when one&rsquo;s available, it&rsquo;s waiting when you drop off, and you return it when you pick up. Same parking lot, same visit.</p>
              <ul className="ticks" style={{ marginTop: 24 }}>
                <li><b>Tesla fleet</b>—stay in the car you already know</li>
                <li><b>On-site pickup &amp; return</b>—no off-site rental counter</li>
                <li><b>Optional, based on availability</b>—mention it when you book so we can hold one</li>
                <li><b>Insurance-friendly</b>—we work with your claim when the accident wasn&rsquo;t your fault</li>
                <li><b>Flexible terms</b>—daily &amp; weekly, for repairs of any length (call for rates)</li>
              </ul>
              <div className="hero-ctas" style={{ marginTop: 30 }}>
                <a className="btn" href="/book">Book service + rental</a>
                <a className="btn btn-ghost" href="tel:+18182817757">Call (818) 281-7757</a>
              </div>
            </div>
            <div className="why-img" style={{ backgroundImage: "url('/images/rentals-tesla.webp')" }} />
          </div>

          <div className="faq">
            <div className="faq-item">
              <h4>Is the rental company part of EV+ Auto Repair?</h4>
              <p>EV+ Auto Rentals LLC is our sister company and operates on-site at the same address—9755 Glenoaks Blvd, Sun Valley, CA 91352. One location, one visit.</p>
            </div>
            <div className="faq-item">
              <h4>Can I get a rental if my repair isn&rsquo;t accident-related?</h4>
              <p>Yes—rentals are available for any service or repair that keeps your Tesla with us, not just collision work.</p>
            </div>
            <div className="faq-item">
              <h4>What do I need to rent?</h4>
              <p>A valid driver&rsquo;s license and insurance. <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>Call (818) 281-7757</a> and we&rsquo;ll have everything ready when you arrive.</p>
            </div>
          </div>

          <div className="cta-band">
            <h2>Your Tesla&rsquo;s in the shop. You&rsquo;re still driving a Tesla.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book">Book now</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
