import React from "react";

interface PaymentsMProps {
  visibility: {
    isPaymentsVisible: boolean;
  };
  toggleVisibility: (checked: "isPaymentsVisible") => void;
}

const PaymentsM: React.FC<PaymentsMProps> = ({ visibility, toggleVisibility }) => {
  return (
    <>
      <div className='mt-4'>
        <button
          className='flex w-full items-center justify-between border-b border-t py-2 text-left'
          onClick={() => toggleVisibility("isPaymentsVisible")}
        >
          <span className='font-semibold'>Payments</span>
          <span>{visibility.isPaymentsVisible ? "▲" : "▼"}</span>
        </button>

        {visibility.isPaymentsVisible && (
          <div className='border border-t-0 p-4'>
            <p>Payment information goes here...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentsM;
