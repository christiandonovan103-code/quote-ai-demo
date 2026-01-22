import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NewQuote from "./pages/NewQuote.jsx";
import Upload from "./pages/Upload.jsx";
import Analyze from "./pages/Analyze.jsx";
import Scope from "./pages/Scope.jsx";
import Pricing from "./pages/Pricing.jsx";
import Preview from "./pages/Preview.jsx";
import Sent from "./pages/Sent.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/scope" element={<Scope />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/sent" element={<Sent />} />
    </Routes>
  );
}
