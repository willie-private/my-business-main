import Image from "next/image";
import Link from "next/link";

export default function Footer({ theme }) {   // ✅ receive theme
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Image
                src={theme === "dark" ? "/bcera-logo-white.png" : "/bcera-logo.png"}
                alt="BC ERA"
                width={129}
                height={62}
                priority
              />
            </div>

            <p>
              Bridging traditional online shopping with blockchain innovation. Building the decentralized future of
              e-commerce from the Philippines to the world.
            </p>

            <div className="social-links" style={{ marginTop: 20 }}>
              <a className="social-link" href="#" target="_blank" rel="noreferrer" title="Telegram">
                ✈
              </a>
              <a
                className="social-link"
                href="#"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                in
              </a>
              <a className="social-link" href="mailto:support.cco@bcera.com" title="Email">
                ✉
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/documentation">CryptoCart</Link></li>
              <li><Link href="/documentation">White Paper</Link></li>
              <li><Link href="/documentation">Tokenomics</Link></li>
              <li><Link href="/documentation">Roadmap</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a
                  href="/documentation"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/documentation/pitch-deck"
                  rel="noreferrer"
                >
                  Pitch Deck
                </a>
              </li>
              <li>
                <a href="/contact"  rel="noreferrer">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="/contact"  rel="noreferrer">
                  Schedule Meeting
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 BC ERA. All rights reserved. · Philippines</span>
          <span style={{ color: "var(--accent)", fontFamily: "Space Mono, monospace", fontSize: 12 }}>
            Secure · Transparent · Borderless
          </span>
        </div>
      </div>
    </footer>
  );
}