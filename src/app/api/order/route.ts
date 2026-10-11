import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 30;

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
const RATE = new Map<string, { count: number; reset: number }>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = RATE.get(ip);
  if (!rec || now > rec.reset) {
    RATE.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
    return false;
  }
  rec.count += 1;
  return rec.count > 5;
}

const str = (v: FormDataEntryValue | null): string =>
  typeof v === "string" ? v.trim() : "";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please call or text (818) 281-7757." },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not read the submission. Please call or text (818) 281-7757." },
      { status: 400 }
    );
  }

  // Honeypot: bots fill it, humans never see it.
  if (str(form.get("website"))) {
    return NextResponse.json({ ok: true });
  }

  const product = str(form.get("product"));
  const name = str(form.get("name"));
  const phone = str(form.get("phone"));
  const fulfillment = str(form.get("fulfillment"));

  const missing: string[] = [];
  if (!product) missing.push("product");
  if (!name) missing.push("name");
  if (!phone) missing.push("phone");
  if (fulfillment !== "pickup" && fulfillment !== "shipping") missing.push("fulfillment");
  if (fulfillment === "shipping" && !str(form.get("address"))) missing.push("shipping address");
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}.` },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const lines = [
    "NEW WEBSITE ORDER (evplusautorepair.com/shop)",
    "",
    `Product: ${product}`,
    `Price: ${str(form.get("price")) || "—"}`,
    `Quantity: ${str(form.get("quantity")) || "1"}`,
    `Fulfillment: ${fulfillment === "pickup" ? "Free pickup (Sun Valley)" : "Shipping"}`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${str(form.get("email")) || "—"}`,
  ];
  if (fulfillment === "shipping") {
    lines.push(`Shipping address: ${str(form.get("address"))}`);
  }
  lines.push("", `Notes: ${str(form.get("notes")) || "—"}`);

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
      replyTo: str(form.get("email")) || undefined,
      subject: `New website order — ${name}`,
      text: lines.join("\n"),
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your order just now. Please call or text (818) 281-7757 and we'll take care of you.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
