import { Link } from "react-router-dom";
import { navSvg } from "svg/navSvg";
import { changeClass } from "scripts/scripts";

export default function DropMenu() {


  const handleClick = function () {
    changeClass(".drop-menu", "menu-open");
  };

  const commonProps = { handleClick };


  return (
    <div className="drop-menu">
      <div className="menu-close-button" {...commonProps}>
        {navSvg(40).closeBtn}
      </div>
      <Link to={"/"} {...commonProps}>
        Home
      </Link>
      <Link to={"/About"} {...commonProps}>
        About
      </Link>
      <Link to={"/Models"} {...commonProps}>
        Bike Models
      </Link>
      <Link to={"/Reviews"} {...commonProps}>
        Testimonials
      </Link>
      <Link to={"/Contact"} {...commonProps}>
        Contact
      </Link>
      <div className="drop-menu-register">
        <Link to={"/"} children="Login" />
        <Link to={"/"} children="Sign up" />
      </div>
    </div>
  );
}
