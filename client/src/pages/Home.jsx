import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

const featuredServices = [
  {
    code: "SVC-01",
    icon: "bi-person-bounding-box",
    title: "Manned guarding",
    description:
      "Uniformed, vetted guards stationed at your premises for static or roaming duty.",
  },
  {
    code: "SVC-02",
    icon: "bi-camera-video-fill",
    title: "CCTV surveillance",
    description:
      "Remote-monitored camera coverage with real-time alerts to our control room.",
  },
  {
    code: "SVC-03",
    icon: "bi-car-front-fill",
    title: "Mobile patrol",
    description:
      "Scheduled and randomized vehicle patrols across multi-site portfolios.",
  },
  {
    code: "SVC-04",
    icon: "bi-calendar-event-fill",
    title: "Event security",
    description:
      "Crowd control, access management and on-site response for events of any size.",
  },
];

const process = [
  { step: "01", title: "Site assessment", text: "We walk the site and map risk points, access routes and blind spots." },
  { step: "02", title: "Deployment plan", text: "A staffing and coverage plan is built around your hours and budget." },
  { step: "03", title: "Go live", text: "Guards and monitoring go live, linked to our 24/7 control room." },
  { step: "04", title: "Ongoing review", text: "Monthly reporting and adjustments as your risk profile changes." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section bg-white">
        <div className="container-narrow container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <span className="eyebrow mb-2 d-inline-flex">What we do</span>
              <h2 style={{ fontSize: "2rem" }}>Core services</h2>
            </div>
            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
              <Link to="/services" className="btn btn-outline-fog" style={{ color: "var(--ink)", borderColor: "var(--ink)" }}>
                See all services
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featuredServices.map((s) => (
              <div className="col-md-6 col-lg-3" key={s.code}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-fog">
        <div className="container-narrow container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow mb-2 d-inline-flex">How we work</span>
              <h2 className="text-white" style={{ fontSize: "2rem" }}>
                From site visit to go-live
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {process.map((p) => (
              <div className="col-md-6 col-lg-3" key={p.step}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--beacon)",
                    fontSize: "1.6rem",
                  }}
                >
                  {p.step}
                </div>
                <h3
                  className="text-white mt-2 mb-2"
                  style={{ fontSize: "1rem", letterSpacing: "0.03em" }}
                >
                  {p.title}
                </h3>
                <p style={{ color: "var(--slate-soft)", fontSize: "0.92rem" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container-narrow container">
          <span className="eyebrow mb-2 d-inline-flex justify-content-center">
            Ready when you are
          </span>
          <h2 className="mb-3" style={{ fontSize: "1.9rem" }}>
            Tell us about your site and we'll get back within a day
          </h2>
          <Link to="/quote" className="btn btn-beacon">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}