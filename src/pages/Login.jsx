import { useNavigate } from "react-router-dom";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  const nav = useNavigate();

  return (
    <Container size="sm">
      <Card>
        <div className="page-heading page-heading--compact">
          <div style={{ fontWeight: 900, fontSize: 20 }}>Quote AI</div>
          <div className="badge badge--solid">DEMO</div>
        </div>

        <h1 className="page-title" style={{ marginTop: 14 }}>
          Log in
        </h1>
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

        <div className="actions" style={{ marginTop: 16 }}>
          <Button variant="primary" fullWidth onClick={() => nav("/dashboard")}>
            Demo Mode
          </Button>
          <Button variant="secondary" onClick={() => nav("/dashboard")}>
            Log in
          </Button>
        </div>
      </Card>
    </Container>
  );
}
