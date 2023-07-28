import { Link } from "react-router-dom";
import { navSvg, nameLogo } from "../../svg/navSvg";


export default function NavBar() {
  return (
    <nav id="nav-bar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          {nameLogo}
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
