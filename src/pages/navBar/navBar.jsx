import { Link } from "react-router-dom";
import { navSvg } from "../../svg/navSvg";

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <h3>
            M<p>o</p>t<p>o</p>
          </h3>
          <h3>Vibe</h3>
          {navSvg("#3F84E5", 40).logo}
        </div>
        <div className="nav-menu">
          <Link to={"/"} children="Home" />
          <Link to={"/About"} children="About" />
          <Link to={"/Models"} children="Bike Models" />
          <Link to={"/Reviews"} children="Testimonials" />
          <Link to={"/Contact"} children="Contact" />
        </div>
        <div className="login-register">
          <Link to={"/"} children="Sign up" />
          <Link to={"/"} children="Register" />
        </div>
      </div>
    </nav>
  );
}
