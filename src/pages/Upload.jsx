import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Upload() {
  const nav = useNavigate();

  return (
    <>
      <Header title="Upload" backTo="/new-quote" />
      <Container size="lg">
        <h1 className="page-title">Upload plans & photos</h1>
        <p className="page-subtitle">Add plans and site photos so Quote AI can extract quantities.</p>

        <Card className="card--muted" style={{ marginTop: 16 }}>
          <div className="grid grid--cards">
            <Card className="card--dashed">
              <div style={{ fontWeight: 900 }}>Plans (PDF)</div>
              <div className="page-subtitle" style={{ fontSize: 13, marginTop: 6 }}>
                Drop plan set here
              </div>
              <div className="page-subtitle" style={{ fontSize: 12, marginTop: 12 }}>
                Example: Kitchen plan.pdf
              </div>
            </Card>

            <Card className="card--dashed">
              <div style={{ fontWeight: 900 }}>Site photos</div>
              <div className="page-subtitle" style={{ fontSize: 13, marginTop: 6 }}>
                Drop photos here
              </div>
              <div className="page-subtitle" style={{ fontSize: 12, marginTop: 12 }}>
                Example: IMG_0123.jpg
              </div>
            </Card>
          </div>

          <div className="actions" style={{ marginTop: 16 }}>
            <Button variant="primary" onClick={() => nav("/analyze")}>
              Analyse with AI
            </Button>
            <Button variant="secondary" onClick={() => nav("/new-quote")}>
              Back
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
