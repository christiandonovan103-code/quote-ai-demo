import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
        <div style={{ paddingTop: 10 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: "10px 0 6px" }}>Pricing</h1>
          <p style={{ color: "#6b7280", margin: 0 }}>Set margin + GST. Totals update instantly.</p>
        </div>

        <div
          style={{
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: 18,
            padding: 18,
            boxShadow: "0 8px 20px rgba(0,0,0,.05)",
            marginTop: 14,
          }}
        >
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280" }}>Base cost</div>
              <div style={{ fontSize: 22, fontWeight: 900, marginTop: 6 }}>{money(baseCost)}</div>

              <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", marginTop: 14 }}>Margin %</div>
              <input
                value={marginPct}
                onChange={(e) => setMarginPct(e.target.value)}
                style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }}
              />

              <label style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 12, fontWeight: 900 }}>
                <input type="checkbox" checked={gstOn} onChange={(e) => setGstOn(e.target.checked)} />
                Add GST (10%)
              </label>
            </div>

            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>Totals</div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, color: "#6b7280" }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: 900, color: "#111" }}>{money(subtotal)}</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, color: "#6b7280" }}>
                <span>GST</span>
                <span style={{ fontWeight: 900, color: "#111" }}>{money(gst)}</span>
              </div>

              <div style={{ height: 1, background: "#e5e7eb", margin: "14px 0" }} />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 900 }}>Total</span>
                <span style={{ fontWeight: 900, fontSize: 20 }}>{money(total)}</span>
              </div>

              <button
                onClick={() => nav("/preview")}
                style={{
                  marginTop: 14,
                  width: "100%",
                  padding: 12,
                  borderRadius: 14,
                  border: "none",
                  background: "#2f4a2f",
                  color: "white",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Next: Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
