import { memo } from "react";

type BackdropPropsType = {
  name: string
  isPageScrollLocked: boolean;
  handleScrollLock: (componentName: string, isOpen: boolean) => void;
};

function Backdrop({ name, isPageScrollLocked, handleScrollLock }: BackdropPropsType) {
  return (
    <div
      onClick={() => handleScrollLock(name, false)}
      className={`absolute inset-0 z-[11] h-full w-full bg-black/50 ${isPageScrollLocked ? "visible" : "invisible"}`}
    />
  );
}

const BackdropMemo = memo(Backdrop);
export default BackdropMemo;
