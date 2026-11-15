import AllPagesStart from "components/AllPagesStart/AllPagesStart";
import AllPagesFooter from "components/AllPagesFooter";
import Advantages from "components/HomeComp/HomeComp.Advantages/Advantages";
import bikeRent from "img/bikeRent.png";
import { requestSvg } from "svg/requestFormSvg";

export default function About() {
  return (
    <div>
      <AllPagesStart page="About" />
      <div id="about-page">
        <div className="about-page-wrapper">
          <img src={bikeRent} alt="bikeRent" />
          <div className="about-page-des">
            <div className="about-page-text">
              <h2>About Moto Vibe</h2>
              <h1>Discover Bangkok on Two Wheels</h1>
              <p>
                Moto Vibe is a demo for a fictional motorbike rental shop in
                Bangkok. You can browse the bikes and try a booking. The fleet
                and shop figures below are examples.
              </p>
            </div>
            <div className="about-page-adv">
              <div className="about-page-pros">
                <div>{requestSvg(50).bike}</div>
                <span>
                  <h1>25</h1>
                  <p>Bikes to rent</p>
                </span>
              </div>
              <div className="about-page-pros">
                <div>{requestSvg(50).office}</div>
                <span>
                  <h1>3</h1>
                  <p>Offices</p>
                </span>
              </div>
              <div className="about-page-pros">
                <div>{requestSvg(50).garage}</div>
                <span>
                  <h1>5</h1>
                  <p>Repair shops</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Advantages />
      <AllPagesFooter />
    </div>
  );
}
