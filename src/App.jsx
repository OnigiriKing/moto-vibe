import React, { Suspense } from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBarPage from "pages/navBar/NavBarPage";
import HomePage from "pages/homePage/HomePage";
import FooterPage from "pages/footerPage/FooterPage";
import DropMenu from "components/DropMenu";

export default function App() {
  const TestimonialsPage = React.lazy(() =>
    import("pages/testimonialsPage/TestimonialsPage")
  );
  const AboutPage = React.lazy(() => import("pages/aboutPage/AboutPage"));
  const ContactPage = React.lazy(() => import("pages/contactPage/ContactPage"));
  const BikePage = React.lazy(() => import("pages/bikePage/BikePage"));

  return (
    <div className="App">
      <NavBarPage />
      <DropMenu />
      <Suspense
        fallback={
          <h2
            style={{
              textAlign: "center",
              paddingTop: "10rem",
            }}
          >
            Loading...
          </h2>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Reviews" element={<TestimonialsPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Models" element={<BikePage />} />
        </Routes>
      </Suspense>
      <FooterPage />
    </div>
  );
}
