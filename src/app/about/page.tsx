import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About EV+ Auto Repair | Sun Valley, Los Angeles",
  description:
    "Meet Tracey Aivaz — the voice behind EV+ Auto Repair's educational Tesla content on TikTok, Instagram, and Facebook. Family-operated in Sun Valley since 2016.",
};

const socials = [
  {
    name: "TikTok",
    handle: "@ev.plus.auto.repair",
    href: "https://www.tiktok.com/@ev.plus.auto.repair",
    blurb: "Repair walkthroughs, shop life, and Tesla tips.",
  },
  {
    name: "Instagram",
    handle: "@evplusautorepair",
    href: "https://www.instagram.com/evplusautorepair/",
    blurb: "Before-and-afters, reels, and customer stories.",
  },
];

export default function About() {
  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap" style={{ paddingBottom: 0 }}><Breadcrumbs trail={[{ label: "About" }]} /></div>
        <div className="wrap">
          <div className="kicker">About</div>
          <h1>The people behind EV+.</h1>
          <p className="lede">EV+ Auto Repair is family-owned and operated in Sun Valley since 2016. This page starts with one person—more of the team is coming soon.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker">Who you're talking to</div>
          <h2>Tracey Aivaz</h2>
          <p className="lede">Tracey runs everything digital at EV+—the website, the booking flow, and the educational content across our social channels. If you've learned something about your Tesla from one of our videos, that was him. He&rsquo;s the reason you can watch a repair happen on your phone and then book the same job online.</p>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Learn with us</div>
            <h2>Want the educational stuff?</h2>
            <p className="lede">Real repairs, real explanations—no fluff. Follow along:</p>
            <div className="cards" style={{ marginTop: 24 }}>
              {socials.map((s) => (
                <a key={s.name} className="card" href={s.href} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ margin: "0 0 8px" }}>{s.name}</h3>
                  <p style={{ margin: "0 0 8px", color: "var(--acc)", fontWeight: 700 }}>{s.handle}</p>
                  <p style={{ margin: 0 }}>{s.blurb}</p>
                </a>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="kicker">Growing</div>
            <h2>More faces coming soon.</h2>
            <p className="lede">Our technicians, shop manager, and estimators will be up here shortly—so you know exactly who&rsquo;s working on your Tesla before you hand over the keys.</p>
          </div>

          <div className="cta-band">
            <h2>Come meet us in person.</h2>
            <div className="hero-ctas">
              <a className="btn" href="/book">Book free inspection</a>
              <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
