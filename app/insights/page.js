"use client";

import SiteShell from "@/components/layout/SiteShell";
import InsightsSubscribeForm from "@/components/forms/InsightsSubscribeForm";
import { useMemo, useState } from "react";

const filters = ["All", "News", "Report", "Opinion"];

const articles = [
  {
    category: "News",
    icon: "⛓️",
    date: "Feb 28, 2026",
    read: "5 min read",
    title: "BC ERA Introduces a New Standard for Block Chain Commerce",
    desc: "BC ERA continues to advance its vision as a Block Chain Commerce Company, building modern commerce solutions powered by blockchain technology for a more secure and transparent future.",
  },
  {
    category: "Report",
    icon: "📊",
    date: "Feb 20, 2026",
    read: "8 min read",
    title: "The State of Block Chain Commerce in Southeast Asia: 2025 Annual Report",
    desc: "Our comprehensive analysis of blockchain-powered commerce adoption across Southeast Asia highlights emerging opportunities, strong digital growth, and expanding merchant participation in the region.",
  },
  {
    category: "Opinion",
    icon: "💡",
    date: "Feb 14, 2026",
    read: "6 min read",
    title: "Why Block Chain Commerce Matters for the Future of Global Trade",
    desc: "As digital markets evolve, block chain commerce offers a path toward more open, efficient, and trusted transactions for businesses and consumers worldwide.",
  },
  {
    category: "Report",
    icon: "🔗",
    date: "Feb 7, 2026",
    read: "10 min read",
    title: "How Blockchain Infrastructure Supports Modern Commerce Platforms",
    desc: "A closer look at how blockchain technology can strengthen commerce ecosystems through improved transparency, security, and operational efficiency.",
  },
  {
    category: "News",
    icon: "🌐",
    date: "Jan 30, 2026",
    read: "4 min read",
    title: "BC ERA Expands Its Vision as a Global Block Chain Commerce Company",
    desc: "With a growing focus on digital trade and blockchain innovation, BC ERA is positioning itself to serve merchants and businesses in a more connected global economy.",
  },
  {
    category: "Opinion",
    icon: "🛡️",
    date: "Jan 22, 2026",
    read: "7 min read",
    title: "Building Trust Through Secure and Transparent Commerce",
    desc: "Trust remains at the center of every transaction. BC ERA explores how blockchain-enabled systems can create a more secure and reliable commerce experience.",
  },
];

function pillStyle(category) {
  if (category === "News") {
    return {
      background: "rgba(0, 170, 255, 0.125)",
      border: "1px solid rgba(0, 170, 255, 0.314)",
      color: "rgb(0, 170, 255)",
    };
  }
  if (category === "Report") {
    return {
      background: "rgba(240, 180, 41, 0.125)",
      border: "1px solid rgba(240, 180, 41, 0.314)",
      color: "rgb(240, 180, 41)",
    };
  }
  return {
    background: "rgba(34, 197, 94, 0.125)",
    border: "1px solid rgba(34, 197, 94, 0.314)",
    color: "rgb(34, 197, 94)",
  };
}

export default function InsightsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((a) => a.category === active);
  }, [active]);

  return (
    <SiteShell>
      <main className="page">
        <section className="hero" style={{ minHeight: "50vh", paddingTop: 140, paddingBottom: 60 }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="orb orb-1" />
          <div className="container">
            <div className="hero-content fade-up">
              <div className="hero-badge">Insights &amp; Knowledge</div>
              <h1 className="hero-title" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Explore the Latest in
                <br />
                <span className="accent">Block Chain Commerce</span>
              </h1>
              <p className="hero-desc">
                News, research reports, and perspectives from BC ERA, a Block Chain Commerce Company.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <div className="container">
            <div style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
              {filters.map((f) => {
                const isActive = f === active;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    style={{
                      padding: "8px 20px",
                      borderRadius: 100,
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: isActive ? "var(--accent)" : "var(--border)",
                      background: isActive ? "var(--accent-glow)" : "transparent",
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      cursor: "pointer",
                      fontFamily: "Space Mono, monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                      transition: "0.2s",
                    }}
                    type="button"
                  >
                    {f}
                  </button>
                );
              })}
            </div>

            <div className="grid-3">
              {filtered.map((a) => (
                <div
                  key={a.title}
                  className="card article-card"
                  style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}
                >
                  <div
                    style={{
                      height: 180,
                      background: "linear-gradient(135deg, var(--bg3), var(--bg2))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 60,
                      borderBottom: "1px solid var(--border)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        padding: "4px 12px",
                        borderRadius: 100,
                        fontSize: 11,
                        fontFamily: "Space Mono, monospace",
                        fontWeight: 700,
                        letterSpacing: 1,
                        ...pillStyle(a.category),
                      }}
                    >
                      {a.category}
                    </div>
                    {a.icon}
                  </div>

                  <div style={{ padding: 24 }}>
                    <div className="article-meta">
                      <span>{a.date}</span>
                      <span>·</span>
                      <span>{a.read}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--text)",
                        lineHeight: 1.5,
                        marginBottom: 10,
                      }}
                    >
                      {a.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                        marginBottom: 16,
                      }}
                    >
                      {a.desc}
                    </p>

                    <span className="read-more">Read Article →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section-sm" style={{ background: "var(--bg2)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-label">Stay Informed</span>
            <h2 className="section-title">
              Subscribe to <span>BC ERA Insights</span>
            </h2>
            <p className="section-desc" style={{ margin: "0px auto 32px" }}>
              Get the latest news, research, and analysis from BC ERA delivered straight to your inbox.
            </p>

            <InsightsSubscribeForm />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}