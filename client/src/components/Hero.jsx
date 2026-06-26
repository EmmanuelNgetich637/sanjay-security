import { Link } from "react-router-dom";

const stats = [
  { figure: "12+", label: "Years operating" },
  { figure: "180+", label: "Sites secured" },
  { figure: "24/7", label: "Control room" },
  { figure: "<8min", label: "Avg. response" },
];

export default function Hero() {
  return (
    <section className="bg-ink text-fog position-relative overflow-hidden">
      <div className="container-narrow container py-5 py-lg-0">
        <div className="row align-items-center" style={{ minHeight: "72vh" }}>
          <div className="col-lg-6 py-5">
            <span className="eyebrow mb-3 d-inline-flex">
              Sanjay Group Security
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.1 }}
            >
              Trained guards.
              <br />
              Watched perimeters.
              <br />
              <span className="text-beacon">Zero blind spots.</span>
            </h1>
            <p
              className="mb-4"
              style={{ color: "var(--slate-soft)", maxWidth: "440px", fontSize: "1.05rem" }}
            >
              We deploy vetted manned guards, mobile patrols and monitored
              surveillance for commercial sites, events and residences —
              backed by a control room that never sleeps.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/quote" className="btn btn-beacon">
                Request a quote
              </Link>
              <Link to="/services" className="btn btn-outline-fog">
                View services
              </Link>
            </div>
          </div>

          <div className="col-lg-6 py-5 d-none d-lg-block">
            <div className="viewfinder scan-frame">
              <span className="vf-tr" aria-hidden="true" />
              <span className="vf-br" aria-hidden="true" />
              <div
                className="d-flex flex-column justify-content-between"
                style={{
                  background: "var(--steel)",
                  borderRadius: "var(--radius)",
                  height: "380px",
                  padding: "1.75rem",
                }}
              >
                <div className="d-flex justify-content-between">
                  <span className="eyebrow">Live status</span>
                  <i className="bi bi-broadcast text-beacon" />
                </div>

                <div className="row g-3">
                  {stats.map((s) => (
                    <div className="col-6" key={s.label}>
                      <div className="stat-figure">{s.figure}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}