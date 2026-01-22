import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function NewQuote() {
  const nav = useNavigate();

  return (
    <>
      <Header title="New Quote" backTo="/dashboard" />
      <Container size="md">
        <h1 className="page-title">New Quote</h1>
        <p className="page-subtitle">Capture the basics so Quote AI can draft a scope of works.</p>

        <Card style={{ marginTop: 16 }}>
          <div className="input-group">
            <div className="input-label">Client name</div>
            <input placeholder="Smith" />
          </div>

          <div className="input-group">
            <div className="input-label">Job type</div>
            <select>
              <option>Kitchen Renovation</option>
              <option>Bathroom Renovation</option>
              <option>Deck / Pergola</option>
            </select>
          </div>

          <div className="input-group">
            <div className="input-label">Site address</div>
            <input placeholder="12 Example St, Sydney NSW" />
          </div>

          <div style={{ marginTop: 16 }}>
            <Button variant="primary" onClick={() => nav("/upload")}>
              Next: Upload Plans
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
