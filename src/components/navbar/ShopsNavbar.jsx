import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import useToggle from "../../hooks/useToggle";
import { NavList } from "./Navbar";
import { NavHashList, NavLinkList } from "./NavList";
import CountBadge from "../cart/CountBadge";
import SearchInput from "../search/SearchInput";
import SearchPopup from "../search/SearchPopup";

import Logo from "../ui/Logo";
import IconClose from "../../assets/icons/IconClose";
import IconHamburger from "../../assets/icons/IconHamburger";
import { useStateContext } from "../../contexts/StateContext";

// nav__list for shopping pages
const NavListShop = ({ className }) => {
  const classMerged = twMerge("nav__link--shop sm:hidden", className);

  return (
    <ul className="nav__list flex items-center justify-center gap-6 sm:hidden">
      <li>
        <NavLinkList
          link="/"
          title="home"
          className={classMerged}
        ></NavLinkList>
      </li>

      <li>
        <NavLinkList
          link="/shopping"
          title="shop"
          className={classMerged}
        ></NavLinkList>
      </li>
      <li>
        <NavHashList
          href="#about"
          title="about"
          className={classMerged}
        ></NavHashList>
      </li>
      <li>
        <NavHashList
          href="#contact"
          title="contact"
          className={classMerged}
        ></NavHashList>
      </li>
    </ul>
  );
};

export const ShopsNavbar = () => {
  const {
    totalQty,
    handleShowCart,
    wishlistItems,
    handleShowWishlist,
    handleSearch,
    searchItem,
  } = useStateContext();

  const { isToggled, handleIsToggled } = useToggle();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="nav relative flex items-center justify-between gap-6"
      >
        <Logo
          styleLink="sm:hidden text-3xl shrink-0 mr-20 md:mr-10 sm:mr-3 xs:mr-2 text-primary-darkGray"
          currentColor="hsl(0, 0%, 63%)"
        />
        {/* shopping nav-list  */}
        <NavListShop className="max-w-[6em] text-primary-darkGray" />

        {/* <!-- Mobile-navigation --> */}
        <nav
          className={`${
            isToggled
              ? "sm:fixed sm:z-[200] sm:flex sm:px-8 sm:py-12"
              : "sm:hidden"
          } nav-mobile gap-x-4`}
        >
          <IconClose
            onClick={() => handleIsToggled()}
            styleCloseIcon="sm:mr-auto"
            data-message="icon to close mobile nav"
          />
          {/* // nav-list */}
          <NavList
            className="text-primary-black"
            handleIsToggled={handleIsToggled}
          />
          <div className="overlay basis-0 text-[#fff]"></div>
        </nav>

        <nav
          className={`${
            isToggled ? "sm:hidden" : "sm:flex"
          } hidden sm:gap-x-10`}
          id="hamburger-menu"
        >
          <IconHamburger
            onClick={() => handleIsToggled()}
            currenColor="hsl(0, 0%, 63%)"
          />

          <Logo currentColor="hsl(0, 0%, 63%)" />
        </nav>
        {/* mobile nav end */}

        {/* search Component */}
        <SearchInput searchItem={searchItem} handleSearch={handleSearch} />
        <SearchPopup
          toggle={showPopup}
          handleClosePopup={() => setShowPopup((prev) => !prev)}
        />

        <ul
          className={`${
            isToggled ? "sm:hidden" : "sm:flex"
          } flex max-w-[9.33em] items-center justify-between gap-[0.75rem] text-3xl text-primary-darkGray md:gap-2 sm:gap-1`}
        >
          <li>
            <AiOutlineSearch
              onClick={() => setShowPopup((prev) => !prev)}
              className="hidden shrink-0 font-thin hover:cursor-pointer lg:flex md:items-center sm:text-[1.65rem]"
            />
          </li>
          <li>
            <AiOutlineUser className="shrink-0 font-thin hover:cursor-pointer sm:text-[1.65rem]" />
          </li>
          <li className="cursor-pointer sm:mr-2" onClick={handleShowWishlist}>
            <CountBadge
              Qty={wishlistItems.length}
              icon={
                <AiOutlineHeart
                  className="shrink-0 sm:text-[1.65rem]"
                  title="wish-list"
                />
              }
            />
          </li>
          <li onClick={handleShowCart} className="cursor-pointer">
            <CountBadge
              Qty={totalQty}
              icon={
                <AiOutlineShoppingCart
                  className="shrink-0 sm:text-[1.65rem]"
                  title="cart-items"
                />
              }
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
