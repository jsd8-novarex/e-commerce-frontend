import { NavLink } from "react-router-dom";
import { navigationData } from "../../constraints/NAVIGATION_DATA";

function DesktopLeftMenu() {
  return (
    <ul className='hidden items-center sm:flex sm:justify-between sm:gap-x-2 md:gap-x-4'>
      <li className=" hidden lg:block">
        <NavLink to={"/"}>
          <h3 className='font-bold uppercase text-white'>Shining</h3>
        </NavLink>
      </li>
      {navigationData
        .filter((item) => item.showOnDesktop)
        .map((item) => (
          <li key={item.order}>
            <NavLink
              to={`${item.path}?gender=${item.name.toLowerCase()}`}
              className='p-2 uppercase text-white'
            >
              {item.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default DesktopLeftMenu;
