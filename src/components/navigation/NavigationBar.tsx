import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import DesktopLeftMenu from "./DesktopLeftMenu";
import DesktopRightMenu from "./DesktopRightMenu";
import clsx from "clsx";

type NavigationBarPropsType = {
  toggleCartSidebar: () => void;
};

function NavigationBar({ toggleCartSidebar }: NavigationBarPropsType) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isHome = location.pathname === "/";

  return (
    <nav className='fixed top-0 z-10 w-full'>
      <div
        className={clsx("relative flex items-center justify-between px-4 py-5 md:px-8", {
          "bg-transparent": isHome === true,
          "bg-black": isHome === false,
        })}
      >
        <div className='block sm:hidden'>
          <div className='block h-10 w-10 sm:hidden' />
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {isMobileMenuOpen && <MobileMenu />}
        </div>
        <DesktopLeftMenu />
        <NavLink to={"/"}>
          <h3 className='font-bold uppercase text-white'>Shining</h3>
        </NavLink>
        <DesktopRightMenu toggleCartSidebar={toggleCartSidebar} />
      </div>
    </nav>
  );
}

export default NavigationBar;
