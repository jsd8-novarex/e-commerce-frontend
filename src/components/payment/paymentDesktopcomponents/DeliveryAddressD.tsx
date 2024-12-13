import React, { useEffect, useState } from "react";
import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
import { useFetchAddresses } from "../../../hook/customers/UseCustomerAddressHooks";

const DeliveryAddressD = () => {
  const { customer } = useCustomerProfile(); // ดึงข้อมูลลูกค้า
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");
  const [primaryAddress, setPrimaryAddress] = useState({
    name: "",
    address: "",
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
        address: `${address.address}, ${address.subdistrict}, ${address.district}, ${address.province} ${address.postal_code}`,
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
              <span>{primaryAddress.name}</span>
              <span>{primaryAddress.address}</span>
              <span>{primaryAddress.phone}</span>
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

export default DeliveryAddressD;
