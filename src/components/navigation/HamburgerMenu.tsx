type HamburgerMenuPropsType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: HamburgerMenuPropsType) {
  return (
    <label
      htmlFor='hamburgerMenu'
      className='absolute left-4 top-6 z-[12] flex cursor-pointer flex-col p-2'
    >
      <input
        id='hamburgerMenu'
        type='checkbox'
        checked={isMobileMenuOpen}
        onChange={() => setIsMobileMenuOpen((perv) => !perv)}
        className='peer hidden'
      />
      <span className='hamburger-span w-2.5 origin-bottom peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:rotate-45 peer-checked:bg-black' />
      <span className='hamburger-span w-5 origin-top peer-checked:-rotate-45 peer-checked:bg-black' />
      <span className='hamburger-span w-3 origin-bottom peer-checked:w-1/2 peer-checked:-translate-y-[4px] peer-checked:translate-x-[7px] peer-checked:rotate-45 peer-checked:bg-black' />
    </label>
  );
}

export default HamburgerMenu;
