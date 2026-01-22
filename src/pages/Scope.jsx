import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

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

  const base = useMemo(() => rows.reduce((s, r) => s + (Number(r.cost) || 0), 0), [rows]);

  function update(idx, patch) {
    setRows(rows.map((r, i) => (i === idx ? { ...r, ...patch } : r)));
  }

  return (
    <div style={{ maxWidth: 980, margin: "24px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>AI-Generated Scope (Editable)</h1>
      <p style={{ color: "#6b7280" }}>Review and adjust items before pricing.</p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10, marginBottom: 14 }}>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 999, padding: "8px 10px", background: "#fafafa", fontWeight: 900 }}>
          Items generated: {rows.length}
        </div>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 999, padding: "8px 10px", background: "#fafafa", fontWeight: 900 }}>
          Base total: {money(base)}
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 18, boxShadow: "0 8px 20px rgba(0,0,0,.05)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "#6b7280", fontSize: 12 }}>
              <th style={{ paddingBottom: 8 }}>Item</th>
              <th style={{ paddingBottom: 8, width: 90 }}>Qty</th>
              <th style={{ paddingBottom: 8, width: 90 }}>Unit</th>
              <th style={{ paddingBottom: 8, width: 140 }}>Cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: "10px 6px" }}>
                  <input
                    value={r.item}
                    onChange={(e) => update(idx, { item: e.target.value })}
                    style={{ width: "100%", padding: 10, borderRadius: 12, border: "1px solid #e5e7eb" }}
                  />
                </td>
                <td style={{ padding: "10px 6px" }}>
                  <input
                    value={r.qty}
                    onChange={(e) => update(idx, { qty: e.target.value })}
                    style={{ width: "100%", padding: 10, borderRadius: 12, border: "1px solid #e5e7eb" }}
                  />
                </td>
                <td style={{ padding: "10px 6px" }}>
                  <input
                    value={r.unit}
                    onChange={(e) => update(idx, { unit: e.target.value })}
                    style={{ width: "100%", padding: 10, borderRadius: 12, border: "1px solid #e5e7eb" }}
                  />
                </td>
                <td style={{ padding: "10px 6px" }}>
                  <input
                    value={r.cost}
                    onChange={(e) => update(idx, { cost: e.target.value })}
                    style={{ width: "100%", padding: 10, borderRadius: 12, border: "1px solid #e5e7eb" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
        <button
          onClick={() => nav("/pricing")}
          style={{ padding: "12px 16px", borderRadius: 14, border: "none", background: "#2f4a2f", color: "white", fontWeight: 900, cursor: "pointer" }}
        >
          Next: Pricing
        </button>

        <button
          onClick={() => nav("/upload")}
          style={{ padding: "12px 16px", borderRadius: 14, border: "1px solid #e5e7eb", background: "white", fontWeight: 900, cursor: "pointer" }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
