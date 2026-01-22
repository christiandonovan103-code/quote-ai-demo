import { useNavigate } from "react-router-dom";

export default function Sent() {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 16 }}>
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 22, boxShadow: "0 8px 20px rgba(0,0,0,.05)" }}>
        <div style={{ fontWeight: 900, fontSize: 24 }}>Quote sent ✅</div>
        <p style={{ color: "#6b7280", lineHeight: 1.5 }}>
          Demo complete. In the real app, the client receives a link to accept and pay the deposit.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <button
            onClick={() => nav("/dashboard")}
            style={{ padding: "12px 16px", borderRadius: 14, border: "none", background: "#2f4a2f", color: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => nav("/new-quote")}
            style={{ padding: "12px 16px", borderRadius: 14, border: "1px solid #e5e7eb", background: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Start another quote
          </button>
        </div>
      </div>
    </div>
  );
}
