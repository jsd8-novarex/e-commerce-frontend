import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className='relative flex h-dvh min-h-dvh w-dvw flex-row flex-wrap overflow-x-hidden bg-white'>
      <NavigationBar />
      <div className='flex-grow pb-8'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
