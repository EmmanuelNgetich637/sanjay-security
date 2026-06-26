import { useState } from "react";
import { sendQuoteRequest } from "../services/api";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceType: "Manned guarding",
  siteLocation: "",
  startDate: "",
  details: "",
};

const serviceOptions = [
  "Manned guarding",
  "CCTV surveillance",
  "Mobile patrol",
  "Event security",
  "Cash-in-transit",
  "Residential security",
  "Risk assessment",
  "Corporate security",
];

export default function Quote() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendQuoteRequest(form);
      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-ink text-fog section-sm">
        <div className="container-narrow container">
          <span className="eyebrow mb-2 d-inline-flex">Quote request</span>
          <h1 className="text-white" style={{ fontSize: "2.4rem" }}>
            Tell us about your site
          </h1>
          <p style={{ color: "var(--slate-soft)", maxWidth: "560px" }}>
            Share a few details below and we'll come back with a coverage
            plan and pricing — usually within one business day.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {status === "sent" ? (
                <div className="border-start border-3 ps-3" style={{ borderColor: "var(--beacon)" }}>
                  <span className="eyebrow mb-2 d-inline-flex">Request logged</span>
                  <p className="mb-0">
                    Your quote request has been received. A member of our
                    team will follow up with a coverage plan shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Full name</label>
                      <input id="name" name="name" type="text" className="form-control" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label">Company (optional)</label>
                      <input id="company" name="company" type="text" className="form-control" value={form.company} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input id="phone" name="phone" type="tel" className="form-control" value={form.phone} onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="serviceType" className="form-label">Service needed</label>
                      <select id="serviceType" name="serviceType" className="form-select" value={form.serviceType} onChange={handleChange}>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="startDate" className="form-label">Preferred start date</label>
                      <input id="startDate" name="startDate" type="date" className="form-control" value={form.startDate} onChange={handleChange} />
                    </div>

                    <div className="col-12">
                      <label htmlFor="siteLocation" className="form-label">Site location</label>
                      <input id="siteLocation" name="siteLocation" type="text" className="form-control" placeholder="e.g. Westlands, Nairobi" value={form.siteLocation} onChange={handleChange} required />
                    </div>

                    <div className="col-12">
                      <label htmlFor="details" className="form-label">Site details</label>
                      <textarea id="details" name="details" className="form-control" rows="4" placeholder="Site size, hours of coverage needed, number of guards, current setup, etc." value={form.details} onChange={handleChange} />
                    </div>

                    {status === "error" && (
                      <div className="col-12">
                        <p className="mb-0" style={{ color: "var(--alert)" }}>
                          The request couldn't be sent. Check your connection and try again.
                        </p>
                      </div>
                    )}

                    <div className="col-12">
                      <button type="submit" className="btn btn-beacon" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Submit request"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}