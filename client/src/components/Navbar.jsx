import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div
        className="bg-ink py-1 d-none d-md-block"
        style={{ borderBottom: "1px solid rgba(244,246,248,0.08)" }}
      >
        <div className="container-narrow container d-flex justify-content-between">
          <span className="eyebrow" style={{ color: "var(--beacon-soft)" }}>
            24/7 monitored response
          </span>
          <span
            className="font-mono"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--slate-soft)",
              letterSpacing: "0.05em",
            }}
          >
            Dispatch: +254 700 000 000
          </span>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg sticky-top ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{
          backgroundColor: "var(--white)",
          borderBottom: "1px solid var(--fog-dim)",
          transition: "box-shadow 0.2s ease",
        }}
      >
        <div className="container-narrow container">
          <NavLink
            to="/"
            className="navbar-brand display-font d-flex align-items-center gap-2"
            style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}
          >
            <i className="bi bi-shield-lock-fill text-beacon" />
            Sanjay Group Security
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              {links.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `nav-link px-3 ${
                        isActive ? "text-beacon" : ""
                      }`
                    }
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.85rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <NavLink to="/quote" className="btn btn-beacon">
                  Request a quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}