import React from "react";
interface AddressShippingDProps {
  handleContinue: () => void;
}
const AddressShippingD: React.FC<AddressShippingDProps> = ({ handleContinue }) => {
  return (
    <>
      <div>
        <div className='mt-4 flex border p-4'>
          <div>Delivery</div>
        </div>
        <div className='flex border border-t-0 p-4'>
          <div>Shipping address</div>
        </div>
        <div className='flex justify-between border border-t-0 p-4'>
          <div className='flex flex-col'>
            <span>Mr.name</span>
            <span>Address</span>
            <span>Tel.</span>
          </div>
          <div>
            <button>edit</button>
          </div>
        </div>
      </div>

      <div className='flex justify-center border border-t-0 p-2 underline'>
        <button>+ Add an address</button>
      </div>
      <div className='flex border border-t-0 p-4'>
        <p>Shipping method</p>
      </div>
      <div className='flex justify-between border border-t-0 p-4'>
        <div>
          <span>DHL e-commerce-Standard delivery</span>
        </div>
        <div>$ 0.00</div>
      </div>
      <div className='flex justify-center border border-t-0 p-4'>
        <button className='bg-black px-16 py-4 text-white' onClick={handleContinue}>
          Continue
        </button>
      </div>
      <div className='mt-4 flex border p-4'>
        <div>Payment</div>
      </div>
    </>
  );
};

export default AddressShippingD;
