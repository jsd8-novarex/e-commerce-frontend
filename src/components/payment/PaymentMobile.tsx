import { useState, useEffect } from "react";
import SummaryM from "./paymentMobilecomponents/SummaryM";
import DeliveryAddressM from "./paymentMobilecomponents/DeliveryAddressM";

import { useCustomerProfile } from "../../hook/customers/useCustomerHooks";
import { useFetchAddresses } from "../../hook/customers/UseCustomerAddressHooks";
import { placeOrderStripe } from "../../service/paymentService";

function PaymentMobile() {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const [loading, setLoading] = useState(false);

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
    // ดึงข้อมูลที่อยู่เมื่อมี customer ID
    if (customer?._id) {
      fetchAddressesByCustomerId(customer._id);
    }
  }, [customer?._id, fetchAddressesByCustomerId]);

  useEffect(() => {
    // อัปเดต state primaryAddress เมื่อมีข้อมูล addresses
    if (addresses && addresses.length > 0) {
      const address = addresses[0]; // ใช้ที่อยู่แรกในลิสต์
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

      window.location.href = sessionUrl ?? ""; // Redirect ไปยัง Stripe
    } catch (error) {
      alert(error || "Failed to initiate payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='md:hidden'>
      <div className='m-7'>
        <SummaryM
          toggleSummary={() => {
            setIsSummaryVisible(!isSummaryVisible);
            setIsPriceVisible(!isPriceVisible);
          }}
          isSummaryVisible={isSummaryVisible}
          isPriceVisible={isPriceVisible}
        />
        <div className='mt-4 flex border p-4'>
          <div>Account</div>
        </div>
        <div className='flex border border-t-0 p-4'>
          <div>{customer?.email}</div>
        </div>

        <DeliveryAddressM />

        <div className='mt-4 border p-4'>
          <div>Payment</div>
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
    </section>
  );
}

export default PaymentMobile;
