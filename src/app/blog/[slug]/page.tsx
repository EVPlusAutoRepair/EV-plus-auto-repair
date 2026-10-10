import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import InstagramEmbed from "@/components/InstagramEmbed";
import { POSTS, getPost, getRelated, type Block } from "../posts";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

function renderBlock(block: Block, i: number) {
  if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
  if (block.type === "myth")
    return (
      <div className="myth" key={i}>
        <div className="m-label">{block.label}</div>
        <p>{block.text}</p>
      </div>
    );
  return <p key={i}>{block.text}</p>;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelated(slug, 3);

  return (
    <>
      <SiteNav />
      <div className="page-hero">
        <div className="wrap">
          <div className="kicker">EV+ Blog</div>
          <h1>{post.h1}</h1>
          <div className="post-hero-meta">
            <span className="tag">{post.tag}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>EV+ Auto Repair, Sun Valley</span>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="article-body" style={{ maxWidth: 760 }}>
            {post.body.map(renderBlock)}

            {post.videoUrl && (
              <InstagramEmbed key={post.videoUrl} url={post.videoUrl} />
            )}

            <a className="svc-link" href={post.serviceLink.href}>
              Related service: {post.serviceLink.label} →
            </a>
          </div>

          <div style={{ maxWidth: 760 }}>
            <div style={{ marginTop: 56 }}>
              <div className="kicker">FAQs</div>
              <h2>Common questions</h2>
            </div>
            <div className="faq">
              {post.faqs.map((f) => (
                <div className="faq-item" key={f.q}>
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 72 }}>
            <div className="kicker">Keep reading</div>
            <h2>Related articles</h2>
            <div className="blog-grid">
              {related.map((r) => (
                <a className="post-card" key={r.slug} href={`/blog/${r.slug}`}>
                  <div className="tag">{r.tag}</div>
                  <h3>{r.h1}</h3>
                  <p>{r.excerpt}</p>
                  <div className="post-meta">{r.date} · EV+ Auto Repair</div>
                </a>
              ))}
            </div>
          </div>

          <div className="cta-band">
            <h2>Questions about your Tesla? Book a free inspection.</h2>
            <p className="lede" style={{ margin: "0 auto" }}>
              Call or text (818) 281-7757, or book online in under a minute.
            </p>
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
