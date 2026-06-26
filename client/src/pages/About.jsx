const values = [
  {
    icon: "bi-eye-fill",
    title: "Vigilance",
    text: "Every shift, every patrol, every camera feed is treated as if it's the one that matters.",
  },
  {
    icon: "bi-clipboard-check-fill",
    title: "Accountability",
    text: "Guards log activity, supervisors verify it, and clients see it — nothing is informal.",
  },
  {
    icon: "bi-people-fill",
    title: "Vetted people",
    text: "Background-checked, trained, and supervised. We staff our sites, not just fill rosters.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-ink text-fog section-sm">
        <div className="container-narrow container">
          <span className="eyebrow mb-2 d-inline-flex">About us</span>
          <h1 className="text-white" style={{ fontSize: "2.4rem" }}>
            Security built on routine, not luck
          </h1>
          <p style={{ color: "var(--slate-soft)", maxWidth: "620px" }}>
            Sanjay Group Security provides manned guarding, surveillance and
            patrol services to commercial sites, residences and events. We
            built the firm around one idea: security fails when it depends
            on a single alert person — it works when it's a system.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow container">
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-4" key={v.title}>
                <i className={`bi ${v.icon} fs-2 text-beacon mb-3 d-block`} />
                <h3 style={{ fontSize: "1.05rem", textTransform: "none" }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--slate)" }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-white">
        <div className="container-narrow container">
          <hr className="perimeter-rule mb-5" />
          <div className="row g-4">
            <div className="col-md-4">
              <div className="stat-figure">12+</div>
              <div className="stat-label">Years operating</div>
            </div>
            <div className="col-md-4">
              <div className="stat-figure">180+</div>
              <div className="stat-label">Active sites</div>
            </div>
            <div className="col-md-4">
              <div className="stat-figure">24/7</div>
              <div className="stat-label">Control room coverage</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}