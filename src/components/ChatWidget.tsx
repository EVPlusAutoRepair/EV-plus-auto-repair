"use client";
import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const FALLBACK =
  "Our chat is being set up right now—please call or text us at (818) 281-7757 and we'll take care of you.";

const STORE_KEY = "evplus-chat-v1";
const BOOK_KEY = "evplus-booking-sent";

// Feature flag: chat parked until Tracey finalizes the pricing sheet (Oct 11, 2026).
// Flip back to true to re-enable.
const CHAT_ENABLED = false;

const GREETING: Msg = {
  role: "assistant",
  content: "Hey! This is EV+ Auto Repair. Ask me about Tesla service, repairs, rentals, or booking—what's going on with your car?",
};

function loadSaved(): Msg[] | null {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr
      .filter(
        (m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
      )
      .slice(-40);
  } catch {
    return null;
  }
}

// Minimal safe inline formatting: **bold** only. Escapes HTML first.
function renderInline(s: string): string {
  const esc = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return esc.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [dead, setDead] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Restore previous conversation if the visitor comes back
  useEffect(() => {
    const saved = loadSaved();
    if (saved) setMsgs(saved);
    try {
      if (localStorage.getItem(BOOK_KEY) === "1") setBookingSent(true);
    } catch {}
  }, []);

  // Persist conversation on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(msgs.slice(-40)));
    } catch {
      /* storage full or unavailable — chat still works */
    }
  }, [msgs]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy || dead) return;
    const next = [...msgs, { role: "user" as const, content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12), bookingSent }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error("bad");
      if (data.bookingSent && !bookingSent) {
        setBookingSent(true);
        try {
          localStorage.setItem(BOOK_KEY, "1");
        } catch {}
      }
      setMsgs([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setDead(true);
      setMsgs([...next, { role: "assistant", content: FALLBACK }]);
    } finally {
      setBusy(false);
    }
  }

  function newChat() {
    try {
      localStorage.removeItem(STORE_KEY);
      localStorage.removeItem(BOOK_KEY);
    } catch {}
    setMsgs([GREETING]);
    setBookingSent(false);
    setDead(false);
    setInput("");
  }

  if (!CHAT_ENABLED) return null;

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat with EV+"
        style={{
          position: "fixed", right: 18, bottom: 18, zIndex: 70,
          width: 58, height: 58, borderRadius: "50%",
          background: "var(--acc)", color: "#0b0b0c", border: "none",
          fontSize: 26, cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,.45)",
        }}
        className="chat-fab"
      >
        {open ? "✕" : "💬"}
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
            <div>
              Chat with EV+
              <div style={{ fontWeight: 400, fontSize: 13, color: "var(--mut)", marginTop: 2 }}>
                Tesla service &amp; repair · Sun Valley, LA
              </div>
            </div>
            <button
              onClick={newChat}
              aria-label="Start a new chat"
              style={{
                background: "none", border: "1px solid var(--line)", color: "var(--mut)",
                borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer", flexShrink: 0,
              }}
            >
              New chat
            </button>
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
                {m.role === "assistant" ? (
                  <span dangerouslySetInnerHTML={{ __html: renderInline(m.content) }} />
                ) : (
                  m.content
                )}
              </div>
            ))}
            {busy && <div style={{ fontSize: 13, color: "var(--mut)" }}>Typing…</div>}
          </div>
          <div style={{ padding: 12, borderTop: "1px solid var(--line)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your question…"
              disabled={dead}
              style={{
                flex: 1, minWidth: 0, background: "rgba(255,255,255,.06)", border: "1px solid var(--line)",
                borderRadius: 12, padding: "10px 14px", color: "var(--txt)", fontSize: 16, outline: "none",
              }}
            />
            <button
              onClick={send}
              disabled={busy || dead}
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
      <style>{`@media (max-width: 900px){ .chat-fab{ bottom: 84px !important; } } @media (min-width: 901px){ .chat-panel{ left: auto !important; width: 380px; } }`}</style>
    </>
  );
}
