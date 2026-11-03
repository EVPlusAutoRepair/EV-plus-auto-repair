"use client";

// Top Buy button on a product page. Fires one GA4 buy_click event per tap
// (fire-and-forget — analytics must never break the checkout link).
export default function BuyButton({
  href,
  label,
  item,
}: {
  href: string;
  label: string;
  item: string;
}) {
  return (
    <a
      className="btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize: 18, padding: "16px 36px" }}
      onClick={() => {
        try {
          const w = window as unknown as {
            gtag?: (command: string, event: string, params?: Record<string, string>) => void;
          };
          w.gtag?.("event", "buy_click", { item, placement: "top" });
        } catch {}
      }}
    >
      {label}
    </a>
  );
}
