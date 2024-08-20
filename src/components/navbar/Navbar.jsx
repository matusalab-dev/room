import { twMerge } from "tailwind-merge";

import { NavHashList, NavLinkList } from "./NavList";
import Logo from "../ui/Logo";
import useToggle from "../../hooks/useToggle";

import IconClose from "../../assets/icons/IconClose";
import IconHamburger from "../../assets/icons/IconHamburger";

// nav__list for home pages
export const NavList = ({ className, handleIsToggled }) => {
  const classMerged = twMerge("nav-list ", className);

  return (
    <ul className="nav__list flex gap-6">
      <li>
        <NavLinkList
          link="/"
          title="home"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavLinkList>
      </li>
      <li>
        <NavLinkList
          link="../shopping"
          title="shop"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavLinkList>
      </li>
      <li>
        <NavHashList
          href="#about"
          title="about"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavHashList>
      </li>
      <li>
        <NavHashList
          href="#about"
          title="contact"
          className={classMerged}
          onClick={handleIsToggled}
        ></NavHashList>
      </li>
    </ul>
  );
};

export const Navbar = ({ className }) => {
  const { isToggled, handleIsToggled } = useToggle();

  return (
    <>
      {/* <!-- the  left section of the desktop design --> */}
      <nav className={`${className} nav nav-desktop hide-mobile items-center`}>
        <Logo styleLink="mr-10" />

        <NavList />
      </nav>

      {/* <!-- Mobile-navigation --> */}
      <nav
        className={`${
          isToggled
            ? "show-mobile sm:fixed sm:z-[200] sm:justify-between"
            : "hide-mobile"
        } nav-mobile gap-x-4`}
      >
        <IconClose
          onClick={() => handleIsToggled()}
          data-message="icon to close mobile nav"
        />
        {/* // nav-list */}
        <NavList
          className="text-primary-black"
          handleIsToggled={handleIsToggled}
        />
        <div className="overlay"></div>
      </nav>

      <nav
        className={`${isToggled ? "hide-mobile" : "show-mobile"} hide`}
        id="hamburger-menu"
      >
        <IconHamburger
          onClick={() => handleIsToggled()}
          styleHamburgerIcon="mr-[30%]"
          currenColor="hsl(0, 0%, 100%)"
        />
        <Logo />
      </nav>
    </>
  );
};
