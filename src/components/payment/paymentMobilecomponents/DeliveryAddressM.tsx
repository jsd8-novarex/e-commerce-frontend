import { useEffect, useState } from "react";
import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
import { useFetchAddresses } from "../../../hook/customers/UseCustomerAddressHooks";

const DeliveryAddressM = () => {
  const { customer } = useCustomerProfile(); // ดึงข้อมูลลูกค้า
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");
  const [primaryAddress, setPrimaryAddress] = useState({
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
        province: address.province || "",
        district: address.district || "",
        subdistrict: address.subdistrict || "",
        address: address.address || "",
        postal_code: address.postal_code || "",
        phone: customer?.mobile_phone || "",
      });
    }
  }, [addresses, customer]);

  return (
    <>
      <div>
        <div className='mt-4 flex justify-between border p-4'>
          <div className='font-bold'>Delivery</div>
        </div>
        <div className='flex flex-col justify-between border border-t-0 p-4'>
          <div>
            <p>Delivery address</p>
          </div>
          <div className='flex'>
            <div className='mr-6 flex flex-col'>
              <span>{customer?.name || "No Name"}</span>
              <span>
                {primaryAddress.address
                  ? `${primaryAddress.address}, ${primaryAddress.subdistrict}, ${primaryAddress.district}, ${primaryAddress.province} ${primaryAddress.postal_code}`
                  : "No Address"}
              </span>
              <span>{primaryAddress.phone || "No Mobile Phone"}</span>
            </div>
            <div>
              <div>
                <p>Shipping method</p>
                <span>DHL e-commerce-Standard delivery</span>
                <span> ฿0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddressM;
