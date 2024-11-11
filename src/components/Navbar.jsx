import { useState } from "react";
import {
  NavbarLogo,
  NavbarMobileMenu,
  NavbarMobileLinks,
  NavbarDesktopLinks,
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full px-6 py-6 flex items-center justify-between border-b-2 border-b-primary tablet:px-12 laptop:px-16 laptop-l:px-28">
      <NavbarLogo />
      <NavbarMobileMenu setIsOpen={setIsOpen} />

      {isOpen && (
        <div className="fixed inset-0 bg-background bg-opacity-60 transition-opacity"></div>
      )}
      <NavbarMobileLinks isOpen={isOpen} setIsOpen={setIsOpen} />

      <NavbarDesktopLinks />
    </nav>
  );
};

export default Navbar;
