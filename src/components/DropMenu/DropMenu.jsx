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
      <Link to={"/"} children="Home" {...closeMenu()} />
      <Link to={"/About"} children="About" {...closeMenu()} />
      <Link to={"/Models"} children="Bike Models" {...closeMenu()} />
      <Link to={"/Reviews"} children="Testimonials" {...closeMenu()} />
      <Link to={"/Contact"} children="Contact" {...closeMenu()} />
      <div className="drop-menu-register">
        <Link to={"/"} children="Login" />
        <Link to={"/"} children="Sign up" />
      </div>
    </div>
  );
}
