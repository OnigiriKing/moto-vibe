import AllPagesStart from "../navBar/AllPagesStart";
import AllPagesFooter from "../footerPage/AllPagesFooter";
import BikeDes from "./components/BikeDes";
import hondaClick from "../../img/HondaClick.jpg";

export default function BikeModels() {
  return (
    <div>
      <AllPagesStart />
      <div id="bike-models-page">
        <div className="bike-models-wrapper">
          <BikeDes
            bikeType="Honda"
            bikeModel="Honda Click"
            price="10"
            gas="5.5"
            weight="107"
            img={hondaClick}
            star = "5"
          />
        </div>
      </div>
      <AllPagesFooter />
    </div>
  );
}
