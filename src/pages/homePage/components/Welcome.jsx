import { homeSvg } from "../../../svg/homeSvg";
import bikeImg from "../../../img/welcome-bike.png"
import { Link } from "react-router-dom";
import React from "react";

export default function Welcome() {

  const [scrollUp, setScroll] = React.useState(false)

  React.useEffect(() => {
    const scrollFun = () => {
      if (window.pageYOffset > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
    };
  }, [])

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 400) {
  //     document.querySelector(".link-to-top").style.display = "block"
  //   } else {
  //     document.querySelector(".link-to-top").style.display = "none";
  //   }
  // });

  return (
    <div className="welcome-screen">
      <a
        href="#home-page"
        className={`link-to-top ${scrollUp ? "link-visible" : ""}`}
      >
        {homeSvg(25).arrowDown}
      </a>
      <div className="welcome-screen-bg">{homeSvg(100).shape}</div>
      <div className="welcome-wrapper">
        <div className="welcome-des">
          <h3>Explore the city on the bike</h3>
          <h1>
            Ride, <strong>Explore</strong>, and Embrace Bangkok
          </h1>
          <p>
            Ride the Streets of Bangkok with us - Your Ultimate Motorbike Rental
            Hub
          </p>
          <div className="welcome-links">
            <a href="#home-request">Book Bike {homeSvg(20).check}</a>
            <Link to="/Models">Learn More {homeSvg(20).arrow}</Link>
          </div>
        </div>
        <div className="welcome-img ">
          <img src={bikeImg} alt="bikeImg" />
        </div>
      </div>
    </div>
  );
}
