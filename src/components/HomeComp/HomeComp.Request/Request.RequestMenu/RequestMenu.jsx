import { navSvg } from "svg/navSvg";
import { requestSvg } from "svg/requestFormSvg";
import React from "react";
import bikeInfo from "common/utils/bikeInfo";
import { changeClass } from "scripts/scripts";

function InputField({ name, holder, type = "text", min }) {
  const id = name.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="request-input-field">
      <h4>
        <label htmlFor={id}>{name}</label>
      </h4>
      <input
        id={id}
        name={id}
        className="input-field-style"
        placeholder={holder}
        type={type}
        min={min}
        required
      />
    </div>
  );
}

export default function RequestMenu({ info, dialogRef }) {
  const [bikeImg, setBikeImg] = React.useState("");
  const [times, setTimes] = React.useState({ pickTime: "", dropTime: "" });
  const [timeError, setTimeError] = React.useState("");

  React.useEffect(() => {
    Object.keys(bikeInfo).forEach((key) => {
      if (bikeInfo[key].name === info.bikeType) {
        setBikeImg(bikeInfo[key].img);
      }
    });
  }, [info.bikeType]);

  function closeMenu(e = "") {
    dialogRef.current.close();

    if (e === "reserved") {
      changeClass(".banner-right", "fields-banner-active", false);
    }
  }
  function handleDialogClose() {
    document.body.classList.remove("scroll-off");
    setTimeError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (info.pickDate === info.dropDate && times.dropTime <= times.pickTime) {
      setTimeError(
        "Drop-off time must be later than pick-up time on the same day.",
      );
      event.currentTarget.elements.dropTime.focus();
      return;
    }
    closeMenu("reserved");
  }

  function handleTimeChange(event) {
    setTimes({ ...times, [event.target.name]: event.target.value });
    setTimeError("");
  }

  return (
    <>
      <dialog
        ref={dialogRef}
        className="request-menu-screen"
        aria-labelledby="reservation-title"
        onClose={handleDialogClose}
      >
        <form className="request-menu-des" onSubmit={handleSubmit}>
          <div className="request-menu-wrapp">
            <div className="request-menu-top">
              <h2 id="reservation-title">DEMO RESERVATION</h2>
              <button
                type="button"
                aria-label="Close reservation"
                onClick={() => closeMenu()}
              >
                {navSvg(25).closeBtn}
              </button>
            </div>
          </div>
          <div className="request-menu-wrapp">
            <div className="request-menu-mid">
              <h3>Try the booking form</h3>
              <p>
                Use sample details to try this frontend demo. No booking is
                saved and no confirmation email is sent.
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
                  {timeError && (
                    <p id="booking-time-error" role="alert">
                      {timeError}
                    </p>
                  )}
                  <div className="location-info">
                    {requestSvg(20).calendar}
                    <div>
                      <h3>Pick-Up Date & Time</h3>
                      <p>
                        {info.pickDate} /{" "}
                        <input
                          type="time"
                          name="pickTime"
                          aria-label="Pick-up time"
                          value={times.pickTime}
                          onChange={handleTimeChange}
                          required
                        />
                      </p>
                    </div>
                  </div>
                  <div className="location-info">
                    {requestSvg(20).calendar}
                    <div>
                      <h3>Drop-Off Date & Time</h3>
                      <p>
                        {info.dropDate} /{" "}
                        <input
                          type="time"
                          name="dropTime"
                          aria-label="Drop-off time"
                          aria-invalid={Boolean(timeError)}
                          aria-describedby={
                            timeError ? "booking-time-error" : undefined
                          }
                          value={times.dropTime}
                          onChange={handleTimeChange}
                          required
                        />
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
                  <img src={bikeImg} alt={info.bikeType} />
                </div>
              </div>
              <div className="menu-main-info">
                <h3>Personal Information</h3>
                <div className="main-info-personal">
                  <InputField
                    name="First Name"
                    holder="Enter your first name"
                  />
                  <InputField name="Last Name" holder="Enter your last name" />
                  <InputField
                    name="Phone Number"
                    holder="Enter your phone number"
                    type="tel"
                  />
                  <InputField name="Age" holder="18" type="number" min="18" />
                </div>
                <div className="main-info-mail">
                  <InputField
                    name="Email"
                    holder="Enter your Email"
                    type="email"
                  />
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
                  <input id="booking-updates" type="checkbox" />
                  <label htmlFor="booking-updates">
                    Please send me latest news and updates
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="request-menu-wrapp">
            <div className="menu-main-complete">
              <button type="submit">Complete demo</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
