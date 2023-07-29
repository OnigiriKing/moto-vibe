import { homeSvg } from "../../../svg/homeSvg";
import bikeImg from "../../../img/welcome-bike.png"

export default function Welcome() {
  return (
    <div className="welcome-screen">
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
            <a href="#">Book Bike {homeSvg(20).check}</a>
            <a>Learn More {homeSvg(20).arrow}</a>
          </div>
        </div>
        {/* <div className="welcome-img ">
          <img src={bikeImg} />
        </div> */}
      </div>
    </div>
  );
}
