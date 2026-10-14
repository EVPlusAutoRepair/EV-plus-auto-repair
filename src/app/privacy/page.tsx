import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | EV+ Auto Repair",
  description:
    "How EV+ Auto Repair collects, uses, and protects your information when you request service or an estimate.",
};

export default function Privacy() {
  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">EV+ Auto Repair</div>
          <h1>Privacy Policy</h1>
          <p className="lede">Last updated: October 2026</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="article-body" style={{ maxWidth: 760 }}>
            <p>
              EV+ Auto Repair (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This
              policy explains what information we collect and how we handle it.
            </p>
            <h2>What we collect</h2>
            <p>
              We collect your name, phone, email, address, vehicle details (model, year,
              VIN), insurance or claim details, and photos you send us, online or at the
              shop.
            </p>
            <h2>Who we share it with</h2>
            <p>
              We share it only with your insurance company, and with the service
              providers, parts suppliers, and tow or rental companies we need to complete
              your repair. We don&rsquo;t sell your information.
            </p>
            <p>
              Mobile numbers and texting consent are never shared with third parties for
              marketing.
            </p>
            <h2>How to review or change your information</h2>
            <p>
              To see, correct, or delete your information, call{" "}
              <a href="tel:+18182817757">(818) 281-7757</a> or email{" "}
              <a href="mailto:info@evplusautorepair.com">info@evplusautorepair.com</a>.
            </p>
            <h2>Do Not Track</h2>
            <p>Our site does not respond to Do Not Track signals.</p>
            <h2>Changes</h2>
            <p>If this policy changes, we&rsquo;ll update the date at the top.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
