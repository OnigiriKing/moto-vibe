import appleImg from "img/appImg/apple.png";
import googleImg from "img/appImg/google.png";

export default function Application() {
  return (
    <div id="app-screen">
      <div className="app-wrapper">
        <div className="app-des">
          <h1>Supercharge your experience with our app</h1>
          <h4>
            Discover the joy of two-wheeled freedom with our motorbike rental
            app. Download now and let the ride of a lifetime begin!
          </h4>
        </div>
        <div className="app-links">
          <a href="https://play.google.com" target="_blank" rel="noreferrer">
            <img src={appleImg} alt="Apple"/>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googleImg} alt="Google"/>
          </a>
        </div>
      </div>
    </div>
  );
}
