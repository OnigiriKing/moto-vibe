import { advantagesSvg } from "../../../svg/advantagesSvg";

export default function Advantages() {


    return (
      <div id="advantages-screen">
        <h2>Explore Bangkok</h2>
        <h1>Best bike rental service</h1>
        <div className="advantages-list">
          <div className="advantage">
            <div>{advantagesSvg(55).bike}</div>
            <h3>Select a bike</h3>
            <p>
              Choose from a diverse fleet of premium motorcycles, tailored to
              fit your style and preferences.
            </p>
          </div>
          <div className="advantage">
            <div>{advantagesSvg(55).support}</div>
            <h3>24/7 support</h3>
            <p>
              Feel confident and cared for with our reliable 24/7 customer
              support.
            </p>
          </div>
          <div className="advantage">
            <div>{advantagesSvg(55).moving}</div>
            <h3>Enjoy bangkok</h3>
            <p>
              Zip through the bustling streets and hidden gems of this vibrant
              city on our top-notch bikes.
            </p>
          </div>
        </div>
      </div>
    );
}