"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function OrderForm({
  productName,
  priceLabel,
}: {
  productName: string;
  priceLabel: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fulfillment, setFulfillment] = useState<"pickup" | "shipping">("pickup");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const data = new FormData(e.currentTarget);
      data.set("product", productName);
      data.set("price", priceLabel);
      const res = await fetch("/api/order", { method: "POST", body: data });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (json.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please call or text (818) 281-7757.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call or text (818) 281-7757.");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-card" style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: 24, marginBottom: 12 }}>Order received.</h3>
        <p className="lede">
          Thanks — we&rsquo;ll text you shortly to confirm and arrange payment. Need us now? Call{" "}
          <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a>.
        </p>
      </div>
    );
  }

  const field: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,.06)",
    border: "1px solid var(--line)",
    borderRadius: 12,
    padding: "10px 14px",
    color: "var(--txt)",
    fontSize: 16,
    outline: "none",
    marginTop: 6,
  };
  const label: React.CSSProperties = { display: "block", fontSize: 14, fontWeight: 600 };

  return (
    <form onSubmit={submit} className="form-card" style={{ marginTop: 16 }}>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />
      <div className="form-row" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <label style={label}>
            Name *
            <input name="name" required placeholder="Your name" style={field} />
          </label>
        </div>
        <div>
          <label style={label}>
            Phone *
            <input name="phone" required placeholder="(818) 555-0100" style={field} />
          </label>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <label style={label}>
          Email
          <input name="email" type="email" placeholder="you@example.com" style={field} />
        </label>
      </div>
      <div className="form-row" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr", marginTop: 16 }}>
        <div>
          <label style={label}>
            Quantity *
            <select name="quantity" required defaultValue="1" style={field}>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <span style={label}>Fulfillment *</span>
          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            <label style={{ fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>
              <input
                type="radio"
                name="fulfillment"
                value="pickup"
                checked={fulfillment === "pickup"}
                onChange={() => setFulfillment("pickup")}
              />
              Free pickup
            </label>
            <label style={{ fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>
              <input
                type="radio"
                name="fulfillment"
                value="shipping"
                checked={fulfillment === "shipping"}
                onChange={() => setFulfillment("shipping")}
              />
              Ship it
            </label>
          </div>
        </div>
      </div>
      {fulfillment === "shipping" && (
        <div style={{ marginTop: 16 }}>
          <label style={label}>
            Shipping address *
            <input name="address" required={fulfillment === "shipping"} placeholder="Street, City, State, ZIP" style={field} />
          </label>
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        <label style={label}>
          Notes
          <input name="notes" placeholder="Anything we should know?" style={field} />
        </label>
      </div>
      <button
        type="submit"
        className="btn"
        disabled={status === "sending"}
        style={{ marginTop: 20, width: "100%", textAlign: "center" }}
      >
        {status === "sending" ? "Sending…" : `Order now — ${priceLabel}`}
      </button>
      {status === "error" && (
        <p className="form-note" role="alert" style={{ color: "#ff9d9d", fontSize: 14, marginTop: 16 }}>
          {error}
        </p>
      )}
      <p className="form-note" style={{ marginTop: 12 }}>
        By sending, you agree to be contacted about your order. See our{" "}
        <a href="/privacy" style={{ color: "var(--acc)" }}>Privacy Policy</a>.
      </p>
    </form>
  );
}
