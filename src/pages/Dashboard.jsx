import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 980, margin: "24px auto", padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 26 }}>My Quotes</div>
          <div style={{ color: "#6b7280" }}>Drafts, sent quotes, and accepted jobs.</div>
        </div>
        <button
          onClick={() => nav("/new-quote")}
          style={{ padding: "12px 14px", borderRadius: 14, border: "1px solid #2f4a2f", background: "#2f4a2f", color: "white", fontWeight: 900, cursor: "pointer" }}
        >
          + New Quote
        </button>
      </div>

      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 18, boxShadow: "0 8px 20px rgba(0,0,0,.05)" }}>
          <div style={{ fontWeight: 900 }}>Smith Kitchen Renovation</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>Status: Draft • Est: $18,000+</div>
          <button
            onClick={() => nav("/new-quote")}
            style={{ marginTop: 12, padding: "10px 12px", borderRadius: 14, border: "1px solid #e5e7eb", background: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Continue
          </button>
        </div>

        <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 18, boxShadow: "0 8px 20px rgba(0,0,0,.05)" }}>
          <div style={{ fontWeight: 900 }}>Brown Bathroom</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>Status: Sent • $9,200</div>
          <button
            onClick={() => alert("Demo only")}
            style={{ marginTop: 12, padding: "10px 12px", borderRadius: 14, border: "1px solid #e5e7eb", background: "white", fontWeight: 900, cursor: "pointer" }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
