"use client";
import { useState } from "react";
import SiteSearch from "@/components/SiteSearch";

const links = [
  { href: "/service", label: "Service" },
  { href: "/collision", label: "Collision Repair" },
  { href: "/rentals", label: "Rentals" },
  // Shop index in the top menu (Oct 27, 2026): both USB listings show on /shop
  { href: "/shop", label: "USB Flash Drives" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="site-nav">
      <div className="nav-in">
        <a href="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="EV+ Auto Repair" />
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <SiteSearch />
          <a className="btn" href="/book">Book Now</a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <button
            onClick={() => { setOpen(false); window.dispatchEvent(new Event("evplus-open-search")); }}
            style={{ background: "none", border: "none", color: "inherit", font: "inherit", textAlign: "left", padding: 0, cursor: "pointer" }}
          >
            🔍 Search
          </button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="/book" className="btn" style={{ marginTop: 12, textAlign: "center" }} onClick={() => setOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
}
