import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <Sidebar />
      <div className="admin-shell__main">
        <Header />
        <main className="admin-shell__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}