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
  const [errorMessage, setErrorMessage] = React.useState(
    "All fields are required",
  );

  const dialogRef = React.useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const sameValue = Object.keys(fillState).some(
      (key) => fillState[key] === defaultFillState[key],
    );
    if (sameValue) {
      setErrorMessage("All fields are required");
      changeClass(".banner-wrong", "fields-banner-active", false);
      return;
    }

    if (fillState.dropDate < fillState.pickDate) {
      setErrorMessage("Drop-off date cannot be before pick-up date.");
      changeClass(".banner-wrong", "fields-banner-active", false);
      return;
    }

    document.body.classList.add("scroll-off");
    document
      .querySelector(".banner-wrong")
      .classList.remove("fields-banner-active");

    dialogRef.current.showModal();
  }

  function changeFillState(e) {
    setFillState({ ...fillState, [e.target.id]: e.target.value });
  }

  return (
    <div id="home-request">
      <RequestMenu info={fillState} dialogRef={dialogRef} />
      <div className="request-wrapper">
        <h2>Book a bike</h2>
        <div className="fields-banner banner-wrong">
          <h3>{errorMessage}</h3>
          <div
            onClick={() => {
              changeClass(".banner-wrong", "fields-banner-active");
            }}
          >
            {navSvg(20).closeBtn}
          </div>
        </div>
        <div className="fields-banner banner-right">
          <h3>Demo completed. No reservation was made.</h3>
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
            <label htmlFor="bikeType">{requestSvg(20).bike}Select a bike</label>
            <select onChange={changeFillState} id="bikeType">
              <option>Select a bike type</option>
              {Object.keys(bikeInfo).map((key) => {
                return <option key={key}>{bikeInfo[key].name}</option>;
              })}
            </select>
          </div>
          <div className="request-select">
            <label htmlFor="pickUp">{requestSvg(20).location}Pick-up</label>
            <select onChange={changeFillState} id="pickUp">
              <option>Select Pick-up location</option>
              <option>Khao San</option>
              <option>Sukhumvit</option>
              <option>Siam</option>
            </select>
          </div>
          <div className="request-select">
            <label htmlFor="dropOff">{requestSvg(20).location}Drop-off</label>
            <select onChange={changeFillState} id="dropOff">
              <option>Select Drop-off location</option>
              <option>Khao San</option>
              <option>Sukhumvit</option>
              <option>Siam</option>
            </select>
          </div>
          <div className="request-date">
            <label htmlFor="pickDate">
              {requestSvg(20).calendar}Pick-up date
            </label>
            <input id="pickDate" type="date" onChange={changeFillState}></input>
          </div>
          <div className="request-date">
            <label htmlFor="dropDate">
              {requestSvg(20).calendar}Drop-off date
            </label>
            <input id="dropDate" type="date" onChange={changeFillState}></input>
          </div>
          <button type="submit" children="Search" value />
        </form>
      </div>
    </div>
  );
}
