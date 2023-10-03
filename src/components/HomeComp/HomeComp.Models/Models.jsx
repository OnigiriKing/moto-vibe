import bikeInfo from "common/utils/bikeInfo";
import React from "react";

export default function Models() {
  const [bikeType, setType] = React.useState("Honda");

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
              <img
                src={bikeInfo[bikeType].img}
                alt={bikeInfo[bikeType].model}
              />
            </div>
            <div className="models-table">
              <div className="bike-price">
                <span>${bikeInfo[bikeType].price}</span> / per day
              </div>
              <div className="bike-description">
                <div className="bike-model">
                  <span>Model</span>
                  <span>{bikeInfo[bikeType].model}</span>
                </div>
                <div className="bike-model">
                  <span>Deposit</span>
                  <span>{bikeInfo[bikeType].deposit}</span>
                </div>
                <div className="bike-model">
                  <span>Gearbox</span>
                  <span>{bikeInfo[bikeType].gearbox}</span>
                </div>
                <div className="bike-model">
                  <span>Tank</span>
                  <span>{bikeInfo[bikeType].tank}</span>
                </div>
                <div className="bike-model">
                  <span>Weight</span>
                  <span>{bikeInfo[bikeType].weight}</span>
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
