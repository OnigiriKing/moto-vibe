import { bikeDesSvg } from "../../../svg/bikeDesSvg";

export default function BikeDes({ bikeType, bikeModel, price, gas, weight, img, star }) {

  const stars = [
    bikeDesSvg(10).star,
    bikeDesSvg(10).star,
    bikeDesSvg(10).star,
    bikeDesSvg(10).star,
    bikeDesSvg(10).star,
  ];
  return (
    <div className="bike-des-wrapper">
      <div className="bike-des-img">{img}</div>
      <div className="bike-des-text">
        <div className="bike-des-price">
          <div>
            <h3>{bikeModel}</h3>
            <div>{stars.splice(0, star)}</div>
          </div>
          <div>
            <h3>{price}</h3>
            <p>Per day</p>
          </div>
        </div>
        <div className="bike-des-type">
          <h4>
            {bikeDesSvg(20).bike}
            {bikeType}
          </h4>
          <h4>
            {weight}
            {bikeDesSvg(20).weight}
          </h4>
        </div>
        <div className="bike-des-gas">
          <h4>Auto</h4>
          <h4>
            {gas}L{bikeDesSvg(20).gas}
          </h4>
        </div>
      </div>
    </div>
  );
}
