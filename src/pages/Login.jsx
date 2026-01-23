import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import logo from "../assets/logo.svg";

export default function Login() {
  const nav = useNavigate();

  return (
    <AppShell title="Login">
      <Container size="sm">
        <Card>
          <div className="login-brand">
            <img src={logo} alt="Quote AI logo" className="app-logo" />
            <div>
              <div className="card-title">Quote AI</div>
              <div className="page-subtitle">Demo access</div>
            </div>
          </div>

          <h1 className="page-title section">Log in</h1>
          <p className="page-subtitle">
            This demo skips real authentication. Use Demo Mode to jump into the workflow.
          </p>

          <div className="input-group">
            <div className="input-label">Email</div>
            <input placeholder="you@company.com" />
          </div>

          <div className="input-group">
            <div className="input-label">Password</div>
            <input placeholder="••••••••" type="password" />
          </div>

          <div className="actions section">
            <Button variant="primary" fullWidth onClick={() => nav("/dashboard")}>
              Demo Mode
            </Button>
            <Button variant="secondary" onClick={() => nav("/dashboard")}>
              Log in
            </Button>
          </div>
        </Card>
      </Container>
    </AppShell>
  );
}
