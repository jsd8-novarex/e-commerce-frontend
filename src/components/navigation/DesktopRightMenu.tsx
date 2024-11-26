// import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
import UserButton from "./UserButton";

function DesktopRightMenu() {
  return (
    <ul className='flex items-center justify-between gap-4'>
      <li className='relative hidden sm:block'>
        {/* <NavLink to={"/sign-in"} className='p-2 uppercase text-white'>
          SignIn
        </NavLink> */}
        <UserButton />
      </li>
      <li>
        <CartButton />
      </li>
    </ul>
  );
}

export default DesktopRightMenu;
