import { useNavigate } from "react-router-dom";
import Backdrop from "./Backdrop";
import useShoppingCartStore from "../store/shoppingCart.store";
import ProductInCart from "./ProductInCart";

type CartSidebarPropsType = {
  isCartSidebarOpen: boolean;
  toggleCartSidebar: () => void;
};

function CartSidebar({ isCartSidebarOpen, toggleCartSidebar }: CartSidebarPropsType) {
  const navigate = useNavigate();
  const { cart, removeProductFromCart } = useShoppingCartStore();
  const itemLength = cart?.items.length;

  const handleLink = (path: string) => {
    toggleCartSidebar();
    navigate(path);
  };

  //function คำนวณราคาทั้งหมด
  // const totalPrice = cart?.items.reduce((total, item) => {
  //   // รวมราคาของสินค้าทั้งหมด (ราคาของสินค้าคูณกับจำนวน)
  //   const itemTotal = (typeof item.price === 'number' ? item.price : 0) * item.quantity;
  //   return total + itemTotal;
  // }, 0);

  return (
    <>
      <Backdrop isCartSidebarOpen={isCartSidebarOpen} toggleCartSidebar={toggleCartSidebar} />
      <div
        className={`fixed right-0 top-0 z-[12] flex h-full w-full flex-col bg-white transition-all duration-300 sm:w-[520px] ${isCartSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className='flex items-center justify-between border-y-2 border-slate-100 p-4'>
          <h3 className='text-xl'>
            {itemLength === 0 ? "Your cart is empty" : `${itemLength} item(s) in your cart`}
          </h3>
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

        {/* แสดงรายการสินค้า */}
        <div className='flex flex-grow flex-col overflow-auto'>
          {itemLength === 0 ? (
            <div className='flex flex-grow items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <h2>Your cart is empty </h2>
                <button onClick={() => handleLink("/collections")} className='btn-black w-48'>
                  Continue shopping
                </button>
              </div>
            </div>
          ) : (
            cart?.items.map((item) => (
              <ProductInCart item={item} removeProductFromCart={removeProductFromCart} />
            ))
          )}
        </div>

        {/* คำนวณราคา */}
        <div className='border-t-2'>
          <div className='flex justify-between p-5'>
            <div>
              <h4>Total</h4>
              <p>Including tax and shipping</p>
            </div>
            <div>{/* <h4>${totalPrice}</h4> */}</div>
          </div>
          <div className='flex justify-around p-5'>
            <button
              onClick={() => handleLink("/transaction")}
              className='h-12 w-40 bg-black text-white hover:bg-gray-600'
            >
              View shopping cart
            </button>
            <button
              onClick={() => handleLink("/payment")}
              className='h-12 w-40 bg-black text-white hover:bg-gray-600'
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;