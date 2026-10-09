import { Suspense } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BookFlow from "./BookFlow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Tesla Service or Start an Accident Claim | EV+ Auto Repair",
  description:
    "Book Tesla service in Los Angeles or start an accident intake with photo estimate. Free inspections, on-site Tesla rentals, 12-month labor warranty. Call/text (818) 281-7757.",
};

export default function Book() {
  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">Book</div>
          <h1>Two lanes. Pick yours.</h1>
          <p className="lede">Service requests get confirmed fast. Accident intakes go straight to Tracey—no self-booking for collision, because every accident deserves a human look first.</p>
        </div>
      </div>
      <section style={{ paddingTop: 64 }}>
        <div className="wrap">
          <Suspense>
            <BookFlow />
          </Suspense>
          <div className="cta-band">
            <h2>Rather just talk to a human?</h2>
            <p className="lede" style={{ margin: "0 auto" }}>Call or text—Mon–Fri 9–5, Sat 10–3.</p>
            <div className="hero-ctas">
              <a className="btn" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
