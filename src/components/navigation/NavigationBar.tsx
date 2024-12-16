import { useLocation } from "react-router-dom";
import { useScrollLockStore } from "../../store/scrollLock.store";
import clsx from "clsx";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import DesktopLeftMenu from "./DesktopLeftMenu";
import DesktopRightMenu from "./DesktopRightMenu";
import SearchBar from "../search/SearchBar";

function NavigationBar() {
  const location = useLocation();
  const { openComponents, handleScrollLock } = useScrollLockStore();

  const isMobileMenuOpen = openComponents["MobileMenu"] || false;
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
          <HamburgerMenu isMobileMenuOpen={isMobileMenuOpen} handleScrollLock={handleScrollLock} />
          {isMobileMenuOpen && <MobileMenu />}
        </div>
        <DesktopLeftMenu />
        <SearchBar />
        <DesktopRightMenu />
      </div>
    </nav>
  );
}

export default NavigationBar;
