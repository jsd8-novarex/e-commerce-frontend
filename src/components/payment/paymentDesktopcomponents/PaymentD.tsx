import React from "react";

interface PaymentDProps {
  togglePaymentmethod: () => void;
  isCreditCard: boolean;
}

const PaymentD: React.FC<PaymentDProps> = ({ togglePaymentmethod, isCreditCard }) => {
  return (
    <>
      <div className='border p-4'>
        <div className='flex justify-between'>
          <div>
            <input id='credit-card' type='checkbox' onClick={togglePaymentmethod} />
            <label htmlFor='credit-card' className='ml-2'>
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
                      type='text'
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
                  <div className='flex justify-end pt-8'>
                    <button className='bg-black px-16 py-4 text-white'>Pay</button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentD;
