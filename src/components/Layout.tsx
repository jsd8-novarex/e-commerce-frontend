import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar";
import CartSidebar from "./CartSidebar";
import { useScrollLockStore } from "../store/scrollLock.store";
// import Footer from "./Footer";

function Layout() {
  const isPageScrollLocked = useScrollLockStore((state) => state.isPageScrollLocked);

  useEffect(() => {
    if (isPageScrollLocked) {
      document.body.style.overflowY = "hidden ";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isPageScrollLocked]);

  return (
    <div className='relative flex h-full flex-col bg-white'>
      <NavigationBar />
      <CartSidebar isCartSidebarOpen={isPageScrollLocked} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
