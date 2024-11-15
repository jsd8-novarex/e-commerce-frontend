import { useState } from "react";
import SummaryM from "./paymentMobilecomponents/SummaryM";
import DeliveryAddressM from "./paymentMobilecomponents/DeliveryAddressM";
import PaymentM from "./paymentMobilecomponents/PaymentM";

function PaymentMobile() {
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
    <section className='md:hidden'>
      <div className='m-7'>
        <SummaryM
          toggleSummary={toggleSummary}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          isSummaryVisible={isSummaryVisible}
          isPriceVisible={isPriceVisible}
          quantity={quantity}
        />
        <div className='mt-4 flex border p-4'>
          <div>Account</div>
        </div>
        <div className='flex border border-t-0 p-4'>
          <div>email@gmail.com</div>
        </div>

        <DeliveryAddressM />

        <div className='mt-4 border p-4'>
          <div>Payment</div>
        </div>
        <div className='border border-t-0 p-4'>
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
        <div className='border border-t-0 p-4'>
          <input type='checkbox' />
          <label htmlFor='Full tax invoice requested' className='ml-2'>
            Full tax invoice requested
          </label>
        </div>
        <div className='border border-t-0 p-4 leading-8'>
          <div>
            <p>
              <strong>Payment methods</strong>
            </p>
            <p>Please select your payment method</p>
          </div>

          <PaymentM togglePaymentmethod={togglePaymentmethod} isCreditCard={isCreditCard} />
        </div>
      </div>
    </section>
  );
}

export default PaymentMobile;
