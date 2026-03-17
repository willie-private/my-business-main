import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container">
        <div className="hero-content fade-up">
          <div className="hero-badge">🇵🇭 Philippines · Web3 · Blockchain Commerce</div>

          <h1 className="hero-title">
            Building your online shop for <br />
            <span className="accent">Blockchain Commerce ERA</span>
          </h1>

          <p className="hero-desc">
            BC ERA is a Block Chain Commerce Company building secure, transparent, and borderless shopping experiences for the digital age.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" href="/documentation">
              📄 Read White Paper
            </Link>

            <a
              className="btn btn-outline"
              href="/contact"
              rel="noreferrer"
            >
              📅 Book a Demo
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">
                Web<span>3</span>
              </span>
              <span className="stat-label">Native Platform</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">
                <span>Multi</span>-Chain
              </span>
              <span className="stat-label">Blockchain Support</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">
                0<span>%</span>
              </span>
              <span className="stat-label">Intermediary Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}