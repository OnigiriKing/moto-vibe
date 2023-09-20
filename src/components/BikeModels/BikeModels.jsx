import AllPagesStart from "components/AllPagesStart";
import AllPagesFooter from "components/AllPagesFooter";
import BikeDes from "./BikeModels.BikeDes/BikeDes";
import bikeInfo from "common/bikeInfo";

export default function BikeModels() {
  return (
    <div>
      <AllPagesStart page="Bike Models" />
      <div id="bike-models-page">
        <div className="bike-models-wrapper">
          <BikeDes
            bikeModel="Honda Click"
            bikeType={bikeInfo.Honda.model}
            price={bikeInfo.Honda.price}
            gas={bikeInfo.Honda.tank}
            weight={bikeInfo.Honda.weight}
            img={bikeInfo.Honda.img}
            star="5"
          />
          <BikeDes
            bikeModel="Chetak Smart"
            bikeType={bikeInfo.Chetak.model}
            price={bikeInfo.Chetak.price}
            gas={bikeInfo.Chetak.tank}
            weight={bikeInfo.Chetak.weight}
            img={bikeInfo.Chetak.img}
            star="4"
          />
          <BikeDes
            bikeModel="Scooter Sym"
            bikeType={bikeInfo.Sym.model}
            price={bikeInfo.Sym.price}
            gas={bikeInfo.Sym.tank}
            weight={bikeInfo.Sym.weight}
            img={bikeInfo.Sym.img}
            star="4"
          />
          <BikeDes
            bikeModel="Yadea G5S"
            bikeType={bikeInfo.Yadea.model}
            price={bikeInfo.Yadea.price}
            gas={bikeInfo.Yadea.tank}
            weight={bikeInfo.Yadea.weight}
            img={bikeInfo.Yadea.img}
            star="3"
          />
          <BikeDes
            bikeModel="Yamaha Fazzio"
            bikeType={bikeInfo.Yamaha.model}
            price={bikeInfo.Yamaha.price}
            gas={bikeInfo.Yamaha.tank}
            weight={bikeInfo.Yamaha.weight}
            img={bikeInfo.Yamaha.img}
            star="5"
          />
        </div>
      </div>
      <AllPagesFooter />
    </div>
  );
}
