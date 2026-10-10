"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    const process = () => {
      try {
        window.instgrm?.Embeds.process();
      } catch {
        /* instagram embed not ready yet */
      }
    };
    if (window.instgrm) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
    const t = setTimeout(process, 3000);
    return () => clearTimeout(t);
  }, [url]);

  return (
    <div
      className="ig-embed"
      style={{ display: "flex", justifyContent: "center", margin: "36px 0" }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          margin: "1px",
          maxWidth: 540,
          minWidth: 326,
          padding: 16,
          width: "100%",
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--acc)" }}
        >
          Watch this video on Instagram
        </a>
      </blockquote>
    </div>
  );
}
