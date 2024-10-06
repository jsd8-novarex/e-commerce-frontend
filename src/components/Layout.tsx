import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function Layout() {
  return (
    <div>
      <NavigationBar />
      <h1 className='font-bold text-red-500 md:text-blue-500'>Layout</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
