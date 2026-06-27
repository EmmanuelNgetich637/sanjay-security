import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin/dashboard", label: "Overview", icon: "bi-grid-1x2-fill" },
  { to: "/admin/dashboard#inquiries", label: "Inquiries", icon: "bi-chat-left-text-fill" },
  { to: "/admin/dashboard#quotes", label: "Quote requests", icon: "bi-clipboard-data-fill" },
];

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <i className="bi bi-shield-lock-fill text-beacon" />
        <span>Sanjay Group</span>
      </div>

      <nav className="admin-sidebar__nav">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `admin-sidebar__link ${isActive ? "is-active" : ""}`
            }
            end
          >
            <i className={`bi ${item.icon}`} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="admin-sidebar__footer">
        <span className="eyebrow">Console online</span>
      </div>
    </aside>
  );
}