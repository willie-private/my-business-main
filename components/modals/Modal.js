"use client";

export default function Modal({ open, title, subtitle, onClose, children, maxWidth = 720 }) {
    if (!open) return null;

    return (
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
        >
            <div
                className="card"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "100%",
                    maxWidth,
                    borderRadius: 16,
                    padding: 18,
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 12 }}>
                    <div>
                        <div style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "var(--text)", fontSize: 16 }}>
                            {title}
                        </div>
                        {subtitle ? (
                            <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 6 }}>
                                {subtitle}
                            </div>
                        ) : null}
                    </div>

                    <button className="btn btn-outline" type="button" onClick={onClose}>
                        Close
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}