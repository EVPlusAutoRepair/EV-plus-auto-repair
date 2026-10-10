"use client";
import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const FALLBACK =
  "Our chat is being set up right now—please call or text us at (818) 281-7757 and we'll take care of you.";

// Chat backend: /api/chat (ANTHROPIC_API_KEY ready)
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Hey! This is EV+ Auto Repair. Ask me about Tesla service, repairs, rentals, or booking—what's going on with your car?" },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [dead, setDead] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

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
        body: JSON.stringify({ messages: next.slice(-12) }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error("bad");
      setMsgs([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setDead(true);
      setMsgs([...next, { role: "assistant", content: FALLBACK }]);
    } finally {
      setBusy(false);
    }
  }

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
            position: "fixed", right: 18, bottom: 88, zIndex: 70,
            width: "min(380px, calc(100vw - 36px))", height: "min(540px, calc(100dvh - 180px))",
            background: "var(--card)", border: "1px solid var(--line)", borderRadius: 18,
            display: "flex", flexDirection: "column", overflow: "hidden",
            boxShadow: "0 24px 70px rgba(0,0,0,.6)",
          }}
        >
          <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--line)", fontWeight: 800 }}>
            Chat with EV+
            <div style={{ fontWeight: 400, fontSize: 13, color: "var(--mut)", marginTop: 2 }}>
              Tesla service &amp; repair · Sun Valley, LA
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
                flex: 1, background: "rgba(255,255,255,.06)", border: "1px solid var(--line)",
                borderRadius: 12, padding: "10px 14px", color: "var(--txt)", fontSize: 14, outline: "none",
              }}
            />
            <button
              onClick={send}
              disabled={busy || dead}
              style={{
                background: "var(--acc)", color: "#0b0b0c", border: "none",
                borderRadius: 12, padding: "10px 18px", fontWeight: 800, cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <style>{`@media (max-width: 900px){ .chat-fab{ bottom: 84px !important; } }`}</style>
    </>
  );
}
