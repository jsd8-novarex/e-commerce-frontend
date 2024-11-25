type BackdropProductOptionPropsType = {
  isPageScrollLocked: boolean;
  handleScrollLock: (componentName: string, isOpen: boolean) => void;
};

function BackdropProductOption({
  isPageScrollLocked,
  handleScrollLock,
}: BackdropProductOptionPropsType) {
  return (
    <div
      onClick={() => handleScrollLock("ProductOptions", false)}
      className={`absolute inset-0 z-[11] h-full w-full bg-black/50 ${
        isPageScrollLocked ? "visible" : "invisible"
      }`}
    />
  );
}

export default BackdropProductOption;
