"use client";

import { useMemo, useState } from "react";

const articles = [
  {
    id: 1,
    icon: "₿",
    category: "News",
    date: "Feb 28, 2026",
    readTime: "5 min",
    title: "CryptoCommerce Co Launches CryptoCart Beta: The Future of Decentralized Shopping is Here",
    excerpt:
      "After months of development and community testing, CryptoCommerce Co officially launches CryptoCart in public beta — enabling merchants worldwide to build fully decentralized storefronts powered by Web3 wallets and smart contracts.",
  },
  {
    id: 2,
    icon: "📊",
    category: "Report",
    date: "Feb 20, 2026",
    readTime: "8 min",
    title: "The State of Blockchain E-Commerce in Southeast Asia: 2025 Annual Report",
    excerpt:
      "Our comprehensive analysis of Web3 commerce adoption across Southeast Asia reveals explosive growth in crypto-native transactions, with the Philippines leading the region in merchant adoption rates and transaction volumes.",
  },
  {
    id: 3,
    icon: "💡",
    category: "Opinion",
    date: "Feb 14, 2026",
    readTime: "6 min",
    title: "Why Traditional Payment Processors Are Failing the Global South — and How Crypto Fixes It",
    excerpt:
      "Billions of people remain excluded from the global digital economy due to banking access barriers. This op-ed argues that decentralized commerce isn't just a technological upgrade — it's a human rights imperative.",
  },
  {
    id: 4,
    icon: "🔗",
    category: "Report",
    date: "Feb 7, 2026",
    readTime: "10 min",
    title: "Cross-Chain Commerce: How Multi-Network Support Unlocks Merchant Flexibility",
    excerpt:
      "Deep-diving into our multi-chain architecture — why supporting Ethereum, BNB Chain, Polygon and more isn't just a technical feature, but a core business necessity for global merchant adoption.",
  },
  {
    id: 5,
    icon: "🪙",
    category: "News",
    date: "Jan 30, 2026",
    readTime: "4 min",
    title: "CC Token Utility Expansion: Staking, Governance, and Premium Feature Access Explained",
    excerpt:
      "The CC token is more than a currency — it's the backbone of platform governance, merchant incentives, and community rewards. Here's everything you need to know about the expanded token utility framework.",
  },
  {
    id: 6,
    icon: "🛡️",
    category: "Opinion",
    date: "Jan 22, 2026",
    readTime: "7 min",
    title: "Smart Contract Escrow vs. Traditional Buyer Protection: A Security Comparison",
    excerpt:
      "We compare our trustless smart contract escrow system against legacy platform buyer protection schemes, showing how blockchain-enforced agreements deliver superior security guarantees for both merchants and buyers.",
  },
];

const filters = ["All", "News", "Report", "Opinion"];

export default function InsightsPage() {
  const [active, setActive] = useState("All");

  const list = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((a) => a.category === active);
  }, [active]);

  return (
    <main className="page">
      <section
        className="hero"
        style={{ minHeight: "50vh", paddingTop: "140px", paddingBottom: "60px" }}
      >
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">Insights & Knowledge</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Explore the Latest in
              <br />
              <span className="accent">Decentralized E-Commerce</span>
            </h1>
            <p className="hero-desc">
              News, research reports, and opinions from the frontlines of the Web3 commerce revolution.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "26px" }}>
            {filters.map((f) => (
              <button
                key={f}
                className={`btn ${active === f ? "btn-primary" : "btn-outline"}`}
                onClick={() => setActive(f)}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
            {list.map((a) => (
              <div key={a.id} className="card" style={{ padding: "22px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                  <div style={{ fontSize: "20px" }}>{a.icon}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                    {a.category} · {a.date} · {a.readTime}
                  </div>
                </div>
                <div className="card-title" style={{ marginBottom: "10px" }}>
                  {a.title}
                </div>
                <div className="card-desc">{a.excerpt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}