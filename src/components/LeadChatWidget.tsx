"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CHAT_AVATAR } from "@/app/img/chat-avatar";

// Scripted lead-capture chat box. NOT an AI chatbot: it asks a fixed set of
// questions (name, phone, email, issue, year, model) and emails the answers
// to the shop. It NEVER shows pricing — the widget has no price data at all.
// If the visitor leaves mid-flow after giving a phone number or email, the
// partial answers are beamed to the same endpoint so the shop can reach out
// instead of losing the lead (same pattern as /api/book/partial).
type Msg = { role: "assistant" | "user"; content: string };

type Step = {
  key: "firstName" | "lastName" | "phone" | "email" | "issue" | "year" | "model";
  question: string;
  placeholder: string;
  validate: (v: string) => string | null;
  chips?: string[];
};

const STEPS: Step[] = [
  { key: "firstName", question: "Hi! What's your first name?", placeholder: "First name", validate: (v) => (v ? null : "Mind sharing your first name?") },
  { key: "lastName", question: "And your last name?", placeholder: "Last name", validate: (v) => (v ? null : "Mind sharing your last name?") },
  { key: "phone", question: "What's the best phone number to reach you at?", placeholder: "(818) 555-0123", validate: (v) => (v.replace(/\D/g, "").length >= 7 ? null : "That doesn't look like a full phone number — mind double-checking?") },
  { key: "email", question: "And your email?", placeholder: "you@email.com", validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "That email doesn't look quite right — mind double-checking?") },
  { key: "issue", question: "What's going on with your Tesla?", placeholder: "Describe the issue…", validate: (v) => (v ? null : "Tell us a little about what's going on — even a few words helps.") },
  { key: "year", question: "What year is it?", placeholder: "e.g. 2023", validate: (v) => (/^\d{4}$/.test(v) ? null : "Just the 4-digit year works best — e.g. 2023") },
  { key: "model", question: "And which model?", placeholder: "Model 3, Model Y…", validate: (v) => (v ? null : "Pick one below or type it in."), chips: ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck", "Other"] },
];

export default function LeadChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showInvite, setShowInvite] = useState(true);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement | null>(null);
  const answersRef = useRef<Record<string, string>>({});
  const startedRef = useRef(false);
  const doneRef = useRef(false);
  const partialSentRef = useRef(false);

  // The /book form already captures all of this — no chat bubble there.
  if (pathname === "/book") return null;

  const sendLead = (partial: boolean) => {
    const a = answersRef.current;
    const phoneDigits = (a.phone || "").replace(/\D/g, "");
    const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email || "");
    if (phoneDigits.length < 7 && !hasEmail) return;
    const payload = JSON.stringify({ ...a, partial, website: "" });
    if (partial) {
      try {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/chat-lead", blob);
      } catch {}
    } else {
      fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }).catch(() => {});
    }
  };

  const sendPartialOnce = () => {
    if (doneRef.current || partialSentRef.current) return;
    partialSentRef.current = true;
    sendLead(true);
  };

  // If they leave the page mid-flow, the partial lead still goes out.
  useEffect(() => {
    const onHide = () => sendPartialOnce();
    const onVis = () => {
      if (document.visibilityState === "hidden") onHide();
    };
    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.removeEventListener("pagehide", onHide);
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Greet when the panel is first opened.
  useEffect(() => {
    if (open && !startedRef.current) {
      startedRef.current = true;
      setMsgs([{ role: "assistant", content: STEPS[0].question }]);
    }
  }, [open ]);

  // Keep the latest message in view.
  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs]);

  const send = (value?: string) => {
    const step = STEPS[stepIdx];
    if (!step) return;
    const v = (value ?? input).trim();
    if (!v) return;
    const err = step.validate(v);
    if (err) {
      setMsgs((m) => [...m, { role: "user", content: v }, { role: "assistant", content: err }]);
      setInput("");
      return;
    }
    const next = { ...answers, [step.key]: v };
    setAnswers(next);
    answersRef.current = next;
    setInput("");
    if (stepIdx + 1 < STEPS.length) {
      setMsgs((m) => [...m, { role: "user", content: v }, { role: "assistant", content: STEPS[stepIdx + 1].question }]);
      setStepIdx(stepIdx + 1);
    } else {
      doneRef.current = true;
      setMsgs((m) => [
        ...m,
        { role: "user", content: v },
        { role: "assistant", content: `Thanks, ${next.firstName} — we've got it. We'll call or text you shortly.` },
      ]);
      setStepIdx(stepIdx + 1);
      sendLead(false);
    }
  };

  const newChat = () => {
    setMsgs([{ role: "assistant", content: STEPS[0].question }]);
    setStepIdx(0);
    setAnswers({});
    answersRef.current = {};
    doneRef.current = false;
    partialSentRef.current = false;
    setInput("");
  };

  const toggle = () => {
    if (open) sendPartialOnce();
    if (!open) setShowInvite(false);
    setOpen(!open);
  };

  const step = STEPS[stepIdx];
  const done = stepIdx >= STEPS.length;

  return (
    <>
      {showInvite && !open && (
        <button
          onClick={toggle}
          aria-label="Have a question? Chat with us!"
          className="chat-invite"
          style={{
            position: "fixed", right: 88, bottom: 28, zIndex: 70,
            background: "var(--card)", color: "var(--txt)", border: "1px solid var(--line)",
            borderRadius: 999, padding: "10px 16px", fontSize: 14, fontWeight: 700,
            cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,.45)", whiteSpace: "nowrap",
          }}
        >
          Have a question? Chat with us!
        </button>
      )}
      <button
        onClick={toggle}
        aria-label="Chat with EV+"
        style={{
          position: "fixed", right: 18, bottom: 18, zIndex: 70,
          width: 58, height: 58, borderRadius: "50%",
          background: "var(--acc)", color: "#0b0b0c", border: "none",
          fontSize: 26, cursor: "pointer", padding: 0, overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.45)",
        }}
        className="chat-fab"
      >
        {open ? "✕" : (
          <img
            src={CHAT_AVATAR}
            alt="Chat with Tracey at EV+ Auto Repair"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
      </button>
      {open && (
        <div
          style={{
            position: "fixed", left: 16, right: 16, bottom: 88, zIndex: 70,
            height: "min(540px, calc(100dvh - 180px))",
            background: "var(--card)", border: "1px solid var(--line)", borderRadius: 18,
            display: "flex", flexDirection: "column", overflow: "hidden",
            boxShadow: "0 24px 70px rgba(0,0,0,.6)",
          }}
          className="chat-panel"
        >
          <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--line)", fontWeight: 800, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <img
                src={CHAT_AVATAR}
                alt="Tracey at EV+ Auto Repair"
                style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0, display: "block" }}
              />
              <div>
                Chat with EV+
                <div style={{ fontWeight: 400, fontSize: 13, color: "var(--mut)", marginTop: 2 }}>
                  Tesla service &amp; repair · Sun Valley, LA
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              <button
                onClick={newChat}
                aria-label="Start a new chat"
                style={{
                  background: "none", border: "1px solid var(--line)", color: "var(--mut)",
                  borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer",
                }}
              >
                New chat
              </button>
              <button
                onClick={toggle}
                aria-label="Close chat"
                style={{
                  background: "none", border: "1px solid var(--line)", color: "var(--mut)",
                  borderRadius: 8, padding: "4px 10px", fontSize: 14, lineHeight: 1, cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          </div>
          <div ref={boxRef} style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {msgs.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background: m.role === "user" ? "var(--acc)" : "rgba(255,255,255,.06)",
                  color: m.role === "user" ? "#0b0b0c" : "var(--txt)",
                  borderRadius: 14, padding: "10px 14px", maxWidth: "85%",
                  fontSize: 14, lineHeight: 1.45, whiteSpace: "pre-wrap",
                }}
              >
                {m.content}
              </div>
            ))}
          </div>
          {!done && step?.chips && (
            <div style={{ padding: "0 12px 8px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {step.chips.map((c) => (
                <button
                  key={c}
                  onClick={() => send(c)}
                  style={{
                    background: "rgba(255,255,255,.06)", border: "1px solid var(--line)", color: "var(--txt)",
                    borderRadius: 999, padding: "6px 12px", fontSize: 13, cursor: "pointer",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
          <div style={{ padding: 12, borderTop: "1px solid var(--line)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={done ? "Thanks — we'll be in touch!" : step?.placeholder || "Type your answer…"}
              disabled={done}
              style={{
                flex: 1, minWidth: 0, background: "rgba(255,255,255,.06)", border: "1px solid var(--line)",
                borderRadius: 12, padding: "10px 14px", color: "var(--txt)", fontSize: 16, outline: "none",
              }}
            />
            <button
              onClick={() => send()}
              disabled={done}
              style={{
                background: "var(--acc)", color: "#0b0b0c", border: "none", flexShrink: 0,
                borderRadius: 12, padding: "10px 18px", fontWeight: 800, cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <style>{`@media (max-width: 900px){ .chat-fab{ bottom: 84px !important; } .chat-invite{ display: none !important; } } @media (min-width: 901px){ .chat-panel{ left: auto !important; width: 380px; } }`}</style>
    </>
  );
}
