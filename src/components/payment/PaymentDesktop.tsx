import { useState } from "react";
import DeliveryAddressD from "./paymentDesktopcomponents/DeliveryAddressD";
import PaymentD from "./paymentDesktopcomponents/PaymentD";
import SummaryD from "./paymentDesktopcomponents/SummaryD";
import EditButton from "../button/EditButton";

function PaymentDesktop() {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const [isCreditCard, setIsCreditCard] = useState(false);

  const toggleSummary = () => {
    setIsSummaryVisible((prev) => !prev);
    setIsPriceVisible((prev) => !prev);
  };

  const togglePaymentmethod = () => {
    setIsCreditCard((prev) => !prev);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section className='mx-10 hidden md:block'>
        <div className='mt-16 flex w-full justify-center'>
          <div className='w-[400px] lg:w-[800px] xl:w-[1000px]'>
            <div className='flex items-center justify-between border p-4'>
              <h2>Account</h2>
              <div>
                <span>email@gmail.com</span>
              </div>
            </div>

            <DeliveryAddressD />

            <div className='mt-4 border p-4'>
              <div className='font-bold'>Payment</div>
            </div>
            <div className='border border-t-0 p-4'>
              <div className='flex justify-between border-b-2 pb-4'>
                <span>Billing address</span>
                <EditButton />
              </div>

              <div className='flex flex-col pt-4'>
                <span>Mr.name surname</span>
                <span>John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA.</span>
                <span>+66123456789</span>
              </div>
            </div>

            <div className='border border-t-0 p-4 leading-8'>
              <div>
                <p>
                  <strong>Payment methods</strong>
                </p>
                <p>Please select your payment method</p>
              </div>

              <PaymentD togglePaymentmethod={togglePaymentmethod} isCreditCard={isCreditCard} />
            </div>
          </div>

          <SummaryD
            toggleSummary={toggleSummary}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            isSummaryVisible={isSummaryVisible}
            isPriceVisible={isPriceVisible}
          />
        </div>
      </section>
    </>
  );
}

export default PaymentDesktop;
