import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryM from "./checkoutMobilecomponents/SummaryM";
import AddressShippingM from "./checkoutMobilecomponents/AddressShippingM";

function CheckoutMobile() {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isPriceVisible, setIsPriceVisible] = useState(true);

  const toggleSummary = () => {
    setIsSummaryVisible((prev) => !prev);
    setIsPriceVisible((prev) => !prev);
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
    <section className='w-full md:hidden'>
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

      <AddressShippingM handleContinue={handleContinue} />
    </section>
  );
}

export default CheckoutMobile;
