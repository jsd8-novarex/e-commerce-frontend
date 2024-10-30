import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import DesktopLeftMenu from "./DesktopLeftMenu";
import DesktopRightMenu from "./DesktopRightMenu";

type NavigationBarPropsType = {
  toggleCartSidebar: () => void;
};

function NavigationBar({ toggleCartSidebar }: NavigationBarPropsType) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className=' fixed w-full top-0 z-10'>
      <div className='relative flex items-center justify-between bg-white px-4 py-5 md:px-8'>
        <div className='block sm:hidden'>
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {isMobileMenuOpen && <MobileMenu />}
        </div>
        <DesktopLeftMenu />
        <NavLink to={"/"}>
          <h3 className='font-bold'>PANGAEA</h3>
        </NavLink>
        <DesktopRightMenu toggleCartSidebar={toggleCartSidebar} />
      </div>
    </nav>
  );
}

export default NavigationBar;
