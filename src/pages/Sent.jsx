import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Sent() {
  const nav = useNavigate();

  return (
    <AppShell title="Sent">
      <Container size="md">
        <Card>
          <div className="card-title">Quote sent ✅</div>
          <p className="page-subtitle section-sm">
            The client receives a link to review, accept, and pay the deposit.
          </p>

          <div className="actions section">
            <Button variant="primary" onClick={() => nav("/dashboard")}>
              Back to Dashboard
            </Button>
            <Button variant="secondary" onClick={() => nav("/new-quote")}>
              Start another quote
            </Button>
          </div>
        </Card>
      </Container>
    </AppShell>
  );
}
