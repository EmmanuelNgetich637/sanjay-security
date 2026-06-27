import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/admin.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await login(form.email, form.password);
      navigate("/admin/dashboard");
    } catch (err) {
      setStatus("idle");
      setError(
        err?.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__panel viewfinder">
        <span className="vf-tr" aria-hidden="true" />
        <span className="vf-br" aria-hidden="true" />

        <div className="admin-login__brand">
          <i className="bi bi-shield-lock-fill text-beacon" />
          <span>Sanjay Group Security</span>
        </div>

        <span className="eyebrow mb-2 d-inline-flex">Restricted access</span>
        <h1 className="admin-login__title">Console sign in</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="admin-login__error">{error}</p>}

          <button type="submit" className="btn btn-beacon w-100" disabled={status === "sending"}>
            {status === "sending" ? "Verifying…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}