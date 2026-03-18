const features = [
  {
    icon: "🛒",
    title: "BCCart",
    desc: "Build fully decentralized e-commerce storefronts powered by Web3 wallets and smart contracts. Accept crypto natively — no intermediaries.",
  },
  {
    icon: "🔐",
    title: "Trustless Payments",
    desc: "Every transaction secured by blockchain. Smart contract escrow protects buyers and sellers, eliminating fraud and chargebacks permanently.",
  },
  {
    icon: "🌐",
    title: "Borderless Commerce",
    desc: "Sell globally without banking restrictions. Any wallet, any country, any currency — the decentralized marketplace has no borders.",
  },
  {
    icon: "📊",
    title: "On-Chain Analytics",
    desc: "Real-time, transparent transaction data recorded immutably on-chain. Merchants gain unmatched insight into their storefront performance.",
  },
  {
    icon: "🪙",
    title: "BCERA Token",
    desc: "Power the ecosystem with the BCERA token. Use it to access platform utilities, rewards, governance, and premium blockchain commerce features.",
  },
  {
    icon: "🔗",
    title: "Multi-Chain Support",
    desc: "Deploy on Ethereum, BNB Chain, Polygon, and more. Our cross-chain bridge enables seamless interoperability across all major networks.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="section" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label">Platform Features</span>
          <h2 className="section-title">
            Everything You Need for <span>Blockchain Commerce</span>
          </h2>
        </div>

        <div className="grid-3">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="card-icon">{f.icon}</div>
              <div className="card-title">{f.title}</div>
              <div className="card-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}