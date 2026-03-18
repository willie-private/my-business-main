"use client";

import SiteShell from "@/components/layout/SiteShell";
import { useState } from "react";

const documentationSections = [
  {
    key: "overview",
    label: "📄 White Paper",
  },
  {
    key: "tokenomics",
    label: "🪙 Tokenomics",
  },
  {
    key: "roadmap",
    label: "🗺️ Roadmap",
  },
  {
    key: "pitchDeck",
    label: "📊 Pitch Deck",
  },
];

const tokenAllocations = [
  {
    label: "Community & Ecosystem",
    pct: 35,
    fillStyle: { background: "linear-gradient(90deg, rgb(0, 170, 255), rgba(0, 170, 255, 0.6))" },
  },
  {
    label: "Team & Founders",
    pct: 20,
    fillStyle: { background: "linear-gradient(90deg, rgb(0, 102, 204), rgba(0, 102, 204, 0.6))" },
  },
  {
    label: "Private Sale",
    pct: 15,
    fillStyle: { background: "linear-gradient(90deg, rgb(240, 180, 41), rgba(240, 180, 41, 0.6))" },
  },
  {
    label: "Public Sale",
    pct: 10,
    fillStyle: { background: "linear-gradient(90deg, rgb(34, 197, 94), rgba(34, 197, 94, 0.6))" },
  },
  {
    label: "Liquidity & Market Making",
    pct: 10,
    fillStyle: { background: "linear-gradient(90deg, rgb(168, 85, 247), rgba(168, 85, 247, 0.6))" },
  },
  {
    label: "Advisors & Partners",
    pct: 5,
    fillStyle: { background: "linear-gradient(90deg, rgb(236, 72, 153), rgba(236, 72, 153, 0.6))" },
  },
  {
    label: "Reserve Fund",
    pct: 5,
    fillStyle: { background: "linear-gradient(90deg, rgb(6, 182, 212), rgba(6, 182, 212, 0.6))" },
  },
];

const roadmapPhases = [
  {
    phase: "Phase 1 — Foundation · Q1–Q2 2026",
    badge: {
      text: "⚡ In Progress",
      style: {
        background: "rgba(0, 170, 255, 0.15)",
        color: "var(--accent)",
        border: "1px solid var(--border-bright)",
      },
    },
    title: "Core Infrastructure",
    tags: [
      "Company incorporation in Philippines",
      "Core team assembly",
      "Smart contract architecture design",
      "Commerce platform MVP development",
      "Internal security audits",
    ],
  },
  {
    phase: "Phase 2 — Launch · Q3–Q4 2026",
    badge: {
      text: "◦ Upcoming",
      style: {
        background: "rgba(100, 100, 150, 0.15)",
        color: "var(--text-muted)",
        border: "1px solid transparent",
      },
    },
    title: "Product Launch & Token",
    tags: [
      "Public beta launch",
      "BCERA token generation event (TGE)",
      "Private sale rounds",
      "Merchant onboarding program",
      "Initial exchange listings",
    ],
  },
  {
    phase: "Phase 3 — Growth · Q1–Q2 2027",
    badge: {
      text: "◦ Upcoming",
      style: {
        background: "rgba(100, 100, 150, 0.15)",
        color: "var(--text-muted)",
        border: "1px solid transparent",
      },
    },
    title: "Ecosystem Expansion",
    tags: [
      "Multi-chain bridge integration",
      "Public sale launch",
      "BCERA staking & governance launch",
      "Partnership program with Philippine businesses",
      "Mobile app launch",
    ],
  },
  {
    phase: "Phase 4 — Scale · Q3–Q4 2027",
    badge: {
      text: "◦ Upcoming",
      style: {
        background: "rgba(100, 100, 150, 0.15)",
        color: "var(--text-muted)",
        border: "1px solid transparent",
      },
    },
    title: "Global Scaling",
    tags: [
      "Expansion to SEA markets",
      "Enterprise merchant solutions",
      "Marketplace integrations",
      "Cross-border remittance features",
      "Regulatory compliance expansion",
    ],
  },
  {
    phase: "Phase 5 — Decentralization · 2028+",
    badge: {
      text: "◦ Upcoming",
      style: {
        background: "rgba(100, 100, 150, 0.15)",
        color: "var(--text-muted)",
        border: "1px solid transparent",
      },
    },
    title: "Full Protocol Decentralization",
    tags: [
      "Full DAO governance transfer",
      "Protocol-level decentralization",
      "Global market penetration",
      "DeFi integrations for merchants",
      "Layer 2 native deployment",
    ],
  },
];

export default function DocumentationPage() {
  const [active, setActive] = useState("overview");

  return (
    <SiteShell>
      <main className="page">
        <section className="hero" style={{ minHeight: "40vh", paddingTop: 140, paddingBottom: 60 }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="container">
            <div className="hero-content fade-up">
              <div className="hero-badge">Documentation Hub</div>
              <h1 className="hero-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                <span className="accent">BC ERA</span> Documentation
              </h1>
              <p className="hero-desc">
                Explore BC ERA — a Block Chain Commerce Company — through our company overview, tokenomics, roadmap, and pitch deck materials.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <div className="container">
            <div
              className="docs-layout"
              style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 40, alignItems: "start" }}
            >
              <div className="docs-nav">
                <h3>Contents</h3>
                <ul>
                  {documentationSections.map((section) => (
                    <li key={section.key}>
                      <a
                        className={active === section.key ? "active" : ""}
                        onClick={() => setActive(section.key)}
                        style={{ cursor: "pointer" }}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      fontFamily: "Space Mono, monospace",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    External Links
                  </div>
                  <ul>
                    <li>
                      <a href="https://docs.bcera.io/whitepaper" style={{ color: "var(--accent)" }} target="_blank" 
  rel="noopener noreferrer">
                        Full White Paper ↗
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.bcera.io/pitch-deck" style={{ color: "var(--accent)" }} target="_blank" 
  rel="noopener noreferrer">
                        Pitch Deck ↗
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.bcera.io/tokenomics#" style={{ color: "var(--accent)" }} target="_blank" 
  rel="noopener noreferrer">
                        Tokenomics Detail ↗
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.bcera.io/roadmap" style={{ color: "var(--accent)" }} target="_blank" 
  rel="noopener noreferrer">
                        Full Roadmap ↗
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
               {active === "overview" && (
                  <div className="doc-section">
                    <h2>📄 White Paper</h2>
                    <p>
                      The BC ERA White Paper presents the technical and economic framework for a fully decentralized
                      e-commerce ecosystem, powered by blockchain technology and governed by the BCERA token community.
                    </p>

                    <h3>Executive Summary</h3>
                    <p>
                      The global e-commerce market generates trillions of dollars annually, yet is dominated by a
                      handful of centralized platforms that extract significant rents from merchants, restrict access
                      to certain geographies, and maintain opaque data practices that disadvantage sellers and buyers alike.
                    </p>

                    <p>
                      BC ERA proposes a decentralized alternative: an open, permissionless commerce infrastructure
                      built on programmable smart contracts, enabling peer-to-peer transactions without the need for
                      intermediaries, with transparent fee structures and immutable transaction records.
                    </p>

                    <h3>Problem Statement</h3>
                    <div className="highlight-box">
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                        {[
                          ["⚠️ High Platform Fees", "Centralized platforms charge 10-30% fees, drastically reducing merchant margins."],
                          ["⚠️ Geographic Exclusion", "Banking requirements exclude billions of potential merchants and buyers globally."],
                          ["⚠️ Payment Censorship", "Platforms can freeze funds or deplatform merchants without recourse or appeal."],
                          ["⚠️ Data Exploitation", "Merchant and customer data is harvested and monetized without consent or compensation."],
                        ].map(([t, d]) => (
                          <div key={t}>
                            <div style={{ color: "var(--text)", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                              {t}
                            </div>
                            <div style={{ color: "var(--text-muted)", fontSize: 13 }}>
                              {d}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3>The BC ERA Solution</h3>
                    <p>
                      Our platform introduces a suite of decentralized commerce tools anchored by BCCart — a
                      storefront builder that enables anyone with a Web3 wallet to launch a fully functional online
                      shop. Payments flow directly between buyer and seller wallets via audited smart contracts, with
                      optional escrow protection. No banks. No intermediaries. No censorship.
                    </p>

                    <h3>Technical Architecture</h3>
                    <table className="doc-table">
                      <thead>
                        <tr>
                          <th>Layer</th>
                          <th>Technology</th>
                          <th>Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Blockchain</td>
                          <td>EVM-compatible (ETH, BNB, MATIC)</td>
                          <td>Transaction settlement & smart contracts</td>
                        </tr>
                        <tr>
                          <td>Smart Contracts</td>
                          <td>Solidity, audited by third parties</td>
                          <td>Escrow, payments, governance</td>
                        </tr>
                        <tr>
                          <td>Storage</td>
                          <td>IPFS / Arweave</td>
                          <td>Decentralized product catalog & media</td>
                        </tr>
                        <tr>
                          <td>Identity</td>
                          <td>ENS / DID standards</td>
                          <td>Wallet-based merchant identity</td>
                        </tr>
                        <tr>
                          <td>Frontend</td>
                          <td>React / Web3.js</td>
                          <td>Merchant & buyer interface</td>
                        </tr>
                      </tbody>
                    </table>

                    <p style={{ marginTop: 24 }}>
                      <a
                        href="/whitepaper"
                        className="btn btn-primary"
                      >
                        Read Full White Paper ↗
                      </a>
                    </p>
                  </div>
                )}
                {active === "tokenomics" && (
                  <div className="doc-section">
                    <h2>🪙 Tokenomics — BCERA Token</h2>
                    <p>
                      The BCERA token is the native utility and governance token of the BCERA Commerce ecosystem.
                      It powers merchant incentives, platform governance, staking rewards, and access to premium features.
                    </p>

                    <h3>Token Overview</h3>
                    <div className="highlight-box">
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, textAlign: "center" }}>
                        {[
                          ["BCERA Token", "Token Name"],
                          ["BCERA", "Symbol"],
                          ["1,000,000,000", "Total Supply"],
                          ["ERC-20", "Standard"],
                        ].map(([value, label]) => (
                          <div key={label}>
                            <div
                              style={{
                                fontFamily: "Orbitron, sans-serif",
                                fontSize: 16,
                                fontWeight: 700,
                                color: "var(--accent)",
                                marginBottom: 4,
                              }}
                            >
                              {value}
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color: "var(--text-muted)",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: 1,
                                textTransform: "uppercase",
                              }}
                            >
                              {label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3>Token Allocation</h3>
                    {tokenAllocations.map((x) => (
                      <div key={x.label} className="token-bar-wrap">
                        <div className="token-bar-label">
                          <span>{x.label}</span>
                          <strong>{x.pct}%</strong>
                        </div>
                        <div className="token-bar">
                          <div className="token-bar-fill" style={{ width: `${x.pct}%`, ...x.fillStyle }} />
                        </div>
                      </div>
                    ))}

                    <h3>Token Utility</h3>
                    <div className="grid-2" style={{ marginTop: 16 }}>
                      {[
                        ["🗳️", "Governance", "Vote on protocol upgrades, fee parameters, and treasury allocation."],
                        ["💎", "Staking", "Stake BCERA to earn yield from platform transaction fees."],
                        ["🚀", "Premium Features", "Unlock advanced merchant tools, analytics, and priority support."],
                        ["💳", "Payment Discounts", "Pay platform fees in BCERA at a significant discount versus other tokens."],
                      ].map(([icon, title, desc]) => (
                        <div key={title} className="card" style={{ padding: 20 }}>
                          <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
                          <div className="card-title" style={{ fontSize: 14, marginBottom: 6 }}>
                            {title}
                          </div>
                          <div className="card-desc" style={{ fontSize: 13 }}>
                            {desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p style={{ marginTop: 32 }}>
                      <a href="/documentation/tokenomics" className="btn btn-primary">
                        Full Tokenomics Document ↗
                      </a>
                    </p>
                  </div>
                )}

                {active === "roadmap" && (
                  <div className="doc-section">
                    <h2>🗺️ Roadmap</h2>
                    <p>
                      BCERA Commerce&apos;s development roadmap is structured in five phases, taking the platform from
                      initial infrastructure to full protocol decentralization and broader global commerce expansion.
                    </p>

                    <div className="timeline" style={{ marginTop: 40 }}>
                      {roadmapPhases.map((p) => (
                        <div key={p.phase} className="timeline-item">
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                            <span className="timeline-phase">{p.phase}</span>
                            <span
                              style={{
                                padding: "2px 10px",
                                borderRadius: 100,
                                fontSize: 11,
                                fontFamily: "Space Mono, monospace",
                                ...p.badge.style,
                              }}
                            >
                              {p.badge.text}
                            </span>
                          </div>

                          <div className="timeline-title">{p.title}</div>

                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                style={{
                                  fontSize: 12,
                                  padding: "4px 12px",
                                  borderRadius: 6,
                                  background: "var(--bg3)",
                                  border: "1px solid var(--border)",
                                  color: "var(--text-muted)",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p style={{ marginTop: 32 }}>
                      <a href="/documentation/roadmap" className="btn btn-primary">
                        View Full Roadmap ↗
                      </a>
                    </p>
                  </div>
                )}

                {active === "pitchDeck" && (
                  <div className="doc-section">
                    <h2>📊 Pitch Deck</h2>
                    <p>
                      BCERA Commerce&apos;s investor pitch deck provides a compelling overview of the market opportunity,
                      our competitive advantages, team vision, and financial potential for blockchain-powered commerce infrastructure.
                    </p>

                    <h3>Investment Highlights</h3>
                    <div className="grid-2" style={{ marginTop: 16 }}>
                      {[
                        ["📈", "Massive Market", "The global e-commerce market continues to expand rapidly, creating significant long-term opportunity for modern digital commerce infrastructure."],
                        ["🏆", "Regional Advantage", "BCERA Commerce is positioned to build strong momentum in the Philippines and expand across Southeast Asia."],
                        ["🔒", "Defensible Moats", "Smart contract infrastructure, growing merchant network effects, and the BCERA token ecosystem create lasting competitive advantages."],
                        ["💰", "Revenue Model", "Platform fees, premium merchant subscriptions, token utility, and B2B white-label solutions provide diversified revenue potential."],
                      ].map(([icon, title, desc]) => (
                        <div key={title} className="card" style={{ padding: 24 }}>
                          <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                          <div className="card-title">{title}</div>
                          <div className="card-desc" style={{ fontSize: 13 }}>
                            {desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3>Market Opportunity</h3>
                    <table className="doc-table">
                      <thead>
                        <tr>
                          <th>Market</th>
                          <th>Current Size</th>
                          <th>2030 Projection</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Global E-Commerce", "$6.2T", "$9.8T"],
                          ["SEA E-Commerce", "$230B", "$600B"],
                          ["Web3 Commerce", "$12B", "$1.2T"],
                          ["Crypto Payments", "$48B", "$350B"],
                        ].map(([market, current, projection]) => (
                          <tr key={market}>
                            <td>{market}</td>
                            <td>{current}</td>
                            <td>{projection}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="highlight-box" style={{ marginTop: 32 }}>
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{
                            fontFamily: "Orbitron, sans-serif",
                            fontSize: 20,
                            fontWeight: 700,
                            color: "var(--text)",
                            marginBottom: 8,
                          }}
                        >
                          Interested in Investing?
                        </div>

                        <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 20 }}>
                          Schedule a meeting with our team to access the full pitch deck and discuss investment opportunities.
                        </p>

                        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                          <a href="/contact" rel="noreferrer" className="btn btn-primary">
                            📅 Book Investor Meeting
                          </a>
                          <a href="/documentation/pitch-deck" className="btn btn-outline">
                            View Pitch Deck ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}