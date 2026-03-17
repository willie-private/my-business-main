"use client";

import { useMemo, useState } from "react";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export default function InsightsSubscribeForm() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [touched, setTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({ open: false, type: "success", title: "", message: "" });

  const error = useMemo(() => {
    const v = email.trim();
    if (!v) return "Email is required.";
    if (!isEmail(v)) return "Please enter a valid email.";
    return "";
  }, [email]);

  const showError = (touched || submitAttempted) && Boolean(error);
  const canSubmit = !error && !loading;

  function openModal(type, title, message) {
    setModal({ open: true, type, title, message });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitAttempted(true);

    // ✅ Honeypot: if filled, pretend success (don’t signal bots)
    if (hp.trim()) {
      openModal("success", "Subscribed", "✅ Thanks! You’re subscribed.");
      return;
    }

    if (error) {
      openModal("error", "Invalid Email", "Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/insights/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), _hp: hp.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Subscription failed. Please try again.");
      }

      openModal("success", "Subscribed", "✅ Thanks! You’ll receive BC ERA Insights updates.");
      setEmail("");
      setHp("");
      setTouched(false);
      setSubmitAttempted(false);
    } catch (err) {
      openModal("error", "Subscription Failed", err?.message || "Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} noValidate style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {/* ✅ Honeypot hidden field */}
        <div style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
          <label htmlFor="companyWebsiteSub">Company website</label>
          <input
            id="companyWebsiteSub"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Enter your email"
            className={`insights-input ${showError ? "insights-input-error" : ""}`}
            style={{
              padding: "12px 20px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
              fontSize: 14,
              outline: "none",
              width: 300,
              fontFamily: "DM Sans, sans-serif",
            }}
          />
          {showError && (
            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255, 140, 140, 0.95)" }}>{error}</div>
          )}
        </div>

        <button className="btn btn-primary" type="submit" disabled={!canSubmit}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* ✅ Modal popup */}
      {modal.open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            zIndex: 9999,
          }}
          onClick={() => setModal((m) => ({ ...m, open: false }))}
        >
          <div
            className="card"
            style={{
              width: "100%",
              maxWidth: 520,
              padding: 18,
              borderRadius: 16,
              background: "var(--bg2)",
              border: "1px solid var(--border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "var(--text)", fontSize: 16 }}>
                  {modal.title}
                </div>
                <div style={{ marginTop: 8, color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6 }}>
                  {modal.message}
                </div>
              </div>

              <button className="btn btn-outline" type="button" onClick={() => setModal((m) => ({ ...m, open: false }))}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}