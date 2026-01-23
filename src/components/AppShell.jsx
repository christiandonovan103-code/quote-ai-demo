import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "New Quote", to: "/new-quote" },
  { label: "Quotes", to: "/dashboard" },
];

export default function AppShell({ title, children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Container size="xl" className="app-header__inner">
          <div className="app-header__left">
            <div className="app-header__logo">
              <img src={logo} alt="Quote AI logo" className="app-logo" />
              <span>Quote AI</span>
            </div>
          </div>
          <div className="app-header__center">
            <span className="app-header__title">{title}</span>
          </div>
          <div className="app-header__right">
            <div className="user-chip user-chip--demo">Demo</div>
          </div>
        </Container>
      </header>
      <div className="project-strip">
        <Container size="xl" className="project-strip__inner">
          <div>
            <div className="project-strip__title">Smith Kitchen Renovation</div>
            <div className="project-strip__subtitle">12 Example St, Sydney NSW</div>
          </div>
          <div className="project-strip__meta">
            <span className="status-badge">In Progress</span>
            <span className="project-strip__muted">Updated today · 2:14 PM</span>
          </div>
        </Container>
      </div>

      <div className="app-body">
        <aside className="app-sidebar">
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  ["sidebar-link", isActive ? "sidebar-link--active" : ""].filter(Boolean).join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
