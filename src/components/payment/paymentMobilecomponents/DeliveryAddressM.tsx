import React from "react";
import EditButton from "../../button/EditButton";

const DeliveryAddressD = () => {
  return (
    <>
      <div>
        <div className='mt-4 flex justify-between border p-4'>
          <div className='font-bold'>Delivery</div>
          <div>
            <EditButton />
          </div>
        </div>
        <div className='flex flex-col justify-between border border-t-0 p-4'>
          <div>
            <p>Delivery address</p>
          </div>
          <div className='flex flex-col'>
            <div className='mr-6 flex flex-col'>
              <span>Mr.name surname</span>
              <span>John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA.</span>
              <span>+66123456789</span>
            </div>
            <div>
              <div className='mt-4'>
                <p>Shipping method</p>
                <div className='flex justify-between'>
                  <span>DHL e-commerce-Standard delivery</span>
                  <span>$ 0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddressD;
