import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const maxDuration = 30;

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
// (Per-instance on serverless; a first line of defense alongside the honeypot.)
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

const SERVICE_LABELS: Record<string, string> = {
  inspection: "Free inspection — not sure what's wrong",
  maintenance: "Maintenance / scheduled service",
  "drive-unit-oil": "Drive-unit oil service",
  suspension: "Suspension / steering noise or vibration",
  alignment: "Wheel alignment",
  brakes: "Brake service",
  "12v": "12V battery",
  "16v": "16V lithium battery",
  "tire-rotation": "Tire rotation",
  "hv-battery": "HV battery concern",
  diagnostics: "Diagnostics / warning light",
  "cabin-filter": "Cabin filter / radiator cleaning",
  other: "Something else",
};
const serviceLabel = (v: string) => SERVICE_LABELS[v] ?? v;

const str = (v: FormDataEntryValue | null): string =>
  typeof v === "string" ? v.trim() : "";

const MAX_FILES = 6;
const MAX_FILE_BYTES = 8 * 1024 * 1024;

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

  const lane = str(form.get("lane"));
  const name = str(form.get("name"));
  const phone = str(form.get("phone"));
  const email = str(form.get("email"));
  const model = str(form.get("model"));
  const year = str(form.get("year"));
  const vin = str(form.get("vin"));

  const missing: string[] = [];
  if (lane !== "service" && lane !== "accident") missing.push("lane");
  if (!name) missing.push("name");
  if (!phone) missing.push("phone");
  if (!model) missing.push("model");
  if (!year) missing.push("year");
  if (lane === "accident") {
    if (!vin) missing.push("vin");
    if (!str(form.get("damage"))) missing.push("damage description");
  }
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}.` },
      { status: 400 }
    );
  }

  const files = form
    .getAll("photos")
    .filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return NextResponse.json(
      { ok: false, error: `Please attach at most ${MAX_FILES} photos.` },
      { status: 400 }
    );
  }
  for (const f of files) {
    if (!f.type.startsWith("image/")) {
      return NextResponse.json(
        { ok: false, error: "Only image files can be attached." },
        { status: 400 }
      );
    }
    if (f.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: `"${f.name}" is too large. Please use smaller photos or text them to (818) 281-7757.` },
        { status: 400 }
      );
    }
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Email delivery isn't wired up yet — surface this so the client can
    // show the call/text fallback instead of pretending it worked.
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const isAccident = lane === "accident";
  const lines = [
    `${isAccident ? "NEW ACCIDENT / PHOTO ESTIMATE REQUEST" : "NEW SERVICE REQUEST"} (evplusautorepair.com/book)`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "—"}`,
    `Tesla: ${year} ${model}`,
    `VIN: ${vin || "—"}`,
  ];
  if (isAccident) {
    lines.push(
      `Insurance company: ${str(form.get("insurance")) || "—"}`,
      `Claim number: ${str(form.get("claim")) || "—"}`,
      `Insurance contact: ${str(form.get("adjuster")) || "—"}`,
      `Damage description: ${str(form.get("damage"))}`,
      `Photos attached: ${files.length > 0 ? `${files.length} (see attachments)` : "none — customer may text them"}`
    );
  } else {
    lines.push(
      `Service needed: ${serviceLabel(str(form.get("service")))}`,
      `Preferred date: ${str(form.get("date")) || "—"}`
    );
  }
  lines.push(
    `Need a rental: ${str(form.get("rental")) || "—"}`,
    "",
    `Details: ${str(form.get("details")) || "—"}`
  );

  try {
    const port = Number(SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const attachments = await Promise.all(
      files.map(async (f) => ({
        filename: f.name || "photo.jpg",
        content: Buffer.from(await f.arrayBuffer()),
        contentType: f.type,
      }))
    );

    await transporter.sendMail({
      from: `"EV+ Website" <${SMTP_USER}>`,
      to: BOOKING_TO || "info@evplusautorepair.com",
      replyTo: email || undefined,
      subject: `${isAccident ? "Accident estimate request" : "Service request"} — ${name}`,
      text: lines.join("\n"),
      attachments,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your request just now. Please call or text (818) 281-7757 and we'll take care of you.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
