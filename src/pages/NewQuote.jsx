import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import QuoteSummary from "../components/QuoteSummary.jsx";

export default function NewQuote() {
  const nav = useNavigate();

  return (
    <AppShell title="New Quote">
      <Container size="xl">
        <h1 className="page-title">New Quote</h1>
        <p className="page-subtitle">Capture the basics so Quote AI can draft a scope of works.</p>

        <div className="content-grid section">
          <div>
            <Card>
              <div className="section-title">Project</div>
              <div className="input-group">
                <div className="input-label">Project name</div>
                <input placeholder="Smith Kitchen Renovation" />
              </div>
              <div className="input-group">
                <div className="input-label">Job type</div>
                <select>
                  <option>Kitchen Renovation</option>
                  <option>Bathroom Renovation</option>
                  <option>Deck / Pergola</option>
                </select>
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Client</div>
              <div className="input-group">
                <div className="input-label">Client name</div>
                <input placeholder="Smith" />
              </div>
              <div className="input-group">
                <div className="input-label">Email</div>
                <input placeholder="smith@example.com" />
              </div>
              <div className="input-group">
                <div className="input-label">Phone</div>
                <input placeholder="0412 345 678" />
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Site</div>
              <div className="input-group">
                <div className="input-label">Site address</div>
                <input placeholder="12 Example St, Sydney NSW" />
              </div>
              <div className="input-group">
                <div className="input-label">Site access notes</div>
                <input placeholder="Parking via rear lane" />
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Notes</div>
              <div className="input-group">
                <div className="input-label">Internal notes</div>
                <input placeholder="Client prefers matte white finishes" />
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Assumptions</div>
              <div className="input-group">
                <div className="input-label">Defaults</div>
                <input placeholder="Standard hardware, mid-range appliances" />
              </div>
            </Card>

            <div className="actions section">
              <Button variant="primary" onClick={() => nav("/upload")}>
                Next: Upload Plans
              </Button>
            </div>
          </div>

          <QuoteSummary />
        </div>
      </Container>
    </AppShell>
  );
}
