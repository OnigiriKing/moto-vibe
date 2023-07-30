import hondaBike from "../../../img/Honda.png"
import chetakBike from "../../../img/Chetak.png";
import symBike from "../../../img/Sym.png";
import yadeaBike from "../../../img/Yadea.png";
import yamahaBike from "../../../img/Yamaha.png";
import React from "react";

export function Models() {

    const [bikeType, setType] = React.useState('Honda')

    const bikes = {
      Honda: {
        price: "10",
        model: "150i",
        deposit: "$100",
        gearbox: "Automatic",
        tank: "5.5L",
        weight: "107KG",
        img: { hondaBike },
      },
      Chetak: {
        price: "10",
        model: "150i",
        deposit: "$100",
        gearbox: "Automatic",
        tank: "5.5L",
        weight: "107KG",
        img: { chetakBike },
      },
      Sym: {
        price: "10",
        model: "150i",
        deposit: "$100",
        gearbox: "Automatic",
        tank: "5.5L",
        weight: "107KG",
        img: { symBike },
      },
      Yadea: {
        price: "10",
        model: "150i",
        deposit: "$100",
        gearbox: "Automatic",
        tank: "5.5L",
        weight: "107KG",
        img: { yadeaBike },
      },
      Yamaha: {
        price: "10",
        model: "150i",
        deposit: "$100",
        gearbox: "Automatic",
        tank: "5.5L",
        weight: "107KG",
        img: { yamahaBike },
      },
    };

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
              <button onClick={() => setType("Honda")}>Honda Click</button>
              <button onClick={() => setType("Chetak")}>Chetak Smart</button>
              <button onClick={() => setType("Sym")}>Scooter Sym</button>
              <button onClick={() => setType("Yadea")}>Yadea G5S</button>
              <button onClick={() => setType("Yamaha")}>Yamaha Fazzio</button>
            </div>
            <div className="models-img">
              <img src={hondaBike} />
            </div>
            <div className="models-table">
              <div className="bike-price">
                <span>$10</span> / per day
              </div>
              <div className="bike-description">
                <div className="bike-model">
                  <span>Model</span>
                  <span>150i</span>
                </div>
                <div className="bike-model">
                  <span>Deposit</span>
                  <span>$100</span>
                </div>
                <div className="bike-model">
                  <span>Gearbox</span>
                  <span>Automatic</span>
                </div>
                <div className="bike-model">
                  <span>Tank</span>
                  <span>5.5L</span>
                </div>
                <div className="bike-model">
                  <span>Weight</span>
                  <span>107KG</span>
                </div>
              </div>
              <a href="#home-request">RESERVE NOW</a>
            </div>
          </div>
        </div>
      </div>
    );
}