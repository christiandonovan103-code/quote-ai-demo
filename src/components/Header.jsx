import { useNavigate } from "react-router-dom";

export default function Header({ title, backTo }) {
  const nav = useNavigate();

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#f7f7f8", paddingBottom: 10 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "14px 16px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {backTo ? (
              <button
                onClick={() => nav(backTo)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 14,
                  border: "1px solid #e5e7eb",
                  background: "white",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                ← Back
              </button>
            ) : (
              <div style={{ width: 78 }} />
            )}

            <div>
              <div style={{ fontWeight: 900, fontSize: 18, lineHeight: 1 }}>Quote AI</div>
              <div style={{ color: "#6b7280", fontSize: 12, fontWeight: 800 }}>{title || ""}</div>
            </div>
          </div>

          <button
            onClick={() => nav("/dashboard")}
            style={{
              padding: "10px 12px",
              borderRadius: 14,
              border: "1px solid #2f4a2f",
              background: "#2f4a2f",
              color: "white",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
