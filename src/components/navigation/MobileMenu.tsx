import { NavLink } from "react-router-dom";
import { navigationData } from "../../constraints/NAVIGATION_DATA";
import { useScrollLockStore } from "../../store/scrollLock.store";

function MobileMenu() {
  const { handleScrollLock } = useScrollLockStore();

  return (
    <div className='absolute inset-0 z-[1] h-dvh w-full'>
      <ul className='flex h-full w-full flex-col items-center justify-center gap-y-2 bg-white'>
        {navigationData.map((item) => (
          <li key={item.order} className='w-full text-center'>
            <NavLink
              to={
                item.name === "Woman" || item.name === "Man"
                  ? `${item.path}?gender=${item.name.toLowerCase()}`
                  : item.path
              }
              className='block h-full w-full p-4 uppercase'
              onClick={() => handleScrollLock("MobileMenu", false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
