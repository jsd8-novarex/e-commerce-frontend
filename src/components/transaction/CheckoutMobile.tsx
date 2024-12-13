import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryM from "./checkoutMobilecomponents/SummaryM";
import AddressShippingM from "./checkoutMobilecomponents/AddressShippingM";
import { useCustomerProfile } from "../../hook/customers/useCustomerHooks";
function CheckoutMobile() {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const { customer } = useCustomerProfile();
  const toggleSummary = () => {
    setIsSummaryVisible((prev) => !prev);
    setIsPriceVisible((prev) => !prev);
  };

  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/payment");
  };

  return (
    <section className='w-full md:hidden'>
      <SummaryM
        toggleSummary={toggleSummary}
        isSummaryVisible={isSummaryVisible}
        isPriceVisible={isPriceVisible}
      />
      <div className='mt-4 flex border p-4'>
        <div className='font-bold'>Account</div>
      </div>
      <div className='flex border border-t-0 p-4'>
        <div>{customer?.email}</div>
      </div>

      <AddressShippingM handleContinue={handleContinue} />
    </section>
  );
}

export default CheckoutMobile;
