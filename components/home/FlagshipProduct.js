export default function FlagshipProduct() {
  return (
    <section className="section">
      <div className="container">
        <div className="flagship-grid">
          <div>
            <span className="section-label">Flagship Product</span>
            <h2 className="section-title">
              Meet <span>CryptoCart</span>
            </h2>

            <p className="section-desc" style={{ marginBottom: 24 }}>
              CryptoCart is BC ERA's flagship platform for building blockchain-powered commerce storefronts.
              Connect your Web3 wallet, configure your shop, and start selling globally — all without a bank account or
              payment processor.
            </p>

            <p className="section-desc" style={{ marginBottom: 32 }}>
              Powered by smart contract escrow, real-time on-chain settlement, and multi-currency support, CryptoCart
              puts merchants fully in control of their blockchain commerce operations.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span className="tag">Web3 Wallet Integration</span>
              <span className="tag">Smart Contract Escrow</span>
              <span className="tag">Multi-Chain</span>
              <span className="tag">NFT Support</span>
            </div>
          </div>

          <div className="card flagship-card">
            <div style={{ fontSize: 80, marginBottom: 24 }}>🛒</div>

            <div
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 32,
                fontWeight: 900,
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              CryptoCart
            </div>

            <div style={{ color: "var(--text-muted)", marginBottom: 24, fontSize: 14 }}>
              Build Decentralized E-Commerce Shops
            </div>

            <div className="flagship-features">
              {[
                "Web3 Wallet Pay",
                "Smart Contracts",
                "Multi-Currency",
                "Zero Chargebacks",
                "Global Reach",
                "BC ERA Token",
              ].map((t) => (
                <div key={t} className="flagship-feature-item">
                  <span className="flagship-check">✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}