import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "EV+ Blog—Tesla Tips From the Shop | EV+ Auto Repair",
  description:
    "Tesla maintenance, battery, and repair knowledge from the technicians at EV+ Auto Repair in Sun Valley, Los Angeles. Real shop experience, no fluff.",
};

export default function BlogIndex() {
  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">Tesla knowledge</div>
          <h1>EV+ Blog</h1>
          <p className="lede">
            Straight talk about Tesla maintenance, batteries, and repairs—from the technicians
            who work on Teslas all day, every day. No fluff, no dealership runaround.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <a className="post-card" key={post.slug} href={`/blog/${post.slug}`}>
                <div className="tag">{post.tag}</div>
                <h3>{post.h1}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">{post.date} · EV+ Auto Repair</div>
              </a>
            ))}
          </div>

          <div className="cta-band">
            <h2>Questions about your Tesla? Start with a free inspection.</h2>
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
