


export function Request() {


    return (
      <div id="home-request">
        <div className="request-wrapper">
          <h2>Book a bike</h2>
          <form className="request-form">
            <div className="request-select">
              <label>Select a bike</label>
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
              <label>Pick-up</label>
              <select>
                <option>Select Pick-up location</option>
                <option>Khao San</option>
                <option>Sukhumvit</option>
                <option>Siam</option>
              </select>
            </div>
            <div className="request-select">
              <label>Drop-off</label>
              <select>
                <option>Select Drop-off location</option>
                <option>Khao San</option>
                <option>Sukhumvit</option>
                <option>Siam</option>
              </select>
            </div>
            <div className="request-date">
              <label>Pick-up date</label>
              <input type="date"></input>
            </div>
            <div className="request-date">
              <label>Drop-off date</label>
              <input type="date"></input>
            </div>

            <button type="submit" children="Search" />
          </form>
        </div>
      </div>
    );
}