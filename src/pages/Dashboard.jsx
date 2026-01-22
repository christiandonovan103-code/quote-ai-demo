import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <AppShell title="Dashboard">
      <Container size="xl">
        <div className="page-heading">
          <div>
            <h1 className="page-title">My Quotes</h1>
            <p className="page-subtitle">Track drafts, sent quotes, and accepted jobs in one place.</p>
          </div>
          <Button variant="primary" onClick={() => nav("/new-quote")}>
            + New Quote
          </Button>
        </div>

        <div className="grid grid--cards section">
          <Card>
            <div className="card-title">Smith Kitchen Renovation</div>
            <div className="page-subtitle">Status: Draft • Est: $18,000+</div>
            <Button variant="secondary" size="sm" className="section-sm" onClick={() => nav("/new-quote")}>
              Continue
            </Button>
          </Card>

          <Card>
            <div className="card-title">Brown Bathroom</div>
            <div className="page-subtitle">Status: Sent • $9,200</div>
            <Button variant="secondary" size="sm" className="section-sm" onClick={() => alert("Demo only")}>
              View
            </Button>
          </Card>
        </div>
      </Container>
    </AppShell>
  );
}
