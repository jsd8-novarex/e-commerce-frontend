import React from "react";
import { useNavigate } from "react-router-dom";
import useShoppingCartStore from "../../../store/shoppingCart.store";
import ProductInCart from "../../ProductInCart";
import { product_list } from "../../../constraints/PRODUCT_DATA_V2";

interface SummaryDProps {
  toggleSummary: () => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  isSummaryVisible: boolean;
  isPriceVisible: boolean;
}

const SummaryD: React.FC<SummaryDProps> = ({ toggleSummary, isSummaryVisible, isPriceVisible }) => {
  const navigate = useNavigate();
  const { cart, removeProductFromCart } = useShoppingCartStore();
  const items = cart?.items || [];

  const totalPrice = items.reduce((total, item) => {
    const productData = product_list.find(
      (product) => product.product_choice[0].id === item.product_choice_id,
    );
    const itemPrice = productData?.product_choice[0].price || 0;
    return total + itemPrice * item.quantity;
  }, 0);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const handleLink = (path: string) => {
    navigate(path);
  };

  return (
    <div className='ml-4 md:w-[350px] lg:w-[400px] xl:w-[500px]'>
      <button
        className='flex w-full items-center justify-between border p-4'
        onClick={toggleSummary}
      >
        <div>
          <span className='font-semibold'>SUMMARY</span>
          {isPriceVisible && totalItems > 0 && (
            <span className='ml-6'>${totalPrice.toFixed(2)}</span>
          )}
        </div>
        <div>
          <span>{isSummaryVisible ? "▲" : "▼"}</span>
        </div>
      </button>

      {isSummaryVisible && (
        <div>
          <div className='border border-t-0 p-4'>
            <div>You have {totalItems} item(s) in your cart</div>
          </div>

          <div className='border border-t-0 px-4 pb-8 pt-4'>
            {totalItems === 0 ? (
              <div className='flex justify-center pt-4'>
                <button onClick={() => handleLink("/collections")} className='btn-black w-48'>
                  Your cart is empty.
                </button>
              </div>
            ) : (
              items.map((item) => (
                <ProductInCart
                  key={item.product_choice_id}
                  item={item}
                  removeProductFromCart={removeProductFromCart}
                />
              ))
            )}
          </div>
        </div>
      )}

      <div className='flex justify-between border border-t-0 p-4'>
        <span>SUBTOTAL</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <div className='flex justify-between border border-t-0 p-4'>
        <div className='flex flex-col'>
          <span>Shipping</span>
          <span>DHL e-commerce - Standard delivery</span>
        </div>
        <div className='flex items-center'>$0.00</div>
      </div>

      <div className='flex justify-between border border-t-0 p-4'>
        <span>TOTAL</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SummaryD;
