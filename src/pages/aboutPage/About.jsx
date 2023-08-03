import AllPagesStart from "../navBar/AllPagesStart";
import AllPagesFooter from "../footerPage/AllPagesFooter";
import Advantages from "../homePage/components/Advantages";
import bikeRent from "../../img/bikeRent.png"

export default function About() {
  return (
    <div>
      <AllPagesStart page="About" />
      <div id="about-page">
        <div className="about-page-wrapper">
          <img src={bikeRent}></img>
          <div className="about-page-des">
            <div className="about-page-text">
              <h2>About Company</h2>
              <h1>Discover Bangkok on Two Wheels</h1>
              <p>
                We offer top-notch motorbikes for rent, providing you with a
                thrilling and convenient way to navigate the city's bustling
                streets and discover its hidden gems. Whether you're a seasoned
                rider or a novice explorer, our reliable fleet and exceptional
                service ensure an unforgettable and safe experience. 
              </p>
            </div>
            <div className="about-page-adv">
              <div className="about-page-pros">
                <img></img>
                <div>
                  <h1>25</h1>
                  <p>Bikes to rent</p>
                </div>
              </div>
              <div className="about-page-pros">
                <img></img>
                <div>
                  <h1>3</h1>
                  <p>Offices</p>
                </div>
              </div>
              <div className="about-page-pros">
                <img></img>
                <div>
                  <h1>5</h1>
                  <p>Repair Shop</p>
                </div>
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
