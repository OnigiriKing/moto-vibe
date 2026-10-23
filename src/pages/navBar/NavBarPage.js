import NavBar from "components/NavBar";
import DropMenu from "components/DropMenu";
import { useState } from "react";

export default function NavBarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
    document.querySelector(".nav-menu-btn").focus();
  }

  return (
    <>
      <NavBar isMenuOpen={isMenuOpen} openMenu={() => setIsMenuOpen(true)} />
      <DropMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
}
