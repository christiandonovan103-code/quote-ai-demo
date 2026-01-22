import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

const steps = [
  { t: "Reading plans & photos", d: "Extracting dimensions and key fixtures…" },
  { t: "Detecting rooms & zones", d: "Kitchen, pantry, splashback, openings…" },
  { t: "Estimating quantities", d: "Cabinet runs, trims, hardware allowances…" },
  { t: "Checking completeness", d: "Flagging unknowns and assumptions…" },
  { t: "Generating scope & allowances", d: "Building an editable scope-of-works…" },
];

export default function Analyze() {
  const nav = useNavigate();
  const [progress, setProgress] = useState(8);
  const [idx, setIdx] = useState(0);

  // Total time ~6–8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => Math.min(100, p + 4 + Math.random() * 6));
    }, 250);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setIdx((i) => Math.min(steps.length - 1, i + 1));
    }, 1100);

    return () => clearInterval(stepTimer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => nav("/scope"), 600);
      return () => clearTimeout(t);
    }
  }, [progress, nav]);

  const active = useMemo(() => steps[Math.min(idx, steps.length - 1)], [idx]);

  return (
    <>
      <Header title="AI Analysis" backTo="/upload" />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
        <div style={{ paddingTop: 10 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: "10px 0 6px" }}>Analysing your job</h1>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Quote AI is extracting quantities and generating an editable scope.
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
          <div style={{ fontWeight: 900, fontSize: 16 }}>{active.t}</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>{active.d}</div>

          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280", fontWeight: 800 }}>
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 10, background: "#eef2f7", borderRadius: 999, overflow: "hidden", marginTop: 8 }}>
              <div style={{ height: "100%", width: `${progress}%`, background: "#2f4a2f" }} />
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: "#6b7280", marginBottom: 8 }}>What Quote AI will produce</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
              <li>Editable scope-of-works</li>
              <li>Allowances & assumptions</li>
              <li>Base cost summary</li>
              <li>Client-ready quote preview</li>
            </ul>
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => nav("/scope")}
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
              Skip → Scope
            </button>

            <button
              onClick={() => nav("/upload")}
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

        <div style={{ color: "#6b7280", fontSize: 12, marginTop: 10 }}>
          Demo note: In the real product this step runs the AI model on your plans/photos.
        </div>
      </div>
    </>
  );
}
