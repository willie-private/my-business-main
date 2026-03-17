"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav";

export default function Navbar({ theme, onToggleTheme }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="logo" href="/">


          <Image
            src={theme === "dark" ? "/bcera-logo-white.png" : "/bcera-logo.png"}
            alt="BC ERA"
            width={129}
            height={62}
            priority
          />

        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link className={pathname === l.href ? "active" : ""} href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {/* Optional theme button (your CSS already styles .theme-btn) */}
          {/* <button className="theme-btn" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "🌙" : "☀️"}
          </button> */}

          <a
            className="btn btn-primary"
            href="/contact"
            rel="noreferrer"
          >
            Book a Meeting
          </a>

          <button
            className="hamburger"
            aria-label="Menu"
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}