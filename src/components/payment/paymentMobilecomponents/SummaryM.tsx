import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import usePostCurrentCart from "../../../hook/cart/usePostCurrentCart";
import ProductInCartMemo from "../../cartSidebar/ProductInCart";
import { useCustomerStore } from "../../../store/customers/customerStore";

interface SummaryDProps {
  toggleSummary: () => void;
  isSummaryVisible: boolean;
  isPriceVisible: boolean;
}

const SummaryM: React.FC<SummaryDProps> = ({ toggleSummary, isSummaryVisible, isPriceVisible }) => {
  const navigate = useNavigate();
  const { customer } = useCustomerStore();
  const { data: cartData } = usePostCurrentCart(customer ? customer._id : "");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = cartData?.cart?.cart_item || [];

  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const handleLink = (path: string) => {
    navigate(path);
  };

  return (
    <div className='md:w-[350px] lg:w-[400px] xl:w-[500px]'>
      <button
        className='flex w-full items-center justify-between border p-4'
        onClick={toggleSummary}
      >
        <div>
          <span className='font-semibold'>SUMMARY</span>
          {isPriceVisible && totalItems > 0 && (
            <span className='ml-6'>You have {totalItems} item(s) in your cart</span>
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

          <div className='max-h-96 overflow-y-auto border border-t-0 px-4 pb-8 pt-4'>
            {totalItems === 0 ? (
              <div className='flex justify-center pt-4'>
                <button onClick={() => handleLink("/collections")} className='btn-black w-48'>
                  Your cart is empty.
                </button>
              </div>
            ) : (
              items.map((item) => <ProductInCartMemo key={item.product_choice_id} item={item} />)
            )}
          </div>
        </div>
      )}

      <div className='flex justify-between border border-t-0 p-4'>
        <span>SUBTOTAL</span>
        <span>฿{totalPrice.toFixed(2)}</span>
      </div>

      <div className='flex justify-between border border-t-0 p-4'>
        <div className='flex flex-col'>
          <span>Shipping</span>
          <span>DHL e-commerce - Standard delivery</span>
        </div>
        <div className='flex items-center'>฿0.00</div>
      </div>

      <div className='flex justify-between border border-t-0 p-4'>
        <span>TOTAL</span>
        <span>฿{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SummaryM;
