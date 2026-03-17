import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="section-sm"
      style={{
        background: "linear-gradient(135deg, rgba(0, 80, 200, 0.12), rgba(0, 170, 255, 0.06))",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span className="section-label">Get Started Today</span>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Ready to Build the <span>Future</span>?
        </h2>

        <p className="section-desc" style={{ margin: "0px auto 36px", textAlign: "center" }}>
          Join BC ERA, a Block Chain Commerce Company, and be part of the next wave of digital trade. Whether you're a merchant, developer, or partner — there's a place for you here.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            className="btn btn-primary"
            href="/contact"
            rel="noreferrer"
          >
            📅 Schedule a Meeting
          </a>

          <Link className="btn btn-outline" href="/documentation">
            📄 Explore Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}