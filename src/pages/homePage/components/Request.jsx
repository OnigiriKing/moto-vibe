


export function Request() {


    return (
      <div id="home-request">
        <div className="request-wrapper">
          <h2>Book a bike</h2>
          <form className="request-form">
            <div className="request-select">
              <label>Select a bike</label>
              <select></select>
            </div>
            <div className="request-select">
              <label>Pick-up</label>
              <select></select>
            </div>
            <div className="request-select">
              <label>Drop-off</label>
              <select></select>
            </div>
            <div className="request-date">
              <label>Pick-up date</label>
              <input type="date"></input>
            </div>
            <div className="request-date">
              <label>Drop-off date</label>
              <input type="date"></input>
            </div>

            <button children="Search" />
          </form>
        </div>
      </div>
    );
}