import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-fog">
      <div className="container-narrow container section-sm">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-shield-lock-fill text-beacon fs-4" />
              <span className="display-font fs-5 text-white">
                Sanjay Group Security
              </span>
            </div>
            <p style={{ color: "var(--slate-soft)", maxWidth: "320px" }}>
              Manned guarding, surveillance and rapid-response security
              services for businesses, sites and residences.
            </p>
            <span className="eyebrow">Control room active</span>
          </div>

          <div className="col-lg-2 col-6">
            <h6
              className="display-font text-white mb-3"
              style={{ fontSize: "0.8rem" }}
            >
              Navigate
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-fog text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-fog text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-fog text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-fog text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6">
            <h6
              className="display-font text-white mb-3"
              style={{ fontSize: "0.8rem" }}
            >
              Services
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ color: "var(--slate-soft)" }}>
              <li>Manned guarding</li>
              <li>CCTV surveillance</li>
              <li>Mobile patrol</li>
              <li>Event security</li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6
              className="display-font text-white mb-3"
              style={{ fontSize: "0.8rem" }}
            >
              Reach the control room
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-beacon" />
                <span style={{ fontFamily: "var(--font-mono)" }}>+254 700 000 000</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-beacon" />
                <span style={{ fontFamily: "var(--font-mono)" }}>ops@sanjaygroupsecurity.com</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-beacon" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="perimeter-rule my-4" style={{ opacity: 0.18 }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <small style={{ color: "var(--slate-soft)" }}>
            &copy; {year} Sanjay Group Security. All rights reserved.
          </small>
          <small style={{ color: "var(--slate-soft)" }}>
            Licensed &amp; bonded security provider
          </small>
        </div>
      </div>
    </footer>
  );
}