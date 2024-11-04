import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutDesktop() {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isPriceVisible, setIsPriceVisible] = useState(true);

  const toggleSummary = () => {
    setIsSummaryVisible(!isSummaryVisible);
    setIsPriceVisible(!isPriceVisible);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/payment");
  };

  return (
    <>
      <section className='hidden md:block'>
        <div className='mt-16 flex w-full justify-center'>
          <div className='w-2/4'>
            <div className='flex justify-between border p-4'>
              <h2>Account</h2>
              <div>
                <span>email@gmail.com</span>
              </div>
            </div>

            <div>
              <div className='mt-4 flex border p-4'>
                <div>Delivery</div>
              </div>
              <div className='flex border border-t-0 p-4'>
                <div>Shipping address</div>
              </div>
              <div className='flex justify-between border border-t-0 p-4'>
                <div className='flex flex-col'>
                  <span>Mr.name</span>
                  <span>Address</span>
                  <span>Tel.</span>
                </div>
                <div>
                  <button>edit</button>
                </div>
              </div>
            </div>

            <div className='flex justify-center border p-2 underline'>
              <button>+ Add an address</button>
            </div>
            <div className='flex border p-4'>
              <p>Shipping method</p>
            </div>
            <div className='flex justify-between border p-4'>
              <div>
                <span>DHL e-commerce-Standard delivery</span>
              </div>
              <div>$ 0.00</div>
            </div>
            <div className='flex justify-center border p-4'>
              <button className='bg-black px-16 py-4 text-white' onClick={handleContinue}>
                Continue
              </button>
            </div>
            <div className='mt-4 flex border p-4'>
              <div>Payment</div>
            </div>
          </div>

          <div className='ml-4 w-1/4'>
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

            <div className='flex justify-between border p-4'>
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
        </div>
      </section>
    </>
  );
}

export default CheckoutDesktop;
