import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <header className='sticky top-0 z-20 flex w-dvw items-center justify-between bg-white/95 p-5'>
      <ul className='flex justify-between gap-4'>
        <li>
          <NavLink to={"/collections"}>WOMAN</NavLink>
        </li>
        <li>
          <NavLink to={"/collections"}>MAN</NavLink>
        </li>
      </ul>
      <h3 className='font-bold'>PANGAEA</h3>
      <ul className='flex justify-between gap-4'>
        <li>
          <NavLink to={"/sign-in"}>LOGIN</NavLink>
        </li>
        <li>
          <span>CART</span>
        </li>
      </ul>
    </header>
  );
}

export default NavigationBar;
