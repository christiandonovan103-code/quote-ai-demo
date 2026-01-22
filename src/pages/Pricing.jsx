import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

function money(n) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(Number(n) || 0);
}

export default function Pricing() {
  const nav = useNavigate();
  const baseCost = 6420;

  const [marginPct, setMarginPct] = useState(25);
  const [gstOn, setGstOn] = useState(true);

  const subtotal = useMemo(() => baseCost * (1 + (Number(marginPct) || 0) / 100), [baseCost, marginPct]);
  const gst = useMemo(() => (gstOn ? subtotal * 0.1 : 0), [subtotal, gstOn]);
  const total = useMemo(() => subtotal + gst, [subtotal, gst]);

  return (
    <>
      <Header title="Pricing" backTo="/scope" />
      <Container size="lg">
        <h1 className="page-title">Pricing</h1>
        <p className="page-subtitle">Tune margin and GST. Totals update instantly for the client view.</p>

        <Card style={{ marginTop: 16 }}>
          <div className="grid grid--cards">
            <div>
              <div className="input-label">Base cost</div>
              <div style={{ fontSize: 22, fontWeight: 900, marginTop: 6 }}>{money(baseCost)}</div>

              <div className="input-label" style={{ marginTop: 14 }}>
                Margin %
              </div>
              <input value={marginPct} onChange={(e) => setMarginPct(e.target.value)} />

              <label className="checkbox" style={{ marginTop: 12 }}>
                <input type="checkbox" checked={gstOn} onChange={(e) => setGstOn(e.target.checked)} />
                Add GST (10%)
              </label>
            </div>

            <div>
              <div className="section-title">Totals</div>

              <div className="totals-row" style={{ marginTop: 12 }}>
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

              <Button variant="primary" fullWidth style={{ marginTop: 14 }} onClick={() => nav("/preview")}>
                Next: Preview
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
