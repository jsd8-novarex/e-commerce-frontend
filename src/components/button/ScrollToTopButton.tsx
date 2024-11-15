import clsx from "clsx";
import { useEffect, useState } from "react";
// import { ComponentPropsWithRef } from "react";
// type ScrollToTopButtonPropsType = Omit<ComponentPropsWithRef<"button">, "className">;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={clsx(
        "btn btn-circle fixed bottom-4 right-2 z-[5] bg-black/75 hover:bg-black/75 sm:right-4 lg:right-6 transition-all",
        { flex: isVisible, hidden: !isVisible },
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4 text-white'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
