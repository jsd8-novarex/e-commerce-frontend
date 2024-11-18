import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressShippingD from "./checkoutDesktopcomponents/AddressShippingD";
import SummaryD from "./checkoutDesktopcomponents/SummaryD";

function CheckoutDesktop() {
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
    <>
      <section className='hidden md:block'>
        <div className='mt-16 flex w-full justify-center'>
          <div className='w-[400px] lg:w-[800px] xl:w-[1000px]'>
            <div className='flex items-center justify-between border p-4'>
              <h2>Account</h2>
              <div>
                <span>email@gmail.com</span>
              </div>
            </div>
            <AddressShippingD handleContinue={handleContinue} />
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

export default CheckoutDesktop;
