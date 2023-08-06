import { bikeDesSvg } from "../../../svg/bikeDesSvg";

export default function BikeDes({ bikeType, bikeModel, price, gas, weight, img, star }) {

  const stars = [
    bikeDesSvg(15).star,
    bikeDesSvg(15).star,
    bikeDesSvg(15).star,
    bikeDesSvg(15).star,
    bikeDesSvg(15).star,
  ];
  return (
    <div className="bike-des-wrapper">
      <div className="bike-des-img">
        <img src={img}></img>
      </div>
      <div className="bike-des-text">
        <div className="bike-des">
          <div>
            <h3>{bikeModel}</h3>
            <div>{stars.splice(0, star)}</div>
          </div>
          <div className="bike-des-price">
            <h3>${price}</h3>
            <p>Per day</p>
          </div>
        </div>
        <div className="bike-des">
          <h4>
            {bikeDesSvg(20).bike}
            {bikeType}
          </h4>
          <h4>
            {weight}
            {bikeDesSvg(20).weight}
          </h4>
        </div>
        <div className="bike-des">
          <h4>{bikeDesSvg(20).gearBox} Auto</h4>
          <h4>
            {gas}L{bikeDesSvg(20).gas}
          </h4>
        </div>
      </div>
    </div>
  );
}
