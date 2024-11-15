import React from "react";
interface SummaryDProps {
  toggleSummary: () => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  isSummaryVisible: boolean;
  isPriceVisible: boolean;
  quantity: number;
}

const SummaryD: React.FC<SummaryDProps> = ({
  toggleSummary,
  increaseQuantity,
  decreaseQuantity,
  isSummaryVisible,
  isPriceVisible,
  quantity,
}) => {
  return (
    <>
      <div className='ml-4 md:w-[350px] lg:w-[400px] xl:w-[500px]'>
        <button
          className='flex w-full items-center justify-between border p-4'
          onClick={toggleSummary}
        >
          <div>
            <span className='font-semibold'>SUMMARY</span>
            {isPriceVisible && <span className='ml-6'>${1000 * quantity}</span>}
          </div>
          <div>
            <span>{isSummaryVisible ? "▲" : "▼"}</span>
          </div>
        </button>

        {isSummaryVisible && (
          <div>
            <div className='border border-t-0 p-4'>
              <div>You have {quantity} item(s) in your cart</div>
            </div>

            <div className='flex border border-t-0 p-4'>
              <div>
                <img
                  src='https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
                  alt='product_in_Cart'
                  className='h-24 w-24'
                />
              </div>
              <div className='ml-4 w-full'>
                <div className='flex justify-between'>
                  <p>Pepe</p>
                  <button>X</button>
                </div>
                <p>Ref.1234</p>
                <div className='flex justify-between'>
                  <span>
                    {quantity > 1 && <button onClick={decreaseQuantity}>-</button>}
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                  </span>
                  <p>$1000</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='flex justify-between border border-t-0 p-4'>
          <span>SUBTOTAL</span>
          <span>${1000 * quantity}</span>
        </div>

        <div className='flex justify-between border border-t-0 p-4'>
          <div className='flex flex-col'>
            <span>Shipping</span>
            <span>DHL e-commerce-Standard delivery</span>
          </div>
          <div className='flex items-center'>$0.00</div>
        </div>
        <div className='flex justify-between border border-t-0 p-4'>
          <span>TOTAL</span>
          <span>${1000 * quantity}</span>
        </div>
      </div>
    </>
  );
};

export default SummaryD;
