import { Link } from "react-router-dom";
import { navSvg } from "svg/navSvg";
import { useEffect } from "react";

export default function DropMenu({ isOpen, closeMenu }) {
  useEffect(() => {
    if (isOpen) {
      document.querySelector(".menu-close-button").focus();
    }
  }, [isOpen]);

  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      inert={isOpen ? undefined : ""}
      className={`drop-menu${isOpen ? " menu-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <button
        type="button"
        className="menu-close-button"
        aria-label="Close navigation"
        onClick={closeMenu}
      >
        {navSvg(40).closeBtn}
      </button>
      <Link to={"/"} onClick={closeMenu}>
        Home
      </Link>
      <Link to={"/About"} onClick={closeMenu}>
        About
      </Link>
      <Link to={"/Models"} onClick={closeMenu}>
        Bike Models
      </Link>
      <Link to={"/Reviews"} onClick={closeMenu}>
        Testimonials
      </Link>
      <Link to={"/Contact"} onClick={closeMenu}>
        Contact
      </Link>
      <div className="drop-menu-booking">
        <Link to="/#home-request" onClick={closeMenu}>Book a bike</Link>
      </div>
    </nav>
  );
}
