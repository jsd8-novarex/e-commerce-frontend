type BackdropPropsType = {
  isPageScrollLocked: boolean;
  handleScrollLock: (isScrollLocked: boolean) => void;
};

function Backdrop({ isPageScrollLocked, handleScrollLock }: BackdropPropsType) {
  return (
    <div
      onClick={() => handleScrollLock(false)}
      className={`absolute inset-0 z-[11] h-full w-full bg-black/50 ${isPageScrollLocked ? "visible" : "invisible"}`}
    />
  );
}

export default Backdrop;
