import { homeSvg } from "../../../svg/homeSvg";
import bikeImg from "../../../img/welcome-bike.png"

export default function Welcome() {
  return (
    <div className="welcome-screen">
      {homeSvg()}
      <div className="welcome-des">
        <h3>Explore the city on the bike</h3>
        <h1>Ride, Explore, and Embrace Bangkok </h1>
        <p>
          Ride the Streets of Bangkok with us - Your Ultimate Motorbike Rental
          Hub
        </p>
      </div>
      <div className="welcome-img">
        <img src={bikeImg} />
      </div>
    </div>
  );
}
