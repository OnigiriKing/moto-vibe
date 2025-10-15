import { Link } from "react-router-dom";
import { navSvg } from "svg/navSvg";
import { changeClass } from "scripts/scripts";

export default function DropMenu() {


  const handleClick = function () {
    changeClass(".drop-menu", "menu-open");
  };



  return (
    <div className="drop-menu">
      <div className="menu-close-button" onClick={handleClick}>
        {navSvg(40).closeBtn}
      </div>
      <Link to={"/"} onClick={handleClick}>
        Home
      </Link>
      <Link to={"/About"} onClick={handleClick}>
        About
      </Link>
      <Link to={"/Models"} onClick={handleClick}>
        Bike Models
      </Link>
      <Link to={"/Reviews"} onClick={handleClick}>
        Testimonials
      </Link>
      <Link to={"/Contact"} onClick={handleClick}>
        Contact
      </Link>
      <div className="drop-menu-register">
        <Link to={"/"} children="Login" />
        <Link to={"/"} children="Sign up" />
      </div>
    </div>
  );
}
