import { Link } from "react-router-dom";

export default function Application() {
  return (
    <section id="app-screen" aria-labelledby="choose-bike-heading">
      <div className="app-wrapper">
        <div className="app-des">
          <h2 id="choose-bike-heading">Choose your bike</h2>
          <p>
            Compare the models, then try the demo booking form with sample details.
          </p>
        </div>
        <div className="app-links">
          <Link
            to="/Models"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
            View bikes
          </Link>
          <Link to="/#home-request">Try booking demo</Link>
        </div>
      </div>
    </section>
  );
}
