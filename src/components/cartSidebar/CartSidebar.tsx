import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import useShoppingCartStore from "../../store/shoppingCart.store";
import { useScrollLockStore } from "../../store/scrollLock.store";
import { product_list } from "../../constraints/PRODUCT_DATA_V2";
import ProductInCart from "./ProductInCart";
import Backdrop from "../Backdrop";
import CartSummary from "./CartSummary";

function CartSidebar() {
  const navigate = useNavigate();
  const { openComponents, handleScrollLock } = useScrollLockStore();
  const cart = useShoppingCartStore((state) => state.cart);

  const isCartSidebarOpen = openComponents["CartSidebar"] || false;
  const itemLength = cart?.items.length || 0;

  const productChoiceMap = useMemo(() => {
    const map: Record<string, { price: number; quantity: number }> = {};
    product_list.forEach((product) => {
      product.product_choice.forEach((choice) => {
        map[choice.id] = { price: choice.price, quantity: choice.quantity };
      });
    });
    return map;
  }, []);

  const totalPrice = cart?.items.reduce((sum, item) => {
    const productChoice = productChoiceMap[item.product_choice_id];
    return sum + productChoice.price * item.quantity;
  }, 0);

  const handleLink = (path: string) => {
    handleScrollLock("CartSidebar", false);
    navigate(path);
  };

  return (
    <>
      <Backdrop isPageScrollLocked={isCartSidebarOpen} handleScrollLock={handleScrollLock} />
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
            {itemLength === 0 ? "Your cart is empty" : `${itemLength} item(s) in your cart`}
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
          {itemLength === 0 ? (
            <div className='flex flex-grow items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-y-8'>
                <h2>Your cart is empty </h2>
                <button onClick={() => handleLink("/collections")} className='btn-black w-48'>
                  Continue shopping
                </button>
              </div>
            </div>
          ) : (
            cart?.items.map((item) => <ProductInCart key={item.id} item={item} />)
          )}
        </div>
        {itemLength > 0 && <CartSummary totalPrice={totalPrice} handleLink={handleLink} />}
      </div>
    </>
  );
}

export default CartSidebar;
