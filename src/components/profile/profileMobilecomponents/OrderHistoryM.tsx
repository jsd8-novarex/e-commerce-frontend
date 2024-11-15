import React from "react";
interface AddressBookMProps {
  visibility: {
    isOrderHistoryVisible: boolean;
  };
  toggleVisibility: (checked: "isOrderHistoryVisible") => void;
}
const OrderHistoryM: React.FC<AddressBookMProps> = ({ visibility, toggleVisibility }) => {
  return (
    <>
      <div className='mt-4'>
        <button
          className='flex w-full items-center justify-between border-b border-t py-2 text-left'
          onClick={() => toggleVisibility("isOrderHistoryVisible")}
        >
          <span className='font-semibold'>Order History</span>
          <span>{visibility.isOrderHistoryVisible ? "▲" : "▼"}</span>
        </button>

        {visibility.isOrderHistoryVisible && (
          <div className='border border-t-0 p-4'>
            <p>Order history content goes here...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderHistoryM;
