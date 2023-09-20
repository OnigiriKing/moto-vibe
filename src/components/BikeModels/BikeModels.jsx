import AllPagesStart from "../AllPagesStart/AllPagesStart";
import AllPagesFooter from "../AllPagesFooter/AllPagesFooter";
import BikeDes from "./BikeModels.BikeDes/BikeDes";
import { bikes } from "../HomeComp/HomeComp.BikeModels/BikeModels";

export default function BikeModels() {
  return (
    <div>
      <AllPagesStart page="Bike Models" />
      <div id="bike-models-page">
        <div className="bike-models-wrapper">
          <BikeDes
            bikeModel="Honda Click"
            bikeType={bikes.Honda.model}
            price={bikes.Honda.price}
            gas={bikes.Honda.tank}
            weight={bikes.Honda.weight}
            img={bikes.Honda.img}
            star="5"
          />
          <BikeDes
            bikeModel="Chetak Smart"
            bikeType={bikes.Chetak.model}
            price={bikes.Chetak.price}
            gas={bikes.Chetak.tank}
            weight={bikes.Chetak.weight}
            img={bikes.Chetak.img}
            star="4"
          />
          <BikeDes
            bikeModel="Scooter Sym"
            bikeType={bikes.Sym.model}
            price={bikes.Sym.price}
            gas={bikes.Sym.tank}
            weight={bikes.Sym.weight}
            img={bikes.Sym.img}
            star="4"
          />
          <BikeDes
            bikeModel="Yadea G5S"
            bikeType={bikes.Yadea.model}
            price={bikes.Yadea.price}
            gas={bikes.Yadea.tank}
            weight={bikes.Yadea.weight}
            img={bikes.Yadea.img}
            star="3"
          />
          <BikeDes
            bikeModel="Yamaha Fazzio"
            bikeType={bikes.Yamaha.model}
            price={bikes.Yamaha.price}
            gas={bikes.Yamaha.tank}
            weight={bikes.Yamaha.weight}
            img={bikes.Yamaha.img}
            star="5"
          />
        </div>
      </div>
      <AllPagesFooter />
    </div>
  );
}
