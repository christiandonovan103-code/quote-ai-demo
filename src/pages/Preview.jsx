import { useNavigate } from "react-router-dom";

export default function Preview() {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 980, margin: "24px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>Quote Preview</h1>
      <p style={{ color: "#6b7280" }}>Demo preview — what your client would see.</p>

      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 18, boxShadow: "0 8px 20px rgba(0,0,0,.05)", marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Quote AI Carpentry</div>
            <div style={{ color: "#6b7280" }}>Sydney NSW</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: 900 }}>QUOTE</div>
            <div style={{ color: "#6b7280" }}>#QA-1024</div>
          </div>
        </div>

        <div style={{ height: 1, background: "#e5e7eb", margin: "14px 0" }} />

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280" }}>Client</div>
            <div style={{ fontWeight: 900 }}>Smith</div>
            <div style={{ color: "#6b7280" }}>12 Example St, Sydney NSW</div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280" }}>Job</div>
            <div style={{ fontWeight: 900 }}>Kitchen Renovation</div>
            <div style={{ color: "#6b7280" }}>Scope generated from plans + photos</div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280" }}>Total</div>
            <div style={{ fontWeight: 900, fontSize: 22 }}>$8,827.50</div>
            <div style={{ color: "#6b7280" }}>Incl. GST</div>
          </div>
        </div>

        <div style={{ height: 1, background: "#e5e7eb", margin: "14px 0" }} />

        <div style={{ fontWeight: 900, marginBottom: 8 }}>Key scope items</div>
        <ul style={{ marginTop: 0, lineHeight: 1.6 }}>
          <li>Remove existing cabinets</li>
          <li>Install base & overhead cabinets</li>
          <li>Fit kickers & fillers</li>
          <li>Skirting & trims</li>
          <li>Hardware allowance</li>
        </ul>

        <div style={{ color: "#6b7280", fontSize: 12 }}>
          Terms: 30% deposit to commence • Balance on completion • Valid 14 days.
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <button
            onClick={() => nav("/sent")}
            style={{ padding: "12px 16px", borderRadius: 14, border: "none", background: "#2f4a2f", color: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Send Quote
          </button>
          <button
            onClick={() => nav("/pricing")}
            style={{ padding: "12px 16px", borderRadius: 14, border: "1px solid #e5e7eb", background: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
