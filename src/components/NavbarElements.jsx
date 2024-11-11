import PropTypes from "prop-types";

import logo from "../assets/icons/logo.svg";
import menuHamburger from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import homeIcon from "../assets/icons/home.svg";
import listIcon from "../assets/icons/list.svg";
import movieIcon from "../assets/icons/movies.svg";
import loginIcon from "../assets/icons/login.svg";

const links = [
  { text: "Home", icon: homeIcon },
  { text: "Movies", icon: movieIcon },
  { text: "Watchlist", icon: listIcon },
  { text: "Login", icon: loginIcon },
];

export const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className="w-9 h-9 mobile-l:w-10 mobile-l:h-10"
      />
      <h1 className="text-lg font-semibold mt-[5px] mobile-l:text-xl">
        MovieDB
      </h1>
    </div>
  );
};

export const NavbarMobileMenu = ({ setIsOpen }) => {
  return (
    <div className="laptop:hidden">
      <img
        src={menuHamburger}
        alt="menu-hamburger"
        onClick={() => setIsOpen(true)}
        className="w-9 h-9 cursor-pointer mobile-l:w-11 mobile-l:h-11"
      />
    </div>
  );
};

export const NavbarMobileLinks = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-[75%] mobile-l:w-[65%] tablet:w-[45%]" : "w-[0%]"
      } bg-surface absolute right-0 top-[0] h-dvh overflow-hidden transition-[width] ease-in-out`}
    >
      <div className="px-6 py-7 w-full flex justify-end tablet:px-12">
        <img
          src={closeIcon}
          alt="close-icon"
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 cursor-pointer mobile-l:w-9 mobile-l:h-9"
        />
      </div>

      <div className="px-6 pt-14 w-full flex flex-col items-end gap-5 tablet:px-12">
        {links.map((link) => (
          <MobileLinks key={link.text} text={link.text} icon={link.icon} />
        ))}
      </div>
    </div>
  );
};

export const MobileLinks = ({ text, icon }) => {
  return (
    <div className="flex items-center justify-end gap-5 cursor-pointer w-full p-2 rounded-md active:bg-background transition-[background] duration-200 ease-in-out">
      <p className="text-lg font-semibold uppercase mobile-m:text-xl">{text}</p>
      <img
        src={icon}
        alt={`${text}-icon`}
        className="w-7 h-7 mobile-m:w-8 mobile-m:h-8"
      />
    </div>
  );
};

export const NavbarDesktopLinks = () => {
  return (
    <div className="hidden laptop:flex justify-center items-center gap-10 laptop-l:gap-16">
      {links.map((link) => (
        <DesktopLinks key={link.text} text={link.text} />
      ))}
    </div>
  );
};

export const DesktopLinks = ({ text }) => {
  return (
    <div>
      <p className="text-lg font-semibold uppercase cursor-pointer hover:text-primary transition-[color]">
        {text}
      </p>
    </div>
  );
};

NavbarMobileMenu.propTypes = {
  setIsOpen: PropTypes.func,
};

NavbarMobileLinks.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

MobileLinks.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};

DesktopLinks.propTypes = {
  text: PropTypes.string,
};
