import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Stepper from "../components/Stepper.jsx";
import QuoteSummary from "../components/QuoteSummary.jsx";
import Toast from "../components/Toast.jsx";

const initialItems = [
  { item: "Remove existing cabinets", qty: 1, unit: "job", cost: 520 },
  { item: "Install base & overhead cabinets", qty: 1, unit: "job", cost: 4200 },
  { item: "Fit kickers & fillers", qty: 1, unit: "job", cost: 680 },
  { item: "Skirting & trims", qty: 18, unit: "m", cost: 540 },
  { item: "Hinges, runners, fixings", qty: 1, unit: "allow", cost: 480 },
];

function money(n) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(Number(n) || 0);
}

export default function Scope() {
  const nav = useNavigate();
  const [rows, setRows] = useState(initialItems);
  const [showToast, setShowToast] = useState(false);

  const base = useMemo(() => rows.reduce((s, r) => s + (Number(r.cost) || 0), 0), [rows]);

  function update(idx, patch) {
    setRows(rows.map((r, i) => (i === idx ? { ...r, ...patch } : r)));
  }

  function handleSave() {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2000);
  }

  return (
    <AppShell title="Scope">
      <Container size="xl">
        <Stepper current={2} />
        <h1 className="page-title">AI-generated scope</h1>
        <p className="page-subtitle">Review and tweak line items before pricing the job.</p>

        <div className="actions section">
          <div className="badge">Items generated: {rows.length}</div>
          <div className="badge">Base total: {money(base)}</div>
        </div>

        <div className="content-grid section">
          <div>
            <Card>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th style={{ width: 90 }}>Qty</th>
                    <th style={{ width: 90 }}>Unit</th>
                    <th style={{ width: 140 }}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, idx) => (
                    <tr key={idx}>
                      <td>
                        <input value={r.item} onChange={(e) => update(idx, { item: e.target.value })} />
                      </td>
                      <td>
                        <input value={r.qty} onChange={(e) => update(idx, { qty: e.target.value })} />
                      </td>
                      <td>
                        <input value={r.unit} onChange={(e) => update(idx, { unit: e.target.value })} />
                      </td>
                      <td>
                        <input value={r.cost} onChange={(e) => update(idx, { cost: e.target.value })} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <div className="actions section">
              <Button variant="primary" onClick={() => nav("/pricing")}>
                Next: Pricing
              </Button>
              <Button variant="secondary" onClick={() => nav("/upload")}>
                Back
              </Button>
            </div>
          </div>

          <QuoteSummary onSave={handleSave} />
        </div>
      </Container>
      <Toast message="Saved" visible={showToast} />
    </AppShell>
  );
}
