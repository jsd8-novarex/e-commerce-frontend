import Backdrop from "./Backdrop";

type CartSidebarPropsType = {
  isCartSidebarOpen: boolean;
  toggleCartSidebar: () => void;
};

function CartSidebar({ isCartSidebarOpen, toggleCartSidebar }: CartSidebarPropsType) {
  return (
    <>
      <Backdrop isCartSidebarOpen={isCartSidebarOpen} toggleCartSidebar={toggleCartSidebar} />
      <div
        className={`fixed top-0 right-0 z-[12] flex h-full w-full flex-col bg-white transition-all duration-300 sm:w-[520px] ${isCartSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className='flex items-center justify-between border-y-2 border-slate-100 p-4'>
          <h3 className='text-xl'>Your cart is empty</h3>
          <button type='button' onClick={toggleCartSidebar} className='p-2 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='flex flex-grow items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-y-8'>
            <h2>Your cart is empty </h2>
            <button className='btn-black w-48'>Continue shopping</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;