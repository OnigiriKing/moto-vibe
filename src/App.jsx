import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBarPage from "pages/navBar/NavBarPage";
import HomePage from "./pages/homePage/HomePage";
import FooterPage from "./pages/footerPage/FooterPage";
import TestimonialsPage from "pages/testimonialsPage/TestimonialsPage";
import AboutPage from "pages/aboutPage/AboutPage";
import ContactPage from "pages/contactPage/ContactPage";
import BikePage from "pages/bikePage/BikePage";
import DropMenu from "components/DropMenu";

export default function App() {
  return (
    <div className="App">
      <NavBarPage />
      <DropMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Reviews" element={<TestimonialsPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Models" element={<BikePage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
