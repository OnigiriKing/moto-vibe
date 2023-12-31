import { requestSvg } from "svg/requestFormSvg";
import { navSvg } from "svg/navSvg";
import React from "react";
import { changeClass } from "scripts/scripts";
import RequestMenu from "./Request.RequestMenu/RequestMenu";
import bikeInfo from "common/utils/bikeInfo";

export default function Request() {
  const defaultFillState = {
    bikeType: "Select a bike type",
    pickUp: "Select Pick-up location",
    dropOff: "Select Drop-off location",
    pickDate: "",
    dropDate: "",
  };

  const [fillState, setFillState] = React.useState(defaultFillState);

  function handleSubmit(event) {
    event.preventDefault();
    const sameValue = Object.keys(fillState).some(
      (key) => fillState[key] === defaultFillState[key]
    );
    if (sameValue) {
      changeClass(".banner-wrong", "fields-banner-active", false);
    }
    if (!sameValue) {
      changeClass(".body", "scroll-off");
      document
        .querySelector(".banner-wrong")
        .classList.remove("fields-banner-active");
      changeClass(".request-menu-bg", "request-menu-closed");
      changeClass(".request-menu-screen", "request-menu-closed");
    }
  }

  function changeFillState(e) {
    setFillState({ ...fillState, [e.target.id]: e.target.value });
  }

  return (
    <div id="home-request">
      <RequestMenu info={fillState} />
      <div className="request-wrapper">
        <h2>Book a bike</h2>
        <div className="fields-banner banner-wrong">
          <h3>All fields are required</h3>
          <div
            onClick={() => {
              changeClass(".banner-wrong", "fields-banner-active");
            }}
          >
            {navSvg(20).closeBtn}
          </div>
        </div>
        <div className="fields-banner banner-right">
          <h3>The reservation has been made</h3>
          <div
            onClick={() => {
              changeClass(".banner-right", "fields-banner-active");
            }}
          >
            {navSvg(20).closeBtn}
          </div>
        </div>
        <form className="request-form" onSubmit={handleSubmit}>
          <div className="request-select">
            <label>{requestSvg(20).bike}Select a bike</label>
            <select onChange={changeFillState} id="bikeType">
              <option>Select a bike type</option>
              {Object.keys(bikeInfo).map((key) => {
                return <option>{bikeInfo[key].name}</option>;
              })}
            </select>
          </div>
          <div className="request-select">
            <label>{requestSvg(20).location}Pick-up</label>
            <select onChange={changeFillState} id="pickUp">
              <option>Select Pick-up location</option>
              <option>Khao San</option>
              <option>Sukhumvit</option>
              <option>Siam</option>
            </select>
          </div>
          <div className="request-select">
            <label>{requestSvg(20).location}Drop-off</label>
            <select onChange={changeFillState} id="dropOff">
              <option>Select Drop-off location</option>
              <option>Khao San</option>
              <option>Sukhumvit</option>
              <option>Siam</option>
            </select>
          </div>
          <div className="request-date">
            <label for="pickDate">{requestSvg(20).calendar}Pick-up date</label>
            <input id="pickDate" type="date" onChange={changeFillState}></input>
          </div>
          <div className="request-date">
            <label for="dropDate">{requestSvg(20).calendar}Drop-off date</label>
            <input id="dropDate" type="date" onChange={changeFillState}></input>
          </div>
          <button type="submit" children="Search" value />
        </form>
      </div>
    </div>
  );
}
