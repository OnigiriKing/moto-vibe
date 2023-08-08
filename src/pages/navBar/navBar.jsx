import { Link } from "react-router-dom";
import { navSvg, nameLogo } from "../../svg/navSvg";

export default function NavBar() {
  function openMenu() {
    document.querySelector(".drop-menu").classList.add("menu-open");
  }
  return (
    <nav id="nav-bar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          {nameLogo}
          {navSvg(40).logo}
        </div>
        <div className="nav-menu">
          <Link to={"/"} children="Home" />
          <Link to={"/About"} children="About" />
          <Link to={"/Models"} children="Bike Models" />
          <Link to={"/Reviews"} children="Testimonials" />
          <Link to={"/Contact"} children="Contact" />
        </div>
        <div className="login-register">
          <Link to={"/"} children="Login" />
          <Link to={"/"} children="Sign up" />
        </div>
        <div className="nav-menu-btn" onClick={() => openMenu()}>
          {navSvg(40).menuBtn}
        </div>
      </div>
    </nav>
  );
}
