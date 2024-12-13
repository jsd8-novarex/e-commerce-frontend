import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useScrollLockStore } from "../../store/scrollLock.store";
import usePostCurrentCart from "../../hook/cart/usePostCurrentCart";
import ProductInCartMemo from "./ProductInCart";
import BackdropMemo from "../Backdrop";
import CartSummaryMemo from "./CartSummary";
import { useCustomerStore } from "../../store/customers/customerStore";

function CartSidebar() {
  const navigate = useNavigate();
  const { customer } = useCustomerStore();
  const { data: cartData } = usePostCurrentCart(customer ? customer._id : "");
  const { openComponents, handleScrollLock } = useScrollLockStore();

  // const cart = useShoppingCartStore((state) => state.cart);
  const isCartSidebarOpen = openComponents["CartSidebar"] || false;
  const totalPrice = cartData?.cart.total_price || 0;
  const cartItemLength =
    cartData?.cart?.cart_item.reduce((total, item) => total + item.quantity, 0) || 0;

  const handleLink = (path: string) => {
    handleScrollLock("CartSidebar", false);
    navigate(path);
  };

  return (
    <>
      <BackdropMemo
        name='CartSidebar'
        isPageScrollLocked={isCartSidebarOpen}
        handleScrollLock={handleScrollLock}
      />
      <div
        className={clsx(
          "fixed right-0 top-0 z-[12] flex h-full w-full flex-col bg-white transition-all duration-300 sm:w-[520px]",
          {
            "translate-x-0": isCartSidebarOpen === true,
            "translate-x-full": isCartSidebarOpen === false,
          },
        )}
      >
        <div className='flex items-center justify-between border-y-2 px-5 py-4'>
          <h3 className='text-xl'>
            {cartItemLength === 0 ? "Your cart is empty" : `${cartItemLength} item(s) in your cart`}
          </h3>
          <button
            type='button'
            onClick={() => handleScrollLock("CartSidebar", false)}
            className='p-2 text-center'
          >
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
        {/* แสดงรายการสินค้า */}
        <div className='flex flex-grow flex-col gap-y-2 overflow-auto px-4 pt-4'>
          {totalPrice === 0 ? (
            <div className='flex flex-grow items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-y-8'>
                <h2>Your cart is empty </h2>
                <button onClick={() => handleLink("/collections")} className='btn-black w-48'>
                  Continue shopping
                </button>
              </div>
            </div>
          ) : (
            cartData &&
            cartData.cart.cart_item.map((item) => <ProductInCartMemo key={item.id} item={item} />)
          )}
        </div>
        {totalPrice > 0 && <CartSummaryMemo totalPrice={totalPrice} handleLink={handleLink} />}
      </div>
    </>
  );
}

export default CartSidebar;
