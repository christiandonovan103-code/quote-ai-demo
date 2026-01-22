import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 16 }}>
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 18, padding: 22, boxShadow: "0 8px 20px rgba(0,0,0,.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: 20 }}>Quote AI</div>
          <div style={{ fontSize: 12, fontWeight: 800, background: "#2f4a2f", color: "white", padding: "4px 10px", borderRadius: 999 }}>DEMO</div>
        </div>

        <h1 style={{ margin: "14px 0 6px", fontSize: 28 }}>Log in</h1>
        <p style={{ margin: 0, color: "#6b7280", lineHeight: 1.5 }}>
          Demo app — no account needed. Tap Demo Mode to continue.
        </p>

        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", marginBottom: 6 }}>Email</div>
          <input placeholder="you@company.com" style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }} />
        </div>

        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", marginBottom: 6 }}>Password</div>
          <input placeholder="••••••••" type="password" style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }} />
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          <button
            onClick={() => nav("/dashboard")}
            style={{ flex: 1, padding: 12, borderRadius: 14, border: "1px solid #2f4a2f", background: "#2f4a2f", color: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Demo Mode
          </button>
          <button
            onClick={() => nav("/dashboard")}
            style={{ padding: 12, borderRadius: 14, border: "1px solid #e5e7eb", background: "white", fontWeight: 900, cursor: "pointer" }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
