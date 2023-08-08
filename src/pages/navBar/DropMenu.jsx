import { Link } from "react-router-dom";
import { navSvg } from "../../svg/navSvg";

export default function DropMenu() {
  function closeMenu() {
    function close() {
      document.querySelector(".drop-menu").classList.remove("menu-open");
    }

    return {
      onClick: function () {
        close();
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
    </div>
  );
}
