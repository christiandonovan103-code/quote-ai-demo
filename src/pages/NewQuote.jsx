import { useNavigate } from "react-router-dom";

export default function NewQuote() {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 700, margin: "24px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>New Quote</h1>
      <p style={{ color: "#6b7280" }}>
        Enter job details. Quote AI will use this to generate the scope.
      </p>

      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 20, marginTop: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", marginBottom: 6 }}>Client name</div>
        <input placeholder="Smith" style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }} />

        <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", margin: "12px 0 6px" }}>Job type</div>
        <select style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }}>
          <option>Kitchen Renovation</option>
          <option>Bathroom Renovation</option>
          <option>Deck / Pergola</option>
        </select>

        <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", margin: "12px 0 6px" }}>Site address</div>
        <input placeholder="12 Example St, Sydney NSW" style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }} />

        <div style={{ marginTop: 16 }}>
          <button
            onClick={() => nav("/upload")}
            style={{ padding: "12px 16px", borderRadius: 14, border: "none", background: "#2f4a2f", color: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Next: Upload Plans
          </button>
        </div>
      </div>
    </div>
  );
}
