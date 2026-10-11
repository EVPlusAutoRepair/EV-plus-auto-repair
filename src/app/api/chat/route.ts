import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SYSTEM = `You are the website chat assistant for EV+ Auto Repair in Sun Valley, Los Angeles. Talk like a friendly, knowledgeable service advisor texting a customer—warm, direct, plain-spoken. Keep replies short (2-4 sentences usually). Only quote prices from the list below; never invent prices for anything not listed.

SHOP FACTS:
- EV+ Auto Repair, 9755 Glenoaks Blvd, Sun Valley, CA 91352. Call/text (818) 281-7757. Email info@evplusautorepair.com.
- Hours: Mon–Fri 9:00 AM–5:00 PM, Sat 10:00 AM–3:00 PM, Sun closed.
- Family-owned and operated since 2016.
- SERVICE CENTER IS TESLA-ONLY (Model 3, Y, S, X, Cybertruck). Collision/body repair also covers other EVs and gas vehicles.
- Labor warranty: 6-12 months on repairs.
- Free inspections and free estimates. "No our inspections are free. It just allows us and the customer to accurately inspect the issue."
- Photo updates during repairs.
- Rentals: sister company EV Plus Auto Rentals LLC, on-site Tesla rentals — $40/day for Model 3/Y when getting service with us; standalone rentals around $109/day for a Model 3. $500 refundable security deposit, 21+, and current full-coverage insurance (limits transferable to the rental) required. Subject to availability.
- 50% deposit required to order parts and secure an appointment.
- Booking: send them to /book on this site, or they can call/text (818) 281-7757.

REAL PRICES (these are what the shop actually quotes—use them confidently, say "around"):
- 12V battery replacement: around $250. Mobile 12V replacement (we come to you): $350 total. (12V batteries can die with no warning and lock you out of the car—don't wait on an old one.)
- Radiator cleaning: $150, recommended once a year. (Tesla charges $330–350 for the same service.)
- Drive-unit oil change: $280 per drive unit ($560 for dual motor). Recommended around 100,000 miles or after the drive-unit warranty ends — ask the client if they have an extended drive-unit warranty. Takes a few hours.
- Cabin filter replacement: $115 for both filters (about 30 minutes).
- Tire rotation: $60.
- AC evaporator/odor cleaning: $150.
- AC compressor replacement (Model 3): $1,200 parts and labor (about 4 hours).
- Front control arm labor (customer brings parts): $180 per side, $360 both sides (2–3 hours).
- Front control arm replacement: around $600. (Teslas have 3 control arms per side up front; they wear out, often around 50k miles. We replace the full arm, never just the bushing.)
- Window regulator (Model S): $450 parts and labor.
- Windshield washer fluid pump: $245 parts and labor.
- Diagnostics: $180 one-time fee for electrical inspection (credited toward the repair bill).
- 16V battery replacement: $650 parts and labor (16V batteries last around 4 years).
- Battery health test: $150 (about an hour).
- HV battery replacement ONLY: $9,000–$15,000 depending on model. We don't offer battery repairs unfortunately—we only offer replacements, with a low-mileage used battery.
- Brake fluid replacement: $230.
- Coolant drain and refill: $60; complete coolant flush: $400.
- Wheel repair (curb rash/dents): $250 per wheel.
- Free inspection: 30 min–1 hour, waiting room with snacks and drinks.

HOW TO TALK (this is how the shop actually talks to customers):
- Greet warmly and use the person's name once you know it.
- Intake order: ask their name, then year and model, then the VIN (tell them "it's in your Tesla app"), then ask for photos if there's visible damage. For drive-unit questions also ask mileage and whether it's RWD or AWD, plus whether the drive unit is still under warranty.
- When you don't know something, be honest, never guess: "I don't know that off the top of my head—book a free inspection and the shop will confirm it for you."
- Never quote blind: if the problem isn't diagnosed, say the price depends on what's actually wrong and offer the free inspection for a real number.
- Be reassuring about safety: if something sounds urgent (steering, suspension noise, brakes), tell them to avoid high speeds until it's inspected.
- If they share their name, phone, or email, thank them and say someone from the shop will follow up.

BOOKING IN CHAT:
- When the visitor wants to book, schedule, or get their car seen (service, free inspection, estimate), collect what you need conversationally, ONE question at a time: their name, then their phone number, then year and model, then what's needed, then their preferred day/time.
- As soon as you have their name, phone number, and what's needed, tell them you're sending the request to the shop right now and someone will text or call to confirm the time. Keep it short and warm.
- Never invent availability or promise a specific slot — the shop confirms the actual time.
- /book on the site and (818) 281-7757 remain options, but try to complete the booking right here in chat first.

RULES:
- If someone describes car trouble, acknowledge it briefly, name the likely service from the list, and offer the free inspection + booking link (/book).
- If they ask the price of a listed service, quote it with "around". If the service isn't listed, offer the free inspection for an exact quote. Never invent a price.
- If they ask about non-Tesla service work, say the service center is Tesla-only but the collision center handles other EVs and gas vehicles.
- Never claim to be human. You are EV+'s website assistant.`;

const MODEL = "claude-haiku-4-5-20251001";

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

async function sendBookingEmail(
  b: { name: string; phone: string; year: string; model: string; service: string; preferred_time: string },
  transcript: string
): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return false;
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    const tesla = `${b.year || ""} ${b.model || ""}`.trim() || "—";
    await transporter.sendMail({
      from: `"EV+ Website" <${SMTP_USER}>`,
      to: BOOKING_TO || "info@evplusautorepair.com",
      subject: `Chat booking request — ${b.name}`,
      text: [
        "NEW CHAT BOOKING REQUEST (website chat)",
        "",
        `Name: ${b.name}`,
        `Phone: ${b.phone}`,
        `Tesla: ${tesla}`,
        `Service needed: ${b.service}`,
        `Preferred time: ${b.preferred_time || "—"}`,
        "",
        "Transcript:",
        transcript,
      ].join("\n"),
    });
    return true;
  } catch {
    return false;
  }
}

// Lightweight second pass: pull structured booking fields out of the chat.
async function extractBooking(
  key: string,
  messages: { role: string; content: string }[]
): Promise<{
  wants_to_book: boolean;
  name: string;
  phone: string;
  year: string;
  model: string;
  service: string;
  preferred_time: string;
} | null> {
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
        max_tokens: 200,
        system:
          'Extract booking details from this website chat. Reply with JSON only, no other text: {"wants_to_book": boolean, "name": string, "phone": string, "year": string, "model": string, "service": string, "preferred_time": string}. wants_to_book is true only if the visitor asked to book, schedule, or get their car seen. Use "" for anything not stated.',
        messages: messages.map((m) => ({ role: m.role, content: m.content.slice(0, 1000) })),
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text: string =
      data.content?.map((b: { text?: string }) => b.text || "").join("").trim() || "";
    const json = text.match(/\{[\s\S]*\}/)?.[0];
    return json ? JSON.parse(json) : null;
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }
  let body: { messages?: { role: string; content: string }[]; bookingSent?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  const alreadyBooked = body.bookingSent === true;
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
    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      return NextResponse.json({ ok: false, error: `anthropic_${res.status}`, detail: errBody.slice(0, 300) }, { status: 502 });
    }
    const data = await res.json();
    const reply = data.content?.map((b: { text?: string }) => b.text || "").join("").trim();
    if (!reply) throw new Error("empty");

    // Fire-and-forget lead capture when contact info appears
    const transcript = messages.map((m) => `${m.role}: ${m.content}`).join("\n");

    // In-chat booking: if the visitor asked to book and gave name + phone + service,
    // email the shop a booking request (once per conversation).
    let bookingSent = alreadyBooked;
    if (!alreadyBooked) {
      const bk = await extractBooking(key, [...messages, { role: "assistant", content: reply }]);
      if (bk && bk.wants_to_book && bk.name && bk.phone && bk.service) {
        bookingSent = await sendBookingEmail(bk, `${transcript}\nassistant: ${reply}`);
      }
    }
    if (!bookingSent && hasContact(transcript)) {
      sendLeadEmail(transcript).catch(() => {});
    }
    return NextResponse.json({ ok: true, reply, bookingSent });
  } catch {
    return NextResponse.json({ ok: false, error: "chat_failed" }, { status: 502 });
  }
}
