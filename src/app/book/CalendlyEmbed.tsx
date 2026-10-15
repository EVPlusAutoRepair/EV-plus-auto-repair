"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyEmbed({ url }: { url: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const mount = () => {
      if (cancelled || !hostRef.current || !window.Calendly) return;
      hostRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({ url, parentElement: hostRef.current });
    };
    if (window.Calendly) {
      mount();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = mount;
    document.body.appendChild(s);
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={hostRef}
      style={{ minWidth: 320, height: 700, marginTop: 16 }}
      aria-label="Pick a booking time"
    />
  );
}
