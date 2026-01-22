import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Upload() {
  const nav = useNavigate();

  return (
    <>
      <Header title="Upload" backTo="/new-quote" />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
        <div style={{ paddingTop: 10 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: "10px 0 6px" }}>Upload plans & photos</h1>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Demo upload — in the real app you’d add a PDF plan set and job photos.
          </p>
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
            <div style={{ border: "1px dashed #d1d5db", borderRadius: 18, padding: 16 }}>
              <div style={{ fontWeight: 900 }}>Plans (PDF)</div>
              <div style={{ color: "#6b7280", fontSize: 13, marginTop: 6 }}>Drop plan set here</div>
              <div style={{ marginTop: 12, color: "#6b7280", fontSize: 12 }}>Example: Kitchen plan.pdf</div>
            </div>

            <div style={{ border: "1px dashed #d1d5db", borderRadius: 18, padding: 16 }}>
              <div style={{ fontWeight: 900 }}>Site photos</div>
              <div style={{ color: "#6b7280", fontSize: 13, marginTop: 6 }}>Drop photos here</div>
              <div style={{ marginTop: 12, color: "#6b7280", fontSize: 12 }}>Example: IMG_0123.jpg</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => nav("/analyze")}
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                border: "none",
                background: "#2f4a2f",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Analyse with AI
            </button>

            <button
              onClick={() => nav("/new-quote")}
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                border: "1px solid #e5e7eb",
                background: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
