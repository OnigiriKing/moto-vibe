import HomeComp from "components/HomeComp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash === "#home-request") {
        document.getElementById("home-request")?.scrollIntoView();
      }
    }, [location]);

    return (
      <>
      <HomeComp />
      </>
    );
}
