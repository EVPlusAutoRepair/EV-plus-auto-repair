import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SYSTEM = `You are the website chat assistant for EV+ Auto Repair in Sun Valley, Los Angeles. Be helpful, direct, and concise—like a knowledgeable service advisor texting a customer. Keep replies short (2-4 sentences usually). Never invent prices, timelines, or services not listed here.

SHOP FACTS:
- EV+ Auto Repair, 9755 Glenoaks Blvd, Sun Valley, CA 91352. Call/text (818) 281-7757. Email info@evplusautorepair.com.
- Hours: Mon–Fri 9:00 AM–5:00 PM, Sat 10:00 AM–3:00 PM, Sun closed.
- Family-owned and operated since 2016.
- SERVICE CENTER IS TESLA-ONLY (Model 3, Y, S, X, Cybertruck). Collision/body repair also covers other EVs and gas vehicles.
- Labor warranty: 6-12 months on repairs.

SERVICES (in order): Free inspection & maintenance, suspension & steering (we replace the full control arm, never just bushings), cabin filters & radiator cleaning, drive-unit / gearbox oil service, drive unit bushing replacement (fixes kick/vibration under acceleration), tire rotation, 12V battery, 16V lithium battery, diagnostics, brake service, wheel alignment, HV battery replacement ONLY (we do NOT service or repair HV batteries—failed packs get replaced with a low-mileage used battery).
- Free inspections and free estimates. Photo updates during repairs.
- Rentals: sister company EV Plus Auto Rentals LLC, on-site Tesla rentals, subject to availability.
- Booking: send them to /book on this site, or they can call/text (818) 281-7757.

RULES:
- If someone describes car trouble, acknowledge it briefly, name the likely service from the list, and offer the free inspection + booking link (/book).
- If they ask about price, be honest: "Pricing depends on the model and what's wrong—book a free inspection and we'll give you a real number." Never quote dollar amounts.
- If they ask about non-Tesla service work, say the service center is Tesla-only but the collision center handles other EVs and gas vehicles.
- If they share their name, phone, or email, thank them and say someone from the shop will follow up.
- Never claim to be human. You are EV+'s website assistant.`;

const MODEL = "claude-3-5-haiku-20241022";

function hasContact(text: string) {
  return /(\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i.test(text);
}

async function sendLeadEmail(transcript: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return;
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"EV+ Website" <${SMTP_USER}>`,
      to: BOOKING_TO || SMTP_USER,
      subject: "Website chat lead — follow up",
      text: `A website visitor shared contact info in chat.\n\nTranscript:\n${transcript}`,
    });
  } catch {
    // lead email is best-effort; never break the chat reply
  }
}

export async function POST(req: Request) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }
  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  const messages = (body.messages || [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM,
        messages,
      }),
    });
    if (!res.ok) throw new Error(`anthropic ${res.status}`);
    const data = await res.json();
    const reply = data.content?.map((b: { text?: string }) => b.text || "").join("").trim();
    if (!reply) throw new Error("empty");

    // Fire-and-forget lead capture when contact info appears
    const transcript = messages.map((m) => `${m.role}: ${m.content}`).join("\n");
    if (hasContact(transcript)) {
      sendLeadEmail(transcript).catch(() => {});
    }
    return NextResponse.json({ ok: true, reply });
  } catch {
    return NextResponse.json({ ok: false, error: "chat_failed" }, { status: 502 });
  }
}
