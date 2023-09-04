import hondaBike from "../../../img/Honda.png"
import chetakBike from "../../../img/Chetak.png";
import symBike from "../../../img/Sym.png";
import yadeaBike from "../../../img/Yadea.png";
import yamahaBike from "../../../img/Yamaha.png";
import React from "react";

export const bikes = {
  Honda: {
    price: "10",
    model: "150i",
    name: "Honda Click",
    deposit: "$100",
    gearbox: "Automatic",
    tank: "5.5 L",
    weight: "107 KG",
    img: hondaBike,
  },
  Chetak: {
    price: "12",
    model: "Smart",
    name: "Chetak Smart",
    deposit: "$100",
    gearbox: "Automatic",
    tank: "60 Ah",
    weight: "100KG",
    img: chetakBike,
  },
  Sym: {
    price: "8",
    model: "Symphony",
    name: "Scooter Sym",
    deposit: "$100",
    gearbox: "Automatic",
    tank: "5.4 L",
    weight: "123KG",
    img: symBike,
  },
  Yadea: {
    price: "15",
    model: "G5S ",
    name: "Yadea G5S",
    deposit: "$150",
    gearbox: "Automatic",
    tank: "50 Ah",
    weight: "81KG",
    img: yadeaBike,
  },
  Yamaha: {
    price: "12",
    model: "Fazzio",
    name: "Yamaha Fazzio",
    deposit: "$120",
    gearbox: "Automatic",
    tank: "5.1L",
    weight: "125KG",
    img: yamahaBike,
  },
};

export function Models() {

    const [bikeType, setType] = React.useState('Honda')

  

    return (
      <div id="bike-models">
        <div className="models-main-wrapper">
          <h2>Bike Models</h2>
          <h1>The Wheels Gallery</h1>
          <p>
            Our exceptional range of motorcycles invites you to select the one
            that reflects your personality
          </p>
          <div className="models-wrapper">
            <div className="models-choose">
              <button
                className={bikeType === "Honda" ? "model-active-btn" : ""}
                onClick={() => setType("Honda")}
              >
                Honda Click
              </button>
              <button
                className={bikeType === "Chetak" ? "model-active-btn" : ""}
                onClick={() => setType("Chetak")}
              >
                Chetak Smart
              </button>
              <button
                className={bikeType === "Sym" ? "model-active-btn" : ""}
                onClick={() => setType("Sym")}
              >
                Scooter Sym
              </button>
              <button
                className={bikeType === "Yadea" ? "model-active-btn" : ""}
                onClick={() => setType("Yadea")}
              >
                Yadea G5S
              </button>
              <button
                className={bikeType === "Yamaha" ? "model-active-btn" : ""}
                onClick={() => setType("Yamaha")}
              >
                Yamaha Fazzio
              </button>
            </div>
            <div className="models-img-table">
              <div className="models-img">
                <img src={bikes[bikeType].img} alt={bikes[bikeType].model} />
              </div>
              <div className="models-table">
                <div className="bike-price">
                  <span>${bikes[bikeType].price}</span> / per day
                </div>
                <div className="bike-description">
                  <div className="bike-model">
                    <span>Model</span>
                    <span>{bikes[bikeType].model}</span>
                  </div>
                  <div className="bike-model">
                    <span>Deposit</span>
                    <span>{bikes[bikeType].deposit}</span>
                  </div>
                  <div className="bike-model">
                    <span>Gearbox</span>
                    <span>{bikes[bikeType].gearbox}</span>
                  </div>
                  <div className="bike-model">
                    <span>Tank</span>
                    <span>{bikes[bikeType].tank}</span>
                  </div>
                  <div className="bike-model">
                    <span>Weight</span>
                    <span>{bikes[bikeType].weight}</span>
                  </div>
                </div>
                <a href="#home-request">RESERVE NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}