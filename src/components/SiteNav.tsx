"use client";
import { useState } from "react";

const links = [
  { href: "/service", label: "Service Center" },
  { href: "/collision", label: "Collision Center" },
  { href: "/rentals", label: "Rentals" },
  { href: "/blog", label: "Blog" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#areas", label: "Areas" },
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
          <a className="btn" href="/book">Book Now</a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="/book" className="btn" style={{ marginTop: 12, textAlign: "center" }} onClick={() => setOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
}
