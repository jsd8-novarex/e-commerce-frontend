import React from "react";
interface AddressBookMProps {
  visibility: {
    isAddressVisible: boolean;
  };
  toggleVisibility: (checked: "isAddressVisible") => void;
}

const AddressBookM: React.FC<AddressBookMProps> = ({ visibility, toggleVisibility }) => {
  return (
    <>
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
            <p>Address book content goes here...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressBookM;
