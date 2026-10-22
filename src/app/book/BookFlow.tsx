"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import CalendlyEmbed from "./CalendlyEmbed";
import { useSearchParams } from "next/navigation";
import DatePicker from "@/components/DatePicker";

type Lane = "service" | "accident" | null;
type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_OPTIONS: [string, string][] = [
  ["inspection", "Free inspection — not sure what's wrong"],
  ["maintenance", "Maintenance / scheduled service"],
  ["suspension", "Suspension / steering noise or vibration"],
  ["cabin-filter", "Cabin filter replacement"],
  ["radiator-cleaning", "Radiator cleaning"],
  ["drive-unit-oil", "Drive-unit oil service"],
  ["tire-rotation", "Tire rotation"],
  ["12v", "12V battery"],
  ["16v", "16V lithium battery"],
  ["diagnostics", "Diagnostics / warning light"],
  ["brakes", "Brake service"],
  ["alignment", "Wheel alignment"],
  ["hv-battery", "HV battery concern"],
  ["other", "Something else"],
];

const MODELS = ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"];

function useQuery() {
  const params = useSearchParams();
  return {
    lane: params.get("lane") as Lane | null,
    service: params.get("service"),
  };
}

function LanePreselect({ onPick }: { onPick: (l: Lane, s?: string | null) => void }) {
  const { lane, service } = useQuery();
  useEffect(() => {
    if (lane === "accident" || lane === "service") onPick(lane, service);
  }, [lane, service, onPick]);
  return null;
}

async function postForm(form: HTMLFormElement, lane: Lane): Promise<{ ok: boolean; error?: string }> {
  const data = new FormData(form);
  data.set("lane", lane || "");

  // Client-side photo guard: keep the total payload comfortably under the
  // serverless request limit. Anything bigger → text the photos instead.
  const files = data.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
  const total = files.reduce((n, f) => n + f.size, 0);
  if (total > 4 * 1024 * 1024) {
    return {
      ok: false,
      error:
        "Those photos are too large to upload. Try fewer/smaller photos, or text them to (818) 281-7757 after sending.",
    };
  }

  const res = await fetch("/api/book", { method: "POST", body: data });
  const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (json.ok) {
    // GA4 conversion: one booking_submit event per successful website
    // booking (marked as a Key event in GA4 Admin). Fire-and-forget —
    // never let analytics break a booking.
    try {
      const w = window as unknown as {
        gtag?: (command: string, event: string, params?: Record<string, string>) => void;
      };
      w.gtag?.("event", "booking_submit", { lane: lane || "", method: "website_form" });
    } catch {}
    return { ok: true };
  }
  if (json.error === "not_configured") {
    return {
      ok: false,
      error:
        "Online booking isn't switched on yet — please call or text (818) 281-7757 and we'll take care of you right away.",
    };
  }
  return { ok: false, error: json.error || "Something went wrong. Please call or text (818) 281-7757." };
}

const CALENDLY_INSPECTION = "https://calendly.com/evplusautorepair-info/inspection";
const CALENDLY_DIAGNOSTIC = "https://calendly.com/evplusautorepair-info/diagnostic";

function SentCard({ accident, service }: { accident?: boolean; service?: string | null }) {
  const calendlyUrl = service === "diagnostics" ? CALENDLY_DIAGNOSTIC : CALENDLY_INSPECTION;
  return (
    <div className="form-card" style={{ textAlign: "center" }}>
      <h3 style={{ fontSize: 24, marginBottom: 12 }}>Request received.</h3>
      <p className="lede">
        {accident ? (
          <>Thanks — <b style={{ color: "var(--txt)" }}>Tracey will call you</b>. We don&rsquo;t do self-booking for collision repairs because every accident needs a human look first. Urgent? Call <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a>.</>
        ) : (
          <>Thanks — we&rsquo;ll call or text you shortly to confirm. Need us now? Call <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a>.</>
        )}
      </p>
      {!accident && (
        <>
          <h4 style={{ fontSize: 20, margin: "28px 0 6px" }}>Want to lock in your time now?</h4>
          <p className="form-note" style={{ marginTop: 0 }}>Pick a slot below — or just wait for our call/text to confirm.</p>
          <CalendlyEmbed url={calendlyUrl} />
        </>
      )}
    </div>
  );
}

function ErrorNote({ error }: { error: string }) {
  return (
    <p className="form-note" role="alert" style={{ color: "#ff9d9d", fontSize: 14, marginTop: 16 }}>
      {error}
    </p>
  );
}

const honeypot = (
  <input
    name="website"
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
  />
);

const privacyNote = (
  <p className="form-note">
    By starting or sending a booking, you agree to be contacted about your request. See our{" "}
    <a href="/privacy" style={{ color: "var(--acc)" }}>Privacy Policy</a>.
  </p>
);


// Draft + partial-booking recovery.
// - Saves what's typed to localStorage so a returning visitor finds the
//   form pre-filled instead of feeling like their booking "didn't save".
// - If the visitor leaves with a phone or email typed but never submits,
//   beacons the partial details to /api/book/partial so the shop gets an
//   email and can call them back.
function useBookingDraft(lane: "service" | "accident") {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sentOkRef = useRef(false);
  const notifiedRef = useRef(false);
  const key = `ev-book-draft-${lane}`;

  // Restore a saved draft on mount.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const data = JSON.parse(raw) as Record<string, string>;
      Object.entries(data).forEach(([k, v]) => {
        const el = form.elements.namedItem(k) as
          | HTMLInputElement
          | HTMLSelectElement
          | HTMLTextAreaElement
          | null;
        if (el && "value" in el && !el.value && v) el.value = v;
      });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notifyPartial = useCallback(() => {
    const form = formRef.current;
    if (!form || sentOkRef.current || notifiedRef.current) return;
    const data = new FormData(form);
    data.set("lane", lane);
    const phone = String(data.get("phone") || "").replace(/\D/g, "");
    const email = String(data.get("email") || "");
    if (phone.length < 7 && !email.includes("@")) return;
    notifiedRef.current = true;
    try {
      navigator.sendBeacon("/api/book/partial", data);
    } catch {}
  }, [lane]);

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "hidden") notifyPartial();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", notifyPartial);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", notifyPartial);
      // Unmount (back to lane picker, navigation) after typing counts too.
      notifyPartial();
    };
  }, [notifyPartial]);

  const onInput = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const obj: Record<string, string> = {};
    data.forEach((v, k) => {
      if (typeof v === "string" && k !== "website" && k !== "photos") obj[k] = v;
    });
    try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markSent = useCallback(() => {
    sentOkRef.current = true;
    try {
      localStorage.removeItem(key);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { formRef, onInput, markSent };
}

function ServiceForm({ defaultService }: { defaultService?: string | null }) {
  const draft = useBookingDraft("service");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sentService, setSentService] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const svc = new FormData(e.currentTarget).get("service");
    const r = await postForm(e.currentTarget, "service");
    if (r.ok) {
      draft.markSent();
      setSentService(typeof svc === "string" ? svc : null);
      setStatus("sent");
    } else {
      setStatus("error");
      setError(r.error || "");
    }
  };

  if (status === "sent") return <SentCard service={sentService} />;
  return (
    <form className="form-card" onSubmit={submit} ref={draft.formRef} onInput={draft.onInput}>
      <h3 style={{ fontSize: 24, marginBottom: 6 }}>Book service</h3>
      <p className="form-note" style={{ marginTop: 0 }}>Fill this out — we confirm every request by phone or text.</p>
      {honeypot}
      <div className="form-row">
        <div><label>Full name *</label><input name="name" required placeholder="Jane Doe" autoComplete="name" /></div>
        <div><label>Phone *</label><input name="phone" required type="tel" placeholder="(818) 555-0123" autoComplete="tel" /></div>
      </div>
      <label>Email</label><input name="email" type="email" placeholder="jane@email.com" autoComplete="email" required />
      <div className="form-row">
        <div><label>Tesla model *</label>
          <select name="model" required defaultValue="">
            <option value="">Select…</option>
            {MODELS.map((m) => (<option key={m}>{m}</option>))}
          </select>
        </div>
        <div><label>Year *</label><input name="year" required inputMode="numeric" placeholder="2022" /></div>
      </div>
      <label>VIN (optional)</label><input name="vin" placeholder="5YJ…" />
      <label>What do you need? *</label>
      <select name="service" required defaultValue={defaultService || ""}>
        <option value="">Select…</option>
        {SERVICE_OPTIONS.map(([v, label]) => (<option key={v} value={v}>{label}</option>))}
      </select>
      <div className="form-row">
        <div><label>Preferred date</label><DatePicker name="date" /></div>
        <div><label>Need a Tesla rental?</label>
          <select name="rental"><option>Not sure yet</option><option>Yes</option><option>No</option></select>
        </div>
      </div>
      <label>Details</label><textarea name="details" placeholder="Describe the issue, noises, warning messages…" />
      <button className="btn" type="submit" disabled={status === "sending"} style={{ marginTop: 24, width: "100%" }}>
        {status === "sending" ? "Sending…" : "Send service request"}
      </button>
      {status === "error" && <ErrorNote error={error} />}
      {privacyNote}
    </form>
  );
}

function AccidentForm() {
  const draft = useBookingDraft("accident");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const r = await postForm(e.currentTarget, "accident");
    if (r.ok) {
      draft.markSent();
      setStatus("sent");
    }
    else {
      setStatus("error");
      setError(r.error || "");
    }
  };

  if (status === "sent") return <SentCard accident />;
  return (
    <form className="form-card" onSubmit={submit} ref={draft.formRef} onInput={draft.onInput}>
      <h3 style={{ fontSize: 24, marginBottom: 6 }}>Accident intake</h3>
      <p className="form-note" style={{ marginTop: 0 }}>No self-booking for collision — send this and Tracey calls you back. The more detail, the faster your estimate.</p>
      {honeypot}
      <div className="form-row">
        <div><label>Full name *</label><input name="name" required placeholder="Jane Doe" autoComplete="name" /></div>
        <div><label>Phone *</label><input name="phone" required type="tel" placeholder="(818) 555-0123" autoComplete="tel" /></div>
      </div>
      <label>Email</label><input name="email" type="email" placeholder="jane@email.com" autoComplete="email" required />
      <div className="form-row">
        <div><label>Tesla model *</label>
          <select name="model" required defaultValue="">
            <option value="">Select…</option>
            {MODELS.map((m) => (<option key={m}>{m}</option>))}
          </select>
        </div>
        <div><label>Year *</label><input name="year" required inputMode="numeric" placeholder="2022" /></div>
      </div>
      <label>VIN *</label><input name="vin" required placeholder="5YJ…" />
      <div className="form-row">
        <div><label>Insurance company</label><input name="insurance" placeholder="e.g. GEICO" /></div>
        <div><label>Claim number</label><input name="claim" placeholder="If you have one" /></div>
      </div>
      <label>Insurance contact / adjuster</label><input name="adjuster" placeholder="Name + phone, if assigned" />
      <label>Damage description *</label><textarea name="damage" required placeholder="What happened, which panels are damaged, is the car drivable?" />
      <label>Photos of the damage</label>
      <input type="file" name="photos" accept="image/*" multiple />
      <p className="form-note">Up to 6 photos. Tip: four-corner photos (front, rear, both sides) plus close-ups of the damage get you the fastest estimate. Or text photos to <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a> after sending.</p>
      <label>Need a Tesla rental while we repair?</label>
      <select name="rental"><option>Yes</option><option>Not sure yet</option><option>No</option></select>
      <button className="btn" type="submit" disabled={status === "sending"} style={{ marginTop: 24, width: "100%" }}>
        {status === "sending" ? "Sending…" : "Send accident intake"}
      </button>
      {status === "error" && <ErrorNote error={error} />}
      {privacyNote}
    </form>
  );
}

export default function BookFlow() {
  const [lane, setLane] = useState<Lane>(null);
  const [service, setService] = useState<string | null>(null);
  return (
    <>
      <Suspense>
        <LanePreselect onPick={(l, s) => { setLane((cur) => cur ?? l); if (s) setService(s); }} />
      </Suspense>
      {!lane && (
        <div className="lane-grid">
          <div className="lane" onClick={() => setLane("service")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setLane("service")}>
            <h3>I need service</h3>
            <p>Maintenance, repairs, inspections, batteries, diagnostics — anything that isn&rsquo;t an accident.</p>
            <span className="btn">Start service request</span>
          </div>
          <div className="lane" onClick={() => setLane("accident")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setLane("accident")}>
            <h3>I had an accident</h3>
            <p>Collision damage, insurance claim, photo estimate. Tracey calls you back personally.</p>
            <span className="btn">Start accident intake</span>
          </div>
        </div>
      )}
      {lane && (
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <button onClick={() => setLane(null)} style={{ background: "none", border: "none", color: "var(--acc)", cursor: "pointer", fontSize: 15, fontWeight: 600 }}>← Back to both lanes</button>
        </div>
      )}
      {lane === "service" && <ServiceForm defaultService={service} />}
      {lane === "accident" && <AccidentForm />}
    </>
  );
}
