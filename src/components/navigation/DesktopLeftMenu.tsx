import { NavLink } from "react-router-dom";
import { navigationData } from "../../constraints/NAVIGATION_DATA";

function DesktopLeftMenu() {
  return (
    <ul className='hidden sm:flex sm:justify-between sm:gap-4'>
      {navigationData
        .filter((item) => item.showOnDesktop)
        .map((item) => (
          <li key={item.order}>
            <NavLink to={item.path} className='p-4 uppercase'>
              {item.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default DesktopLeftMenu;
