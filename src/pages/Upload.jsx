import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Stepper from "../components/Stepper.jsx";
import QuoteSummary from "../components/QuoteSummary.jsx";

export default function Upload() {
  const nav = useNavigate();

  return (
    <AppShell title="Upload">
      <Container size="xl">
        <Stepper current={0} />
        <h1 className="page-title">Upload plans & photos</h1>
        <p className="page-subtitle">Add plans and site photos so Quote AI can extract quantities.</p>

        <div className="content-grid section">
          <div>
            <Card>
              <div className="section-title">Attachments</div>
              <div className="grid grid--cards section-sm">
                <Card className="card--dashed">
                  <div className="card-title">Plans (PDF)</div>
                  <div className="page-subtitle">Drop plan set here</div>
                  <div className="muted-text">Example: Kitchen plan.pdf</div>
                </Card>

                <Card className="card--dashed">
                  <div className="card-title">Site photos</div>
                  <div className="page-subtitle">Drop photos here</div>
                  <div className="muted-text">Example: IMG_0123.jpg</div>
                </Card>
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Notes</div>
              <div className="input-group">
                <div className="input-label">Special considerations</div>
                <input placeholder="Protect timber floors before demo" />
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Assumptions</div>
              <div className="input-group">
                <div className="input-label">Included</div>
                <input placeholder="Standard fixtures and cabinetry allowances" />
              </div>
            </Card>

            <div className="actions section">
              <Button variant="primary" onClick={() => nav("/analyze")}>
                Analyse with AI
              </Button>
              <Button variant="secondary" onClick={() => nav("/new-quote")}>
                Back
              </Button>
            </div>
          </div>

          <QuoteSummary />
        </div>
      </Container>
    </AppShell>
  );
}
