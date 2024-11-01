import { NavLink } from "react-router-dom";
import { navigationData } from "../../constraints/NAVIGATION_DATA";

function MobileMenu() {
  return (
    <ul className='absolute inset-0 -z-10 flex h-dvh w-full flex-col items-center justify-center gap-y-2 bg-white'>
      {navigationData.map((item) => (
        <li key={item.order} className='w-full text-center'>
          <NavLink to={item.path} className='block h-full w-full p-4 uppercase'>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MobileMenu;
