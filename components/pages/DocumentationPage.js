"use client";

import { useState } from "react";

const tabs = [
  { key: "whitepaper", label: "📄 White Paper" },
  { key: "tokenomics", label: "🪙 Tokenomics" },
  { key: "roadmap", label: "🗺️ Roadmap" },
  { key: "pitchdeck", label: "📊 Pitch Deck" },
];


const roadmap = [
  {
    phase: "Phase 1 — Foundation",
    period: "Q1–Q2 2026",
    title: "Core Infrastructure",
    items: [
      "Company incorporation in Philippines",
      "Core team assembly",
      "Smart contract architecture design",
      "BCCart MVP development",
      "Internal security audits",
    ],
    status: "active",
  },
  {
    phase: "Phase 2 — Launch",
    period: "Q3–Q4 2026",
    title: "Product Launch & Token",
    items: [
      "BCCart public beta launch",
      "BCERA token generation event (TGE)",
      "Private sale rounds",
      "Merchant onboarding program",
      "First exchange listings",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 3 — Growth",
    period: "Q1–Q2 2026",
    title: "Ecosystem Expansion",
    items: [
      "Multi-chain bridge integration",
      "Public sale launch",
      "BCERA staking & governance launch",
      "Partnership program with Philippine businesses",
      "Mobile app launch",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 4 — Scale",
    period: "Q3–Q4 2027",
    title: "Global Scaling",
    items: [
      "Expansion to SEA markets (Indonesia, Vietnam, Thailand)",
      "Enterprise merchant solutions",
      "NFT marketplace integration",
      "Cross-border remittance features",
      "Regulatory compliance expansion",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 5 — Decentralization",
    period: "2028+",
    title: "Full Protocol Decentralization",
    items: [
      "Full DAO governance transfer",
      "Protocol-level decentralization",
      "Global market penetration",
      "DeFi lending integration for merchants",
      "Layer 2 native deployment",
    ],
    status: "upcoming",
  },
];

export default function DocumentationPage() {
  const [active, setActive] = useState("whitepaper");

  return (
    <main className="page">
      <section
        className="hero"
        style={{ minHeight: "40vh", paddingTop: "140px", paddingBottom: "60px" }}
      >
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">Documentation Hub</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              <span className="accent">Technical</span> Documentation
            </h1>
            <p className="hero-desc">
              Deep-dive into the BC ERA protocol — white paper, tokenomics, roadmap, and pitch deck.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "28px" }}>
            {/* Left */}
            <aside className="card" style={{ padding: "18px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {tabs.map((t) => (
                  <li key={t.key} style={{ marginBottom: "10px" }}>
                    <a
                      className={active === t.key ? "active" : ""}
                      onClick={() => setActive(t.key)}
                      style={{ cursor: "pointer", display: "block" }}
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    fontFamily: "Space Mono, monospace",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  External Links
                </div>

                <ul style={{ paddingLeft: "16px", margin: 0 }}>
                  {externalLinks.map((l) => (
                    <li key={l.href} style={{ marginBottom: "10px" }}>
                      <a href={l.href}  rel="noreferrer" style={{ color: "var(--accent)" }}>
                        {l.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right */}
            <div>
              {active === "whitepaper" && (
                <div className="doc-section">
                  <h2>📄 White Paper</h2>
                  <p>
                    The BC ERA White Paper presents the technical and economic framework for a fully decentralized
                    e-commerce ecosystem, powered by blockchain technology and governed by the BCERA token community.
                  </p>

                  <h3>Executive Summary</h3>
                  <p>
                    The global e-commerce market generates trillions of dollars annually, yet is dominated by centralized
                    platforms that extract significant rents from merchants, restrict access to certain geographies, and
                    maintain opaque data practices that disadvantage sellers and buyers alike.
                  </p>
                  <p>
                    BC ERA proposes an open, permissionless commerce infrastructure built on programmable smart
                    contracts, enabling peer-to-peer transactions without intermediaries, with transparent fee structures and
                    immutable transaction records.
                  </p>
                </div>
              )}

              {active === "tokenomics" && (
                <div className="doc-section">
                  <h2>🪙 Tokenomics — BCERA token</h2>
                  <p>
                    The BCERA token is the native utility and governance token of the BC ERA protocol. It powers merchant
                    incentives, platform governance, staking rewards, and access to premium features.
                  </p>

                  <h3>Token Utility</h3>
                  <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                      {
                        title: "Governance",
                        desc: "Vote on protocol upgrades, fee parameters, and treasury allocation.",
                      },
                      { title: "Staking", desc: "Stake BCERA to earn yield from platform transaction fees." },
                      { title: "Premium Features", desc: "Unlock advanced merchant tools, analytics, and priority support." },
                      { title: "Payment Discounts", desc: "Pay platform fees in BCERA at a significant discount vs. other tokens." },
                    ].map((x) => (
                      <div key={x.title} className="card" style={{ padding: "18px" }}>
                        <div className="card-title" style={{ marginBottom: "8px" }}>
                          {x.title}
                        </div>
                        <div className="card-desc">{x.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === "roadmap" && (
                <div className="doc-section">
                  <h2>🗺️ Roadmap</h2>
                  <p>
                    BC ERA&apos;s development roadmap is structured in five phases, taking the platform from initial
                    infrastructure to full protocol decentralization and global commerce dominance.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
                    {roadmap.map((p) => (
                      <div key={p.phase} className="card" style={{ padding: "18px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                          <div className="card-title">{p.phase}</div>
                          <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>{p.period}</div>
                        </div>
                        <div className="card-desc" style={{ marginTop: "8px" }}>
                          <strong style={{ color: "var(--text)" }}>{p.title}</strong>
                          <ul style={{ marginTop: "10px" }}>
                            {p.items.map((it) => (
                              <li key={it}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === "pitchdeck" && (
                <div className="doc-section">
                  <h2>📊 Pitch Deck</h2>
                  <p>
                    BC ERA&apos;s investor pitch deck provides an overview of the market opportunity, competitive
                    advantages, team, and projections for decentralized commerce infrastructure.
                  </p>

                  <h3 style={{ marginTop: "24px" }}>Market Opportunity (Snapshot)</h3>
                  <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="card" style={{ padding: "18px" }}>
                      <div className="card-title">Global E-Commerce</div>
                      <div className="card-desc">$6.2T → $9.8T (2030 projection)</div>
                    </div>
                    <div className="card" style={{ padding: "18px" }}>
                      <div className="card-title">Web3 Commerce</div>
                      <div className="card-desc">Early market with rapid adoption</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}