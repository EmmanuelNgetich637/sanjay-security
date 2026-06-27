import { useEffect, useState } from "react";
import { fetchContacts, fetchQuotes } from "../../services/api";

const statusTone = {
  new: "beacon",
  read: "slate",
  contacted: "slate",
  quoted: "beacon",
  archived: "slate",
  closed: "slate",
};

function StatusPill({ status }) {
  return (
    <span className={`status-pill status-pill--${statusTone[status] || "slate"}`}>
      {status}
    </span>
  );
}

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([fetchContacts(), fetchQuotes()])
      .then(([contactsRes, quotesRes]) => {
        setContacts(contactsRes.data.contacts || []);
        setQuotes(quotesRes.data.quotes || []);
      })
      .catch(() => setError("Could not load dashboard data"))
      .finally(() => setLoading(false));
  }, []);

  const newContacts = contacts.filter((c) => c.status === "new").length;
  const newQuotes = quotes.filter((q) => q.status === "new").length;

  if (loading) {
    return <p className="admin-loading-text">Loading console data…</p>;
  }

  if (error) {
    return <p className="admin-error-text">{error}</p>;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="stat-figure">{contacts.length}</div>
          <div className="stat-label">Total inquiries</div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-figure">{newContacts}</div>
          <div className="stat-label">New inquiries</div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-figure">{quotes.length}</div>
          <div className="stat-label">Total quote requests</div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-figure">{newQuotes}</div>
          <div className="stat-label">New quote requests</div>
        </div>
      </div>

      <section id="inquiries" className="admin-panel">
        <h2 className="admin-panel__title">Recent inquiries</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Received</th>
              </tr>
            </thead>
            <tbody>
              {contacts.slice(0, 6).map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone || "—"}</td>
                  <td><StatusPill status={c.status} /></td>
                  <td>{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr><td colSpan="5" className="admin-table__empty">No inquiries yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section id="quotes" className="admin-panel">
        <h2 className="admin-panel__title">Recent quote requests</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
                <th>Site location</th>
                <th>Status</th>
                <th>Received</th>
              </tr>
            </thead>
            <tbody>
              {quotes.slice(0, 6).map((q) => (
                <tr key={q.id}>
                  <td>{q.name}</td>
                  <td>{q.service_type}</td>
                  <td>{q.site_location}</td>
                  <td><StatusPill status={q.status} /></td>
                  <td>{new Date(q.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
              {quotes.length === 0 && (
                <tr><td colSpan="5" className="admin-table__empty">No quote requests yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}