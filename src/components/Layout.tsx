import { Outlet, useLocation } from "react-router-dom";
import useScrollLock from "../hook/useScrollLock";
import NavigationBar from "./navigation/NavigationBar";
import CartSidebar from "./cartSidebar/CartSidebar";
import Footer from "./Footer";
import BackdropProductOption from "./BackdropProductOption";
import { useScrollLockStore } from "../store/scrollLock.store";

function Layout() {
  useScrollLock();

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { openComponents, handleScrollLock } = useScrollLockStore();

  const isBackdropVisible = openComponents["ProductOptions"] || false;

  return (
    <div className='relative flex h-full flex-col gap-y-32 bg-white'>
      <NavigationBar />
      <CartSidebar />
      {isBackdropVisible && (
        <BackdropProductOption isPageScrollLocked={true} handleScrollLock={handleScrollLock} />
      )}
      <Outlet />
      {!isHomePage && <Footer />}
    </div>
  );
}

export default Layout;
