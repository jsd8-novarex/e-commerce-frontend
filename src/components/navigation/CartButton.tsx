import useCartStore from "../../store/cartItems.store";
import { useScrollLockStore } from "../../store/scrollLock.store";

function CartButton() {
  const handleScrollLock = useScrollLockStore((state) => state.handleScrollLock)
  const items = useCartStore((state) => state.items);
  const isItems = items.length > 0;

  return (
    <button type='button' className='indicator p-2' onClick={() => handleScrollLock(true)}>
      {isItems && (
        <span className='absolute left-5 top-0.5 rounded-full bg-red-700 px-1.5 py-0.5 text-[0.57rem] text-white'>
          {items.length ? "99+" : items.length}
        </span>
      )}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='size-6 text-white'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
        />
      </svg>
    </button>
  );
}

export default CartButton;
