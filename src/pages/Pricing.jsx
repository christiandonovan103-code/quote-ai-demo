import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Stepper from "../components/Stepper.jsx";
import QuoteSummary from "../components/QuoteSummary.jsx";
import Toast from "../components/Toast.jsx";

function money(n) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(Number(n) || 0);
}

export default function Pricing() {
  const nav = useNavigate();
  const baseCost = 6420;

  const [marginPct, setMarginPct] = useState(25);
  const [gstOn, setGstOn] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const subtotal = useMemo(() => baseCost * (1 + (Number(marginPct) || 0) / 100), [baseCost, marginPct]);
  const gst = useMemo(() => (gstOn ? subtotal * 0.1 : 0), [subtotal, gstOn]);
  const total = useMemo(() => subtotal + gst, [subtotal, gst]);

  function handleSave() {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2000);
  }

  return (
    <AppShell title="Pricing">
      <Container size="xl">
        <Stepper current={3} />
        <h1 className="page-title">Pricing</h1>
        <p className="page-subtitle">Tune margin and GST. Totals update instantly for the client view.</p>

        <div className="content-grid section">
          <div>
            <Card>
              <div className="section-title">Project</div>
              <div className="page-subtitle">Kitchen Renovation · Smith Family</div>
              <div className="muted-text">Scope built from plans + photos</div>
            </Card>

            <Card className="section">
              <div className="section-title">Pricing inputs</div>
              <div className="grid grid--cards section-sm">
                <div>
                  <div className="input-label">Base cost</div>
                  <div className="value-large">{money(baseCost)}</div>

                  <div className="input-label section-sm">Margin %</div>
                  <input value={marginPct} onChange={(e) => setMarginPct(e.target.value)} />

                  <label className="checkbox section-sm">
                    <input type="checkbox" checked={gstOn} onChange={(e) => setGstOn(e.target.checked)} />
                    Add GST (10%)
                  </label>
                </div>

                <div>
                  <div className="section-title">Totals</div>

                  <div className="totals-row section-sm">
                    <span>Subtotal</span>
                    <span className="totals-value">{money(subtotal)}</span>
                  </div>

                  <div className="totals-row">
                    <span>GST</span>
                    <span className="totals-value">{money(gst)}</span>
                  </div>

                  <div className="divider" />

                  <div className="totals-row totals-row--strong">
                    <span>Total</span>
                    <span>{money(total)}</span>
                  </div>

                  <Button variant="primary" fullWidth className="section-sm" onClick={() => nav("/preview")}>
                    Next: Preview
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Assumptions</div>
              <div className="input-group">
                <div className="input-label">Allowances</div>
                <input placeholder="Appliance allowance included" />
              </div>
            </Card>

            <Card className="section">
              <div className="section-title">Notes</div>
              <div className="input-group">
                <div className="input-label">Internal notes</div>
                <input placeholder="Client approves mid-range hardware" />
              </div>
            </Card>
          </div>

          <QuoteSummary onSave={handleSave} />
        </div>
      </Container>
      <Toast message="Saved" visible={showToast} />
    </AppShell>
  );
}
