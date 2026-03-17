"use client";

import { useMemo, useState } from "react";

const ROLE_OPTIONS = [
  "Chief Technology Officer",
  "Lead Blockchain Engineer",
  "Full-Stack Web3 Engineer",
  "Senior Backend Engineer",
  "Other",
];

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function isUrl(v) {
  if (!v) return true;
  try {
    new URL(v);
    return true;
  } catch {
    return false;
  }
}

export default function CareersForm() {
  const [loading, setLoading] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // ✅ Modal popup state
  const [modal, setModal] = useState({ open: false, type: "success", title: "", message: "" });

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    role: ROLE_OPTIONS[0],
    experienceYears: "",
    linkedin: "",
    portfolio: "",
    github: "",
    coverLetter: "",

    // ✅ Honeypot (should stay empty)
    companyWebsite: "",
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    location: false,
    role: false,
    experienceYears: false,
    linkedin: false,
    portfolio: false,
    github: false,
    coverLetter: false,
  });

  const errors = useMemo(() => {
    const e = {};
    const fullName = form.fullName.trim();
    const email = form.email.trim();
    const location = form.location.trim();
    const coverLetter = form.coverLetter.trim();
    const exp = form.experienceYears.trim();

    if (!fullName) e.fullName = "Full name is required.";
    if (!email) e.email = "Email is required.";
    else if (!isEmail(email)) e.email = "Please enter a valid email.";
    if (!location) e.location = "Location is required.";

    if (!coverLetter) e.coverLetter = "Tell us briefly why you’re a fit (min 20 chars).";
    else if (coverLetter.length < 20) e.coverLetter = "Please write at least 20 characters.";

    if (exp) {
      const n = Number(exp);
      if (Number.isNaN(n) || n < 0 || n > 60) e.experienceYears = "Enter a valid number (0–60).";
    }

    if (!isUrl(form.linkedin.trim())) e.linkedin = "Please enter a valid URL (https://...).";
    if (!isUrl(form.portfolio.trim())) e.portfolio = "Please enter a valid URL (https://...).";
    if (!isUrl(form.github.trim())) e.github = "Please enter a valid URL (https://...).";

    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function setField(name, value) {
    setForm((s) => ({ ...s, [name]: value }));
  }

  function markTouched(name) {
    setTouched((t) => ({ ...t, [name]: true }));
  }

  function shouldShowError(name) {
    return (touched[name] || submitAttempted) && Boolean(errors[name]);
  }

  function openModal(type, title, message) {
    setModal({ open: true, type, title, message });
  }

  function closeModal() {
    setModal((m) => ({ ...m, open: false }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitAttempted(true);

    // ✅ Honeypot check (client-side)
    if (form.companyWebsite.trim()) {
      // silently "succeed" to not tip off bots
      openModal("success", "Submitted", "Thanks! We’ll review your application.");
      return;
    }

    if (!isValid) {
      openModal("error", "Fix Required Fields", "Please correct the highlighted fields and try again.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        experienceYears: form.experienceYears.trim(),
        linkedin: form.linkedin.trim(),
        portfolio: form.portfolio.trim(),
        github: form.github.trim(),
        coverLetter: form.coverLetter.trim(),

        // ✅ send honeypot to server
        _hp: form.companyWebsite.trim(),
      };

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed. Please try again.");
      }

      openModal("success", "Application Submitted", "✅ Thank you! We’ll get back to you within 3 business days.");

      setSubmitAttempted(false);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        role: ROLE_OPTIONS[0],
        experienceYears: "",
        linkedin: "",
        portfolio: "",
        github: "",
        coverLetter: "",
        companyWebsite: "",
      });

      setTouched({
        fullName: false,
        email: false,
        phone: false,
        location: false,
        role: false,
        experienceYears: false,
        linkedin: false,
        portfolio: false,
        github: false,
        coverLetter: false,
      });
    } catch (err) {
      openModal(
        "error",
        "Submission Failed",
        err?.message || "Could not submit right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="card careers-form-card">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{ fontSize: 26 }}>🧑‍💻</div>
          <div>
            <div className="card-title" style={{ marginBottom: 4 }}>
              BC ERA Job Application
            </div>
            <div className="card-desc" style={{ fontSize: 13 }}>
              Fill this out and we’ll reach out within 3 business days.
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="careers-form" noValidate>
          {/* ✅ Honeypot (hidden visually, still in DOM) */}
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="companyWebsite">Company website</label>
            <input
              id="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.companyWebsite}
              onChange={(e) => setField("companyWebsite", e.target.value)}
            />
          </div>

          <div className="careers-grid">
            <Field
              label="Full name *"
              name="fullName"
              value={form.fullName}
              onChange={(v) => setField("fullName", v)}
              onBlur={() => markTouched("fullName")}
              placeholder="Your name"
              error={shouldShowError("fullName") ? errors.fullName : ""}
            />

            <Field
              label="Email *"
              name="email"
              type="email"
              value={form.email}
              onChange={(v) => setField("email", v)}
              onBlur={() => markTouched("email")}
              placeholder="you@email.com"
              error={shouldShowError("email") ? errors.email : ""}
            />

            <Field
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={(v) => setField("phone", v)}
              onBlur={() => markTouched("phone")}
              placeholder="+63 xxx..."
            />

            <Field
              label="Location *"
              name="location"
              value={form.location}
              onChange={(v) => setField("location", v)}
              onBlur={() => markTouched("location")}
              placeholder="City, Country"
              error={shouldShowError("location") ? errors.location : ""}
            />

            <Select
              label="Role you’re applying for"
              name="role"
              value={form.role}
              onChange={(v) => setField("role", v)}
              onBlur={() => markTouched("role")}
              options={ROLE_OPTIONS}
            />

            <Field
              label="Years of experience"
              name="experienceYears"
              value={form.experienceYears}
              onChange={(v) => setField("experienceYears", v)}
              onBlur={() => markTouched("experienceYears")}
              placeholder="e.g. 5"
              error={shouldShowError("experienceYears") ? errors.experienceYears : ""}
            />

            <Field
              label="LinkedIn (URL)"
              name="linkedin"
              value={form.linkedin}
              onChange={(v) => setField("linkedin", v)}
              onBlur={() => markTouched("linkedin")}
              placeholder="https://linkedin.com/in/..."
              error={shouldShowError("linkedin") ? errors.linkedin : ""}
            />

            <Field
              label="Portfolio / Website (URL)"
              name="portfolio"
              value={form.portfolio}
              onChange={(v) => setField("portfolio", v)}
              onBlur={() => markTouched("portfolio")}
              placeholder="https://..."
              error={shouldShowError("portfolio") ? errors.portfolio : ""}
            />

            <Field
              label="GitHub (URL)"
              name="github"
              value={form.github}
              onChange={(v) => setField("github", v)}
              onBlur={() => markTouched("github")}
              placeholder="https://github.com/..."
              error={shouldShowError("github") ? errors.github : ""}
            />
          </div>

          <div style={{ marginTop: 14 }}>
            <label className="careers-label">Cover letter / Message *</label>
            <textarea
              className={`careers-input ${shouldShowError("coverLetter") ? "careers-input-error" : ""}`}
              rows={6}
              value={form.coverLetter}
              onChange={(e) => setField("coverLetter", e.target.value)}
              onBlur={() => markTouched("coverLetter")}
              placeholder="Tell us what you’ve built, what role you want, and why BC ERA."
            />
            {shouldShowError("coverLetter") && <div className="careers-error">{errors.coverLetter}</div>}
          </div>

          <div className="careers-actions">
            <button className="btn btn-primary" type="submit" disabled={!isValid || loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>

          <div style={{ marginTop: 10, fontSize: 12, color: "var(--text-muted)" }}>
            By submitting, you agree that we may contact you about this application.
          </div>
        </form>
      </div>

      {/* ✅ Modal Popup */}
      {modal.open && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "var(--text)", fontSize: 16 }}>
                  {modal.title}
                </div>
                <div style={{ marginTop: 8, color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6 }}>
                  {modal.message}
                </div>
              </div>

              <button className="btn btn-outline" type="button" onClick={closeModal}>
                Close
              </button>
            </div>

            {modal.type === "error" && (
              <div style={{ marginTop: 14, fontSize: 12, color: "var(--text-muted)" }}>
                Tip: If it keeps failing, contact us at{" "}
                <a style={{ color: "var(--accent)" }} href="mailto:support.cco@cryptocommerce.cloud">
                  support.cco@cryptocommerce.cloud
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .careers-form-card { padding: 22px; }
        .careers-form { margin-top: 18px; }

        .careers-label {
          display: block;
          font-size: 12px;
          font-family: "Space Mono", monospace;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .careers-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-size: 14px;
        }

        .careers-input:focus {
          border-color: var(--border-bright);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .careers-input-error { border-color: rgba(255, 90, 90, 0.45); }

        .careers-error {
          margin-top: 6px;
          font-size: 12px;
          color: rgba(255, 140, 140, 0.95);
        }

        .careers-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        @media (max-width: 860px) {
          .careers-grid { grid-template-columns: 1fr; }
        }

        /* Honeypot: hidden but present */
        .hp-field {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 9999;
        }

        .modal-card {
          width: 100%;
          max-width: 560px;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--bg2);
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          padding: 18px;
        }
      `}</style>
    </>
  );
}

function Field({ label, name, value, onChange, onBlur, placeholder, error, type = "text" }) {
  return (
    <div>
      <label className="careers-label" htmlFor={name}>{label}</label>
      <input
        id={name}
        className={`careers-input ${error ? "careers-input-error" : ""}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
      />
      {error ? <div className="careers-error">{error}</div> : null}
    </div>
  );
}

function Select({ label, name, value, onChange, onBlur, options }) {
  return (
    <div>
      <label className="careers-label" htmlFor={name}>{label}</label>
      <select
        id={name}
        className="careers-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}