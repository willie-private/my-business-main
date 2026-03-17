import nodemailer from "nodemailer";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Honeypot
    const hp = String(body?._hp || "").trim();
    if (hp) {
      return Response.json({ ok: true });
    }

    const email = String(body?.email || "").trim();
    if (!email || !isEmail(email)) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
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

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || "BC ERA"}" <${fromEmail}>`,
      to,
      subject: "New Insights Subscription",
      text: `New subscriber email: ${email}`,
      html: `<div style="font-family:Arial,sans-serif">
              <h3>New Insights Subscription</h3>
              <p><b>Email:</b> ${escapeHtml(email)}</p>
            </div>`,
      replyTo: email,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return Response.json({ error: "Subscription failed." }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}