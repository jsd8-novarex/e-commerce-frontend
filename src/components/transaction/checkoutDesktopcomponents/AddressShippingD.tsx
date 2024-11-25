import React from "react";
import EditButton from "../../button/EditButton";
interface AddressShippingDProps {
  handleContinue: () => void;
}
const AddressShippingD: React.FC<AddressShippingDProps> = ({ handleContinue }) => {
  return (
    <>
      <div>
        <div className='mt-4 flex border p-4'>
          <div className='font-bold'>Delivery</div>
        </div>
        <div className='flex justify-between border border-t-0 p-4'>
          <div className='flex flex-col'>
            <div>Shipping address</div>
            <span>Mr.name surname</span>
            <span>John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA.</span>
            <span>+66123456789</span>
          </div>
          <div>
            <EditButton />
          </div>
        </div>
      </div>

      <div className='flex justify-center border border-t-0 p-2 underline'>
        <button>+ Add an address</button>
      </div>
      <div className='flex border border-t-0 p-4'>
        <p className='font-bold'>Shipping method</p>
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
        <div className='font-bold'>Payment</div>
      </div>
    </>
  );
};

export default AddressShippingD;
