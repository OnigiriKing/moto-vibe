import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/navBar/NavBar";
import FooterPage from "./pages/footerPage/Footer";
import HomePage from "./pages/homePage/HomePage";



export default function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />}/>
      
    </Routes>
    <FooterPage />
    </div>
  );
}
