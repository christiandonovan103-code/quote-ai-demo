import { useNavigate } from "react-router-dom";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Sent() {
  const nav = useNavigate();

  return (
    <Container size="md">
      <Card>
        <div style={{ fontWeight: 900, fontSize: 24 }}>Quote sent ✅</div>
        <p className="page-subtitle" style={{ marginTop: 8 }}>
          The client receives a link to review, accept, and pay the deposit.
        </p>

        <div className="actions" style={{ marginTop: 16 }}>
          <Button variant="primary" onClick={() => nav("/dashboard")}>
            Back to Dashboard
          </Button>
          <Button variant="secondary" onClick={() => nav("/new-quote")}>
            Start another quote
          </Button>
        </div>
      </Card>
    </Container>
  );
}
