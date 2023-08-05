import { bikeDesSvg } from "../../../svg/bikeDesSvg";

export default function BikeDes({ bikeType, bikeModel, price, gas, weight }) {
  return (
    <div className="bike-des-wrapper">
      <div></div>
      <div className="bike-des">
        <div>
          <div>
            <h3>{bikeModel}</h3>
            <div>{bikeDesSvg(10).star}</div>
          </div>
          <div>
            <h3>{price}</h3>
            <p>Per day</p>
          </div>
        </div>
        <div>
          <h4>{bikeDesSvg(20).bike}{bikeType}</h4>
          <h4>{weight}{bikeDesSvg(20).weight}</h4>
        </div>
        <div>
          <h4>Auto</h4>
          <h4>{gas}{bikeDesSvg(20).gas}</h4>
        </div>
      </div>
    </div>
  );
}
