import nodemailer from "nodemailer";

function required(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      location,
      role,
      experienceYears,
      linkedin,
      portfolio,
      github,
      coverLetter,
    } = body || {};

    // ✅ Server-side validation
    if (!required(fullName) || !required(location) || !required(coverLetter) || !required(email) || !isEmail(email)) {
      return Response.json({ error: "Missing/invalid required fields." }, { status: 400 });
    }

    // ✅ SMTP Transport (Gmail)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optional: verify connection (helps debugging)
    // await transporter.verify();

    const to = process.env.MAIL_TO || process.env.SMTP_USER;
    const fromEmail = process.env.SMTP_USER;

    const subject = `New Job Application — ${role || "Candidate"} — ${fullName}`;

    // Plain text (safe)
    const text = [
      `New BC ERA Job Application`,
      ``,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Location: ${location}`,
      `Role: ${role || "-"}`,
      `Experience Years: ${experienceYears || "-"}`,
      `LinkedIn: ${linkedin || "-"}`,
      `Portfolio: ${portfolio || "-"}`,
      `GitHub: ${github || "-"}`,
      ``,
      `Message / Cover Letter:`,
      `${coverLetter}`,
    ].join("\n");

    // Simple HTML (optional but nicer)
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>New BC ERA Job Application</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><b>Name</b></td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escapeHtml(phone || "-")}</td></tr>
          <tr><td><b>Location</b></td><td>${escapeHtml(location)}</td></tr>
          <tr><td><b>Role</b></td><td>${escapeHtml(role || "-")}</td></tr>
          <tr><td><b>Experience</b></td><td>${escapeHtml(experienceYears || "-")}</td></tr>
          <tr><td><b>LinkedIn</b></td><td>${linkOrDash(linkedin)}</td></tr>
          <tr><td><b>Portfolio</b></td><td>${linkOrDash(portfolio)}</td></tr>
          <tr><td><b>GitHub</b></td><td>${linkOrDash(github)}</td></tr>
        </table>
        <h3>Message / Cover Letter</h3>
        <div style="white-space:pre-wrap;border:1px solid #ddd;padding:12px;border-radius:8px">
          ${escapeHtml(coverLetter)}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || "BC ERA Careers"}" <${fromEmail}>`,
      to,
      subject,
      text,
      html,
      // reply-to candidate (so you can reply directly)
      replyTo: email,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Careers apply error:", err);
    return Response.json({ error: "Email sending failed." }, { status: 500 });
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

function linkOrDash(url) {
  if (!url) return "-";
  const safe = escapeHtml(url);
  return `<a href="${safe}" target="_blank" rel="noreferrer">${safe}</a>`;
}