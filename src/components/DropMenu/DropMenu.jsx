import { Link } from "react-router-dom";
import { navSvg } from "svg/navSvg";
import { changeClass } from "scripts/scripts";

export default function DropMenu() {
  function closeMenu() {
    return {
      onClick: function () {
        changeClass(".drop-menu", "menu-open");
      },
    };
  }

  return (
    <div className="drop-menu">
      <div className="menu-close-button" {...closeMenu()}>
        {navSvg(40).closeBtn}
      </div>
      <Link to={"/"} {...closeMenu()}>
        Home
      </Link>
      <Link to={"/About"} {...closeMenu()}>
        About
      </Link>
      <Link to={"/Models"} {...closeMenu()}>
        Bike Models
      </Link>
      <Link to={"/Reviews"} {...closeMenu()}>
        Testimonials
      </Link>
      <Link to={"/Contact"} {...closeMenu()}>
        Contact
      </Link>
      <div className="drop-menu-register">
        <Link to={"/"} children="Login" />
        <Link to={"/"} children="Sign up" />
      </div>
    </div>
  );
}
