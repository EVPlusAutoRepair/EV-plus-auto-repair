"use client";

import { useEffect, useRef, useState } from "react";
import { searchSite, type SearchEntry } from "@/lib/search-index";

// Header search: a button in the nav opens a panel with live results from
// the curated index (pages + live blog posts, with symptom keywords like
// "creak" -> control arms). Fully client-side — no backend, no tracking
// beyond a fire-and-forget GA4 event noting what people search for, so
// content gaps become visible. Opens from the mobile menu too, via a
// window event ("evplus-open-search") dispatched by SiteNav.
export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results: SearchEntry[] = query.trim() ? searchSite(query) : [];

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("evplus-open-search", onOpen);
    return () => window.removeEventListener("evplus-open-search", onOpen);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  useEffect(() => {
    setSel(0);
  }, [query]);

  const track = (q: string) => {
    try {
      const w = window as unknown as {
        gtag?: (command: string, event: string, params?: Record<string, string>) => void;
      };
      w.gtag?.("event", "site_search", { search_term: q.trim().slice(0, 100) });
    } catch {}
  };

  const go = (entry: SearchEntry) => {
    track(query);
    window.location.href = entry.url;
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search the site"
        className="search-btn-desktop"
        style={{
          background: "none", border: "1px solid var(--line)", color: "var(--txt)",
          borderRadius: 10, padding: "8px 14px", fontSize: 14, cursor: "pointer",
        }}
      >
        🔍 Search
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 80,
            background: "rgba(0,0,0,.6)",
            display: "flex", justifyContent: "center", alignItems: "flex-start",
            padding: "80px 16px 16px",
          }}
        >
          <div
            role="dialog"
            aria-label="Search the site"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(560px, 100%)",
              background: "var(--card)", border: "1px solid var(--line)", borderRadius: 18,
              boxShadow: "0 24px 70px rgba(0,0,0,.6)", overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", gap: 8, padding: 12, borderBottom: "1px solid var(--line)" }}>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" && results.length) { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
                  if (e.key === "ArrowUp" && results.length) { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
                  if (e.key === "Enter" && results[sel]) go(results[sel]);
                }}
                placeholder="Search — try “creaking”, “12V”, “collision”…"
                aria-label="Search the site"
                style={{
                  flex: 1, minWidth: 0, background: "rgba(255,255,255,.06)", border: "1px solid var(--line)",
                  borderRadius: 12, padding: "10px 14px", color: "var(--txt)", fontSize: 16, outline: "none",
                }}
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close search"
                style={{
                  background: "none", border: "1px solid var(--line)", color: "var(--mut)",
                  borderRadius: 12, padding: "10px 14px", fontSize: 14, cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ maxHeight: "min(50vh, 420px)", overflowY: "auto", padding: 8 }}>
              {query.trim() === "" && (
                <div style={{ padding: "14px 12px", fontSize: 14, color: "var(--mut)", lineHeight: 1.6 }}>
                  Popular searches: creaking suspension · 12V battery dead · drive unit oil · collision repair · USB drive
                </div>
              )}
              {query.trim() !== "" && results.length === 0 && (
                <div style={{ padding: "14px 12px", fontSize: 14, color: "var(--mut)", lineHeight: 1.6 }}>
                  No matches for “{query.trim()}”. Try “creaking”, “12V”, “collision”, or “USB” — or tap the 💬 button and ask us directly.
                </div>
              )}
              {results.map((r, i) => (
                <a
                  key={r.url}
                  href={r.url}
                  onClick={(e) => { e.preventDefault(); go(r); }}
                  onMouseEnter={() => setSel(i)}
                  style={{
                    display: "block", padding: "10px 12px", borderRadius: 12, textDecoration: "none",
                    background: i === sel ? "rgba(255,255,255,.07)" : "transparent",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 15, color: "var(--txt)" }}>{r.title}</div>
                  <div style={{ fontSize: 13, color: "var(--mut)", marginTop: 2, lineHeight: 1.45 }}>{r.blurb}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <style>{`@media (max-width: 900px){ .search-btn-desktop{ display: none !important; } }`}</style>
    </>
  );
}
