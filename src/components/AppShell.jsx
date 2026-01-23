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
