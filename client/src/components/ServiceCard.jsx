export default function ServiceCard({ code, icon, title, description }) {
  return (
    <div className="service-card">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <i className={`bi ${icon} service-icon`} aria-hidden="true" />
        {code && <span className="service-code">{code}</span>}
      </div>
      <h3
        className="mb-2"
        style={{ fontSize: "1.05rem", textTransform: "none", letterSpacing: "0" }}
      >
        {title}
      </h3>
      <p className="mb-0" style={{ color: "var(--slate)", fontSize: "0.95rem" }}>
        {description}
      </p>
    </div>
  );
}