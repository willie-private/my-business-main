"use client";

import { useMemo, useRef, useState } from "react";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export default function ScheduleMeetingForm({ onSuccess }) {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [hp, setHp] = useState("");
  const [flash, setFlash] = useState(null); // { type, title, message }

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    topic: false,
    message: false,
    preferredDate: false,
    preferredTime: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const errors = useMemo(() => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!isEmail(form.email.trim())) e.email = "Enter a valid email.";

    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.topic.trim()) e.topic = "Topic is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    if (!form.preferredDate.trim()) e.preferredDate = "Preferred date is required.";
    if (!form.preferredTime.trim()) e.preferredTime = "Preferred time is required.";

    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function showErr(field) {
    return (submitAttempted || touched[field]) && errors[field];
  }

  async function submit(e) {
    e.preventDefault();
    setSubmitAttempted(true);
    setFlash(null);

    if (hp.trim()) {
      setFlash({
        type: "success",
        title: "Request Sent",
        message: "Thanks! We’ll contact you soon.",
      });
      onSuccess?.();
      return;
    }

    if (!isValid) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _hp: hp }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send request.");

setFlash({
  type: "success",
  title: "Request Sent",
  message: "✅ We received your request. We’ll reply shortly.",
});

setForm({
  name: "",
  email: "",
  company: "",
  topic: "",
  message: "",
  preferredDate: "",
  preferredTime: "",
});

setHp("");
setSubmitAttempted(false);
setTouched({
  name: false,
  email: false,
  company: false,
  topic: false,
  message: false,
  preferredDate: false,
  preferredTime: false,
});
    } catch (err) {
      setFlash({
        type: "error",
        title: "Something went wrong",
        message: err?.message || "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {flash && (
        <div
          className="highlight-box"
          style={{
            marginBottom: 14,
            borderColor:
              flash.type === "error"
                ? "rgba(255, 90, 90, 0.35)"
                : "var(--border-bright)",
            background:
              flash.type === "error"
                ? "rgba(255, 90, 90, 0.08)"
                : "rgba(35, 165, 249, 0.10)",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6, color: "var(--text)" }}>
            {flash.title}
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
            {flash.message}
          </div>
        </div>
      )}

      <form onSubmit={submit} noValidate>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="hpMeeting">Website</label>
          <input
            id="hpMeeting"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="meeting-grid">
          <div>
            <label className="meeting-label">Name *</label>
            <input
              className={`meeting-input ${showErr("name") ? "meeting-input-error" : ""}`}
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              placeholder="Your name"
            />
            {showErr("name") && <div className="meeting-error">{errors.name}</div>}
          </div>

          <div>
            <label className="meeting-label">Email *</label>
            <input
              className={`meeting-input ${showErr("email") ? "meeting-input-error" : ""}`}
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="you@email.com"
            />
            {showErr("email") && <div className="meeting-error">{errors.email}</div>}
          </div>

          <div>
            <label className="meeting-label">Company *</label>
            <input
              className={`meeting-input ${showErr("company") ? "meeting-input-error" : ""}`}
              value={form.company}
              onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, company: true }))}
              placeholder="Company name"
            />
            {showErr("company") && <div className="meeting-error">{errors.company}</div>}
          </div>

          <div>
            <label className="meeting-label">Topic *</label>
            <select
              className={`meeting-input ${showErr("topic") ? "meeting-input-error" : ""}`}
              value={form.topic}
              onChange={(e) => setForm((s) => ({ ...s, topic: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, topic: true }))}
            >
              <option value="">Select topic</option>
              <option value="Partnership">Partnership</option>
              <option value="Demo">Demo</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Investment">Investment</option>
              <option value="Other">Other</option>
            </select>
            {showErr("topic") && <div className="meeting-error">{errors.topic}</div>}
          </div>

          <div>
            <label className="meeting-label">Preferred Date *</label>
            <div
              className="meeting-icon-input"
              onClick={() => dateRef.current?.showPicker?.() || dateRef.current?.focus()}
            >
              <span className="meeting-icon">📅</span>
              <input
                ref={dateRef}
                id="preferredDate"
                type="date"
                className={`meeting-input meeting-input-with-icon ${
                  showErr("preferredDate") ? "meeting-input-error" : ""
                }`}
                value={form.preferredDate}
                onChange={(e) =>
                  setForm((s) => ({ ...s, preferredDate: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, preferredDate: true }))}
              />
            </div>
            {showErr("preferredDate") && (
              <div className="meeting-error">{errors.preferredDate}</div>
            )}
          </div>

          <div>
            <label className="meeting-label">Preferred Time *</label>
            <div
              className="meeting-icon-input"
              onClick={() => timeRef.current?.showPicker?.() || timeRef.current?.focus()}
            >
              <span className="meeting-icon">⏰</span>
              <input
                ref={timeRef}
                id="preferredTime"
                type="time"
                className={`meeting-input meeting-input-with-icon ${
                  showErr("preferredTime") ? "meeting-input-error" : ""
                }`}
                value={form.preferredTime}
                onChange={(e) =>
                  setForm((s) => ({ ...s, preferredTime: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, preferredTime: true }))}
              />
            </div>
            {showErr("preferredTime") && (
              <div className="meeting-error">{errors.preferredTime}</div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <label className="meeting-label">Message *</label>
          <textarea
            className={`meeting-input ${showErr("message") ? "meeting-input-error" : ""}`}
            rows={5}
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, message: true }))}
            placeholder="Tell us what you want to discuss..."
          />
          {showErr("message") && <div className="meeting-error">{errors.message}</div>}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Request"}
          </button>
        </div>
      </form>

      <style>{`
        .meeting-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 860px) {
          .meeting-grid {
            grid-template-columns: 1fr;
          }
        }

        .meeting-label {
          display: block;
          font-size: 12px;
          font-family: "Space Mono", monospace;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .meeting-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text);
          outline: none;
          font-size: 14px;
          font-family: "DM Sans", sans-serif;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          -webkit-appearance: none;
          appearance: none;
        }

        .meeting-input:focus {
          border-color: var(--border-bright);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .meeting-input-error {
          border-color: rgba(255, 90, 90, 0.45);
        }

        .meeting-error {
          margin-top: 6px;
          font-size: 12px;
          color: rgba(255, 140, 140, 0.95);
        }

        select.meeting-input {
          background-image:
            linear-gradient(45deg, transparent 50%, var(--text-muted) 50%),
            linear-gradient(135deg, var(--text-muted) 50%, transparent 50%);
          background-position:
            calc(100% - 18px) calc(50% - 3px),
            calc(100% - 12px) calc(50% - 3px);
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
          padding-right: 36px;
        }

        input[type="date"].meeting-input,
        input[type="time"].meeting-input {
          color-scheme: light dark;
        }

        .hp-field {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        .meeting-icon-input {
          position: relative;
        }

        .meeting-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 1;
        }

        .meeting-input-with-icon {
          padding-left: 38px;
        }
      `}</style>
    </>
  );
}