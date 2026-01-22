import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <>
      <Header title="Dashboard" />
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

        <div className="grid grid--cards" style={{ marginTop: 16 }}>
          <Card>
            <div style={{ fontWeight: 900 }}>Smith Kitchen Renovation</div>
            <div className="page-subtitle" style={{ marginTop: 6 }}>
              Status: Draft • Est: $18,000+
            </div>
            <Button variant="secondary" size="sm" onClick={() => nav("/new-quote")} style={{ marginTop: 12 }}>
              Continue
            </Button>
          </Card>

          <Card>
            <div style={{ fontWeight: 900 }}>Brown Bathroom</div>
            <div className="page-subtitle" style={{ marginTop: 6 }}>
              Status: Sent • $9,200
            </div>
            <Button variant="secondary" size="sm" onClick={() => alert("Demo only")} style={{ marginTop: 12 }}>
              View
            </Button>
          </Card>
        </div>
      </Container>
    </>
  );
}
