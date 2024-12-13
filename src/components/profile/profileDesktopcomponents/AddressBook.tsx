import React, { useEffect, useState } from "react";
import EditButton from "../../button/EditButton";
import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
import {
  useFetchAddresses,
  useUpdateAddress,
} from "../../../hook/customers/UseCustomerAddressHooks";
import { Address } from "../../../service/customerAddressType";

function AddressBook() {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState<Address>({
    province: "",
    district: "",
    subdistrict: "",
    address: "",
    postal_code: "",
  });
  const [originalAddress, setOriginalAddress] = useState<Address | null>(null);

  const { customer } = useCustomerProfile();
  const { addresses, fetchAddressesByCustomerId } = useFetchAddresses(customer?._id || "");
  const { updateAddress, error: updateError } = useUpdateAddress();

  useEffect(() => {
    if (customer?._id) {
      fetchAddressesByCustomerId(customer._id);
    }
  }, [customer?._id, fetchAddressesByCustomerId]);

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      const primaryAddress = addresses[0];
      setAddress({
        province: primaryAddress.province || "",
        district: primaryAddress.district || "",
        subdistrict: primaryAddress.subdistrict || "",
        address: primaryAddress.address || "",
        postal_code: primaryAddress.postal_code || "",
      });
      setOriginalAddress({
        province: primaryAddress.province || "",
        district: primaryAddress.district || "",
        subdistrict: primaryAddress.subdistrict || "",
        address: primaryAddress.address || "",
        postal_code: primaryAddress.postal_code || "",
      });
    }
  }, [addresses]);

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name as keyof Address]: value,
    }));
  };

  const handleSave = async () => {
    if (!customer?._id) return;

    try {
      await updateAddress(customer._id, address);
      await fetchAddressesByCustomerId(customer._id);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update address:", error || updateError);
    }
  };

  const handleCancel = () => {
    if (originalAddress) {
      setAddress(originalAddress);
    }
    setIsEditing(false);
  };

  return (
    <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Address book</h2>
      </div>

      <hr className='mb-6' />

      {isEditing ? (
        <div className='grid grid-cols-1 gap-2 p-4 sm:grid-cols-2'>
          {["province", "district", "subdistrict", "address", "postal_code"].map((field) => (
            <div key={field}>
              <label className='block text-sm font-medium text-gray-700'>
                {field.replace("_", " ").charAt(0).toUpperCase() + field.replace("_", " ").slice(1)}
                :
              </label>
              <input
                type='text'
                name={field}
                value={address[field as keyof Address] || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
              />
            </div>
          ))}
          <div className='flex justify-end gap-4 sm:col-span-2'>
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
        <div>
          <div className='mb-8'>
            <strong>Change your addresses here.</strong>
          </div>
          <div className='flex justify-between border p-4'>
            <div>
              <p className='text-xl'>{customer?.name}</p>
              <p className='text-xl'>{customer?.mobile_phone}</p>
              <p className='text-xl'>
                {address.address}, {address.subdistrict}, {address.district}, {address.province}{" "}
                {address.postal_code}
              </p>
            </div>
            <div>
              <EditButton onClick={handleEditToggle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressBook;
