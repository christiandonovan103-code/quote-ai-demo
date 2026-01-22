import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Stepper from "../components/Stepper.jsx";

const steps = [
  { t: "Reading plans & photos", d: "Extracting dimensions and key fixtures…" },
  { t: "Detecting rooms & zones", d: "Kitchen, pantry, splashback, openings…" },
  { t: "Estimating quantities", d: "Cabinet runs, trims, hardware allowances…" },
  { t: "Checking completeness", d: "Flagging unknowns and assumptions…" },
  { t: "Generating scope & allowances", d: "Building an editable scope of works…" },
];

export default function Analyze() {
  const nav = useNavigate();
  const [progress, setProgress] = useState(8);
  const [idx, setIdx] = useState(0);

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
  const isLoading = progress < 100;

  return (
    <AppShell title="Analyze">
      <Container size="xl">
        <Stepper current={1} />
        <h1 className="page-title">Analysing your job</h1>
        <p className="page-subtitle">Quote AI is reading the files and drafting a scope of works.</p>

        <Card className="section">
          <div className="section-title">{active.t}</div>
          <div className="page-subtitle">{active.d}</div>

          <div className="section">
            <div className="progress-meta">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="analysis-grid">
            <div>
              <div className="input-label">What Quote AI will produce</div>
              <ul className="list">
                <li>Editable scope of works</li>
                <li>Allowances & assumptions</li>
                <li>Base cost summary</li>
                <li>Client-ready quote preview</li>
              </ul>
            </div>
            <div className="skeleton-card" aria-hidden={!isLoading}>
              <div className="skeleton-line" />
              <div className="skeleton-line" />
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-chip" />
            </div>
          </div>

          <div className="actions section">
            <Button variant="primary" onClick={() => nav("/scope")}>
              Skip → Scope
            </Button>
            <Button variant="secondary" onClick={() => nav("/upload")}>
              Back
            </Button>
          </div>
        </Card>

        <p className="page-subtitle section-muted">
          Demo note: In production this step runs the AI model on your plans and photos.
        </p>
      </Container>
    </AppShell>
  );
}
