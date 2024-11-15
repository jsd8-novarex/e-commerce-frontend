type BackdropPropsType = {
  isPageScrollLocked: boolean;
  handleScrollLock: (componentName: string, isOpen: boolean) => void
};

function Backdrop({ isPageScrollLocked, handleScrollLock }: BackdropPropsType) {
  return (
    <div
      onClick={() => handleScrollLock("CartSidebar",false)}
      className={`absolute inset-0 z-[11] h-full w-full bg-black/50 ${isPageScrollLocked ? "visible" : "invisible"}`}
    />
  );
}

export default Backdrop;
