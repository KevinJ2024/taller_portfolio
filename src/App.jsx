import { Route, Routes, Navigate } from "react-router-dom"
import { Header } from "./layouts/Header/Header.jsx"
import { Footer } from "./layouts/Footer/Footer.jsx"
import { Home } from "./pages/Home/Home.jsx"
import { TechnicalSkills } from "./pages/TechnicalSkills/TechnicalSkills.jsx"
import { SocialSkills } from "./pages/SocialSkills/SocialSkills.jsx"
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperience.jsx"
import { Studies } from "./pages/Studies/Studies.jsx"

export function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
          <Route path="/SocialSkills" element={<SocialSkills />} />
          <Route path="/ProfessionalExperience" element={<ProfessionalExperience />} />
          <Route path="/Studies" element={<Studies />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
