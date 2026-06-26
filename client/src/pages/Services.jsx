import ServiceCard from "../components/ServiceCard";

const services = [
  {
    code: "SVC-01",
    icon: "bi-person-bounding-box",
    title: "Manned guarding",
    description: "Static and roaming guards for offices, warehouses, gated estates and retail sites.",
  },
  {
    code: "SVC-02",
    icon: "bi-camera-video-fill",
    title: "CCTV surveillance",
    description: "Installation and remote monitoring of camera networks, linked to live alerting.",
  },
  {
    code: "SVC-03",
    icon: "bi-car-front-fill",
    title: "Mobile patrol",
    description: "Scheduled and randomized drive-by checks across multiple sites in a region.",
  },
  {
    code: "SVC-04",
    icon: "bi-calendar-event-fill",
    title: "Event security",
    description: "Access control, bag checks and crowd management for concerts, weddings and conferences.",
  },
  {
    code: "SVC-05",
    icon: "bi-cash-coin",
    title: "Cash-in-transit",
    description: "Secure escort and transport of cash and valuables between sites and banks.",
  },
  {
    code: "SVC-06",
    icon: "bi-house-door-fill",
    title: "Residential security",
    description: "Gate guards, perimeter checks and rapid response for homes and estates.",
  },
  {
    code: "SVC-07",
    icon: "bi-clipboard-data-fill",
    title: "Risk assessment",
    description: "On-site audits identifying access gaps, blind spots and procedural weaknesses.",
  },
  {
    code: "SVC-08",
    icon: "bi-building-fill-lock",
    title: "Corporate security",
    description: "Reception screening, visitor management and asset protection for offices.",
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-ink text-fog section-sm">
        <div className="container-narrow container">
          <span className="eyebrow mb-2 d-inline-flex">Services</span>
          <h1 className="text-white" style={{ fontSize: "2.4rem" }}>
            Coverage for every kind of site
          </h1>
          <p style={{ color: "var(--slate-soft)", maxWidth: "600px" }}>
            Each service below can be deployed on its own or combined into a
            single coverage plan for your site.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow container">
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-md-6 col-lg-3" key={s.code}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}