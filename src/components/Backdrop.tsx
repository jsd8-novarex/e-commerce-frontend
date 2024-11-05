type BackdropPropsType = {
  isCartSidebarOpen: boolean;
  toggleCartSidebar: () => void;
};

function Backdrop({ isCartSidebarOpen, toggleCartSidebar }: BackdropPropsType) {
  return (
    <div
      onClick={toggleCartSidebar}
      className={`absolute inset-0 z-[11] h-full w-full bg-black/50 ${isCartSidebarOpen ? "visible" : "invisible"}`}
    />
  );
}

export default Backdrop;
