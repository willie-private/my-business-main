import SiteShell from "@/components/layout/SiteShell";
import CareersForm from "@/components/forms/CareersForm";

const perks = [
  ["🌐", "Remote-First", "Work from anywhere in the world. We trust our team to deliver."],
  ["⛓️", "BC ERA Growth Package", "All team members become part of a fast-growing Block Chain Commerce Company with meaningful long-term opportunities."],
  ["📚", "Learning Budget", "$1,500 annual budget for courses, conferences, and certifications."],
  ["🏥", "Health Benefits", "Comprehensive health coverage for full-time Philippines-based employees."],
  ["🕹️", "Equipment Stipend", "Full home-office setup budget provided on day one."],
  ["🚀", "Build the Future", "Join early and help shape the future of block chain commerce from the ground up."],
];

const roles = [
  ["Chief Technology Officer", "Product", "Full-time · Remote", "Lead the technology strategy and innovation at BC ERA. Deep expertise in blockchain architecture, scalable systems, and secure digital commerce solutions required."],
  ["Lead Blockchain Engineer", "Engineering", "Full-time · Remote", "Lead development of our core blockchain infrastructure. Deep expertise in smart contracts, decentralized systems, and security best practices required."],
  ["Full-Stack Web3 Engineer", "Engineering", "Full-time · Remote", "Build and maintain BC ERA’s frontend experience and blockchain integration layer. Experience with modern React development and Web3 tooling required."],
  ["Senior Backend Engineer", "Engineering", "Full-time · Remote", "Lead the design and implementation of robust backend systems. Strong experience in API development, database management, and scalable architecture required."],
];

export default function CareersPage() {
  return (
    <SiteShell>
      <main className="page">
        <section className="hero" style={{ minHeight: "55vh", paddingTop: 140, paddingBottom: 60 }}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="orb orb-1" />
          <div className="container">
            <div className="hero-content fade-up">
              <div className="hero-badge">Join the Team</div>
              <h1 className="hero-title" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
                Build the <span className="accent">Future</span> of
                <br />
                <span className="gold">Block Chain Commerce</span> With Us
              </h1>
              <p className="hero-desc">
                We&apos;re assembling a world-class team to help build the future of commerce through blockchain innovation.
                If you&apos;re passionate about technology, digital commerce, and building products that matter — we want to hear from you.
              </p>
              <a className="btn btn-primary" href="#apply" rel="noreferrer">
                Apply Now →
              </a>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section" style={{ background: "var(--bg2)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label">Why Join Us</span>
              <h2 className="section-title">
                Life at <span>BC ERA</span>
              </h2>
            </div>

            <div className="grid-3">
              {perks.map(([icon, title, desc]) => (
                <div key={title} className="card">
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                  <div className="card-title">{title}</div>
                  <div className="card-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label">Open Positions</span>
              <h2 className="section-title">
                Current <span>Opportunities</span>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 60 }}>
              {roles.map(([title, dept, type, desc]) => (
                <div
                  key={title}
                  className="card"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}
                >
                  <div style={{ flex: "1 1 0%" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: 15, fontWeight: 600, color: "var(--text)" }}>
                        {title}
                      </span>
                      <span className="tag" style={{ fontSize: 11 }}>{dept}</span>
                    </div>

                    <div style={{ fontSize: 12, color: "var(--accent)", fontFamily: "Space Mono, monospace", marginBottom: 8 }}>
                      {type}
                    </div>

                    <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{desc}</div>
                  </div>

                  <a
                    href="#apply"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Apply →
                  </a>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="section-label">Application Form</span>
              <h2 className="section-title" style={{ marginBottom: 8 }}>
                Ready to <span>Apply</span>?
              </h2>
              <p className="section-desc" style={{ margin: "0px auto 40px" }}>
                Fill out the form below and our team will get back to you within 3 business days.
              </p>
            </div>

            <div className="iframe-wrap" id="apply" style={{ borderRadius: 16, overflow: "hidden", maxWidth: 900, margin: "0px auto" }}>
              <CareersForm />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}