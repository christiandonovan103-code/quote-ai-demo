import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import Container from "./Container.jsx";

export default function Header({ title, backTo }) {
  const nav = useNavigate();

  return (
    <header className="header">
      <Container size="xl" className="header__inner">
        <div className="header__left">
          {backTo ? (
            <Button variant="secondary" size="sm" onClick={() => nav(backTo)}>
              ← Back
            </Button>
          ) : (
            <div className="header__spacer" />
          )}

          <div>
            <div className="header__brand">Quote AI</div>
            <div className="header__title">{title || ""}</div>
          </div>
        </div>

        <Button variant="primary" size="sm" onClick={() => nav("/dashboard")}>
          Dashboard
        </Button>
      </Container>
    </header>
  );
}
