export const runtime = "nodejs";

import nodemailer from "nodemailer";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export async function POST(req) {
  try {
    const body = await req.json();

    const hp = String(body?._hp || "").trim();
    if (hp) return Response.json({ ok: true });

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const topic = String(body?.topic || "").trim();
    const message = String(body?.message || "").trim();
    const preferredDate = String(body?.preferredDate || "").trim();
    const preferredTime = String(body?.preferredTime || "").trim();

    if (
      !name ||
      !email ||
      !company ||
      !topic ||
      !message ||
      !preferredDate ||
      !preferredTime ||
      !isEmail(email)
    ) {
      return Response.json(
        { error: "All fields are required and email must be valid." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.MAIL_TO || process.env.SMTP_USER;
    const fromEmail = process.env.SMTP_USER;

    const subject = `Meeting Request — ${topic} — ${name}`;

    const text = [
      "New Meeting Request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Topic: ${topic}`,
      `Preferred Date: ${preferredDate}`,
      `Preferred Time: ${preferredTime}`,
      "",
      `Message:\n${message}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"BC ERA Meetings" <${fromEmail}>`,
      to,
      subject,
      text,
      replyTo: email,
    });

    return Response.json({
      ok: true,
      message: "✅ We received your request. We’ll reply shortly.",
    });
  } catch (err) {
    console.error("schedule meeting error:", err);
    return Response.json(
      { error: "Failed to send meeting request." },
      { status: 500 }
    );
  }
}