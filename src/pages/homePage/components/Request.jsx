import { requestSvg } from "../../../svg/requestFormSvg";
import React from "react";


export function Request() {

  const [fillState, setFillState] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault();
    setFillState("empty");
  }


    return (
      <div id="home-request">
        <div className="request-wrapper">
          <h2>Book a bike</h2>
          {fillState === "empty" && (
            <div className="fields-banner">
              <h3>All fields are required</h3>
              <button></button>
            </div>
          )}
          <form className="request-form" onSubmit={handleSubmit}>
            <div className="request-select">
              <label>{requestSvg(20).bike}Select a bike</label>
              <select>
                <option>Select a bike type</option>
                <option>Honda Click</option>
                <option>Chetak Smart</option>
                <option>Scooter Sym</option>
                <option>Yadea G5S</option>
                <option>Yamaha Fazzio</option>
              </select>
            </div>
            <div className="request-select">
              <label>{requestSvg(20).location}Pick-up</label>
              <select>
                <option>Select Pick-up location</option>
                <option>Khao San</option>
                <option>Sukhumvit</option>
                <option>Siam</option>
              </select>
            </div>
            <div className="request-select">
              <label>{requestSvg(20).location}Drop-off</label>
              <select>
                <option>Select Drop-off location</option>
                <option>Khao San</option>
                <option>Sukhumvit</option>
                <option>Siam</option>
              </select>
            </div>
            <div className="request-date">
              <label for="pick-up-date">
                {requestSvg(20).calendar}Pick-up date
              </label>
              <input id="pick-up-date" type="date"></input>
            </div>
            <div className="request-date">
              <label for="drop-off-date">
                {requestSvg(20).calendar}Drop-off date
              </label>
              <input id="drop-off-date" type="date"></input>
            </div>

            <button
              type="submit"
              children="Search"
              value
            />
          </form>
        </div>
      </div>
    );
}