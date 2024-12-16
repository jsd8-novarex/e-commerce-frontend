import React, { useEffect, useState } from "react";
import EditButton from "../../button/EditButton";
import { useCustomerProfile } from "../../../hook/customers/useCustomerHooks";
import {
  useFetchAddresses,
  useUpdateAddress,
} from "../../../hook/customers/UseCustomerAddressHooks";
import { Address } from "../../../service/customerAddressType";

interface AddressBookMProps {
  visibility: {
    isAddressVisible: boolean;
  };
  toggleVisibility: (checked: "isAddressVisible") => void;
}

const AddressBookM: React.FC<AddressBookMProps> = ({ visibility, toggleVisibility }) => {
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
    <div className='mt-4'>
      <button
        className='flex w-full items-center justify-between border-b border-t py-2 text-left'
        onClick={() => toggleVisibility("isAddressVisible")}
      >
        <span className='font-semibold'>Address Book</span>
        <span>{visibility.isAddressVisible ? "▲" : "▼"}</span>
      </button>

      {visibility.isAddressVisible && (
        <div className='border border-t-0 p-4'>
          {isEditing ? (
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
              {["province", "district", "subdistrict", "address", "postal_code"].map((field) => (
                <div key={field}>
                  <label className='block text-sm font-medium text-gray-700'>
                    {field.replace("_", " ").charAt(0).toUpperCase() +
                      field.replace("_", " ").slice(1)}
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
                  className='bg-black px-4 py-2 text-white hover:bg-green-600'
                >
                  Save
                </button>
                <button onClick={handleCancel} className='bg-gray-300 px-4 py-2 hover:bg-gray-400'>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className='flex justify-between'>
              <div>
                <p className='text-xl'>{customer?.name}</p>
                <p className='text-xl'>
                  {address.address || "No Address"}, {address.subdistrict || "No Subdistrict"},{" "}
                  {address.district || "No District"}, {address.province || "No Province"}{" "}
                  {address.postal_code || "No Postal code"}
                  <p>{customer?.mobile_phone || "No Mobile Phone"}</p>
                </p>
              </div>

              <div>
                <EditButton onClick={handleEditToggle} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressBookM;
