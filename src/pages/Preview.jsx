import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Stepper from "../components/Stepper.jsx";
import QuoteSummary from "../components/QuoteSummary.jsx";

const lineItems = [
  { description: "Remove existing cabinets", qty: 1, unit: "job", total: "$520" },
  { description: "Install base & overhead cabinets", qty: 1, unit: "job", total: "$4,200" },
  { description: "Fit kickers & fillers", qty: 1, unit: "job", total: "$680" },
  { description: "Skirting & trims", qty: 18, unit: "m", total: "$540" },
  { description: "Hardware allowance", qty: 1, unit: "allow", total: "$480" },
];

export default function Preview() {
  const nav = useNavigate();

  return (
    <AppShell title="Preview">
      <Container size="xl">
        <Stepper current={4} />
        <div className="page-heading">
          <div>
            <h1 className="page-title">Quote preview</h1>
            <p className="page-subtitle">Review the client-ready quote before sending.</p>
          </div>
          <Button variant="secondary" className="no-print" onClick={() => window.print()}>
            Download / Print Quote
          </Button>
        </div>

        <div className="content-grid section">
          <div>
            <Card>
              <div className="section-title">Client & Site</div>
              <div className="page-subtitle">Smith Family · 12 Example St, Sydney NSW</div>
              <div className="muted-text">Kitchen Renovation · Scope generated from plans + photos</div>
            </Card>

            <Card className="section quote-doc">
              <div className="quote-doc__header">
                <div>
                  <div className="quote-doc__brand">Quote AI Carpentry</div>
                  <div className="quote-doc__muted">Sydney NSW · ABN 12 345 678 901</div>
                </div>
                <div className="quote-doc__meta">
                  <div className="quote-doc__title">QUOTE</div>
                  <div className="quote-doc__muted">#QA-1024</div>
                  <div className="quote-doc__muted">Issued: 23 Sep 2024</div>
                </div>
              </div>

              <div className="quote-doc__divider" />

              <div className="quote-doc__grid">
                <div>
                  <div className="input-label">Client</div>
                  <div className="quote-doc__value">Smith Family</div>
                  <div className="quote-doc__muted">12 Example St, Sydney NSW</div>
                  <div className="quote-doc__muted">smith@example.com</div>
                </div>
                <div>
                  <div className="input-label">Project</div>
                  <div className="quote-doc__value">Kitchen Renovation</div>
                  <div className="quote-doc__muted">Scope generated from plans + photos</div>
                </div>
                <div>
                  <div className="input-label">Total</div>
                  <div className="quote-doc__total">$8,827.50</div>
                  <div className="quote-doc__muted">Incl. GST</div>
                </div>
              </div>

              <div className="quote-doc__divider" />

              <table className="quote-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.description}>
                      <td>{item.description}</td>
                      <td>{item.qty}</td>
                      <td>{item.unit}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="quote-doc__totals">
                <div className="quote-doc__row">
                  <span>Subtotal</span>
                  <span>$7,900.00</span>
                </div>
                <div className="quote-doc__row">
                  <span>GST (10%)</span>
                  <span>$927.50</span>
                </div>
                <div className="quote-doc__row quote-doc__row--total">
                  <span>Total</span>
                  <span>$8,827.50</span>
                </div>
              </div>

              <div className="quote-doc__divider" />

              <div>
                <div className="input-label">Terms</div>
                <p className="quote-doc__muted">
                  30% deposit to commence. Balance due on completion. Quote valid for 14 days.
                </p>
                <p className="quote-doc__muted">
                  Acceptance: Sign and return this quote to confirm scheduling.
                </p>
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Assumptions</div>
              <div className="page-subtitle">Standard fixtures and finishes. Appliances supplied by client.</div>
            </Card>

            <div className="actions section no-print">
              <Button variant="primary" onClick={() => nav("/sent")}>
                Send Quote
              </Button>
              <Button variant="secondary" onClick={() => nav("/pricing")}>
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
