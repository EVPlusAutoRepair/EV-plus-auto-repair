import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 30;

// Partial (abandoned) booking alerts. The /book form sends a beacon here
// when a visitor who typed a phone number or email leaves without
// submitting, so the shop can call them back instead of losing the lead.
// Deliberately stricter rate limit than the booking route: at most 2
// partial alerts per IP per 30 minutes.
const RATE = new Map<string, { count: number; reset: number }>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = RATE.get(ip);
  if (!rec || now > rec.reset) {
    RATE.set(ip, { count: 1, reset: now + 30 * 60 * 1000 });
    return false;
  }
  rec.count += 1;
  return rec.count > 2;
}

const str = (v: FormDataEntryValue | null): string =>
  typeof v === "string" ? v.trim() : "";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ ok: true });

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: true });
  }

  // Honeypot: bots fill it, humans never see it.
  if (str(form.get("website"))) return NextResponse.json({ ok: true });

  const lane = str(form.get("lane"));
  const name = str(form.get("name"));
  const phone = str(form.get("phone"));
  const email = str(form.get("email"));

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

  const isAccident = lane === "accident";
  const filled: string[] = [];
  const field = (label: string, v: string) => {
    if (v) filled.push(`${label}: ${v}`);
  };
  field("Name", name);
  field("Phone", phone);
  field("Email", email);
  const model = str(form.get("model"));
  const year = str(form.get("year"));
  if (model || year) filled.push(`Tesla: ${[year, model].filter(Boolean).join(" ")}`);
  field("VIN", str(form.get("vin")));
  if (isAccident) {
    field("Insurance company", str(form.get("insurance")));
    field("Claim number", str(form.get("claim")));
    field("Damage description", str(form.get("damage")));
  } else {
    field("Service wanted", str(form.get("service")));
    field("Preferred date", str(form.get("date")));
    field("Details", str(form.get("details")));
  }
  field("Rental", str(form.get("rental")));

  const lines = [
    `PARTIAL BOOKING — a customer started the ${isAccident ? "accident intake" : "service request"} form on evplusautorepair.com/book but left WITHOUT submitting.`,
    "",
    "This is not a completed booking — they may think they booked. Reach out while it's fresh.",
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
      subject: `Partial booking (didn't finish) — ${name || phone || email}`,
      text: lines.join("\n"),
    });
  } catch {
    // Alerting is best-effort; never surface an error to a leaving visitor.
  }

  return NextResponse.json({ ok: true });
}
