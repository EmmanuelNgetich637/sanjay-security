import { useState } from "react";
import { sendContactMessage } from "../services/api";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactMessage(form);
      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-start border-3 ps-3" style={{ borderColor: "var(--beacon)" }}>
        <span className="eyebrow mb-2 d-inline-flex">Message logged</span>
        <p className="mb-0">
          We've received your message. A member of our team will respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-control"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        {status === "error" && (
          <div className="col-12">
            <p className="mb-0" style={{ color: "var(--alert)" }}>
              The message couldn't be sent. Check your connection and try again.
            </p>
          </div>
        )}

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-beacon"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
}