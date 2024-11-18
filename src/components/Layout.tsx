import { Outlet } from "react-router-dom";
import useScrollLock from "../hook/useScrollLock";
import NavigationBar from "./navigation/NavigationBar";
import CartSidebar from "./cartSidebar/CartSidebar";
// import Footer from "./Footer";

function Layout() {
  useScrollLock();

  // const location = useLocation();
  // const isHomePage = location.pathname === "/";

  return (
    <div className='relative flex gap-y-32 h-full flex-col bg-white'>
      <NavigationBar />
      <CartSidebar />
      <Outlet />
      {/* {!isHomePage && <Footer />} */}
    </div>
  );
}

export default Layout;
