import { navSvg } from "../../../svg/navSvg";
import { requestSvg } from "../../../svg/requestFormSvg";
import React from "react";
import { bikes } from "./BikeModels";

export default function RequestMenu({info}) {

  const [bikeImg, setBikeImg] = React.useState("")

  React.useEffect(()=> {
    Object.keys(bikes).map(key => {
      if (bikes[key].name === info.bikeType) {
        return setBikeImg(bikes[key].img);
      }
    })
  }, [info])

    return (
      <>
        <div className="request-menu-bg" />
        <div className="request-menu-screen">
          <div className="request-menu-des">
            <div className="request-menu-top">
              <h2>COMPLETE RESERVATION</h2>
              <button>{navSvg(25).closeBtn}</button>
            </div>
            <div className="request-menu-mid">
              <h3>
                Upon completing this reservation enquiry, you will receive:
              </h3>
              <p>
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
            <div className="request-menu-main">
              <div className="menu-main-time">
                <div className="main-date-location">
                  <h3>Location & Date</h3>
                  <div className="location-info">
                    <h3>{requestSvg(20).calendar}Pick-Up Date & Time</h3>
                    <p>{info.pickDate}</p>
                  </div>
                  <div className="location-info">
                    <h3>{requestSvg(20).calendar}Drop-Off Date & Time</h3>
                    <p>{info.dropDate}</p>
                  </div>
                  <div className="location-info">
                    <h3>{requestSvg(20).location}Pick-Up Location</h3>
                    <p>{info.pickUp}</p>
                  </div>
                  <div className="location-info">
                    <h3>{requestSvg(20).location}Drop-Off Location</h3>
                    <p>{info.dropOff}</p>
                  </div>
                </div>
                <div className="menu-main-bike">
                  <h3>
                    Bike: <h2>{info.bikeType}</h2>
                  </h3>
                  <img src={bikeImg} />
                </div>
              </div>
              <div className="menu-main-info">
                <h3>PERSONAL INFORMATION</h3>
                <div className="main-info-personal">
                  <label></label>
                  <input></input>
                </div>
                <div className="main-info-mail"></div>
                <div className="main-info-address"></div>
                <input type="checkbox" />
              </div>
              <div className="menu-main-complete">
                <button>Reserve now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

