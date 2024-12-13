import { memo } from "react";
import { isFormatPrice } from "../../helpers/utils";

type CartSummaryPropsType = {
  totalPrice: number | undefined;
  handleLink: (path: string) => void;
};

function CartSummary({ totalPrice, handleLink }: CartSummaryPropsType) {
  return (
    <div className='flex flex-col gap-y-8 border-t-2 py-5'>
      <div className='flex justify-between px-12'>
        <div className='flex w-full flex-col gap-y-2'>
          <div className='flex w-full items-center justify-between'>
            <h3 className='font-bold'>Total</h3>
            <h3>{totalPrice && isFormatPrice(totalPrice, 2)}</h3>
          </div>
          <p>Including tax and shipping</p>
        </div>
      </div>
      <div className='flex justify-end px-4'>
        <button
          onClick={() => handleLink("/transaction")}
          className='h-12 w-40 bg-black font-bold text-white hover:bg-gray-600'
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

const CartSummaryMemo = memo(CartSummary);
export default CartSummaryMemo;
