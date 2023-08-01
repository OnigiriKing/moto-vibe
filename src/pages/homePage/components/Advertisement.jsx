import appleImg from "../../../img/apple.png"
import googleImg from "../../../img/google.png";
import phoneImg from "../../../img/phone.png";

export default function Advertisement() {
  return (
    <div id="advertisement-screen">
      <div className="advertisement-wrapper">
        <div className="advertisement-des">
          <h1>Supercharge your experience with our app</h1>
          <h4>
            Discover the joy of two-wheeled freedom with our motorbike rental
            app. Download now and let the ride of a lifetime begin!
          </h4>
        </div>
        <div className="advertisement-links">
          <a href="https://play.google.com" target="_blank" rel="noreferrer">
            <img src={appleImg} />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googleImg} />
          </a>
        </div>
      </div>
    </div>
  );
}
