import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // Tailwind v4
import HomePage from "./pages/HomePage";
import KidsTeensPage from "./pages/KidsTeensPage";
import AdultsPage from "./pages/AdultsPage";
import ParentsPage from "./pages/ParentsPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kids-teens" element={<KidsTeensPage />} />
        <Route path="/adults" element={<AdultsPage />} />
        <Route path="/parents-caregivers" element={<ParentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
