import { Outlet } from "react-router-dom";
import useScrollLock from "../hook/useScrollLock";
import NavigationBar from "./navigation/NavigationBar";
import CartSidebar from "./CartSidebar";
// import Footer from "./Footer";

function Layout() {

  useScrollLock()

  return (
    <div className='relative flex h-full flex-col bg-white'>
      <NavigationBar />
      <CartSidebar/>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
