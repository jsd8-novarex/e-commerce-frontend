import { NavLink, useNavigate } from "react-router-dom";
import { navigationData } from "../../constraints/NAVIGATION_DATA";
import { useScrollLockStore } from "../../store/scrollLock.store";
import { useEffect, useState } from "react";

function MobileMenu() {
  const { handleScrollLock } = useScrollLockStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/sign-in");
  };

  const authenticatedNavigationData = [
    ...navigationData.filter((item) => item.name !== "Sign in"),
    {
      order: 5,
      name: "Profile",
      path: "/profile",
      showOnDesktop: false,
    },
    {
      order: 6,
      name: "Order",
      path: "/transaction",
      showOnDesktop: false,
    },
    {
      order: 7,
      name: "Sign Out",
      path: "/sign-in",
      showOnDesktop: false,
    },
  ];

  const unauthenticatedNavigationData = [
    ...navigationData.filter(
      (item) => item.name !== "Profile" && item.name !== "Order" && item.name !== "Sign Out",
    ),
  ];

  const menuData = isAuthenticated ? authenticatedNavigationData : unauthenticatedNavigationData;

  return (
    <div className='absolute inset-0 z-[1] h-dvh w-full'>
      <ul className='flex h-full w-full flex-col items-center justify-center gap-y-2 bg-white'>
        {menuData.map((item) => (
          <li key={item.order} className='w-full text-center'>
            <NavLink
              to={item.name === "Woman" || item.name === "Man"
                ? `${item.path}?gender=${item.name.toLowerCase()}`
                : item.path
              }
              className='block h-full w-full p-4 uppercase'
              onClick={() => {
                handleScrollLock("MobileMenu", false);
                // ถ้าเป็น "Sign Out", เรียก handleSignOut แทน
                if (item.name === "Sign Out") {
                  handleSignOut();
                }
              }}
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
