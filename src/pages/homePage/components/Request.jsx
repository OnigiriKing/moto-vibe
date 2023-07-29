


export function Request() {


    return (
      <div id="home-request">
        <div className="request-wrapper">
          <h2>Book a bike</h2>
          <div className="request-form">
            <form>
              <div>
                <label>Select a bike</label>
                <select></select>
              </div>
              <div>
                <label>Pick-up</label>
                <select></select>
              </div>
              <div>
                <label>Drop-off</label>
                <select></select>
              </div>
              <div>
                <label>Pick-up date</label>
                <input type="date"></input>
              </div>
              <div>
                <label>Drop-off date</label>
                <input type="date"></input>
              </div>

              <button children="Search" />
            </form>
          </div>
        </div>
      </div>
    );
}