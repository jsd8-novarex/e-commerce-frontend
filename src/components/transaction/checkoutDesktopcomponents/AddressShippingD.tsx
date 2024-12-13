import React, { useEffect, useState } from "react";
import EditButton from "../../button/EditButton";
import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
import {
  useFetchAddresses,
  useUpdateAddress,
} from "../../../hook/customers/UseCustomerAddressHooks";
import { Address } from "../../../service/customerAddressType";

interface AddressShippingDProps {
  handleContinue: () => void;
}

const AddressShippingD: React.FC<AddressShippingDProps> = ({ handleContinue }) => {
  const { customer } = useCustomerProfile();
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");
  const { updateAddress, error: updateError } = useUpdateAddress();
  const [isEditing, setIsEditing] = useState(false);
  const [editAddress, setEditAddress] = useState<Address>({
    province: "",
    district: "",
    subdistrict: "",
    address: "",
    postal_code: "",
  });
  const [originalAddress, setOriginalAddress] = useState<Address | null>(null);

  useEffect(() => {
    if (customer?._id) {
      fetchAddressesByCustomerId(customer._id);
    }
  }, [customer?._id, fetchAddressesByCustomerId]);

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      const address = addresses[0];
      setEditAddress({
        province: address.province || "",
        district: address.district || "",
        subdistrict: address.subdistrict || "",
        address: address.address || "",
        postal_code: address.postal_code || "",
      });
      setOriginalAddress({
        province: address.province || "",
        district: address.district || "",
        subdistrict: address.subdistrict || "",
        address: address.address || "",
        postal_code: address.postal_code || "",
      });
    }
  }, [addresses]);

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditAddress((prev) => ({
      ...prev,
      [name as keyof Address]: value,
    }));
  };

  const handleSave = async () => {
    if (!customer?._id) return;

    try {
      await updateAddress(customer._id, editAddress);
      await fetchAddressesByCustomerId(customer._id);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update address:", error || updateError);
    }
  };

  const handleCancel = () => {
    if (originalAddress) {
      setEditAddress(originalAddress);
    }
    setIsEditing(false);
  };

  return (
    <>
      <div>
        <div className='mt-4 flex border p-4'>
          <div className='font-bold'>Delivery</div>
        </div>
        {isEditing ? (
          <div className='grid grid-cols-1 gap-2 border p-4 sm:grid-cols-2'>
            {Object.keys(editAddress).map((field) => (
              <div key={field}>
                <label className='block text-sm font-medium text-gray-700'>
                  {field.replace("_", " ").charAt(0).toUpperCase() +
                    field.replace("_", " ").slice(1)}
                  :
                </label>
                <input
                  type='text'
                  name={field}
                  value={editAddress[field as keyof Address] || ""}
                  onChange={handleInputChange}
                  className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
                />
              </div>
            ))}
            <div className='flex justify-end gap-4 pt-4 sm:col-span-2'>
              <button
                onClick={handleSave}
                className='btn btn-primary rounded-none border-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className='btn btn-primary rounded-none border-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className='flex justify-between border border-t-0 p-4'>
            <div className='flex flex-col'>
              <div>Shipping address</div>
              <span>{editAddress.address}</span>
              <span>{`${editAddress.subdistrict}, ${editAddress.district}, ${editAddress.province} ${editAddress.postal_code}`}</span>
            </div>
            <div>
              <EditButton onClick={handleEditToggle} />
            </div>
          </div>
        )}
      </div>

      <div className='flex border border-t-0 p-4'>
        <p className='font-bold'>Shipping method</p>
      </div>
      <div className='flex justify-between border border-t-0 p-4'>
        <div>
          <span>DHL e-commerce-Standard delivery</span>
        </div>
        <div>฿ 0.00</div>
      </div>
      <div className='flex justify-center border border-t-0 p-4'>
        <button className='bg-black px-16 py-4 text-white' onClick={handleContinue}>
          Continue
        </button>
      </div>
    </>
  );
};

export default AddressShippingD;
