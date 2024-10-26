import { NavLink } from "react-router-dom";
import { navigationData } from "../constraints/NAVIGATION_DATA";

function NavigationBar() {
  return (
    <header className='sticky top-0 z-30 flex w-dvw items-center justify-between bg-white/95 p-5'>
      <div className='block sm:hidden'>
        <button type='button'>x</button>
      </div>
      <ul className='hidden sm:flex sm:justify-between sm:gap-4'>
        {navigationData.map((item) => (
          <li key={item.order}>
            <NavLink to={item.path} className='p-4 uppercase'>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink to={"/"}>
        <h3 className='font-bold'>PANGAEA</h3>
      </NavLink>
      <ul className='flex justify-between gap-4'>
        <li className='hidden sm:block'>
          <NavLink to={"/sign-in"} className='p-4'>
            LOGIN
          </NavLink>
        </li>
        <li>
          <button type='button'>CART</button>
        </li>
      </ul>
    </header>
  );
}

export default NavigationBar;
