import { useState, useEffect } from "react";
import DeliveryAddressD from "./paymentDesktopcomponents/DeliveryAddressD";
import SummaryD from "./paymentDesktopcomponents/SummaryD";
import { useCustomerProfile } from "../../hook/customers/useCustomerHooks";
import { useFetchAddresses } from "../../hook/customers/UseCustomerAddressHooks";
import { placeOrderStripe } from "../../service/paymentService";

function PaymentDesktop() {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleSummary = () => {
    setIsSummaryVisible((prev) => !prev);
    setIsPriceVisible((prev) => !prev);
  };

  const { customer } = useCustomerProfile(); // ดึงข้อมูลลูกค้า
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");
  const [primaryAddress, setPrimaryAddress] = useState({
    name: "",
    province: "",
    district: "",
    subdistrict: "",
    address: "",
    postal_code: "",
    phone: "",
  });

  useEffect(() => {
    if (customer?._id) {
      fetchAddressesByCustomerId(customer._id);
    }
  }, [customer?._id, fetchAddressesByCustomerId]);

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      const address = addresses[0];
      setPrimaryAddress({
        name: customer?.name || "",
        province: address.province || "",
        district: address.district || "",
        subdistrict: address.subdistrict || "",
        address: address.address || "",
        postal_code: address.postal_code || "",
        phone: customer?.mobile_phone || "",
      });
    }
  }, [addresses, customer]);

  const handlePayment = async () => {
    try {
      if (!customer?._id) {
        alert("Customer not found. Please login.");
        return;
      }

      setLoading(true);
      const [sessionUrl, error] = await placeOrderStripe(customer._id);

      if (error) {
        throw new Error(error);
      }

      window.location.href = sessionUrl ? sessionUrl : ""; // Redirect ไปยัง Stripe
    } catch (error: unknown) {
      alert(error || "Failed to initiate payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='mx-10 hidden md:block'>
      <div className='mt-16 flex w-full justify-center'>
        <div className='w-[400px] lg:w-[800px] xl:w-[1000px]'>
          <div className='flex items-center justify-between border p-4'>
            <h2>Account</h2>
            <div>
              <span>{customer?.email}</span>
            </div>
          </div>

          <DeliveryAddressD />

          <div className='mt-4 border p-4'>
            <div className='font-bold'>Payment</div>
          </div>
          <div className='border border-t-0 p-4'>
            <div className='flex justify-between border-b-2 pb-4'>
              <span>Billing address</span>
            </div>

            <div className='flex flex-col pt-4'>
              <span>{primaryAddress.name}</span>
              <span>
                {`${primaryAddress.address || "No Address"}, ${primaryAddress.subdistrict || "No Subdistrict"}, ${primaryAddress.district || "No District"}, ${primaryAddress.province || "No Province"} ${primaryAddress.postal_code || ""}`}
              </span>
              <span>{primaryAddress.phone || "No Mobile Phone"}</span>
            </div>
          </div>

          <div className='border border-t-0 p-4 leading-8'>
            <div className='flex justify-end'>
              <button
                onClick={handlePayment}
                disabled={loading}
                className='bg-black px-16 py-4 text-white'
              >
                {loading ? "Processing..." : "Pay"}
              </button>
            </div>
          </div>
        </div>

        <SummaryD
          toggleSummary={toggleSummary}
          isSummaryVisible={isSummaryVisible}
          isPriceVisible={isPriceVisible}
        />
      </div>
    </section>
  );
}

export default PaymentDesktop;
