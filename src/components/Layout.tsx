import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar";
import CartSidebar from "./CartSidebar";
// import Footer from "./Footer";

function Layout() {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isCartSidebarOpen) {
      document.body.style.overflowY = "hidden ";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isCartSidebarOpen]);

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen((prev) => !prev);
  };

  return (
    <div className='relative flex h-full flex-col bg-white'>
      <NavigationBar toggleCartSidebar={toggleCartSidebar} />
      <CartSidebar isCartSidebarOpen={isCartSidebarOpen} toggleCartSidebar={toggleCartSidebar} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
