const useCases = [
  {
    icon: "👗",
    title: "Fashion & Apparel",
    desc: "Verified provenance, no counterfeit goods, direct-from-brand tokenized ownership.",
  },
  {
    icon: "🎮",
    title: "Gaming & NFTs",
    desc: "In-game asset marketplaces with true ownership and royalties enforced by smart contracts.",
  },
  {
    icon: "🍽️",
    title: "Food & Local Business",
    desc: "Loyalty tokens, transparent supply chain, and direct micro-payments for local merchants.",
  },
  {
    icon: "🏗️",
    title: "Real Estate & Goods",
    desc: "Tokenized asset listings with verifiable ownership, fractional investment, and instant settlement.",
  },
];

export default function UseCases() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label">Use Cases</span>
          <h2 className="section-title">
            BC ERA for Every <span>Industry</span>
          </h2>
        </div>

        <div className="grid-4">
          {useCases.map((c) => (
            <div key={c.title} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <div className="card-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}