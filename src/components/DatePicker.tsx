"use client";
import { useState, useRef, useEffect } from "react";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function iso(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function pretty(v: string) {
  const [y, m, d] = v.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

export default function DatePicker({ name }: { name: string }) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [vy, setVy] = useState(today.getFullYear());
  const [vm, setVm] = useState(today.getMonth());
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open ]);

  const firstDow = new Date(vy, vm, 1).getDay();
  const daysInMonth = new Date(vy, vm + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isPast = (d: number) => {
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return new Date(vy, vm, d) < t;
  };

  const shift = (dir: number) => {
    let m = vm + dir, y = vy;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setVm(m); setVy(y);
  };

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="dp-input"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span style={{ color: value ? "var(--txt)" : "var(--dim)" }}>
          {value ? pretty(value) : "Pick a date"}
        </span>
        <span aria-hidden>📅</span>
      </button>

      {open && (
        <div className="dp-pop" role="dialog" aria-label="Choose a date">
          <div className="dp-head">
            <button type="button" onClick={() => shift(-1)} aria-label="Previous month" className="dp-nav">‹</button>
            <div className="dp-title">{MONTHS[vm]} {vy}</div>
            <button type="button" onClick={() => shift(1)} aria-label="Next month" className="dp-nav">›</button>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close calendar" className="dp-close">✕</button>
          </div>
          <div className="dp-grid">
            {DOW.map((d) => (<div key={d} className="dp-dow">{d}</div>))}
            {cells.map((d, i) =>
              d === null ? <div key={`e${i}`} /> : (
                <button
                  key={d}
                  type="button"
                  disabled={isPast(d)}
                  onClick={() => { setValue(iso(vy, vm, d)); setOpen(false); }}
                  className={`dp-day${value === iso(vy, vm, d) ? " sel" : ""}`}
                >{d}</button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
