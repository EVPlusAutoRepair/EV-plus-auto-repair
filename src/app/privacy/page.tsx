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
              EV+ Auto Repair (“we,” “us”) respects your privacy. This policy explains what
              information we collect through this website and how we use it.
            </p>
            <h2>Information you give us</h2>
            <p>
              When you submit a service request or accident intake, we collect the details
              you provide: your name, phone number, email address, vehicle information
              (model, year, VIN), insurance or claim details, and any photos or descriptions
              of the issue or damage. We use this only to respond to your request, schedule
              service, prepare estimates, and communicate about your repair.
            </p>
            <h2>Information we don&rsquo;t collect</h2>
            <p>
              We don&rsquo;t sell your personal information. We don&rsquo;t share it with
              third parties for marketing. We don&rsquo;t run accounts, newsletters, or
              tracking pixels that follow you around the web.
            </p>
            <h2>Insurance and third parties</h2>
            <p>
              If you ask us to work with your insurance company on a claim, we share the
              repair-related information needed to process that claim — and nothing more.
            </p>
            <h2>Data security</h2>
            <p>
              We take reasonable steps to protect the information you send us. No method of
              internet transmission is 100% secure, so we keep what we collect to the minimum
              needed to serve you.
            </p>
            <h2>Your choices</h2>
            <p>
              Prefer not to use the online forms? Call or text us at{" "}
              <a href="tel:+18182817757">(818) 281-7757</a> or email{" "}
              <a href="mailto:info@evplusautorepair.com">info@evplusautorepair.com</a> instead.
              To ask what information we have about you, or to ask us to delete it, contact
              us at either of those.
            </p>
            <h2>Changes</h2>
            <p>
              If this policy changes, we&rsquo;ll update the date above. Continued use of
              the site after changes means you accept the updated policy.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
