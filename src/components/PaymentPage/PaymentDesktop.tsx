import { useState } from "react";

const PaymentDesktop: React.FC = () => {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const [isCreditCard, setIsCreditCard] = useState(false);

  const toggleSummary = () => {
    setIsSummaryVisible(!isSummaryVisible);
    setIsPriceVisible(!isPriceVisible);
  };

  const togglePaymentmethod = () => {
    setIsCreditCard(!isCreditCard);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section className='hidden h-full w-full md:block'>
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
                <div>
                  <button>edit</button>
                </div>
              </div>
              <div className='flex border border-t-0 p-4'>
                <strong>Delivery address</strong>
              </div>
              <div className='flex flex-col justify-between border border-t-0 p-4'>
                <div>
                  <strong>Delivery address</strong>
                </div>
                <div className='flex'>
                  <div className='mr-6 flex flex-col'>
                    <span>Mr.name</span>
                    <span>Address</span>
                    <span>Tel.</span>
                  </div>
                  <div>
                    <div>
                      <p>Shipping method</p>
                      <span>DHL e-commerce-Standard delivery</span>
                      <span>$ 0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 border p-4'>
              <div>Payment</div>
            </div>
            <div className='border p-4'>
              <div className='flex justify-between border-b-2 pb-4'>
                <span>Billing address</span>
                <button>edit</button>
              </div>

              <div className='flex flex-col pt-4'>
                <span>Mr.name</span>
                <span>Address</span>
                <span>Tel.</span>
              </div>
            </div>
            <div className='border p-4'>
              <input type='checkbox' />
              <label htmlFor='Full tax invoice requested' className='ml-2'>
                Full tax invoice requested
              </label>
            </div>
            <div className='border p-4'>
              <div>
                <p>
                  <strong>Payment methods</strong>
                </p>
                <p>Please select your payment method</p>
              </div>

              <div className='border p-4'>
                <div className='flex justify-between'>
                  <div>
                    <input type='radio' checked={isCreditCard} onClick={togglePaymentmethod} />
                    <label htmlFor='credit card' className='ml-2'>
                      Credit card
                    </label>
                  </div>
                  <div>logo...</div>
                </div>
                <div>
                  {isCreditCard && (
                    <>
                      <div className='text-end'>
                        <p>*Required information</p>
                      </div>

                      <div className='mt-4'>
                        <form action=''>
                          <div className='mb-4'>
                            <label>Your full name as it appears on your credit card*</label>
                            <input
                              type='text'
                              className='w-full border p-1'
                              placeholder='name ex.A. Aof'
                              required
                            />
                          </div>
                          <div className='mb-4'>
                            <label htmlFor='ccn'>Card number*</label>
                            <input
                              type='tel'
                              inputMode='numeric'
                              pattern='[0-9]{13,19}'
                              className='w-full border p-1'
                              placeholder='1111 2222 3333 4444'
                              maxLength={19}
                              autoComplete='cc-number'
                              required
                            />
                          </div>
                          <div className='mb-4 flex gap-4'>
                            <div className='flex flex-col'>
                              <label>Expiry date*</label>
                              <input
                                type='text'
                                className='w-full border p-1'
                                placeholder='MM/YY'
                                required
                              />
                            </div>
                            <div className='flex flex-col'>
                              <label>Security code*</label>
                              <input
                                type='text'
                                className='w-full border p-1'
                                placeholder='123'
                                pattern='\d{3,4}'
                                required
                              />
                            </div>
                          </div>
                          <div className='mb-4'>
                            <input type='checkbox' />
                            <label
                              htmlFor='Remember my credit card for my next purchases'
                              className='ml-2 text-sm'
                            >
                              Remember my credit card for my next purchases
                            </label>
                          </div>
                          <div className='flex justify-between border-b-2'></div>
                          <div className='mb-4'>
                            <input type='checkbox' required />
                            <label htmlFor='' className='ml-2 text-sm'>
                              I accept the General Terms and Conditions of Sale and consent to the
                              processing of my data, in accordance with Novarex' Privacy Policy.
                            </label>
                          </div>
                          <div className='flex justify-center'>
                            <button className='bg-black px-16 py-4 text-white'>Pay</button>
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
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
};

export default PaymentDesktop;
