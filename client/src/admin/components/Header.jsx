import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <header className="admin-header">
      <div className="admin-header__status">
        <span className="eyebrow">Control room</span>
        <span className="admin-header__clock">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </span>
      </div>

      <div className="admin-header__user">
        <div className="admin-header__user-info">
          <span className="admin-header__name">{user?.name || "Admin"}</span>
          <span className="admin-header__role">{user?.role || "staff"}</span>
        </div>
        <button className="admin-header__logout" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right" />
          Sign out
        </button>
      </div>
    </header>
  );
}