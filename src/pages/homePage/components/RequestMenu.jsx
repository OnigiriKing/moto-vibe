import { navSvg } from "../../../svg/navSvg";
import { requestSvg } from "../../../svg/requestFormSvg";
import React from "react";
import { bikes } from "./BikeModels";

export default function RequestMenu({info}) {

  const [bikeImg, setBikeImg] = React.useState("")

  React.useEffect(() => {
    Object.keys(bikes).map((key) => {
      if (bikes[key].name === info.bikeType) {
        setBikeImg(bikes[key].img);
      }
    });
  }, [info.bikeType]);

  function InputField({name, holder, type = "text"}) {

    return (
      <div className="request-input-field">
        <h4>{name}</h4>
        <input className="input-field-style" placeholder={holder}
        type={type}></input>
        <p>This field is required.</p>
      </div>
    );
  }

    return (
      <>
        <div className="request-menu-bg request-menu-closed" />
        <div className="request-menu-screen request-menu-closed">
          <div className="request-menu-des">
            <div className="request-menu-wrapp">
              <div className="request-menu-top">
                <h2>COMPLETE RESERVATION</h2>
                <button>{navSvg(25).closeBtn}</button>
              </div>
            </div>
            <div className="request-menu-wrapp">
              <div className="request-menu-mid">
                <h3>
                  Upon completing this reservation enquiry, you will receive:
                </h3>
                <p>
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number.
                </p>
              </div>
            </div>
            <div className="request-menu-wrapp">
              <div className="request-menu-main">
                <div className="menu-main-time">
                  <div className="main-date-location">
                    <span>
                      <h3>Location & Date</h3>
                    </span>
                    <div className="location-info">
                      {requestSvg(20).calendar}
                      <div>
                        <h3>Pick-Up Date & Time</h3>
                        <p>
                          {info.pickDate} / <input type="time" />
                        </p>
                      </div>
                    </div>
                    <div className="location-info">
                      {requestSvg(20).calendar}
                      <div>
                        <h3>Drop-Off Date & Time</h3>
                        <p>
                          {info.dropDate} / <input type="time" />
                        </p>
                      </div>
                    </div>
                    <div className="location-info">
                      {requestSvg(20).location}
                      <div>
                        <h3>Pick-Up Location</h3>
                        <p>{info.pickUp}</p>
                      </div>
                    </div>
                    <div className="location-info">
                      {requestSvg(20).location}
                      <div>
                        <h3>Drop-Off Location</h3>
                        <p>{info.dropOff}</p>
                      </div>
                    </div>
                  </div>
                  <div className="menu-main-bike">
                    <h3>
                      Bike:
                      <b>{info.bikeType}</b>
                    </h3>
                    <img src={bikeImg} />
                  </div>
                </div>
                <div className="menu-main-info">
                  <h3>Personal Information</h3>
                  <div className="main-info-personal">
                    <InputField
                      name="First Name"
                      holder="Enter your first name"
                    />
                    <InputField
                      name="Last Name"
                      holder="Enter your last name"
                    />
                    <InputField
                      name="Phone Number"
                      holder="Enter your phone number"
                    />
                    <InputField name="Age" holder="18" type="number" />
                  </div>
                  <div className="main-info-mail">
                    <InputField name="Email" holder="Enter your Email" />
                    <InputField
                      name="Address"
                      holder="Enter your street address"
                    />
                  </div>
                  <div className="main-info-address">
                    <InputField name="City" holder="Enter your City" />
                    <InputField name="Zip Code" holder="Enter your Zip Code" />
                  </div>
                  <div className="main-info-check">
                    <input type="checkbox" />
                    <p>Please send me latest news and updates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="request-menu-wrapp">
              <div className="menu-main-complete">
                <button>Reserve now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

