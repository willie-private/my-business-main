"use client";

import { useState } from "react";
import SiteShell from "@/components/layout/SiteShell";
import Modal from "@/components/modals/Modal";
import ScheduleMeetingForm from "@/components/forms/ScheduleMeetingForm";

const contacts = [
  {
    href: "https://t.me/bcera_co",
    icon: "✈️",
    title: "Telegram",
    badge: "Fastest Response",
    label: "@bcera_co",
    desc: "Join our Telegram for real-time updates, support, and community discussions.",
  },
  {
    href: "https://www.linkedin.com/company/bc-era/",
    icon: "💼",
    title: "LinkedIn",
    badge: "Professional Inquiries",
    label: "BC ERA",
    desc: "Connect with us on LinkedIn for partnership and business development conversations.",
  },
  {
    href: "mailto:support.cco@bcera.com",
    icon: "✉️",
    title: "Email",
    badge: "General Support",
    label: "support.cco@bcera.com",
    desc: "For detailed inquiries, partnerships, media, or investor relations — email us directly.",
  },
  {
    href: "#",
    icon: "📅",
    title: "Schedule a Meeting",
    badge: "Book via Form",
    label: "Book a 30-min session",
    desc: "Schedule a one-on-one session with our team for demos, partnerships, or business discussions.",
    isCalendly: true,
  },
];

const faqs = [
  [
    "Q: What does BC ERA do?",
    "BC ERA is a Block Chain Commerce Company focused on building modern commerce solutions powered by blockchain technology.",
  ],
  [
    "Q: How can I connect with BC ERA?",
    "You can reach us through Telegram, LinkedIn, email, or by booking a meeting through Calendly. Contact us directly for support, partnerships, or onboarding assistance.",
  ],
  [
    "Q: What industries does BC ERA support?",
    "BC ERA focuses on block chain commerce and works with businesses, partners, and innovators exploring secure, transparent, and modern digital commerce solutions.",
  ],
  [
    "Q: How can I partner with BC ERA?",
    "Reach out via email or book a meeting through Calendly. Our team handles partnership, business development, and strategic collaboration inquiries.",
  ],
  [
    "Q: Where is BC ERA based?",
    "BC ERA is proudly rooted in the Philippines and operates with a global, remote-first approach to serve partners and clients across markets.",
  ],
];

export default function ContactPage() {
  const [openMeeting, setOpenMeeting] = useState(false);

  return (
    <SiteShell>
      <main className="page">
        <section className="hero" style={{ minHeight: "50vh", paddingTop: 140, paddingBottom: 60 }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="orb orb-1" />
          <div className="container">
            <div className="hero-content fade-up">
              <div className="hero-badge">Get In Touch</div>
              <h1 className="hero-title" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
                Let&apos;s <span className="accent">Connect</span>
              </h1>
              <p className="hero-desc">
                Whether you&apos;re a business, partner, investor, or curious about block chain commerce — we&apos;re here
                to help and connect with you.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label">Contact</span>
              <h2 className="section-title">
                We&apos;re Here to <span>Help</span>
              </h2>
            </div>

            <div className="grid-2" style={{ maxWidth: 900, margin: "0px auto 80px" }}>
              {contacts.map((c) =>
                c.isCalendly ? (
                  <button
                    key={c.title}
                    type="button"
                    className="contact-item"
                    onClick={() => setOpenMeeting(true)}
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <div className="contact-icon">{c.icon}</div>
                    <div className="contact-info">
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                        <h3>{c.title}</h3>
                        <span style={{ fontSize: 11, color: "var(--accent)", fontFamily: "Space Mono, monospace" }}>
                          {c.badge}
                        </span>
                      </div>

                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: 13,
                          display: "block",
                          marginBottom: 6,
                          color: "var(--accent)",
                        }}
                      >
                        {c.label}
                      </span>

                      <p style={{ margin: 0, color: "var(--text-muted)" }}>{c.desc}</p>
                    </div>
                  </button>
                ) : (
                  <a
                    key={c.title}
                    href={c.href}
                    rel="noreferrer"
                    className="contact-item"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="contact-icon">{c.icon}</div>
                    <div className="contact-info">
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                        <h3>{c.title}</h3>
                        <span style={{ fontSize: 11, color: "var(--accent)", fontFamily: "Space Mono, monospace" }}>
                          {c.badge}
                        </span>
                      </div>

                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: 13,
                          display: "block",
                          marginBottom: 6,
                          color: "var(--accent)",
                        }}
                      >
                        {c.label}
                      </span>

                      <p>{c.desc}</p>
                    </div>
                  </a>
                )
              )}
            </div>

            <div className="highlight-box" style={{ textAlign: "center", maxWidth: 700, margin: "0px auto 80px" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🇵🇭</div>
              <div
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 8,
                }}
              >
                Philippines Headquarters
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 0 }}>
                BC ERA is proudly headquartered in the Philippines — Southeast Asia&apos;s rising tech and fintech hub. Our
                team operates globally with a remote-first culture, while our roots remain in the vibrant Philippine
                startup ecosystem.
              </p>
            </div>

            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="section-label">FAQ</span>
              <h2 className="section-title">
                Common <span>Questions</span>
              </h2>
            </div>

            <div style={{ maxWidth: 800, margin: "0px auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map(([q, a]) => (
                <div key={q} className="card" style={{ padding: "24px 28px" }}>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 10,
                    }}
                  >
                    {q}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ background: "var(--bg2)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-label">Ready to Start?</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Book a <span>Meeting</span> Today
            </h2>
            <p className="section-desc" style={{ margin: "0px auto 32px" }}>
              Our team is ready to discuss BC ERA, partnership opportunities, and answer any questions you have about our
              block chain commerce vision.
            </p>

            <button className="btn btn-primary" type="button" onClick={() => setOpenMeeting(true)}>
              📅 Schedule a Meeting
            </button>
          </div>
        </section>

        {/* ✅ Modal popup */}
<Modal
  open={openMeeting}
  title="Schedule a Meeting"
  subtitle="Send a request and we’ll confirm by email."
  onClose={() => setOpenMeeting(false)}
  maxWidth={760}
>
  <ScheduleMeetingForm />
</Modal>
      </main>
    </SiteShell>
  );
}