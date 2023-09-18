import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/navBar/NavBarComponent";
import HomePage from "./pages/homePage/HomePage";
import FooterPage from "./pages/footerPage/Footer";
import Testimonials from "./pages/testimonialsPage/Testimonials";
import AboutPage from "pages/aboutPage/AboutPage";
import ContactPage from "pages/contactPage/ContactPage";
import BikeModels from "./pages/bikeModelsPage/BikeModels";
import DropMenu from "./pages/navBar/DropMenu";

export default function App() {
  

  return (
    <div className="App">
      <NavBar />
      <DropMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Reviews" element={<Testimonials />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Models" element={<BikeModels />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
