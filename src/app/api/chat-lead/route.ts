import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 30;

// Chat-lead alerts. The scripted lead-capture chat widget posts here when a
// visitor completes the flow, and beacons here (partial) when they leave
// mid-flow with a phone number or email on file, so the shop can reach out
// instead of losing the lead. Same pattern as /api/book/partial, but for the
// chat box. No pricing is ever shown by the widget, so none is ever sent.
const RATE = new Map<string, { count: number; reset: number }>();
function rateLimited(ip: string, partial: boolean): boolean {
  const limit = partial ? 2 : 10;
  const now = Date.now();
  const rec = RATE.get(ip);
  if (!rec || now > rec.reset) {
    RATE.set(ip, { count: 1, reset: now + 30 * 60 * 1000 });
    return false;
  }
  rec.count += 1;
  return rec.count > limit;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: true });
  }

  const partial = body.partial === true;
  if (rateLimited(ip, partial)) return NextResponse.json({ ok: true });

  // Honeypot: bots fill it, humans never see it.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const s = (v: unknown): string =>
    typeof v === "string" ? v.trim() : "";
  const firstName = s(body.firstName);
  const lastName = s(body.lastName);
  const phone = s(body.phone);
  const email = s(body.email);
  const issue = s(body.issue);
  const year = s(body.year);
  const model = s(body.model);

  // No way to reach the person = nothing worth alerting about.
  const phoneDigits = phone.replace(/\D/g, "");
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (phoneDigits.length < 7 && !hasEmail) {
    return NextResponse.json({ ok: true });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO } =
    process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ ok: true });
  }

  const name = [firstName, lastName].filter(Boolean).join(" ");
  const filled: string[] = [];
  const field = (label: string, v: string) => {
    if (v) filled.push(`${label}: ${v}`);
  };
  field("First name", firstName);
  field("Last name", lastName);
  field("Phone", phone);
  field("Email", email);
  field("Issue", issue);
  if (year || model) filled.push(`Tesla: ${[year, model].filter(Boolean).join(" ")}`);

  const lines = [
    partial
      ? "PARTIAL CHAT LEAD — a visitor started the chat box on evplusautorepair.com but left WITHOUT finishing."
      : "NEW CHAT LEAD — a visitor completed the chat box on evplusautorepair.com.",
    "",
    partial
      ? "This is not a completed lead — reach out while it's fresh."
      : "Reach out while it's fresh.",
    "",
    ...filled,
    "",
    `Started (Pacific): ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}`,
  ];

  try {
    const port = Number(SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"EV+ Website" <${SMTP_USER}>`,
      to: BOOKING_TO || "info@evplusautorepair.com",
      subject: partial
        ? `Chat lead (didn't finish) — ${name || phone || email}`
        : `New chat lead — ${name || phone || email}`,
      text: lines.join("\n"),
    });
  } catch {
    // Alerting is best-effort; never surface an error to a leaving visitor.
  }

  return NextResponse.json({ ok: true });
}
