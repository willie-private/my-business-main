import SiteShell from "@/components/layout/SiteShell";

const team = [
  {
    name: "Ralph Alexis Torres",
    role: "CEO & Co-Founder",
    bio: "Visionary leader driving BC ERA's mission as a Block Chain Commerce Company focused on transforming global commerce through blockchain technology.",
    img: "/profile.png",
  },
  {
    name: "Renzel Gallon",
    role: "CBO & Co-Founder",
    bio: "Blockchain architect with deep expertise in smart contract development, decentralized commerce systems, and Web3 infrastructure.",
    img: "/profile.png",
  },
  {
    name: "Veronica De Roxas",
    role: "Head of Recruiters",
    bio: "Talent acquisition leader focused on scaling BC ERA’s team and strengthening our global network of top recruiters and candidates.",
    img: "/profile.png",
  },
  {
    name: "Danica Justo",
    role: "Senior Recruiter",
    bio: "Experienced senior recruiter dedicated to identifying top talent and building strong candidate pipelines to support BC ERA’s growth and innovation.",
    img: "/profile.png",
  },
];

const advisors = [
  {
    name: "Oleksandr Majdanyk",
    role: "Web3 Strategy Advisor",
    bio: "Veteran blockchain entrepreneur with multiple successful decentralized product launches across global markets.",
    img: "/profile.png",
  },
  {
    name: "Pavlo Slavskyi",
    role: "E-Commerce Advisor",
    bio: "Former executive at leading Southeast Asian e-commerce platforms with deep retail and marketplace expertise.",
    img: "/profile.png",
  },
  {
    name: "Denis Komendantov",
    role: "Legal & Compliance Advisor",
    bio: "Specialist in Philippine and international fintech regulation, blockchain law, and corporate compliance.",
    img: "/profile.png",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="page">
        {/* HERO */}
        <section
          className="hero"
          style={{ minHeight: "60vh", paddingTop: "140px", paddingBottom: "80px" }}
        >
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="orb orb-1" />
          <div className="container">
            <div className="hero-content fade-up" style={{ maxWidth: "720px" }}>
              <div className="hero-badge">About BC ERA</div>
              <h1 className="hero-title" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Bridging <span className="accent">Traditional Commerce</span>
                <br />
                with <span className="gold">Blockchain Innovation</span>
              </h1>
              <p className="hero-desc">
                Founded in the Philippines, BC ERA is a Block Chain Commerce Company on a mission to
                democratize global commerce through decentralization — making secure, transparent, and
                borderless commerce accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* MISSION */}
        <section className="section">
          <div className="container">
            <div className="about-mission-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>              <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">
                Why We <span>Exist</span>
              </h2>

              <p className="section-desc" style={{ marginBottom: 20 }}>
                Traditional commerce faces high platform fees, payment friction, geographic banking
                restrictions, and opaque data practices that often disadvantage small merchants and
                underserved communities.
              </p>

              <p className="section-desc" style={{ marginBottom: 20 }}>
                BC ERA was founded to change this. As a Block Chain Commerce Company, we build
                commerce tools on blockchain infrastructure to reduce intermediaries and return power
                to merchants and buyers. Our platform is Secure, Transparent, and Borderless — by
                design, not by promise.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span className="tag">🔐 Secure</span>
                <span className="tag">🔍 Transparent</span>
                <span className="tag">🌐 Borderless</span>
              </div>
            </div>

              <div className="about-mission-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>                {[
                [
                  "🔐",
                  "Security First",
                  "Every product is built with blockchain-grade security at its core, ensuring user data, assets, and transactions are protected at all times.",
                ],
                [
                  "🌐",
                  "Transparency",
                  "Transactions and platform activity are designed for traceability and trust, creating a more open and verifiable commerce ecosystem.",
                ],
                [
                  "🚀",
                  "Innovation",
                  "We continuously push the boundaries of what block chain commerce can achieve, shipping new features driven by real business needs.",
                ],
                [
                  "🤝",
                  "Community",
                  "We believe the future of commerce is collaborative, empowering merchants, partners, and users to shape the ecosystem together.",
                ],
              ].map(([icon, title, desc]) => (
                <div key={title} className="card" style={{ padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                  <div className="card-title" style={{ fontSize: 14, marginBottom: 8 }}>
                    {title}
                  </div>
                  <div className="card-desc" style={{ fontSize: 13 }}>
                    {desc}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* FOUNDATION + HIGHLIGHT BOX */}
        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label">Company Foundation</span>
              <h2 className="section-title">
                Built in the <span>Philippines</span>, for the World
              </h2>
              <p className="section-desc" style={{ margin: "0px auto" }}>
                BC ERA was incorporated in the Philippines — one of Southeast Asia&apos;s fast-growing
                technology hubs. With a young, digitally savvy population and a thriving startup
                ecosystem, the Philippines is a strong launchpad for the future of blockchain-powered
                commerce.
              </p>
            </div>

            <div className="highlight-box" style={{ textAlign: "center", marginBottom: 0 }}>
              <div className="about-foundation-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>                {[
                ["🇵🇭", "Philippines", "Headquarters"],
                ["⛓️", "Block Chain Commerce", "Industry"],
                ["🌏", "Global Commerce", "Market Focus"],
              ].map(([icon, title, sub]) => (
                <div key={title}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      fontFamily: "Space Mono, monospace",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {sub}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* LEADERSHIP */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label">Leadership</span>
              <h2 className="section-title">
                Meet the <span>Team</span>
              </h2>
              <p className="section-desc" style={{ margin: "0px auto" }}>
                Our leadership team combines deep blockchain expertise with proven commerce experience,
                united by a shared vision for the future of block chain commerce.
              </p>
            </div>

            <div className="grid-4">
              {team.map((m) => (
                <div key={m.name} className="card team-card">
                  <div
                    className="team-avatar"
                    style={{
                      backgroundImage: `url("${m.img}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundOrigin: "border-box",
                    }}
                  />
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <div className="team-bio">{m.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ADVISORS */}
        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label">Advisory Board</span>
              <h2 className="section-title">
                Our <span>Advisors</span>
              </h2>
            </div>

            <div className="grid-3">
              {advisors.map((m) => (
                <div key={m.name} className="card team-card">
                  <div
                    className="team-avatar"
                    style={{
                      backgroundImage: `url("${m.img}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundOrigin: "border-box",
                    }}
                  />
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <div className="team-bio">{m.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </SiteShell>
  );
}