import React, { useEffect, useState } from "react";
import EditButton from "../../button/EditButton";
import { useCustomerProfile, useUpdateCustomer } from "../../../hook/customers/useCustomerHooks";
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
  const { updateAddress } = useUpdateAddress();
  const { updateCustomerInfo } = useUpdateCustomer();

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingMobile, setIsEditingMobile] = useState(false);

  const [editAddress, setEditAddress] = useState<Address>({
    province: "",
    district: "",
    subdistrict: "",
    address: "",
    postal_code: "",
  });

  const [editMobile, setEditMobile] = useState(customer?.mobile_phone || "");
  const [originalMobile, setOriginalMobile] = useState(customer?.mobile_phone || "");

  const [errorMessage, setErrorMessage] = useState("");

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
    }
  }, [addresses]);

  const handleEditAddressToggle = () => setIsEditingAddress((prev) => !prev);
  const handleEditMobileToggle = () => {
    setIsEditingMobile((prev) => !prev);
    setEditMobile(customer?.mobile_phone || "");
  };

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditAddress((prev) => ({ ...prev, [name as keyof Address]: value }));
  };

  const handleMobileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditMobile(e.target.value);
  };

  const handleSaveAddress = async () => {
    if (!customer?._id) return;

    try {
      // Clear error message on successful validation and save
      setErrorMessage("");
      await updateAddress(customer._id, editAddress);
      await fetchAddressesByCustomerId(customer._id);
      setIsEditingAddress(false);
    } catch (error) {
      console.error("Failed to update address:", error);
    }
  };

  const handleSaveMobile = async () => {
    if (!customer) return;

    try {
      // Clear error message on successful validation and save
      setErrorMessage("");
      await updateCustomerInfo({ ...customer, mobile_phone: editMobile });
      setOriginalMobile(editMobile);
      setIsEditingMobile(false);
    } catch (error) {
      console.error("Failed to update mobile phone:", error);
    }
  };

  const handleCancelMobile = () => {
    setEditMobile(originalMobile);
    setIsEditingMobile(false);
  };

  const handleValidation = () => {
    const missingFields = [];
    if (!editAddress.address) missingFields.push("Address");
    if (!editAddress.subdistrict) missingFields.push("Subdistrict");
    if (!editAddress.district) missingFields.push("District");
    if (!editAddress.province) missingFields.push("Province");
    if (!editAddress.postal_code) missingFields.push("Postal Code");
    if (!editMobile) missingFields.push("Mobile Phone");

    if (missingFields.length > 0) {
      setErrorMessage(`Please fill out the following fields: ${missingFields.join(", ")}`);
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleContinueClick = () => {
    if (handleValidation()) {
      handleContinue();
    }
  };

  return (
    <>
      <div>
        <div className='mt-4 flex border p-4'>
          <div className='font-bold'>Delivery</div>
        </div>

        {isEditingAddress ? (
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
                  onChange={handleAddressInputChange}
                  className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
                />
              </div>
            ))}
            <div className='flex justify-end gap-4 pt-4 sm:col-span-2'>
              <button
                onClick={handleSaveAddress}
                className='btn btn-primary rounded-none border-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
              >
                Save
              </button>
              <button
                onClick={handleEditAddressToggle}
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
              <span>{customer?.name}</span>
              <span>{editAddress.address || "No Address"}</span>
              <span>
                {editAddress.subdistrict || "No Subdistrict"},{" "}
                {editAddress.district || "No District"}, {editAddress.province || "No Province"}{" "}
                {editAddress.postal_code || "No Postal code"}
              </span>
              {isEditingMobile ? (
                <div className='mt-4 grid w-[300px] grid-cols-1 gap-2 border p-4 sm:grid-cols-2'>
                  <div className='sm:col-span-2'>
                    <label className='block text-sm font-medium text-gray-700'>Mobile Phone:</label>
                    <input
                      type='text'
                      maxLength={10}
                      value={editMobile}
                      onChange={handleMobileInputChange}
                      className='mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-lg'
                    />
                  </div>
                  <div className='flex justify-end gap-4 pt-4 sm:col-span-2'>
                    <button
                      onClick={handleSaveMobile}
                      className='btn btn-primary rounded-none border-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelMobile}
                      className='btn btn-primary rounded-none border-none bg-black text-white hover:bg-gray-500 hover:ring-green-500 focus:ring-green-500'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className='flex items-center gap-2'>
                  <span>{editMobile || "No Mobile Phone"}</span>
                  <EditButton className='' onClick={handleEditMobileToggle} />
                </p>
              )}
              {errorMessage && (
                <div className='p-4 text-red-500'>
                  <p className='p-4 text-red-500'>{errorMessage}</p>
                </div>
              )}
            </div>
            <div>
              <EditButton onClick={handleEditAddressToggle} />
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
        <button className='bg-black px-16 py-4 text-white' onClick={handleContinueClick}>
          Continue
        </button>
      </div>
    </>
  );
};

export default AddressShippingD;
