import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Preview() {
  const nav = useNavigate();

  return (
    <>
      <Header title="Preview" backTo="/pricing" />
      <Container size="xl">
        <div className="page-heading">
          <div>
            <h1 className="page-title">Quote preview</h1>
            <p className="page-subtitle">Review the client-ready quote before sending.</p>
          </div>
          <Button variant="secondary" className="no-print" onClick={() => window.print()}>
            Download / Print Quote
          </Button>
        </div>

        <Card style={{ marginTop: 16 }}>
          <div className="preview-header">
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>Quote AI Carpentry</div>
              <div className="page-subtitle">Sydney NSW</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 900 }}>QUOTE</div>
              <div className="page-subtitle">#QA-1024</div>
            </div>
          </div>

          <div className="divider" />

          <div className="grid grid--cards">
            <div>
              <div className="input-label">Client</div>
              <div style={{ fontWeight: 900 }}>Smith</div>
              <div className="page-subtitle">12 Example St, Sydney NSW</div>
            </div>
            <div>
              <div className="input-label">Job</div>
              <div style={{ fontWeight: 900 }}>Kitchen Renovation</div>
              <div className="page-subtitle">Scope generated from plans + photos</div>
            </div>
            <div>
              <div className="input-label">Total</div>
              <div style={{ fontWeight: 900, fontSize: 22 }}>$8,827.50</div>
              <div className="page-subtitle">Incl. GST</div>
            </div>
          </div>

          <div className="divider" />

          <div style={{ fontWeight: 900, marginBottom: 8 }}>Key scope items</div>
          <ul className="list">
            <li>Remove existing cabinets</li>
            <li>Install base & overhead cabinets</li>
            <li>Fit kickers & fillers</li>
            <li>Skirting & trims</li>
            <li>Hardware allowance</li>
          </ul>

          <div className="page-subtitle" style={{ fontSize: 12 }}>
            Terms: 30% deposit to commence • Balance on completion • Valid 14 days.
          </div>

          <div className="actions no-print" style={{ marginTop: 16 }}>
            <Button variant="primary" onClick={() => nav("/sent")}>
              Send Quote
            </Button>
            <Button variant="secondary" onClick={() => nav("/pricing")}>
              Back
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
